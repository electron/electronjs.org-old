---
version: v1.7.9
permalink: /docs/tutorial/offscreen-rendering/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/offscreen-rendering/
  - /docs/v0.37.7/tutorial/offscreen-rendering/
  - /docs/v0.37.6/tutorial/offscreen-rendering/
  - /docs/v0.37.5/tutorial/offscreen-rendering/
  - /docs/v0.37.4/tutorial/offscreen-rendering/
  - /docs/v0.37.3/tutorial/offscreen-rendering/
  - /docs/v0.37.1/tutorial/offscreen-rendering/
  - /docs/v0.37.0/tutorial/offscreen-rendering/
  - /docs/v0.36.12/tutorial/offscreen-rendering/
  - /docs/v0.36.11/tutorial/offscreen-rendering/
  - /docs/v0.36.10/tutorial/offscreen-rendering/
  - /docs/v0.36.9/tutorial/offscreen-rendering/
  - /docs/v0.36.8/tutorial/offscreen-rendering/
  - /docs/v0.36.7/tutorial/offscreen-rendering/
  - /docs/v0.36.6/tutorial/offscreen-rendering/
  - /docs/v0.36.5/tutorial/offscreen-rendering/
  - /docs/v0.36.4/tutorial/offscreen-rendering/
  - /docs/v0.36.3/tutorial/offscreen-rendering/
  - /docs/v0.36.2/tutorial/offscreen-rendering/
  - /docs/v0.36.0/tutorial/offscreen-rendering/
  - /docs/v0.35.5/tutorial/offscreen-rendering/
  - /docs/v0.35.4/tutorial/offscreen-rendering/
  - /docs/v0.35.3/tutorial/offscreen-rendering/
  - /docs/v0.35.2/tutorial/offscreen-rendering/
  - /docs/v0.35.1/tutorial/offscreen-rendering/
  - /docs/v0.34.4/tutorial/offscreen-rendering/
  - /docs/v0.34.3/tutorial/offscreen-rendering/
  - /docs/v0.34.2/tutorial/offscreen-rendering/
  - /docs/v0.34.1/tutorial/offscreen-rendering/
  - /docs/v0.34.0/tutorial/offscreen-rendering/
  - /docs/v0.33.9/tutorial/offscreen-rendering/
  - /docs/v0.33.8/tutorial/offscreen-rendering/
  - /docs/v0.33.7/tutorial/offscreen-rendering/
  - /docs/v0.33.6/tutorial/offscreen-rendering/
  - /docs/v0.33.4/tutorial/offscreen-rendering/
  - /docs/v0.33.3/tutorial/offscreen-rendering/
  - /docs/v0.33.2/tutorial/offscreen-rendering/
  - /docs/v0.33.1/tutorial/offscreen-rendering/
  - /docs/v0.33.0/tutorial/offscreen-rendering/
  - /docs/v0.32.3/tutorial/offscreen-rendering/
  - /docs/v0.32.2/tutorial/offscreen-rendering/
  - /docs/v0.31.2/tutorial/offscreen-rendering/
  - /docs/v0.31.0/tutorial/offscreen-rendering/
  - /docs/v0.30.4/tutorial/offscreen-rendering/
  - /docs/v0.29.2/tutorial/offscreen-rendering/
  - /docs/v0.29.1/tutorial/offscreen-rendering/
  - /docs/v0.28.3/tutorial/offscreen-rendering/
  - /docs/v0.28.2/tutorial/offscreen-rendering/
  - /docs/v0.28.1/tutorial/offscreen-rendering/
  - /docs/v0.28.0/tutorial/offscreen-rendering/
  - /docs/v0.27.3/tutorial/offscreen-rendering/
  - /docs/v0.27.2/tutorial/offscreen-rendering/
  - /docs/v0.27.1/tutorial/offscreen-rendering/
  - /docs/v0.27.0/tutorial/offscreen-rendering/
  - /docs/v0.26.1/tutorial/offscreen-rendering/
  - /docs/v0.26.0/tutorial/offscreen-rendering/
  - /docs/v0.25.3/tutorial/offscreen-rendering/
  - /docs/v0.25.2/tutorial/offscreen-rendering/
  - /docs/v0.25.1/tutorial/offscreen-rendering/
  - /docs/v0.25.0/tutorial/offscreen-rendering/
  - /docs/v0.24.0/tutorial/offscreen-rendering/
  - /docs/v0.23.0/tutorial/offscreen-rendering/
  - /docs/v0.22.3/tutorial/offscreen-rendering/
  - /docs/v0.22.2/tutorial/offscreen-rendering/
  - /docs/v0.22.1/tutorial/offscreen-rendering/
  - /docs/v0.21.3/tutorial/offscreen-rendering/
  - /docs/v0.21.2/tutorial/offscreen-rendering/
  - /docs/v0.21.1/tutorial/offscreen-rendering/
  - /docs/v0.21.0/tutorial/offscreen-rendering/
  - /docs/v0.20.8/tutorial/offscreen-rendering/
  - /docs/v0.20.7/tutorial/offscreen-rendering/
  - /docs/v0.20.6/tutorial/offscreen-rendering/
  - /docs/v0.20.5/tutorial/offscreen-rendering/
  - /docs/v0.20.4/tutorial/offscreen-rendering/
  - /docs/v0.20.3/tutorial/offscreen-rendering/
  - /docs/v0.20.2/tutorial/offscreen-rendering/
  - /docs/v0.20.1/tutorial/offscreen-rendering/
  - /docs/v0.20.0/tutorial/offscreen-rendering/
  - /docs/latest/tutorial/offscreen-rendering/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/offscreen-rendering.md
title: Offscreen Rendering
excerpt: ''
sort_title: offscreen-rendering
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

    https://github.com/electron/electron/blob/master/docs/tutorial/offscreen-rendering.md

    Thanks!

-->
# Offscreen Rendering

Offscreen rendering lets you obtain the content of a browser window in a bitmap, so it can be rendered anywhere, for example on a texture in a 3D scene. The offscreen rendering in Electron uses a similar approach than the [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef) project.

Two modes of rendering can be used and only the dirty area is passed in the `'paint'` event to be more efficient. The rendering can be stopped, continued and the frame rate can be set. The specified frame rate is a top limit value, when there is nothing happening on a webpage, no frames are generated. The maximum frame rate is 60, because above that there is no benefit, just performance loss.

**Note:** An offscreen window is always created as a [Frameless Window]({{site.baseurl}}/docs/api/frameless-window).

## Two modes of rendering

### GPU accelerated

GPU accelerated rendering means that the GPU is used for composition. Because of that the frame has to be copied from the GPU which requires more performance, thus this mode is quite a bit slower than the other one. The benefit of this mode that WebGL and 3D CSS animations are supported.

### Software output device

This mode uses a software output device for rendering in the CPU, so the frame generation is much faster, thus this mode is preferred over the GPU accelerated one.

To enable this mode GPU acceleration has to be disabled by calling the [`app.disableHardwareAcceleration()`]({{site.baseurl}}/docs/api/app#appdisablehardwareacceleration) API.

## Usage

```javascript
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
