---
version: v1.4.11
category: API
redirect_from:
    - /docs/v0.24.0/api/browser-window-proxy/
    - /docs/v0.25.0/api/browser-window-proxy/
    - /docs/v0.26.0/api/browser-window-proxy/
    - /docs/v0.27.0/api/browser-window-proxy/
    - /docs/v0.28.0/api/browser-window-proxy/
    - /docs/v0.29.0/api/browser-window-proxy/
    - /docs/v0.30.0/api/browser-window-proxy/
    - /docs/v0.31.0/api/browser-window-proxy/
    - /docs/v0.32.0/api/browser-window-proxy/
    - /docs/v0.33.0/api/browser-window-proxy/
    - /docs/v0.34.0/api/browser-window-proxy/
    - /docs/v0.35.0/api/browser-window-proxy/
    - /docs/v0.36.0/api/browser-window-proxy/
    - /docs/v0.36.3/api/browser-window-proxy/
    - /docs/v0.36.4/api/browser-window-proxy/
    - /docs/v0.36.5/api/browser-window-proxy/
    - /docs/v0.36.6/api/browser-window-proxy/
    - /docs/v0.36.7/api/browser-window-proxy/
    - /docs/v0.36.8/api/browser-window-proxy/
    - /docs/v0.36.9/api/browser-window-proxy/
    - /docs/v0.36.10/api/browser-window-proxy/
    - /docs/v0.36.11/api/browser-window-proxy/
    - /docs/v0.37.0/api/browser-window-proxy/
    - /docs/v0.37.1/api/browser-window-proxy/
    - /docs/v0.37.2/api/browser-window-proxy/
    - /docs/v0.37.3/api/browser-window-proxy/
    - /docs/v0.37.4/api/browser-window-proxy/
    - /docs/v0.37.5/api/browser-window-proxy/
    - /docs/v0.37.6/api/browser-window-proxy/
    - /docs/v0.37.7/api/browser-window-proxy/
    - /docs/v0.37.8/api/browser-window-proxy/
    - /docs/latest/api/browser-window-proxy/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/browser-window-proxy.md'
excerpt: "Manipulate the child browser window"
title: "BrowserWindowProxy"
sort_title: "browserwindowproxy"
---

## Class: BrowserWindowProxy

> Manipulate the child browser window

Process: [Renderer](http://electron.atom.io/docs/tutorial/quick-start#renderer-process)

The `BrowserWindowProxy` object is returned from `window.open` and provides
limited functionality with the child window.

### Instance Methods

The `BrowserWindowProxy` object has the following instance methods:

#### `win.blur()`

Removes focus from the child window.

#### `win.close()`

Forcefully closes the child window without calling its unload event.

#### `win.eval(code)`

* `code` String

Evaluates the code in the child window.

#### `win.focus()`

Focuses the child window (brings the window to front).

#### `win.print()`

Invokes the print dialog on the child window.

#### `win.postMessage(message, targetOrigin)`

* `message` String
* `targetOrigin` String

Sends a message to the child window with the specified origin or `*` for no
origin preference.

In addition to these methods, the child window implements `window.opener` object
with no properties and a single method.

### Instance Properties

The `BrowserWindowProxy` object has the following instance properties:

#### `win.closed`

A Boolean that is set to true after the child window gets closed.
