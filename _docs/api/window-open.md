---
version: v1.2.5
category: API
redirect_from:
    - /docs/v0.24.0/api/window-open/
    - /docs/v0.25.0/api/window-open/
    - /docs/v0.26.0/api/window-open/
    - /docs/v0.27.0/api/window-open/
    - /docs/v0.28.0/api/window-open/
    - /docs/v0.29.0/api/window-open/
    - /docs/v0.30.0/api/window-open/
    - /docs/v0.31.0/api/window-open/
    - /docs/v0.32.0/api/window-open/
    - /docs/v0.33.0/api/window-open/
    - /docs/v0.34.0/api/window-open/
    - /docs/v0.35.0/api/window-open/
    - /docs/v0.36.0/api/window-open/
    - /docs/v0.36.3/api/window-open/
    - /docs/v0.36.4/api/window-open/
    - /docs/v0.36.5/api/window-open/
    - /docs/v0.36.6/api/window-open/
    - /docs/v0.36.7/api/window-open/
    - /docs/v0.36.8/api/window-open/
    - /docs/v0.36.9/api/window-open/
    - /docs/v0.36.10/api/window-open/
    - /docs/v0.36.11/api/window-open/
    - /docs/v0.37.0/api/window-open/
    - /docs/v0.37.1/api/window-open/
    - /docs/v0.37.2/api/window-open/
    - /docs/v0.37.3/api/window-open/
    - /docs/v0.37.4/api/window-open/
    - /docs/v0.37.5/api/window-open/
    - /docs/v0.37.6/api/window-open/
    - /docs/v0.37.7/api/window-open/
    - /docs/v0.37.8/api/window-open/
    - /docs/latest/api/window-open/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/window-open.md'
excerpt: "Open a new window and load a URL."
title: "window.open Function"
sort_title: "window.open function"
---

# `window.open` Function

> Open a new window and load a URL.

When `window.open` is called to create a new window in a web page, a new instance
of `BrowserWindow` will be created for the `url` and a proxy will be returned
to `window.open` to let the page have limited control over it.

The proxy has limited standard functionality implemented to be
compatible with traditional web pages. For full control of the new window
you should create a `BrowserWindow` directly.

The newly created `BrowserWindow` will inherit parent window's options by
default, to override inherited options you can set them in the `features`
string.

### `window.open(url[, frameName][, features])`

* `url` String
* `frameName` String (optional)
* `features` String (optional)

Creates a new window and returns an instance of `BrowserWindowProxy` class.

The `features` string follows the format of standard browser, but each feature
has to be a field of `BrowserWindow`'s options.

**Note:** Node integration will always be disabled in the opened `window` if it
is disabled on the parent window.

### `window.opener.postMessage(message, targetOrigin)`

* `message` String
* `targetOrigin` String

Sends a message to the parent window with the specified origin or `*` for no
origin preference.

## Class: BrowserWindowProxy

The `BrowserWindowProxy` object is returned from `window.open` and provides
limited functionality with the child window.

### `BrowserWindowProxy.blur()`

Removes focus from the child window.

### `BrowserWindowProxy.close()`

Forcefully closes the child window without calling its unload event.

### `BrowserWindowProxy.closed`

Set to true after the child window gets closed.

### `BrowserWindowProxy.eval(code)`

* `code` String

Evaluates the code in the child window.

### `BrowserWindowProxy.focus()`

Focuses the child window (brings the window to front).

### `BrowserWindowProxy.print()`

Invokes the print dialog on the child window.

### `BrowserWindowProxy.postMessage(message, targetOrigin)`

* `message` String
* `targetOrigin` String

Sends a message to the child window with the specified origin or `*` for no
origin preference.

In addition to these methods, the child window implements `window.opener` object
with no properties and a single method.
