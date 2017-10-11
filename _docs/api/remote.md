---
version: v1.7.9
permalink: /docs/api/remote/
category: API
redirect_from:
  - /docs/v0.37.8/api/remote/
  - /docs/v0.37.7/api/remote/
  - /docs/v0.37.6/api/remote/
  - /docs/v0.37.5/api/remote/
  - /docs/v0.37.4/api/remote/
  - /docs/v0.37.3/api/remote/
  - /docs/v0.37.1/api/remote/
  - /docs/v0.37.0/api/remote/
  - /docs/v0.36.12/api/remote/
  - /docs/v0.36.11/api/remote/
  - /docs/v0.36.10/api/remote/
  - /docs/v0.36.9/api/remote/
  - /docs/v0.36.8/api/remote/
  - /docs/v0.36.7/api/remote/
  - /docs/v0.36.6/api/remote/
  - /docs/v0.36.5/api/remote/
  - /docs/v0.36.4/api/remote/
  - /docs/v0.36.3/api/remote/
  - /docs/v0.36.2/api/remote/
  - /docs/v0.36.0/api/remote/
  - /docs/v0.35.5/api/remote/
  - /docs/v0.35.4/api/remote/
  - /docs/v0.35.3/api/remote/
  - /docs/v0.35.2/api/remote/
  - /docs/v0.35.1/api/remote/
  - /docs/v0.34.4/api/remote/
  - /docs/v0.34.3/api/remote/
  - /docs/v0.34.2/api/remote/
  - /docs/v0.34.1/api/remote/
  - /docs/v0.34.0/api/remote/
  - /docs/v0.33.9/api/remote/
  - /docs/v0.33.8/api/remote/
  - /docs/v0.33.7/api/remote/
  - /docs/v0.33.6/api/remote/
  - /docs/v0.33.4/api/remote/
  - /docs/v0.33.3/api/remote/
  - /docs/v0.33.2/api/remote/
  - /docs/v0.33.1/api/remote/
  - /docs/v0.33.0/api/remote/
  - /docs/v0.32.3/api/remote/
  - /docs/v0.32.2/api/remote/
  - /docs/v0.31.2/api/remote/
  - /docs/v0.31.0/api/remote/
  - /docs/v0.30.4/api/remote/
  - /docs/v0.29.2/api/remote/
  - /docs/v0.29.1/api/remote/
  - /docs/v0.28.3/api/remote/
  - /docs/v0.28.2/api/remote/
  - /docs/v0.28.1/api/remote/
  - /docs/v0.28.0/api/remote/
  - /docs/v0.27.3/api/remote/
  - /docs/v0.27.2/api/remote/
  - /docs/v0.27.1/api/remote/
  - /docs/v0.27.0/api/remote/
  - /docs/v0.26.1/api/remote/
  - /docs/v0.26.0/api/remote/
  - /docs/v0.25.3/api/remote/
  - /docs/v0.25.2/api/remote/
  - /docs/v0.25.1/api/remote/
  - /docs/v0.25.0/api/remote/
  - /docs/v0.24.0/api/remote/
  - /docs/v0.23.0/api/remote/
  - /docs/v0.22.3/api/remote/
  - /docs/v0.22.2/api/remote/
  - /docs/v0.22.1/api/remote/
  - /docs/v0.21.3/api/remote/
  - /docs/v0.21.2/api/remote/
  - /docs/v0.21.1/api/remote/
  - /docs/v0.21.0/api/remote/
  - /docs/v0.20.8/api/remote/
  - /docs/v0.20.7/api/remote/
  - /docs/v0.20.6/api/remote/
  - /docs/v0.20.5/api/remote/
  - /docs/v0.20.4/api/remote/
  - /docs/v0.20.3/api/remote/
  - /docs/v0.20.2/api/remote/
  - /docs/v0.20.1/api/remote/
  - /docs/v0.20.0/api/remote/
  - /docs/latest/api/remote/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/remote.md'
title: remote
excerpt: Use main process modules from the renderer process.
sort_title: remote
---



<!--


                                      ::::
                                    :o+//+o:
                                    +o    oo-
                                    :o+//oo/+o/
                                      -::-   -oo:
                                               /s/
                      -::::::::-                :s/  :::--
                  :+oo+////////+:        -:/+oo/ :s:-///++oo+:
                /o+:                -/+oo+/:-     +o-      -:+o:
               /s:              -:+o+/:           -o+         :s/
              -s/            -/oo/:                /s-         +s-
              -s/         -/oo/-                   -s/         /s-
               oo       :+o/-                       oo         oo
               -s/    :oo/                          /s-       /s-
                :s/ :oo:              -::-          /s-      /s:
                  -+o/               /ssss/         :s:    -+o-
                 :o+--               /ssss/         :s:   :o+-
                :s/  +o:              -::-          /s-   --
               -s/    :+o/-                         /s-
               oo       -+o+-                       oo
              -s/         -/oo/-                   -s/
             -+soo+:         -/oo/:                /s-      /oooo+-
             o+   :s:           -:+o+/:-          -o+      /s:  -oo
             oo:--/s:       ::      -:+oo+/:-     -/-      /s/--:o+
              :+++/-        :s:          -:/+ooo++//////++oo//+o+:
                             /s:                --::::::--
                              /s/              /s-
                               :oo:          :oo:
                                 /oo/-    -/oo/
                                   -/+oooo+/-





                   _______  _______  _______  _______  __
                  |       ||       ||       ||       ||  |
                  |  _____||_     _||   _   ||    _  ||  |
                  | |_____   |   |  |  | |  ||   |_| ||  |
                  |_____  |  |   |  |  |_|  ||    ___||__|
                   _____| |  |   |  |       ||   |     __
                  |_______|  |___|  |_______||___|    |__|


    This file is generated automatically, so it should not be edited.

    To make changes, head over to the electron/electron repository:

    https://github.com/electron/electron/blob/master/docs/api/remote.md

    Thanks!

-->
# remote

> Use main process modules from the renderer process.

Process: [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The `remote` module provides a simple way to do inter-process communication (IPC) between the renderer process (web page) and the main process.

In Electron, GUI-related modules (such as `dialog`, `menu` etc.) are only available in the main process, not in the renderer process. In order to use them from the renderer process, the `ipc` module is necessary to send inter-process messages to the main process. With the `remote` module, you can invoke methods of the main process object without explicitly sending inter-process messages, similar to Java's [RMI](http://en.wikipedia.org/wiki/Java_remote_method_invocation). An example of creating a browser window from a renderer process:

```javascript
const {BrowserWindow} = require('electron').remote
let win = new BrowserWindow({width: 800, height: 600})
win.loadURL('https://github.com')
```

**Note:** For the reverse (access the renderer process from the main process), you can use [webContents.executeJavascript]({{site.baseurl}}/docs/api/web-contents#contentsexecutejavascriptcode-usergesture-callback).

## Remote Objects

Each object (including functions) returned by the `remote` module represents an object in the main process (we call it a remote object or remote function). When you invoke methods of a remote object, call a remote function, or create a new object with the remote constructor (function), you are actually sending synchronous inter-process messages.

In the example above, both `BrowserWindow` and `win` were remote objects and `new BrowserWindow` didn't create a `BrowserWindow` object in the renderer process. Instead, it created a `BrowserWindow` object in the main process and returned the corresponding remote object in the renderer process, namely the `win` object.

**Note:** Only [enumerable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) which are present when the remote object is first referenced are accessible via remote.

**Note:** Arrays and Buffers are copied over IPC when accessed via the `remote` module. Modifying them in the renderer process does not modify them in the main process and vice versa.

## Lifetime of Remote Objects

Electron makes sure that as long as the remote object in the renderer process lives (in other words, has not been garbage collected), the corresponding object in the main process will not be released. When the remote object has been garbage collected, the corresponding object in the main process will be dereferenced.

If the remote object is leaked in the renderer process (e.g. stored in a map but never freed), the corresponding object in the main process will also be leaked, so you should be very careful not to leak remote objects.

Primary value types like strings and numbers, however, are sent by copy.

## Passing callbacks to the main process

Code in the main process can accept callbacks from the renderer - for instance the `remote` module - but you should be extremely careful when using this feature.

First, in order to avoid deadlocks, the callbacks passed to the main process are called asynchronously. You should not expect the main process to get the return value of the passed callbacks.

For instance you can't use a function from the renderer process in an `Array.map` called in the main process:

```javascript
// main process mapNumbers.js
exports.withRendererCallback = (mapper) => {
  return [1, 2, 3].map(mapper)
}

exports.withLocalCallback = () => {
  return [1, 2, 3].map(x => x + 1)
}
```

```javascript
// renderer process
const mapNumbers = require('electron').remote.require('./mapNumbers')
const withRendererCb = mapNumbers.withRendererCallback(x => x + 1)
const withLocalCb = mapNumbers.withLocalCallback()

console.log(withRendererCb, withLocalCb)
// [undefined, undefined, undefined], [2, 3, 4]
```

As you can see, the renderer callback's synchronous return value was not as expected, and didn't match the return value of an identical callback that lives in the main process.

Second, the callbacks passed to the main process will persist until the main process garbage-collects them.

For example, the following code seems innocent at first glance. It installs a callback for the `close` event on a remote object:

```javascript
require('electron').remote.getCurrentWindow().on('close', () => {
  // window was closed...
})
```

But remember the callback is referenced by the main process until you explicitly uninstall it. If you do not, each time you reload your window the callback will be installed again, leaking one callback for each restart.

To make things worse, since the context of previously installed callbacks has been released, exceptions will be raised in the main process when the `close` event is emitted.

To avoid this problem, ensure you clean up any references to renderer callbacks passed to the main process. This involves cleaning up event handlers, or ensuring the main process is explicitly told to deference callbacks that came from a renderer process that is exiting.

## Accessing built-in modules in the main process

The built-in modules in the main process are added as getters in the `remote` module, so you can use them directly like the `electron` module.

```javascript
const app = require('electron').remote.app
console.log(app)
```

## Methods

The `remote` module has the following methods:

### `remote.require(module)`

*   `module` String

Returns `any` - The object returned by `require(module)` in the main process. Modules specified by their relative path will resolve relative to the entrypoint of the main process.

e.g.

```
project/
├── main
│   ├── foo.js
│   └── index.js
├── package.json
└── renderer
    └── index.js

```

```js
// main process: main/index.js
const {app} = require('electron')
app.on('ready', () => { /* ... */ })
```

```js
// some relative module: main/foo.js
module.exports = 'bar'
```

```js
// renderer process: renderer/index.js
const foo = require('electron').remote.require('./foo') // bar
```

### `remote.getCurrentWindow()`

Returns [`BrowserWindow`]({{site.baseurl}}/docs/api/browser-window) - The window to which this web page belongs.

### `remote.getCurrentWebContents()`

Returns [`WebContents`]({{site.baseurl}}/docs/api/web-contents) - The web contents of this web page.

### `remote.getGlobal(name)`

*   `name` String

Returns `any` - The global variable of `name` (e.g. `global[name]`) in the main process.

## Properties

### `remote.process`

The `process` object in the main process. This is the same as `remote.getGlobal('process')` but is cached.
