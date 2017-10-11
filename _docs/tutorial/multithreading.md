---
version: v1.7.9
permalink: /docs/tutorial/multithreading/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/multithreading/
  - /docs/v0.37.7/tutorial/multithreading/
  - /docs/v0.37.6/tutorial/multithreading/
  - /docs/v0.37.5/tutorial/multithreading/
  - /docs/v0.37.4/tutorial/multithreading/
  - /docs/v0.37.3/tutorial/multithreading/
  - /docs/v0.37.1/tutorial/multithreading/
  - /docs/v0.37.0/tutorial/multithreading/
  - /docs/v0.36.12/tutorial/multithreading/
  - /docs/v0.36.11/tutorial/multithreading/
  - /docs/v0.36.10/tutorial/multithreading/
  - /docs/v0.36.9/tutorial/multithreading/
  - /docs/v0.36.8/tutorial/multithreading/
  - /docs/v0.36.7/tutorial/multithreading/
  - /docs/v0.36.6/tutorial/multithreading/
  - /docs/v0.36.5/tutorial/multithreading/
  - /docs/v0.36.4/tutorial/multithreading/
  - /docs/v0.36.3/tutorial/multithreading/
  - /docs/v0.36.2/tutorial/multithreading/
  - /docs/v0.36.0/tutorial/multithreading/
  - /docs/v0.35.5/tutorial/multithreading/
  - /docs/v0.35.4/tutorial/multithreading/
  - /docs/v0.35.3/tutorial/multithreading/
  - /docs/v0.35.2/tutorial/multithreading/
  - /docs/v0.35.1/tutorial/multithreading/
  - /docs/v0.34.4/tutorial/multithreading/
  - /docs/v0.34.3/tutorial/multithreading/
  - /docs/v0.34.2/tutorial/multithreading/
  - /docs/v0.34.1/tutorial/multithreading/
  - /docs/v0.34.0/tutorial/multithreading/
  - /docs/v0.33.9/tutorial/multithreading/
  - /docs/v0.33.8/tutorial/multithreading/
  - /docs/v0.33.7/tutorial/multithreading/
  - /docs/v0.33.6/tutorial/multithreading/
  - /docs/v0.33.4/tutorial/multithreading/
  - /docs/v0.33.3/tutorial/multithreading/
  - /docs/v0.33.2/tutorial/multithreading/
  - /docs/v0.33.1/tutorial/multithreading/
  - /docs/v0.33.0/tutorial/multithreading/
  - /docs/v0.32.3/tutorial/multithreading/
  - /docs/v0.32.2/tutorial/multithreading/
  - /docs/v0.31.2/tutorial/multithreading/
  - /docs/v0.31.0/tutorial/multithreading/
  - /docs/v0.30.4/tutorial/multithreading/
  - /docs/v0.29.2/tutorial/multithreading/
  - /docs/v0.29.1/tutorial/multithreading/
  - /docs/v0.28.3/tutorial/multithreading/
  - /docs/v0.28.2/tutorial/multithreading/
  - /docs/v0.28.1/tutorial/multithreading/
  - /docs/v0.28.0/tutorial/multithreading/
  - /docs/v0.27.3/tutorial/multithreading/
  - /docs/v0.27.2/tutorial/multithreading/
  - /docs/v0.27.1/tutorial/multithreading/
  - /docs/v0.27.0/tutorial/multithreading/
  - /docs/v0.26.1/tutorial/multithreading/
  - /docs/v0.26.0/tutorial/multithreading/
  - /docs/v0.25.3/tutorial/multithreading/
  - /docs/v0.25.2/tutorial/multithreading/
  - /docs/v0.25.1/tutorial/multithreading/
  - /docs/v0.25.0/tutorial/multithreading/
  - /docs/v0.24.0/tutorial/multithreading/
  - /docs/v0.23.0/tutorial/multithreading/
  - /docs/v0.22.3/tutorial/multithreading/
  - /docs/v0.22.2/tutorial/multithreading/
  - /docs/v0.22.1/tutorial/multithreading/
  - /docs/v0.21.3/tutorial/multithreading/
  - /docs/v0.21.2/tutorial/multithreading/
  - /docs/v0.21.1/tutorial/multithreading/
  - /docs/v0.21.0/tutorial/multithreading/
  - /docs/v0.20.8/tutorial/multithreading/
  - /docs/v0.20.7/tutorial/multithreading/
  - /docs/v0.20.6/tutorial/multithreading/
  - /docs/v0.20.5/tutorial/multithreading/
  - /docs/v0.20.4/tutorial/multithreading/
  - /docs/v0.20.3/tutorial/multithreading/
  - /docs/v0.20.2/tutorial/multithreading/
  - /docs/v0.20.1/tutorial/multithreading/
  - /docs/v0.20.0/tutorial/multithreading/
  - /docs/latest/tutorial/multithreading/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/multithreading.md
title: Multithreading
excerpt: ''
sort_title: multithreading
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

    https://github.com/electron/electron/blob/master/docs/tutorial/multithreading.md

    Thanks!

-->
# Multithreading

With [Web Workers](https://developer.mozilla.org/en/docs/Web/API/Web_Workers_API/Using_web_workers), it is possible to run JavaScript in OS-level threads.

## Multi-threaded Node.js

It is possible to use Node.js features in Electron's Web Workers, to do so the `nodeIntegrationInWorker` option should be set to `true` in `webPreferences`.

```javascript
let win = new BrowserWindow({
  webPreferences: {
    nodeIntegrationInWorker: true
  }
})
```

The `nodeIntegrationInWorker` can be used independent of `nodeIntegration`, but `sandbox` must not be set to `true`.

## Available APIs

All built-in modules of Node.js are supported in Web Workers, and `asar` archives can still be read with Node.js APIs. However none of Electron's built-in modules can be used in a multi-threaded environment.

## Native Node.js modules

Any native Node.js module can be loaded directly in Web Workers, but it is strongly recommended not to do so. Most existing native modules have been written assuming single-threaded environment, using them in Web Workers will lead to crashes and memory corruptions.

Note that even if a native Node.js module is thread-safe it's still not safe to load it in a Web Worker because the `process.dlopen` function is not thread safe.

The only way to load a native module safely for now, is to make sure the app loads no native modules after the Web Workers get started.

```javascript
process.dlopen = () => {
  throw new Error('Load native module is not safe')
}
let worker = new Worker('script.js')
```
