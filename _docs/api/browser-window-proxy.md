---
version: v1.7.9
permalink: /docs/api/browser-window-proxy/
category: API
redirect_from:
  - /docs/v0.37.8/api/browser-window-proxy/
  - /docs/v0.37.7/api/browser-window-proxy/
  - /docs/v0.37.6/api/browser-window-proxy/
  - /docs/v0.37.5/api/browser-window-proxy/
  - /docs/v0.37.4/api/browser-window-proxy/
  - /docs/v0.37.3/api/browser-window-proxy/
  - /docs/v0.37.1/api/browser-window-proxy/
  - /docs/v0.37.0/api/browser-window-proxy/
  - /docs/v0.36.12/api/browser-window-proxy/
  - /docs/v0.36.11/api/browser-window-proxy/
  - /docs/v0.36.10/api/browser-window-proxy/
  - /docs/v0.36.9/api/browser-window-proxy/
  - /docs/v0.36.8/api/browser-window-proxy/
  - /docs/v0.36.7/api/browser-window-proxy/
  - /docs/v0.36.6/api/browser-window-proxy/
  - /docs/v0.36.5/api/browser-window-proxy/
  - /docs/v0.36.4/api/browser-window-proxy/
  - /docs/v0.36.3/api/browser-window-proxy/
  - /docs/v0.36.2/api/browser-window-proxy/
  - /docs/v0.36.0/api/browser-window-proxy/
  - /docs/v0.35.5/api/browser-window-proxy/
  - /docs/v0.35.4/api/browser-window-proxy/
  - /docs/v0.35.3/api/browser-window-proxy/
  - /docs/v0.35.2/api/browser-window-proxy/
  - /docs/v0.35.1/api/browser-window-proxy/
  - /docs/v0.34.4/api/browser-window-proxy/
  - /docs/v0.34.3/api/browser-window-proxy/
  - /docs/v0.34.2/api/browser-window-proxy/
  - /docs/v0.34.1/api/browser-window-proxy/
  - /docs/v0.34.0/api/browser-window-proxy/
  - /docs/v0.33.9/api/browser-window-proxy/
  - /docs/v0.33.8/api/browser-window-proxy/
  - /docs/v0.33.7/api/browser-window-proxy/
  - /docs/v0.33.6/api/browser-window-proxy/
  - /docs/v0.33.4/api/browser-window-proxy/
  - /docs/v0.33.3/api/browser-window-proxy/
  - /docs/v0.33.2/api/browser-window-proxy/
  - /docs/v0.33.1/api/browser-window-proxy/
  - /docs/v0.33.0/api/browser-window-proxy/
  - /docs/v0.32.3/api/browser-window-proxy/
  - /docs/v0.32.2/api/browser-window-proxy/
  - /docs/v0.31.2/api/browser-window-proxy/
  - /docs/v0.31.0/api/browser-window-proxy/
  - /docs/v0.30.4/api/browser-window-proxy/
  - /docs/v0.29.2/api/browser-window-proxy/
  - /docs/v0.29.1/api/browser-window-proxy/
  - /docs/v0.28.3/api/browser-window-proxy/
  - /docs/v0.28.2/api/browser-window-proxy/
  - /docs/v0.28.1/api/browser-window-proxy/
  - /docs/v0.28.0/api/browser-window-proxy/
  - /docs/v0.27.3/api/browser-window-proxy/
  - /docs/v0.27.2/api/browser-window-proxy/
  - /docs/v0.27.1/api/browser-window-proxy/
  - /docs/v0.27.0/api/browser-window-proxy/
  - /docs/v0.26.1/api/browser-window-proxy/
  - /docs/v0.26.0/api/browser-window-proxy/
  - /docs/v0.25.3/api/browser-window-proxy/
  - /docs/v0.25.2/api/browser-window-proxy/
  - /docs/v0.25.1/api/browser-window-proxy/
  - /docs/v0.25.0/api/browser-window-proxy/
  - /docs/v0.24.0/api/browser-window-proxy/
  - /docs/v0.23.0/api/browser-window-proxy/
  - /docs/v0.22.3/api/browser-window-proxy/
  - /docs/v0.22.2/api/browser-window-proxy/
  - /docs/v0.22.1/api/browser-window-proxy/
  - /docs/v0.21.3/api/browser-window-proxy/
  - /docs/v0.21.2/api/browser-window-proxy/
  - /docs/v0.21.1/api/browser-window-proxy/
  - /docs/v0.21.0/api/browser-window-proxy/
  - /docs/v0.20.8/api/browser-window-proxy/
  - /docs/v0.20.7/api/browser-window-proxy/
  - /docs/v0.20.6/api/browser-window-proxy/
  - /docs/v0.20.5/api/browser-window-proxy/
  - /docs/v0.20.4/api/browser-window-proxy/
  - /docs/v0.20.3/api/browser-window-proxy/
  - /docs/v0.20.2/api/browser-window-proxy/
  - /docs/v0.20.1/api/browser-window-proxy/
  - /docs/v0.20.0/api/browser-window-proxy/
  - /docs/latest/api/browser-window-proxy/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/api/browser-window-proxy.md
title: BrowserWindowProxy
excerpt: Manipulate the child browser window
sort_title: browser-window-proxy
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

    https://github.com/electron/electron/blob/master/docs/api/browser-window-proxy.md

    Thanks!

-->
## Class: BrowserWindowProxy

> Manipulate the child browser window

Process: [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The `BrowserWindowProxy` object is returned from `window.open` and provides limited functionality with the child window.

### Instance Methods

The `BrowserWindowProxy` object has the following instance methods:

#### `win.blur()`

Removes focus from the child window.

#### `win.close()`

Forcefully closes the child window without calling its unload event.

#### `win.eval(code)`

*   `code` String

Evaluates the code in the child window.

#### `win.focus()`

Focuses the child window (brings the window to front).

#### `win.print()`

Invokes the print dialog on the child window.

#### `win.postMessage(message, targetOrigin)`

*   `message` String
*   `targetOrigin` String

Sends a message to the child window with the specified origin or `*` for no origin preference.

In addition to these methods, the child window implements `window.opener` object with no properties and a single method.

### Instance Properties

The `BrowserWindowProxy` object has the following instance properties:

#### `win.closed`

A `Boolean` that is set to true after the child window gets closed.
