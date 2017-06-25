---
title: API Changes Coming in Electron 1.0
author: zcbenz
date: '2015-11-17'
---

Since the beginning of Electron, starting way back when it used to be called Atom-Shell, we have been experimenting with providing a nice cross-platform JavaScript API for Chromium's content module and native GUI components. The APIs started very organically, and over time we have made several changes to improve the initial designs.

---

Now with Electron gearing up for a 1.0 release, we'd like to take the opportunity for change by addressing the last niggling API details. The changes described below are included in **0.35.x**, with the old APIs reporting deprecation warnings so you can get up to date for the future 1.0 release. An Electron 1.0 won't be out for a few months so you have some time before these changes become breaking.

## Deprecation warnings

By default, warnings will show if you are using deprecated APIs. To turn them off you can set `process.noDeprecation` to `true`. To track the sources of deprecated API usages, you can set `process.throwDeprecation` to `true` to throw exceptions instead of printing warnings, or set `process.traceDeprecation` to `true` to print the traces of the deprecations.

## New way of using built-in modules

Built-in modules are now grouped into one module, instead of being separated into independent modules, so you can use them [without conflicts with other modules][issue-387]:

```javascript
var app = require('electron').app
var BrowserWindow = require('electron').BrowserWindow
```

The old way of `require('app')` is still supported for backward compatibility, but you can also turn if off:

```javascript
require('electron').hideInternalModules()
require('app')  // throws error.
```

## An easier way to use the `remote` module

Because of the way using built-in modules has changed, we have made it easier to use main-process-side modules in renderer process. You can now just access `remote`'s attributes to use them:

```javascript
// New way.
var app = require('electron').remote.app
var BrowserWindow = require('electron').remote.BrowserWindow
```

Instead of using a long require chain:

```javascript
// Old way.
var app = require('electron').remote.require('app')
var BrowserWindow = require('electron').remote.require('BrowserWindow')
```

## Splitting the `ipc` module

The `ipc` module existed on both the main process and renderer process and the API was different on each side, which is quite confusing for new users. We have renamed the module to `ipcMain` in the main process, and `ipcRenderer` in the renderer process to avoid confusion:

```javascript
// In main process.
var ipcMain = require('electron').ipcMain
```

```javascript
// In renderer process.
var ipcRenderer = require('electron').ipcRenderer
```

And for the `ipcRenderer` module, an extra `event` object has been added when receiving messages, to match how messages are handled in `ipcMain` modules:

```javascript
ipcRenderer.on('message', function (event) {
  console.log(event)
})
```

## Standardizing `BrowserWindow` options

The `BrowserWindow` options had different styles based on the options of other APIs, and were a bit hard to use in JavaScript because of the `-` in the names. They are now standardized to the traditional JavaScript names:

```javascript
new BrowserWindow({ minWidth: 800, minHeight: 600 })
```

## Following DOM's conventions for API names

The API names in Electron used to prefer camelCase for all API names, like `Url` to `URL`, but the DOM has its own conventions, and they prefer `URL` to `Url`, while using `Id` instead of `ID`. We have done the following API renames to match the DOM's styles:

* `Url` is renamed to `URL`
* `Csp` is renamed to `CSP`

You will notice lots of deprecations when using Electron v0.35.0 for your app because of these changes. An easy way to fix them is to replace all instances of `Url` with `URL`.

## Changes to `Tray`'s event names

The style of `Tray` event names was a bit different from other modules so a rename has been done to make it match the others.

* `clicked` is renamed to `click`
* `double-clicked` is renamed to `double-click`
* `right-clicked` is renamed to `right-click`

[issue-387]: https://github.com/electron/electron/issues/387

