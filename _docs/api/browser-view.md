---
version: v1.7.9
permalink: /docs/api/browser-view/
category: API
redirect_from:
  - /docs/v0.37.8/api/browser-view/
  - /docs/v0.37.7/api/browser-view/
  - /docs/v0.37.6/api/browser-view/
  - /docs/v0.37.5/api/browser-view/
  - /docs/v0.37.4/api/browser-view/
  - /docs/v0.37.3/api/browser-view/
  - /docs/v0.37.1/api/browser-view/
  - /docs/v0.37.0/api/browser-view/
  - /docs/v0.36.12/api/browser-view/
  - /docs/v0.36.11/api/browser-view/
  - /docs/v0.36.10/api/browser-view/
  - /docs/v0.36.9/api/browser-view/
  - /docs/v0.36.8/api/browser-view/
  - /docs/v0.36.7/api/browser-view/
  - /docs/v0.36.6/api/browser-view/
  - /docs/v0.36.5/api/browser-view/
  - /docs/v0.36.4/api/browser-view/
  - /docs/v0.36.3/api/browser-view/
  - /docs/v0.36.2/api/browser-view/
  - /docs/v0.36.0/api/browser-view/
  - /docs/v0.35.5/api/browser-view/
  - /docs/v0.35.4/api/browser-view/
  - /docs/v0.35.3/api/browser-view/
  - /docs/v0.35.2/api/browser-view/
  - /docs/v0.35.1/api/browser-view/
  - /docs/v0.34.4/api/browser-view/
  - /docs/v0.34.3/api/browser-view/
  - /docs/v0.34.2/api/browser-view/
  - /docs/v0.34.1/api/browser-view/
  - /docs/v0.34.0/api/browser-view/
  - /docs/v0.33.9/api/browser-view/
  - /docs/v0.33.8/api/browser-view/
  - /docs/v0.33.7/api/browser-view/
  - /docs/v0.33.6/api/browser-view/
  - /docs/v0.33.4/api/browser-view/
  - /docs/v0.33.3/api/browser-view/
  - /docs/v0.33.2/api/browser-view/
  - /docs/v0.33.1/api/browser-view/
  - /docs/v0.33.0/api/browser-view/
  - /docs/v0.32.3/api/browser-view/
  - /docs/v0.32.2/api/browser-view/
  - /docs/v0.31.2/api/browser-view/
  - /docs/v0.31.0/api/browser-view/
  - /docs/v0.30.4/api/browser-view/
  - /docs/v0.29.2/api/browser-view/
  - /docs/v0.29.1/api/browser-view/
  - /docs/v0.28.3/api/browser-view/
  - /docs/v0.28.2/api/browser-view/
  - /docs/v0.28.1/api/browser-view/
  - /docs/v0.28.0/api/browser-view/
  - /docs/v0.27.3/api/browser-view/
  - /docs/v0.27.2/api/browser-view/
  - /docs/v0.27.1/api/browser-view/
  - /docs/v0.27.0/api/browser-view/
  - /docs/v0.26.1/api/browser-view/
  - /docs/v0.26.0/api/browser-view/
  - /docs/v0.25.3/api/browser-view/
  - /docs/v0.25.2/api/browser-view/
  - /docs/v0.25.1/api/browser-view/
  - /docs/v0.25.0/api/browser-view/
  - /docs/v0.24.0/api/browser-view/
  - /docs/v0.23.0/api/browser-view/
  - /docs/v0.22.3/api/browser-view/
  - /docs/v0.22.2/api/browser-view/
  - /docs/v0.22.1/api/browser-view/
  - /docs/v0.21.3/api/browser-view/
  - /docs/v0.21.2/api/browser-view/
  - /docs/v0.21.1/api/browser-view/
  - /docs/v0.21.0/api/browser-view/
  - /docs/v0.20.8/api/browser-view/
  - /docs/v0.20.7/api/browser-view/
  - /docs/v0.20.6/api/browser-view/
  - /docs/v0.20.5/api/browser-view/
  - /docs/v0.20.4/api/browser-view/
  - /docs/v0.20.3/api/browser-view/
  - /docs/v0.20.2/api/browser-view/
  - /docs/v0.20.1/api/browser-view/
  - /docs/v0.20.0/api/browser-view/
  - /docs/latest/api/browser-view/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/browser-view.md'
title: BrowserView
excerpt: Create and control views.
sort_title: browser-view
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

    https://github.com/electron/electron/blob/master/docs/api/browser-view.md

    Thanks!

-->
## Class: BrowserView

> Create and control views.

**Note:** The BrowserView API is currently experimental and may change or be removed in future Electron releases.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

A `BrowserView` can be used to embed additional web content into a `BrowserWindow`. It is like a child window, except that it is positioned relative to its owning window. It is meant to be an alternative to the `webview` tag.

## Example

```javascript
// In the main process.
const {BrowserView, BrowserWindow} = require('electron')

let win = new BrowserWindow({width: 800, height: 600})
win.on('closed', () => {
  win = null
})

let view = new BrowserView({
  webPreferences: {
    nodeIntegration: false
  }
})
win.setBrowserView(view)
view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
view.webContents.loadURL('https://electron.atom.io')
```

### `new BrowserView([options])` _Experimental_

*   `options` Object (optional)
    *   `webPreferences` Object (optional) - See [BrowserWindow]({{site.baseurl}}/docs/api/browser-window).

### Static Methods

#### `BrowserView.fromId(id)`

*   `id` Integer

Returns `BrowserView` - The view with the given `id`.

### Instance Properties

Objects created with `new BrowserView` have the following properties:

#### `view.webContents` _Experimental_

A [`WebContents`]({{site.baseurl}}/docs/api/web-contents) object owned by this view.

#### `view.id` _Experimental_

A `Integer` representing the unique ID of the view.

### Instance Methods

Objects created with `new BrowserView` have the following instance methods:

#### `view.setAutoResize(options)` _Experimental_

*   `options` Object
    *   `width` Boolean - If `true`, the view's width will grow and shrink together with the window. `false` by default.
    *   `height` Boolean - If `true`, the view's height will grow and shrink together with the window. `false` by default.

#### `view.setBounds(bounds)` _Experimental_

*   `bounds` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle)

Resizes and moves the view to the supplied bounds relative to the window.

#### `view.setBackgroundColor(color)` _Experimental_

*   `color` String - Color in `#aarrggbb` or `#argb` form. The alpha channel is optional.
