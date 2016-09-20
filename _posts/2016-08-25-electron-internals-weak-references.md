---
title: Electron Internals&#58; Weak References
author: zcbenz
---

As a language with garbage collection, JavaScript frees users from managing
resources manually, but being the platform providing the service, the code in
Electron has to be very careful avoiding both memory and resources leaks.

This post introduces what it is weak reference and how it is used to manage
resources in Electron.

---

## Weak reference

In JavaScript, whenever you assign an object to a variable, you are adding an
reference to the object, and as long as there is any reference to the object,
it will always be kept in memory. And once all references to the object are
gone, i.e. there are no variables storing the object, the JavaScript engine will
collect the memory back on next garbage collection.

The meaning of weak reference is, by holding a weak reference to an object, you
can get the object at anytime without preventing it from being garbage
collected, otherwise you will get memory leaks if you just store the object
directly. And you will also get notified when the object is garbage collected,
So it becomes possible to managing resources with JavaScript.

Using the `NativeImage` class in Electron as example, every time you call the
`nativeImage.create()` API, an `NativeImage` instance is returned and it is
storing image data in C++. Once you are done with the instance and V8 garbage
collected the object, code in C++ will be called to free the image data, so
there is no need for users to free the image data manually.

Another example is [the window disappearing problem][window-disappearing], which
visually shows how the window is garbage collected when all the references to it
are gone.

## Testing weak reference in Electron

There is no way to directly test weak references in raw JavaScript, since the
language doesn't have a way to assign weak references. The only API in standard
related to weak references is [WeakMap][WeakMap], but since it can only
weak-reference keys, it is impossible to know when an object is garbage
collected.

Before Electron v0.37.8, you can use the internal `v8Util.setDestructor` API to
test weak references, which adds weak reference to the passed object and calls
the callback when the object is garbage collected:

```javascript
// Code below can only run on Electron < v0.37.8.
var v8Util = process.atomBinding('v8_util')

var object = {}
v8Util.setDestructor(object, function () {
  console.log('The object is garbage collected')
})

// Remove all references to the object.
object = undefined
// Manually starts a GC.
gc()
// Console prints "The object is garbage collected".
```

Note that you have to start Electron with `--js-flags="--expose_gc"` command
switch to expose the internal `gc` function.

The API was removed in later versions because V8 actually does not allow running
JavaScript code in the destructor, and in later versions doing so would cause
random crashes.

## Weak references in `remote` module

Apart from managing native resources with C++, Electron also needs the weak
reference to manage JavaScript resources. An example is the `remote` module,
which is an RPC module that allows using objects in the main process from
renderer processes.

One key problem of `remote` module is to avoid memory leaks, when users acquired
a remote object in the renderer process, `remote` module must guarantee the
object lives until the references in the renderer process are gone. And on the
contrary, it also has to make sure the object can be garbage collected when
there are no longer any reference to it in renderer processes.

For example, without proper implementation, following code would cause memory
leaks quickly:

```javascript
const {remote} = require('electron')
for (let i = 0; i < 10000; ++i) {
  remote.nativeImage.createEmpty()
}
```

The resource management in `remote` module is simple, whenever an object is
requested, a message would be sent to the main process and Electron would store
the object in a map and assign an ID for it, and then send the ID back to the
renderer process. And in the renderer process the `remote` module would receive
the ID and wrap it with a proxy object, and when the proxy object is garbage
collected a message would be sent to the main process to free the object.

Using `remote.require` API as example, a simplified implementation looks like
this:

```javascript
remote.require = function (name) {
  // Tell the main process to return the meta data of the module.
  const meta = ipcRenderer.sendSync('REQUIRE', name)
  // Create a proxy object.
  const object = metaToValue(meta)
  // Tell the main process to free the object when the proxy object is garbage
  // collected.
  v8Util.setDestructor(object, function () {
    ipcRenderer.send('FREE', meta.id)
  })
  return object
}
```

in the main process:

```javascript
const map = {}
const id = 0

ipcMain.on('REQUIRE', function (event, name) {
  const object = require(name)
  // Add a reference to the object.
  map[++id] = object
  // Convert the object to meta data.
  event.returnValue = valueToMeta(id, object)
})

ipcMain.on('FREE', function (event, id) {
  delete map[id]
})
```

## Maps with weak values

With previous simple implementation, every call in `remote` module would return
a new remote object from the main process, and each remote object represents a
reference to the object in the main process.

The design itself is fine, but the problem is when there are multiple calls to
receive the same object, multiple proxy objects would be created, and for
complicated objects this can add huge pressure on memory usage and garbage
collection.

For example the following code:

```javascript
const {remote} = require('electron')
for (let i = 0; i < 10000; ++i) {
  remote.getCurrentWindow()
}
```

It would first take lots of memory by creating proxy objects, and then occupy
the CPU for garbage collecting them and sending IPC messages.

So an obvious optimization is to cache the remote objects: when there is already
a remote object with the same ID, the previous remote object would be returned
instead of creating a new one.

This is not possible with API from JavaScript standard, using the normal map
to cache objects would prevent V8 to garbage collect the objects, while the
[WeakMap][WeakMap] class can only use objects as weak keys.

To solve this a map type with values as weak references is added, which is
perfect for caching objects with IDs. And now the `remote.require` looks like
this:

```javascript
const remoteObjectCache = v8Util.createIDWeakMap()

remote.require = function (name) {
  // Tell the main process to return the meta data of the module.
  ...
  if (remoteObjectCache.has(meta.id))
    return remoteObjectCache.get(meta.id)
  // Create a proxy object.
  ...
  remoteObjectCache.set(meta.id, object)
  return object
}
```

Note that the `remoteObjectCache` stores objects as weak references, so there
is no need to delete the key when the object is garbage collected.

## Native code

For people interested in the C++ code of weak references in Electron, it can be
found in following files:

The `setDestructor` API:

* [`object_life_monitor.cc`](https://github.com/electron/electron/blob/v1.3.4/atom/common/api/object_life_monitor.cc)
* [`object_life_monitor.h`](https://github.com/electron/electron/blob/v1.3.4/atom/common/api/object_life_monitor.h)

The `createIDWeakMap` API:

* [`key_weak_map.h`](https://github.com/electron/electron/blob/v1.3.4/atom/common/key_weak_map.h)
* [`atom_api_key_weak_map.h`](https://github.com/electron/electron/blob/v1.3.4/atom/common/api/atom_api_key_weak_map.h)

[window-disappearing]: http://electron.atom.io/docs/faq/#my-apps-windowtray-disappeared-after-a-few-minutes
[WeakMap]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
