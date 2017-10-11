---
version: v1.7.9
permalink: /docs/api/window-open/
category: API
redirect_from:
  - /docs/v0.37.8/api/window-open/
  - /docs/v0.37.7/api/window-open/
  - /docs/v0.37.6/api/window-open/
  - /docs/v0.37.5/api/window-open/
  - /docs/v0.37.4/api/window-open/
  - /docs/v0.37.3/api/window-open/
  - /docs/v0.37.1/api/window-open/
  - /docs/v0.37.0/api/window-open/
  - /docs/v0.36.12/api/window-open/
  - /docs/v0.36.11/api/window-open/
  - /docs/v0.36.10/api/window-open/
  - /docs/v0.36.9/api/window-open/
  - /docs/v0.36.8/api/window-open/
  - /docs/v0.36.7/api/window-open/
  - /docs/v0.36.6/api/window-open/
  - /docs/v0.36.5/api/window-open/
  - /docs/v0.36.4/api/window-open/
  - /docs/v0.36.3/api/window-open/
  - /docs/v0.36.2/api/window-open/
  - /docs/v0.36.0/api/window-open/
  - /docs/v0.35.5/api/window-open/
  - /docs/v0.35.4/api/window-open/
  - /docs/v0.35.3/api/window-open/
  - /docs/v0.35.2/api/window-open/
  - /docs/v0.35.1/api/window-open/
  - /docs/v0.34.4/api/window-open/
  - /docs/v0.34.3/api/window-open/
  - /docs/v0.34.2/api/window-open/
  - /docs/v0.34.1/api/window-open/
  - /docs/v0.34.0/api/window-open/
  - /docs/v0.33.9/api/window-open/
  - /docs/v0.33.8/api/window-open/
  - /docs/v0.33.7/api/window-open/
  - /docs/v0.33.6/api/window-open/
  - /docs/v0.33.4/api/window-open/
  - /docs/v0.33.3/api/window-open/
  - /docs/v0.33.2/api/window-open/
  - /docs/v0.33.1/api/window-open/
  - /docs/v0.33.0/api/window-open/
  - /docs/v0.32.3/api/window-open/
  - /docs/v0.32.2/api/window-open/
  - /docs/v0.31.2/api/window-open/
  - /docs/v0.31.0/api/window-open/
  - /docs/v0.30.4/api/window-open/
  - /docs/v0.29.2/api/window-open/
  - /docs/v0.29.1/api/window-open/
  - /docs/v0.28.3/api/window-open/
  - /docs/v0.28.2/api/window-open/
  - /docs/v0.28.1/api/window-open/
  - /docs/v0.28.0/api/window-open/
  - /docs/v0.27.3/api/window-open/
  - /docs/v0.27.2/api/window-open/
  - /docs/v0.27.1/api/window-open/
  - /docs/v0.27.0/api/window-open/
  - /docs/v0.26.1/api/window-open/
  - /docs/v0.26.0/api/window-open/
  - /docs/v0.25.3/api/window-open/
  - /docs/v0.25.2/api/window-open/
  - /docs/v0.25.1/api/window-open/
  - /docs/v0.25.0/api/window-open/
  - /docs/v0.24.0/api/window-open/
  - /docs/v0.23.0/api/window-open/
  - /docs/v0.22.3/api/window-open/
  - /docs/v0.22.2/api/window-open/
  - /docs/v0.22.1/api/window-open/
  - /docs/v0.21.3/api/window-open/
  - /docs/v0.21.2/api/window-open/
  - /docs/v0.21.1/api/window-open/
  - /docs/v0.21.0/api/window-open/
  - /docs/v0.20.8/api/window-open/
  - /docs/v0.20.7/api/window-open/
  - /docs/v0.20.6/api/window-open/
  - /docs/v0.20.5/api/window-open/
  - /docs/v0.20.4/api/window-open/
  - /docs/v0.20.3/api/window-open/
  - /docs/v0.20.2/api/window-open/
  - /docs/v0.20.1/api/window-open/
  - /docs/v0.20.0/api/window-open/
  - /docs/latest/api/window-open/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/window-open.md'
title: window.open Function
excerpt: Open a new window and load a URL.
sort_title: window-open
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

    https://github.com/electron/electron/blob/master/docs/api/window-open.md

    Thanks!

-->
# `window.open` Function

> Open a new window and load a URL.

When `window.open` is called to create a new window in a web page, a new instance of `BrowserWindow` will be created for the `url` and a proxy will be returned to `window.open` to let the page have limited control over it.

The proxy has limited standard functionality implemented to be compatible with traditional web pages. For full control of the new window you should create a `BrowserWindow` directly.

The newly created `BrowserWindow` will inherit the parent window's options by default. To override inherited options you can set them in the `features` string.

### `window.open(url[, frameName][, features])`

*   `url` String
*   `frameName` String (optional)
*   `features` String (optional)

Returns [`BrowserWindowProxy`]({{site.baseurl}}/docs/api/browser-window-proxy) - Creates a new window and returns an instance of `BrowserWindowProxy` class.

The `features` string follows the format of standard browser, but each feature has to be a field of `BrowserWindow`'s options.

**Notes:**

*   Node integration will always be disabled in the opened `window` if it is disabled on the parent window.
*   Context isolation will always be enabled in the opened `window` if it is enabled on the parent window.
*   JavaScript will always be disabled in the opened `window` if it is disabled on the parent window.
*   Non-standard features (that are not handled by Chromium or Electron) given in `features` will be passed to any registered `webContent`'s `new-window` event handler in the `additionalFeatures` argument.

### `window.opener.postMessage(message, targetOrigin)`

*   `message` String
*   `targetOrigin` String

Sends a message to the parent window with the specified origin or `*` for no origin preference.

### Using Chrome's `window.open()` implementation

If you want to use Chrome's built-in `window.open()` implementation, set `nativeWindowOpen` to `true` in the `webPreferences` options object.

Native `window.open()` allows synchronous access to opened windows so it is convenient choice if you need to open a dialog or a preferences window.

This option can also be set on `<webview>` tags as well:

```html
<webview webpreferences="nativeWindowOpen=yes"></webview>
```

The creation of the `BrowserWindow` is customizable via `WebContents`'s `new-window` event.

```javascript
// main process
const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nativeWindowOpen: true
  }
})
mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
  if (frameName === 'modal') {
    // open window as modal
    event.preventDefault()
    Object.assign(options, {
      modal: true,
      parent: mainWindow,
      width: 100,
      height: 100
    })
    event.newGuest = new BrowserWindow(options)
  }
})
```

```javascript
// renderer process (mainWindow)
let modal = window.open('', 'modal')
modal.document.write('<h1>Hello</h1>')
```
