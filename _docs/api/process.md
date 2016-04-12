---
version: v0.37.5
category: API
title: Process
redirect-from:
    - /docs/v0.24.0/api/process/
    - /docs/v0.25.0/api/process/
    - /docs/v0.26.0/api/process/
    - /docs/v0.27.0/api/process/
    - /docs/v0.28.0/api/process/
    - /docs/v0.29.0/api/process/
    - /docs/v0.30.0/api/process/
    - /docs/v0.31.0/api/process/
    - /docs/v0.32.0/api/process/
    - /docs/v0.33.0/api/process/
    - /docs/v0.34.0/api/process/
    - /docs/v0.35.0/api/process/
    - /docs/v0.36.0/api/process/
    - /docs/v0.36.3/api/process/
    - /docs/v0.36.4/api/process/
    - /docs/v0.36.5/api/process/
    - /docs/v0.36.6/api/process/
    - /docs/v0.36.7/api/process/
    - /docs/v0.36.8/api/process/
    - /docs/v0.36.9/api/process/
    - /docs/v0.36.10/api/process/
    - /docs/v0.36.11/api/process/
    - /docs/v0.37.0/api/process/
    - /docs/v0.37.1/api/process/
    - /docs/v0.37.2/api/process/
    - /docs/v0.37.5/api/process/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/process.md'
---

# process

The `process` object in Electron has the following differences from the one in
upstream node:

* `process.type` String - Process's type, can be `browser` (i.e. main process)
  or `renderer`.
* `process.versions['electron']` String - Version of Electron.
* `process.versions['chrome']` String - Version of Chromium.
* `process.resourcesPath` String - Path to JavaScript source code.
* `process.mas` Boolean - For Mac App Store build, this value is `true`, for
  other builds it is `undefined`.

## Events

### Event: 'loaded'

Emitted when Electron has loaded its internal initialization script and is
beginning to load the web page or the main script.

It can be used by the preload script to add removed Node global symbols back to
the global scope when node integration is turned off:

```js
// preload.js
var _setImmediate = setImmediate;
var _clearImmediate = clearImmediate;
process.once('loaded', function() {
  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;
});
```

## Properties

### `process.noAsar`

Setting this to `true` can disable the support for `asar` archives in Node's
built-in modules.

## Methods

The `process` object has the following method:

### `process.hang()`

Causes the main thread of the current process hang.

### `process.setFdLimit(maxDescriptors)` _OS X_ _Linux_

* `maxDescriptors` Integer

Sets the file descriptor soft limit to `maxDescriptors` or the OS hard
limit, whichever is lower for the current process.
