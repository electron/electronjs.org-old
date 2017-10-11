---
version: v1.7.9
permalink: /docs/api/sandbox-option/
category: API
redirect_from:
  - /docs/v0.37.8/api/sandbox-option/
  - /docs/v0.37.7/api/sandbox-option/
  - /docs/v0.37.6/api/sandbox-option/
  - /docs/v0.37.5/api/sandbox-option/
  - /docs/v0.37.4/api/sandbox-option/
  - /docs/v0.37.3/api/sandbox-option/
  - /docs/v0.37.1/api/sandbox-option/
  - /docs/v0.37.0/api/sandbox-option/
  - /docs/v0.36.12/api/sandbox-option/
  - /docs/v0.36.11/api/sandbox-option/
  - /docs/v0.36.10/api/sandbox-option/
  - /docs/v0.36.9/api/sandbox-option/
  - /docs/v0.36.8/api/sandbox-option/
  - /docs/v0.36.7/api/sandbox-option/
  - /docs/v0.36.6/api/sandbox-option/
  - /docs/v0.36.5/api/sandbox-option/
  - /docs/v0.36.4/api/sandbox-option/
  - /docs/v0.36.3/api/sandbox-option/
  - /docs/v0.36.2/api/sandbox-option/
  - /docs/v0.36.0/api/sandbox-option/
  - /docs/v0.35.5/api/sandbox-option/
  - /docs/v0.35.4/api/sandbox-option/
  - /docs/v0.35.3/api/sandbox-option/
  - /docs/v0.35.2/api/sandbox-option/
  - /docs/v0.35.1/api/sandbox-option/
  - /docs/v0.34.4/api/sandbox-option/
  - /docs/v0.34.3/api/sandbox-option/
  - /docs/v0.34.2/api/sandbox-option/
  - /docs/v0.34.1/api/sandbox-option/
  - /docs/v0.34.0/api/sandbox-option/
  - /docs/v0.33.9/api/sandbox-option/
  - /docs/v0.33.8/api/sandbox-option/
  - /docs/v0.33.7/api/sandbox-option/
  - /docs/v0.33.6/api/sandbox-option/
  - /docs/v0.33.4/api/sandbox-option/
  - /docs/v0.33.3/api/sandbox-option/
  - /docs/v0.33.2/api/sandbox-option/
  - /docs/v0.33.1/api/sandbox-option/
  - /docs/v0.33.0/api/sandbox-option/
  - /docs/v0.32.3/api/sandbox-option/
  - /docs/v0.32.2/api/sandbox-option/
  - /docs/v0.31.2/api/sandbox-option/
  - /docs/v0.31.0/api/sandbox-option/
  - /docs/v0.30.4/api/sandbox-option/
  - /docs/v0.29.2/api/sandbox-option/
  - /docs/v0.29.1/api/sandbox-option/
  - /docs/v0.28.3/api/sandbox-option/
  - /docs/v0.28.2/api/sandbox-option/
  - /docs/v0.28.1/api/sandbox-option/
  - /docs/v0.28.0/api/sandbox-option/
  - /docs/v0.27.3/api/sandbox-option/
  - /docs/v0.27.2/api/sandbox-option/
  - /docs/v0.27.1/api/sandbox-option/
  - /docs/v0.27.0/api/sandbox-option/
  - /docs/v0.26.1/api/sandbox-option/
  - /docs/v0.26.0/api/sandbox-option/
  - /docs/v0.25.3/api/sandbox-option/
  - /docs/v0.25.2/api/sandbox-option/
  - /docs/v0.25.1/api/sandbox-option/
  - /docs/v0.25.0/api/sandbox-option/
  - /docs/v0.24.0/api/sandbox-option/
  - /docs/v0.23.0/api/sandbox-option/
  - /docs/v0.22.3/api/sandbox-option/
  - /docs/v0.22.2/api/sandbox-option/
  - /docs/v0.22.1/api/sandbox-option/
  - /docs/v0.21.3/api/sandbox-option/
  - /docs/v0.21.2/api/sandbox-option/
  - /docs/v0.21.1/api/sandbox-option/
  - /docs/v0.21.0/api/sandbox-option/
  - /docs/v0.20.8/api/sandbox-option/
  - /docs/v0.20.7/api/sandbox-option/
  - /docs/v0.20.6/api/sandbox-option/
  - /docs/v0.20.5/api/sandbox-option/
  - /docs/v0.20.4/api/sandbox-option/
  - /docs/v0.20.3/api/sandbox-option/
  - /docs/v0.20.2/api/sandbox-option/
  - /docs/v0.20.1/api/sandbox-option/
  - /docs/v0.20.0/api/sandbox-option/
  - /docs/latest/api/sandbox-option/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/sandbox-option.md'
title: sandbox Option
excerpt: >-
  Create a browser window with a renderer that can run inside Chromium OS
  sandbox. With this
      option enabled, the renderer must communicate via IPC to the main process in order to access node APIs.
      However, in order to enable the Chromium OS sandbox, electron must be run with the <code>--enable-sandbox</code>
      command line argument.
sort_title: sandbox-option
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

    https://github.com/electron/electron/blob/master/docs/api/sandbox-option.md

    Thanks!

-->
# `sandbox` Option

> Create a browser window with a renderer that can run inside Chromium OS sandbox. With this option enabled, the renderer must communicate via IPC to the main process in order to access node APIs. However, in order to enable the Chromium OS sandbox, electron must be run with the `--enable-sandbox` command line argument.

One of the key security features of Chromium is that all blink rendering/JavaScript code is executed within a sandbox. This sandbox uses OS-specific features to ensure that exploits in the renderer process cannot harm the system.

In other words, when the sandbox is enabled, the renderers can only make changes to the system by delegating tasks to the main process via IPC. [Here's](https://www.chromium.org/developers/design-documents/sandbox) more information about the sandbox.

Since a major feature in electron is the ability to run node.js in the renderer process (making it easier to develop desktop applications using web technologies), the sandbox is disabled by electron. This is because most node.js APIs require system access. `require()` for example, is not possible without file system permissions, which are not available in a sandboxed environment.

Usually this is not a problem for desktop applications since the code is always trusted, but it makes electron less secure than chromium for displaying untrusted web content. For applications that require more security, the `sandbox` flag will force electron to spawn a classic chromium renderer that is compatible with the sandbox.

A sandboxed renderer doesn't have a node.js environment running and doesn't expose node.js JavaScript APIs to client code. The only exception is the preload script, which has access to a subset of the electron renderer API.

Another difference is that sandboxed renderers don't modify any of the default JavaScript APIs. Consequently, some APIs such as `window.open` will work as they do in chromium (i.e. they do not return a `BrowserWindowProxy`).

## Example

To create a sandboxed window, simply pass `sandbox: true` to `webPreferences`:

```js
let win
app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      sandbox: true
    }
  })
  w.loadURL('http://google.com')
})
```

In the above code the `BrowserWindow` that was created has node.js disabled and can communicate only via IPC. The use of this option stops electron from creating a node.js runtime in the renderer. Also, within this new window `window.open` follows the native behaviour (by default electron creates a `BrowserWindow` and returns a proxy to this via `window.open`).

It is important to note that this option alone won't enable the OS-enforced sandbox. To enable this feature, the `--enable-sandbox` command-line argument must be passed to electron, which will force `sandbox: true` for all `BrowserWindow` instances.

To enable OS-enforced sandbox on `BrowserWindow` or `webview` process with `sandbox:true` without causing entire app to be in sandbox, `--enable-mixed-sandbox` command-line argument must be passed to electron. This option is currently only supported on macOS and Windows.

```js
let win
app.on('ready', () => {
  // no need to pass `sandbox: true` since `--enable-sandbox` was enabled.
  win = new BrowserWindow()
  w.loadURL('http://google.com')
})
```

Note that it is not enough to call `app.commandLine.appendSwitch('--enable-sandbox')`, as electron/node startup code runs after it is possible to make changes to chromium sandbox settings. The switch must be passed to electron on the command-line:

```
electron --enable-sandbox app.js

```

It is not possible to have the OS sandbox active only for some renderers, if `--enable-sandbox` is enabled, normal electron windows cannot be created.

If you need to mix sandboxed and non-sandboxed renderers in one application, simply omit the `--enable-sandbox` argument. Without this argument, windows created with `sandbox: true` will still have node.js disabled and communicate only via IPC, which by itself is already a gain from security POV.

## Preload

An app can make customizations to sandboxed renderers using a preload script. Here's an example:

```js
let win
app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      sandbox: true,
      preload: 'preload.js'
    }
  })
  w.loadURL('http://google.com')
})
```

and preload.js:

```js
// This file is loaded whenever a javascript context is created. It runs in a
// private scope that can access a subset of electron renderer APIs. We must be
// careful to not leak any objects into the global scope!
const fs = require('fs')
const {ipcRenderer} = require('electron')

// read a configuration file using the `fs` module
const buf = fs.readFileSync('allowed-popup-urls.json')
const allowedUrls = JSON.parse(buf.toString('utf8'))

const defaultWindowOpen = window.open

function customWindowOpen (url, ...args) {
  if (allowedUrls.indexOf(url) === -1) {
    ipcRenderer.sendSync('blocked-popup-notification', location.origin, url)
    return null
  }
  return defaultWindowOpen(url, ...args)
}

window.open = customWindowOpen
```

Important things to notice in the preload script:

*   Even though the sandboxed renderer doesn't have node.js running, it still has access to a limited node-like environment: `Buffer`, `process`, `setImmediate` and `require` are available.
*   The preload script can indirectly access all APIs from the main process through the `remote` and `ipcRenderer` modules. This is how `fs` (used above) and other modules are implemented: They are proxies to remote counterparts in the main process.
*   The preload script must be contained in a single script, but it is possible to have complex preload code composed with multiple modules by using a tool like browserify, as explained below. In fact, browserify is already used by electron to provide a node-like environment to the preload script.

To create a browserify bundle and use it as a preload script, something like the following should be used:

```
browserify preload/index.js \
  -x electron \
  -x fs \
  --insert-global-vars=__filename,__dirname -o preload.js

```

The `-x` flag should be used with any required module that is already exposed in the preload scope, and tells browserify to use the enclosing `require` function for it. `--insert-global-vars` will ensure that `process`, `Buffer` and `setImmediate` are also taken from the enclosing scope(normally browserify injects code for those).

Currently the `require` function provided in the preload scope exposes the following modules:

*   `child_process`
*   `electron` (crashReporter, remote and ipcRenderer)
*   `fs`
*   `os`
*   `timers`
*   `url`

More may be added as needed to expose more electron APIs in the sandbox, but any module in the main process can already be used through `electron.remote.require`.

## Status

Please use the `sandbox` option with care, as it is still an experimental feature. We are still not aware of the security implications of exposing some electron renderer APIs to the preload script, but here are some things to consider before rendering untrusted content:

*   A preload script can accidentaly leak privileged APIs to untrusted code.
*   Some bug in V8 engine may allow malicious code to access the renderer preload APIs, effectively granting full access to the system through the `remote` module.

Since rendering untrusted content in electron is still uncharted territory, the APIs exposed to the sandbox preload script should be considered more unstable than the rest of electron APIs, and may have breaking changes to fix security issues.

One planned enhancement that should greatly increase security is to block IPC messages from sandboxed renderers by default, allowing the main process to explicitly define a set of messages the renderer is allowed to send.
