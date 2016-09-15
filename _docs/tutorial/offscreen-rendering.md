---
version: v1.4.0
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/offscreen-rendering/
    - /docs/v0.25.0/tutorial/offscreen-rendering/
    - /docs/v0.26.0/tutorial/offscreen-rendering/
    - /docs/v0.27.0/tutorial/offscreen-rendering/
    - /docs/v0.28.0/tutorial/offscreen-rendering/
    - /docs/v0.29.0/tutorial/offscreen-rendering/
    - /docs/v0.30.0/tutorial/offscreen-rendering/
    - /docs/v0.31.0/tutorial/offscreen-rendering/
    - /docs/v0.32.0/tutorial/offscreen-rendering/
    - /docs/v0.33.0/tutorial/offscreen-rendering/
    - /docs/v0.34.0/tutorial/offscreen-rendering/
    - /docs/v0.35.0/tutorial/offscreen-rendering/
    - /docs/v0.36.0/tutorial/offscreen-rendering/
    - /docs/v0.36.3/tutorial/offscreen-rendering/
    - /docs/v0.36.4/tutorial/offscreen-rendering/
    - /docs/v0.36.5/tutorial/offscreen-rendering/
    - /docs/v0.36.6/tutorial/offscreen-rendering/
    - /docs/v0.36.7/tutorial/offscreen-rendering/
    - /docs/v0.36.8/tutorial/offscreen-rendering/
    - /docs/v0.36.9/tutorial/offscreen-rendering/
    - /docs/v0.36.10/tutorial/offscreen-rendering/
    - /docs/v0.36.11/tutorial/offscreen-rendering/
    - /docs/v0.37.0/tutorial/offscreen-rendering/
    - /docs/v0.37.1/tutorial/offscreen-rendering/
    - /docs/v0.37.2/tutorial/offscreen-rendering/
    - /docs/v0.37.3/tutorial/offscreen-rendering/
    - /docs/v0.37.4/tutorial/offscreen-rendering/
    - /docs/v0.37.5/tutorial/offscreen-rendering/
    - /docs/v0.37.6/tutorial/offscreen-rendering/
    - /docs/v0.37.7/tutorial/offscreen-rendering/
    - /docs/v0.37.8/tutorial/offscreen-rendering/
    - /docs/latest/tutorial/offscreen-rendering/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/offscreen-rendering.md'
title: "Offscreen Rendering"
sort_title: "offscreen rendering"
---

# Offscreen Rendering

Offscreen rendering lets you obtain the content of a browser window in a bitmap,
so it can be rendered anywhere, for example on a texture in a 3D scene. The
offscreen rendering in Electron uses a similar approach than the [Chromium
Embedded Framework](https://bitbucket.org/chromiumembedded/cef) project.

Two modes of rendering can be used and only the dirty area is passed in the
`'paint'` event to be more efficient. The rendering can be stopped, continued
and the frame rate can be set. The specified frame rate is a top limit value,
when there is nothing happening on a webpage, no frames are generated. The
maximum frame rate is 60, because above that there is no benefit, just
performance loss.

## Two modes of rendering

### GPU accelerated

GPU accelerated rendering means that the GPU is used for composition. Because of
that the frame has to be copied from the GPU which requires more performance,
thus this mode is quite a bit slower than the other one. The benefit of this
mode that WebGL and 3D CSS animations are supported.

### Software output device

This mode uses a software output device for rendering in the CPU, so the frame
generation is much faster, thus this mode is preferred over the GPU accelerated
one.

To enable this mode GPU acceleration has to be disabled by calling the
[`app.disableHardwareAcceleration()`][disablehardwareacceleration] API.

## Usage

``` javascript
const {app, BrowserWindow} = require('electron')

app.disableHardwareAcceleration()

let win
app.once('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      offscreen: true
    }
  })
  win.loadURL('http://github.com')
  win.webContents.on('paint', (event, dirty, image) => {
    // updateBitmap(dirty, image.getBitmap())
  })
  win.webContents.setFrameRate(30)
})
```

[disablehardwareacceleration]: http://electron.atom.io/docs/api/app#appdisablehardwareacceleration
