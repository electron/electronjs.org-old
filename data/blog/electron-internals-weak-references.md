---
title: 'Electron Internals&#58; Weak References'
author: zcbenz
date: '2016-09-20'
---

As a language with garbage collection, JavaScript frees users from managing
resources manually. But because Electron hosts this environment, it has to be
very careful avoiding both memory and resources leaks.

This post introduces the concept of weak references and how they are used to 
manage resources in Electron.

---

## Weak references

In JavaScript, whenever you assign an object to a variable, you are adding a
reference to the object. As long as there is a reference to the object, it will
always be kept in memory. Once all references to the object are gone, i.e. there
are no longer variables storing the object, the JavaScript engine will recoup
the memory on next garbage collection.

A weak reference is a reference to an object that allows you to get the object
without effecting whether it will be garbage collected or not. You will also get
notified when the object is garbage collected. It then becomes possible to
manage resources with JavaScript.

Using the `NativeImage` class in Electron as an example, every time you call the
`nativeImage.create()` API, a `NativeImage` instance is returned and it is
storing the image data in C++. Once you are done with the instance and the
JavaScript engine (V8) has garbage collected the object, code in C++ will be
called to free the image data in memory, so there is no need for users manage
this manually.

Another example is [the window disappearing problem][window-disappearing], which
visually shows how the window is garbage collected when all the references to it
are gone.

## Testing weak references in Electron

There is no way to directly test weak references in raw JavaScript since the
language doesn't have a way to assign weak references. The only API in
JavaScript related to weak references is [WeakMap][WeakMap], but since it only
creates weak-reference keys, it is impossible to know when an object has been
garbage collected.

In versions of Electron prior to v0.37.8, you can use the internal
`v8Util.setDestructor` API to test weak references, which adds a weak reference
to the passed object and calls the callback when the object is garbage collected:

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

Note that you have to start Electron with the `--js-flags="--expose_gc"` command
switch to expose the internal `gc` function.

The API was removed in later versions because V8 actually does not allow running
JavaScript code in the destructor and in later versions doing so would cause
random crashes.

## Weak references in the `remote` module

Apart from managing native resources with C++, Electron also needs weak
references to manage JavaScript resources. An example is Electron's `remote`
module, which is a [Remote Procedure Call][remote-procedure-call] (RPC) module
that allows using objects in the main process from renderer processes.

One key challenge with the `remote` module is to avoid memory leaks. When users
acquire a remote object in the renderer process, the `remote` module must
guarantee the object continues to live in the main process until the references
in the renderer process are gone. Additionally, it also has to make sure the
object can be garbage collected when there are no longer any reference to it in
renderer processes.

For example, without proper implementation, following code would cause memory
leaks quickly:

```javascript
const {remote} = require('electron')

for (let i = 0; i < 10000; ++i) {
  remote.nativeImage.createEmpty()
}
```

The resource management in the `remote` module is simple. Whenever an object is
requested, a message is sent to the main process and Electron will store
the object in a map and assign an ID for it, then send the ID back to the
renderer process. In the renderer process, the `remote` module will receive
the ID and wrap it with a proxy object and when the proxy object is garbage
collected, a message will be sent to the main process to free the object.

Using `remote.require` API as an example, a simplified implementation looks 
like this:

```javascript
remote.require = function (name) {
  // Tell the main process to return the metadata of the module.
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

In the main process:

```javascript
const map = {}
const id = 0

ipcMain.on('REQUIRE', function (event, name) {
  const object = require(name)
  // Add a reference to the object.
  map[++id] = object
  // Convert the object to metadata.
  event.returnValue = valueToMeta(id, object)
})

ipcMain.on('FREE', function (event, id) {
  delete map[id]
})
```

## Maps with weak values

With the previous simple implementation, every call in the `remote` module will
return a new remote object from the main process, and each remote object
represents a reference to the object in the main process.

The design itself is fine, but the problem is when there are multiple calls to
receive the same object, multiple proxy objects will be created and for
complicated objects this can add huge pressure on memory usage and garbage
collection.

For example, the following code:

```javascript
const {remote} = require('electron')

for (let i = 0; i < 10000; ++i) {
  remote.getCurrentWindow()
}
```

It first uses a lot of memory creating proxy objects and then occupies
the CPU (Central Processing Unit) for garbage collecting them and sending IPC
messages.

An obvious optimization is to cache the remote objects: when there is already
a remote object with the same ID, the previous remote object will be returned
instead of creating a new one.

This is not possible with the API in JavaScript core. Using the normal map
to cache objects will prevent V8 from garbage collecting the objects, while the
[WeakMap][WeakMap] class can only use objects as weak keys.

To solve this, a map type with values as weak references is added, which is
perfect for caching objects with IDs. Now the `remote.require` looks like
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

[window-disappearing]: https://electronjs.org/docs/faq/#my-apps-windowtray-disappeared-after-a-few-minutes
[WeakMap]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[remote-procedure-call]: https://en.wikipedia.org/wiki/Remote_procedure_call

