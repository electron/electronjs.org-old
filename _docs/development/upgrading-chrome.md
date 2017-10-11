---
version: v1.7.9
permalink: /docs/development/upgrading-chrome/
category: Development
redirect_from:
  - /docs/v0.37.8/development/upgrading-chrome/
  - /docs/v0.37.7/development/upgrading-chrome/
  - /docs/v0.37.6/development/upgrading-chrome/
  - /docs/v0.37.5/development/upgrading-chrome/
  - /docs/v0.37.4/development/upgrading-chrome/
  - /docs/v0.37.3/development/upgrading-chrome/
  - /docs/v0.37.1/development/upgrading-chrome/
  - /docs/v0.37.0/development/upgrading-chrome/
  - /docs/v0.36.12/development/upgrading-chrome/
  - /docs/v0.36.11/development/upgrading-chrome/
  - /docs/v0.36.10/development/upgrading-chrome/
  - /docs/v0.36.9/development/upgrading-chrome/
  - /docs/v0.36.8/development/upgrading-chrome/
  - /docs/v0.36.7/development/upgrading-chrome/
  - /docs/v0.36.6/development/upgrading-chrome/
  - /docs/v0.36.5/development/upgrading-chrome/
  - /docs/v0.36.4/development/upgrading-chrome/
  - /docs/v0.36.3/development/upgrading-chrome/
  - /docs/v0.36.2/development/upgrading-chrome/
  - /docs/v0.36.0/development/upgrading-chrome/
  - /docs/v0.35.5/development/upgrading-chrome/
  - /docs/v0.35.4/development/upgrading-chrome/
  - /docs/v0.35.3/development/upgrading-chrome/
  - /docs/v0.35.2/development/upgrading-chrome/
  - /docs/v0.35.1/development/upgrading-chrome/
  - /docs/v0.34.4/development/upgrading-chrome/
  - /docs/v0.34.3/development/upgrading-chrome/
  - /docs/v0.34.2/development/upgrading-chrome/
  - /docs/v0.34.1/development/upgrading-chrome/
  - /docs/v0.34.0/development/upgrading-chrome/
  - /docs/v0.33.9/development/upgrading-chrome/
  - /docs/v0.33.8/development/upgrading-chrome/
  - /docs/v0.33.7/development/upgrading-chrome/
  - /docs/v0.33.6/development/upgrading-chrome/
  - /docs/v0.33.4/development/upgrading-chrome/
  - /docs/v0.33.3/development/upgrading-chrome/
  - /docs/v0.33.2/development/upgrading-chrome/
  - /docs/v0.33.1/development/upgrading-chrome/
  - /docs/v0.33.0/development/upgrading-chrome/
  - /docs/v0.32.3/development/upgrading-chrome/
  - /docs/v0.32.2/development/upgrading-chrome/
  - /docs/v0.31.2/development/upgrading-chrome/
  - /docs/v0.31.0/development/upgrading-chrome/
  - /docs/v0.30.4/development/upgrading-chrome/
  - /docs/v0.29.2/development/upgrading-chrome/
  - /docs/v0.29.1/development/upgrading-chrome/
  - /docs/v0.28.3/development/upgrading-chrome/
  - /docs/v0.28.2/development/upgrading-chrome/
  - /docs/v0.28.1/development/upgrading-chrome/
  - /docs/v0.28.0/development/upgrading-chrome/
  - /docs/v0.27.3/development/upgrading-chrome/
  - /docs/v0.27.2/development/upgrading-chrome/
  - /docs/v0.27.1/development/upgrading-chrome/
  - /docs/v0.27.0/development/upgrading-chrome/
  - /docs/v0.26.1/development/upgrading-chrome/
  - /docs/v0.26.0/development/upgrading-chrome/
  - /docs/v0.25.3/development/upgrading-chrome/
  - /docs/v0.25.2/development/upgrading-chrome/
  - /docs/v0.25.1/development/upgrading-chrome/
  - /docs/v0.25.0/development/upgrading-chrome/
  - /docs/v0.24.0/development/upgrading-chrome/
  - /docs/v0.23.0/development/upgrading-chrome/
  - /docs/v0.22.3/development/upgrading-chrome/
  - /docs/v0.22.2/development/upgrading-chrome/
  - /docs/v0.22.1/development/upgrading-chrome/
  - /docs/v0.21.3/development/upgrading-chrome/
  - /docs/v0.21.2/development/upgrading-chrome/
  - /docs/v0.21.1/development/upgrading-chrome/
  - /docs/v0.21.0/development/upgrading-chrome/
  - /docs/v0.20.8/development/upgrading-chrome/
  - /docs/v0.20.7/development/upgrading-chrome/
  - /docs/v0.20.6/development/upgrading-chrome/
  - /docs/v0.20.5/development/upgrading-chrome/
  - /docs/v0.20.4/development/upgrading-chrome/
  - /docs/v0.20.3/development/upgrading-chrome/
  - /docs/v0.20.2/development/upgrading-chrome/
  - /docs/v0.20.1/development/upgrading-chrome/
  - /docs/v0.20.0/development/upgrading-chrome/
  - /docs/latest/development/upgrading-chrome/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/upgrading-chrome.md
title: Upgrading Chrome Checklist
excerpt: ''
sort_title: upgrading-chrome
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

    https://github.com/electron/electron/blob/master/docs/development/upgrading-chrome.md

    Thanks!

-->
# Upgrading Chrome Checklist

This document is meant to serve as an overview of what steps are needed on each Chrome upgrade in Electron.

These are things to do in addition to updating the Electron code for any Chrome/Node API changes.

*   Verify the new Chrome version is available from https://github.com/zcbenz/chromium-source-tarball/releases
*   Update the `VERSION` file at the root of the `electron/libchromiumcontent` repository
*   Update the `CLANG_REVISION` in `script/update-clang.sh` to match the version Chrome is using in `libchromiumcontent/src/tools/clang/scripts/update.py`
*   Upgrade `vendor/node` to the Node release that corresponds to the v8 version being used in the new Chrome release. See the v8 versions in Node on https://nodejs.org/en/download/releases for more details
*   Upgrade `vendor/crashpad` for any crash reporter changes needed
*   Upgrade `vendor/depot_tools` for any build tools changes needed
*   Update the `libchromiumcontent` SHA-1 to download in `script/lib/config.py`
*   Open a pull request on `electron/libchromiumcontent` with the changes
*   Open a pull request on `electron/electron` with the changes
    *   This should include upgrading the submodules in `vendor/` as needed
*   Verify debug builds succeed on:
    *   macOS
    *   32-bit Windows
    *   64-bit Window
    *   32-bit Linux
    *   64-bit Linux
    *   ARM Linux
*   Verify release builds succeed on:
    *   macOS
    *   32-bit Windows
    *   64-bit Window
    *   32-bit Linux
    *   64-bit Linux
    *   ARM Linux
*   Verify tests pass on:
    *   macOS
    *   32-bit Windows
    *   64-bit Window
    *   32-bit Linux
    *   64-bit Linux
    *   ARM Linux

## Verify ffmpeg Support

Electron ships with a version of `ffmpeg` that includes proprietary codecs by default. A version without these codecs is built and distributed with each release as well. Each Chrome upgrade should verify that switching this version is still supported.

You can verify Electron's support for multiple `ffmpeg` builds by loading the following page. It should work with the default `ffmpeg` library distributed with Electron and not work with the `ffmpeg` library built without proprietary codecs.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Proprietary Codec Check</title>
  </head>
  <body>
    <p>Checking if Electron is using proprietary codecs by loading video from http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4</p>
    <p id="outcome"></p>
    <video style="display:none" src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" autoplay></video>
    <script>
      const video = document.querySelector('video')
      video.addEventListener('error', ({target}) => {
        if (target.error.code === target.error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
          document.querySelector('#outcome').textContent = 'Not using proprietary codecs, video emitted source not supported error event.'
        } else {
          document.querySelector('#outcome').textContent = `Unexpected error: ${target.error.code}`
        }
      })
      video.addEventListener('playing', () => {
        document.querySelector('#outcome').textContent = 'Using proprietary codecs, video started playing.'
      })
    </script>
  </body>
</html>
```

## Links

*   [Chrome Release Schedule](https://www.chromium.org/developers/calendar)
