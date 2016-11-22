---
version: v1.4.8
category: API
redirect_from:
    - /docs/v0.24.0/api/structures/desktop-capturer-source/
    - /docs/v0.25.0/api/structures/desktop-capturer-source/
    - /docs/v0.26.0/api/structures/desktop-capturer-source/
    - /docs/v0.27.0/api/structures/desktop-capturer-source/
    - /docs/v0.28.0/api/structures/desktop-capturer-source/
    - /docs/v0.29.0/api/structures/desktop-capturer-source/
    - /docs/v0.30.0/api/structures/desktop-capturer-source/
    - /docs/v0.31.0/api/structures/desktop-capturer-source/
    - /docs/v0.32.0/api/structures/desktop-capturer-source/
    - /docs/v0.33.0/api/structures/desktop-capturer-source/
    - /docs/v0.34.0/api/structures/desktop-capturer-source/
    - /docs/v0.35.0/api/structures/desktop-capturer-source/
    - /docs/v0.36.0/api/structures/desktop-capturer-source/
    - /docs/v0.36.3/api/structures/desktop-capturer-source/
    - /docs/v0.36.4/api/structures/desktop-capturer-source/
    - /docs/v0.36.5/api/structures/desktop-capturer-source/
    - /docs/v0.36.6/api/structures/desktop-capturer-source/
    - /docs/v0.36.7/api/structures/desktop-capturer-source/
    - /docs/v0.36.8/api/structures/desktop-capturer-source/
    - /docs/v0.36.9/api/structures/desktop-capturer-source/
    - /docs/v0.36.10/api/structures/desktop-capturer-source/
    - /docs/v0.36.11/api/structures/desktop-capturer-source/
    - /docs/v0.37.0/api/structures/desktop-capturer-source/
    - /docs/v0.37.1/api/structures/desktop-capturer-source/
    - /docs/v0.37.2/api/structures/desktop-capturer-source/
    - /docs/v0.37.3/api/structures/desktop-capturer-source/
    - /docs/v0.37.4/api/structures/desktop-capturer-source/
    - /docs/v0.37.5/api/structures/desktop-capturer-source/
    - /docs/v0.37.6/api/structures/desktop-capturer-source/
    - /docs/v0.37.7/api/structures/desktop-capturer-source/
    - /docs/v0.37.8/api/structures/desktop-capturer-source/
    - /docs/latest/api/structures/desktop-capturer-source/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/desktop-capturer-source.md'
title: "DesktopCapturerSource Object"
sort_title: "desktopcapturersource object"
---

# DesktopCapturerSource Object

* `id` String - The identifier of a window or screen that can be used as a
  `chromeMediaSourceId` constraint when calling
  [`navigator.webkitGetUserMedia`]. The format of the identifier will be
  `window:XX` or `screen:XX`, where `XX` is a random generated number.
* `name` String - A screen source will be named either `Entire Screen` or
  `Screen <index>`, while the name of a window source will match the window
  title.
* `thumbnail` [NativeImage](http://electron.atom.io/docs/native-image) - A thumbnail image. **Note:**
  There is no guarantee that the size of the thumbnail is the same as the
  `thumbnailSize` specified in the `options` passed to
  `desktopCapturer.getSources`. The actual size depends on the scale of the
  screen or window.
