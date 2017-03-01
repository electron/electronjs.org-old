---
version: v1.6.2
permalink: /docs/api/desktop-capturer/
category: API
source_url: 'https://github.com/electron/electron/blob/master/docs/api/desktop-capturer.md'
title: desktopCapturer
excerpt: |-
  Access information about media sources that can be used to capture audio and
      video from the desktop using the <a href="https://developer.mozilla.org/en/docs/Web/API/Navigator/getUserMedia"><code>navigator.webkitGetUserMedia</code></a> API.
sort_title: desktop-capturer
---
# desktopCapturer

> Access information about media sources that can be used to capture audio and video from the desktop using the [`navigator.webkitGetUserMedia`](https://developer.mozilla.org/en/docs/Web/API/Navigator/getUserMedia) API.

Process: [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The following example shows how to capture video from a desktop window whose title is `Electron`:

```javascript
// In the renderer process.
const {desktopCapturer} = require('electron')

desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
  if (error) throw error
  for (let i = 0; i < sources.length; ++i) {
    if (sources[i].name === 'Electron') {
      navigator.webkitGetUserMedia({
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

To capture video from a source provided by `desktopCapturer` the constraints passed to [`navigator.webkitGetUserMedia`](https://developer.mozilla.org/en/docs/Web/API/Navigator/getUserMedia) must include `chromeMediaSource: 'desktop'`, and `audio: false`.

To capture both audio and video from the entire desktop the constraints passed to [`navigator.webkitGetUserMedia`](https://developer.mozilla.org/en/docs/Web/API/Navigator/getUserMedia) must include `chromeMediaSource: 'screen'`, and `audio: true`, but should not include a `chromeMediaSourceId` constraint.

## Methods

The `desktopCapturer` module has the following methods:

### `desktopCapturer.getSources(options, callback)`

*   `options` Object
    *   `types` String[] - An array of Strings that lists the types of desktop sources to be captured, available types are `screen` and `window`.
    *   `thumbnailSize` Object (optional) - The suggested size that the media source thumbnail should be scaled to, defaults to `{width: 150, height: 150}`.
*   `callback` Function
    *   `error` Error
    *   `sources` [DesktopCapturerSource[]]({{site.baseurl}}/docs/api/structures/desktop-capturer-source)

Starts gathering information about all available desktop media sources, and calls `callback(error, sources)` when finished.

`sources` is an array of [`DesktopCapturerSource`]({{site.baseurl}}/docs/api/structures/desktop-capturer-source) objects, each `DesktopCapturerSource` represents a screen or an individual window that can be captured.
