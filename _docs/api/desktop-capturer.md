---
version: v1.7.9
permalink: /docs/api/desktop-capturer/
category: API
redirect_from:
  - /docs/v0.37.8/api/desktop-capturer/
  - /docs/v0.37.7/api/desktop-capturer/
  - /docs/v0.37.6/api/desktop-capturer/
  - /docs/v0.37.5/api/desktop-capturer/
  - /docs/v0.37.4/api/desktop-capturer/
  - /docs/v0.37.3/api/desktop-capturer/
  - /docs/v0.37.1/api/desktop-capturer/
  - /docs/v0.37.0/api/desktop-capturer/
  - /docs/v0.36.12/api/desktop-capturer/
  - /docs/v0.36.11/api/desktop-capturer/
  - /docs/v0.36.10/api/desktop-capturer/
  - /docs/v0.36.9/api/desktop-capturer/
  - /docs/v0.36.8/api/desktop-capturer/
  - /docs/v0.36.7/api/desktop-capturer/
  - /docs/v0.36.6/api/desktop-capturer/
  - /docs/v0.36.5/api/desktop-capturer/
  - /docs/v0.36.4/api/desktop-capturer/
  - /docs/v0.36.3/api/desktop-capturer/
  - /docs/v0.36.2/api/desktop-capturer/
  - /docs/v0.36.0/api/desktop-capturer/
  - /docs/v0.35.5/api/desktop-capturer/
  - /docs/v0.35.4/api/desktop-capturer/
  - /docs/v0.35.3/api/desktop-capturer/
  - /docs/v0.35.2/api/desktop-capturer/
  - /docs/v0.35.1/api/desktop-capturer/
  - /docs/v0.34.4/api/desktop-capturer/
  - /docs/v0.34.3/api/desktop-capturer/
  - /docs/v0.34.2/api/desktop-capturer/
  - /docs/v0.34.1/api/desktop-capturer/
  - /docs/v0.34.0/api/desktop-capturer/
  - /docs/v0.33.9/api/desktop-capturer/
  - /docs/v0.33.8/api/desktop-capturer/
  - /docs/v0.33.7/api/desktop-capturer/
  - /docs/v0.33.6/api/desktop-capturer/
  - /docs/v0.33.4/api/desktop-capturer/
  - /docs/v0.33.3/api/desktop-capturer/
  - /docs/v0.33.2/api/desktop-capturer/
  - /docs/v0.33.1/api/desktop-capturer/
  - /docs/v0.33.0/api/desktop-capturer/
  - /docs/v0.32.3/api/desktop-capturer/
  - /docs/v0.32.2/api/desktop-capturer/
  - /docs/v0.31.2/api/desktop-capturer/
  - /docs/v0.31.0/api/desktop-capturer/
  - /docs/v0.30.4/api/desktop-capturer/
  - /docs/v0.29.2/api/desktop-capturer/
  - /docs/v0.29.1/api/desktop-capturer/
  - /docs/v0.28.3/api/desktop-capturer/
  - /docs/v0.28.2/api/desktop-capturer/
  - /docs/v0.28.1/api/desktop-capturer/
  - /docs/v0.28.0/api/desktop-capturer/
  - /docs/v0.27.3/api/desktop-capturer/
  - /docs/v0.27.2/api/desktop-capturer/
  - /docs/v0.27.1/api/desktop-capturer/
  - /docs/v0.27.0/api/desktop-capturer/
  - /docs/v0.26.1/api/desktop-capturer/
  - /docs/v0.26.0/api/desktop-capturer/
  - /docs/v0.25.3/api/desktop-capturer/
  - /docs/v0.25.2/api/desktop-capturer/
  - /docs/v0.25.1/api/desktop-capturer/
  - /docs/v0.25.0/api/desktop-capturer/
  - /docs/v0.24.0/api/desktop-capturer/
  - /docs/v0.23.0/api/desktop-capturer/
  - /docs/v0.22.3/api/desktop-capturer/
  - /docs/v0.22.2/api/desktop-capturer/
  - /docs/v0.22.1/api/desktop-capturer/
  - /docs/v0.21.3/api/desktop-capturer/
  - /docs/v0.21.2/api/desktop-capturer/
  - /docs/v0.21.1/api/desktop-capturer/
  - /docs/v0.21.0/api/desktop-capturer/
  - /docs/v0.20.8/api/desktop-capturer/
  - /docs/v0.20.7/api/desktop-capturer/
  - /docs/v0.20.6/api/desktop-capturer/
  - /docs/v0.20.5/api/desktop-capturer/
  - /docs/v0.20.4/api/desktop-capturer/
  - /docs/v0.20.3/api/desktop-capturer/
  - /docs/v0.20.2/api/desktop-capturer/
  - /docs/v0.20.1/api/desktop-capturer/
  - /docs/v0.20.0/api/desktop-capturer/
  - /docs/latest/api/desktop-capturer/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/desktop-capturer.md'
title: desktopCapturer
excerpt: |-
  Access information about media sources that can be used to capture audio and
      video from the desktop using the <a href="https://developer.mozilla.org/en/docs/Web/API/MediaDevices/getUserMedia"><code>navigator.mediaDevices.getUserMedia</code></a> API.
sort_title: desktop-capturer
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

    https://github.com/electron/electron/blob/master/docs/api/desktop-capturer.md

    Thanks!

-->
# desktopCapturer

> Access information about media sources that can be used to capture audio and video from the desktop using the [`navigator.mediaDevices.getUserMedia`](https://developer.mozilla.org/en/docs/Web/API/MediaDevices/getUserMedia) API.

Process: [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The following example shows how to capture video from a desktop window whose title is `Electron`:

```javascript
// In the renderer process.
const {desktopCapturer} = require('electron')

desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
  if (error) throw error
  for (let i = 0; i < sources.length; ++i) {
    if (sources[i].name === 'Electron') {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sources[i].id,
            minWidth: 1280,
            maxWidth: 1280,
            minHeight: 720,
            maxHeight: 720
          }
        }
      }, handleStream, handleError)
      return
    }
  }
})

function handleStream (stream) {
  document.querySelector('video').src = URL.createObjectURL(stream)
}

function handleError (e) {
  console.log(e)
}
```

To capture video from a source provided by `desktopCapturer` the constraints passed to [`navigator.mediaDevices.getUserMedia`](https://developer.mozilla.org/en/docs/Web/API/MediaDevices/getUserMedia) must include `chromeMediaSource: 'desktop'`, and `audio: false`.

To capture both audio and video from the entire desktop the constraints passed to [`navigator.mediaDevices.getUserMedia`](https://developer.mozilla.org/en/docs/Web/API/MediaDevices/getUserMedia) must include `chromeMediaSource: 'desktop'`, for both `audio` and `video`, but should not include a `chromeMediaSourceId` constraint.

```javascript
const constraints = {
  audio: {
    mandatory: {
      chromeMediaSource: 'desktop'
    }
  },
  video: {
    mandatory: {
      chromeMediaSource: 'desktop'
    }
  }
}
```

## Methods

The `desktopCapturer` module has the following methods:

### `desktopCapturer.getSources(options, callback)`

*   `options` Object
    *   `types` String[] - An array of Strings that lists the types of desktop sources to be captured, available types are `screen` and `window`.
    *   `thumbnailSize` [Size]({{site.baseurl}}/docs/api/structures/size) (optional) - The size that the media source thumbnail should be scaled to. Default is `150` x `150`.
*   `callback` Function
    *   `error` Error
    *   `sources` [DesktopCapturerSource[]]({{site.baseurl}}/docs/api/structures/desktop-capturer-source)

Starts gathering information about all available desktop media sources, and calls `callback(error, sources)` when finished.

`sources` is an array of [`DesktopCapturerSource`]({{site.baseurl}}/docs/api/structures/desktop-capturer-source) objects, each `DesktopCapturerSource` represents a screen or an individual window that can be captured.
