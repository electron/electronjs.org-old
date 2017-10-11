---
version: v1.7.9
permalink: /docs/api/screen/
category: API
redirect_from:
  - /docs/v0.37.8/api/screen/
  - /docs/v0.37.7/api/screen/
  - /docs/v0.37.6/api/screen/
  - /docs/v0.37.5/api/screen/
  - /docs/v0.37.4/api/screen/
  - /docs/v0.37.3/api/screen/
  - /docs/v0.37.1/api/screen/
  - /docs/v0.37.0/api/screen/
  - /docs/v0.36.12/api/screen/
  - /docs/v0.36.11/api/screen/
  - /docs/v0.36.10/api/screen/
  - /docs/v0.36.9/api/screen/
  - /docs/v0.36.8/api/screen/
  - /docs/v0.36.7/api/screen/
  - /docs/v0.36.6/api/screen/
  - /docs/v0.36.5/api/screen/
  - /docs/v0.36.4/api/screen/
  - /docs/v0.36.3/api/screen/
  - /docs/v0.36.2/api/screen/
  - /docs/v0.36.0/api/screen/
  - /docs/v0.35.5/api/screen/
  - /docs/v0.35.4/api/screen/
  - /docs/v0.35.3/api/screen/
  - /docs/v0.35.2/api/screen/
  - /docs/v0.35.1/api/screen/
  - /docs/v0.34.4/api/screen/
  - /docs/v0.34.3/api/screen/
  - /docs/v0.34.2/api/screen/
  - /docs/v0.34.1/api/screen/
  - /docs/v0.34.0/api/screen/
  - /docs/v0.33.9/api/screen/
  - /docs/v0.33.8/api/screen/
  - /docs/v0.33.7/api/screen/
  - /docs/v0.33.6/api/screen/
  - /docs/v0.33.4/api/screen/
  - /docs/v0.33.3/api/screen/
  - /docs/v0.33.2/api/screen/
  - /docs/v0.33.1/api/screen/
  - /docs/v0.33.0/api/screen/
  - /docs/v0.32.3/api/screen/
  - /docs/v0.32.2/api/screen/
  - /docs/v0.31.2/api/screen/
  - /docs/v0.31.0/api/screen/
  - /docs/v0.30.4/api/screen/
  - /docs/v0.29.2/api/screen/
  - /docs/v0.29.1/api/screen/
  - /docs/v0.28.3/api/screen/
  - /docs/v0.28.2/api/screen/
  - /docs/v0.28.1/api/screen/
  - /docs/v0.28.0/api/screen/
  - /docs/v0.27.3/api/screen/
  - /docs/v0.27.2/api/screen/
  - /docs/v0.27.1/api/screen/
  - /docs/v0.27.0/api/screen/
  - /docs/v0.26.1/api/screen/
  - /docs/v0.26.0/api/screen/
  - /docs/v0.25.3/api/screen/
  - /docs/v0.25.2/api/screen/
  - /docs/v0.25.1/api/screen/
  - /docs/v0.25.0/api/screen/
  - /docs/v0.24.0/api/screen/
  - /docs/v0.23.0/api/screen/
  - /docs/v0.22.3/api/screen/
  - /docs/v0.22.2/api/screen/
  - /docs/v0.22.1/api/screen/
  - /docs/v0.21.3/api/screen/
  - /docs/v0.21.2/api/screen/
  - /docs/v0.21.1/api/screen/
  - /docs/v0.21.0/api/screen/
  - /docs/v0.20.8/api/screen/
  - /docs/v0.20.7/api/screen/
  - /docs/v0.20.6/api/screen/
  - /docs/v0.20.5/api/screen/
  - /docs/v0.20.4/api/screen/
  - /docs/v0.20.3/api/screen/
  - /docs/v0.20.2/api/screen/
  - /docs/v0.20.1/api/screen/
  - /docs/v0.20.0/api/screen/
  - /docs/latest/api/screen/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/screen.md'
title: screen
excerpt: 'Retrieve information about screen size, displays, cursor position, etc.'
sort_title: screen
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

    https://github.com/electron/electron/blob/master/docs/api/screen.md

    Thanks!

-->
# screen

> Retrieve information about screen size, displays, cursor position, etc.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process), [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

You cannot require or use this module until the `ready` event of the `app` module is emitted.

`screen` is an [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter).

**Note:** In the renderer / DevTools, `window.screen` is a reserved DOM property, so writing `let {screen} = require('electron')` will not work.

An example of creating a window that fills the whole screen:

```javascript
const electron = require('electron')
const {app, BrowserWindow} = electron

let win

app.on('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({width, height})
  win.loadURL('https://github.com')
})
```

Another example of creating a window in the external display:

```javascript
const electron = require('electron')
const {app, BrowserWindow} = require('electron')

let win

app.on('ready', () => {
  let displays = electron.screen.getAllDisplays()
  let externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })

  if (externalDisplay) {
    win = new BrowserWindow({
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50
    })
    win.loadURL('https://github.com')
  }
})
```

## Events

The `screen` module emits the following events:

### Event: 'display-added'

Returns:

*   `event` Event
*   `newDisplay` [Display]({{site.baseurl}}/docs/api/structures/display)

Emitted when `newDisplay` has been added.

### Event: 'display-removed'

Returns:

*   `event` Event
*   `oldDisplay` [Display]({{site.baseurl}}/docs/api/structures/display)

Emitted when `oldDisplay` has been removed.

### Event: 'display-metrics-changed'

Returns:

*   `event` Event
*   `display` [Display]({{site.baseurl}}/docs/api/structures/display)
*   `changedMetrics` String[]

Emitted when one or more metrics change in a `display`. The `changedMetrics` is an array of strings that describe the changes. Possible changes are `bounds`, `workArea`, `scaleFactor` and `rotation`.

## Methods

The `screen` module has the following methods:

### `screen.getCursorScreenPoint()`

Returns [`Point`]({{site.baseurl}}/docs/api/structures/point)

The current absolute position of the mouse pointer.

### `screen.getMenuBarHeight()` _macOS_

Returns `Integer` - The height of the menu bar in pixels.

### `screen.getPrimaryDisplay()`

Returns [`Display`]({{site.baseurl}}/docs/api/structures/display) - The primary display.

### `screen.getAllDisplays()`

Returns [`Display[]`]({{site.baseurl}}/docs/api/structures/display) - An array of displays that are currently available.

### `screen.getDisplayNearestPoint(point)`

*   `point` [Point]({{site.baseurl}}/docs/api/structures/point)

Returns [`Display`]({{site.baseurl}}/docs/api/structures/display) - The display nearest the specified point.

### `screen.getDisplayMatching(rect)`

*   `rect` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle)

Returns [`Display`]({{site.baseurl}}/docs/api/structures/display) - The display that most closely intersects the provided bounds.
