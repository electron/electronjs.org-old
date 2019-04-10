---
title: From native to JavaScript in Electron
author: codebytere
date: '2019-03-19'
---

How do Electron's features written in C++ or Objective-C get to JavaScript so they're available to an end-user?

---

## Background

[Electron](https://electronjs.org) is a JavaScript platform whose primary purpose is to lower the barrier to entry for developers to build robust desktop apps without worrying about platform-specific implementations. However, at its core, Electron itself still needs platform-specific functionality to be written in a given system language.

In reality, Electron handles the native code for you so that you can focus on a single JavaScript API.

How does that work, though? How do Electron's features written in C++ or Objective-C get to JavaScript so they're available to an end-user?

To trace this pathway, let's start with the [`app` module](https://electronjs.org/docs/api/app).

By opening the [`app.ts`](https://github.com/electron/electron/blob/0431997c8d64c9ed437b293e8fa15a96fc73a2a7/lib/browser/api/app.ts) file inside our `lib/` directory, you'll find the following line of code towards the top:

```js
const binding = process.electronBinding('app')
```

This line points directly to Electron's mechanism for binding its C++/Objective-C modules to JavaScript for use by developers. This function is created by the header and [implementation file](https://github.com/electron/electron/blob/0431997c8d64c9ed437b293e8fa15a96fc73a2a7/atom/common/api/electron_bindings.cc) for the `ElectronBindings` class.

## `process.electronBinding`

These files add the `process.electronBinding` function, which behaves like Node.js’ `process.binding`. `process.binding` is a lower-level implementation of Node.js' [`require()`](https://nodejs.org/api/modules.html#modules_require_id) method, except it allows users to `require` native code instead of other code written in JS. This custom `process.electronBinding` function confers the ability to load native code from Electron.

When a top-level JavaScript module (like `app`) requires this native code, how is the state of that native code determined and set? Where are the methods exposed up to JavaScript? What about the properties?

## `native_mate`

At present, answers to this question can be found in `native_mate`:  a fork of Chromium's [`gin` library](https://chromium.googlesource.com/chromium/src.git/+/lkgr/gin/) that makes it easier to marshal types between C++ and JavaScript.

Inside `native_mate/native_mate` there's a header and implementation file for `object_template_builder`. This is what allow us to form modules in native code whose shape conforms to what JavaScript developers would expect.

### `mate::ObjectTemplateBuilder`

If we look at every Electron module as an `object`, it becomes easier to see why we would want to use `object_template_builder` to construct them. This class is built on top of a class exposed by V8, which is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. V8 implements the JavaScript (ECMAScript) specification, so its native functionality implementations can be directly correlated to implementations in JavaScript. For example, [`v8::ObjectTemplate`](https://v8docs.nodesource.com/node-0.8/db/d5f/classv8_1_1_object_template.html) gives us JavaScript objects without a dedicated constructor function and prototype. It uses `Object[.prototype]`, and in JavaScript would be equivalent to [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

To see this in action, look to the implementation file for the app module, [`atom_api_app.cc`](https://github.com/electron/electron/blob/0431997c8d64c9ed437b293e8fa15a96fc73a2a7/atom/browser/api/atom_api_app.cc). At the bottom is the following:

```cpp
mate::ObjectTemplateBuilder(isolate, prototype->PrototypeTemplate())
    .SetMethod("getGPUInfo", &App::GetGPUInfo)
```

In the above line, `.SetMethod` is called on `mate::ObjectTemplateBuilder`. `.SetMethod` can be called on any instance of the `ObjectTemplateBuilder` class to set methods on the [Object prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype) in JavaScript, with the following syntax:

```cpp
.SetMethod("method_name", &function_to_bind)
```

This is the JavaScript equivalent of:

```js
function App{}
App.prototype.getGPUInfo = function () {
  // implementation here
}
```

This class also contains functions to set properties on a module:

```cpp
.SetProperty("property_name", &getter_function_to_bind)
```

or

```cpp
.SetProperty("property_name", &getter_function_to_bind, &setter_function_to_bind)
```

These would in turn be the JavaScript implementations of [Object.defineProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty):

```js
function App {}
Object.defineProperty(App.prototype, 'myProperty', {
  get() {
    return _myProperty
  }
})
```

and

```js
function App {}
Object.defineProperty(App.prototype, 'myProperty', {
  get() {
    return _myProperty
  }
  set(newPropertyValue) {
    _myProperty = newPropertyValue
  }
})
```

It’s possible to create JavaScript objects formed with prototypes and properties as developers expect them, and more clearly reason about functions and properties implemented at this lower system level!

The decision around where to implement any given module method is itself a complex and oft-nondeterministic one, which we'll cover in a future post.
