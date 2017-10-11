---
version: v1.7.9
permalink: /docs/api/tray/
category: API
redirect_from:
  - /docs/v0.37.8/api/tray/
  - /docs/v0.37.7/api/tray/
  - /docs/v0.37.6/api/tray/
  - /docs/v0.37.5/api/tray/
  - /docs/v0.37.4/api/tray/
  - /docs/v0.37.3/api/tray/
  - /docs/v0.37.1/api/tray/
  - /docs/v0.37.0/api/tray/
  - /docs/v0.36.12/api/tray/
  - /docs/v0.36.11/api/tray/
  - /docs/v0.36.10/api/tray/
  - /docs/v0.36.9/api/tray/
  - /docs/v0.36.8/api/tray/
  - /docs/v0.36.7/api/tray/
  - /docs/v0.36.6/api/tray/
  - /docs/v0.36.5/api/tray/
  - /docs/v0.36.4/api/tray/
  - /docs/v0.36.3/api/tray/
  - /docs/v0.36.2/api/tray/
  - /docs/v0.36.0/api/tray/
  - /docs/v0.35.5/api/tray/
  - /docs/v0.35.4/api/tray/
  - /docs/v0.35.3/api/tray/
  - /docs/v0.35.2/api/tray/
  - /docs/v0.35.1/api/tray/
  - /docs/v0.34.4/api/tray/
  - /docs/v0.34.3/api/tray/
  - /docs/v0.34.2/api/tray/
  - /docs/v0.34.1/api/tray/
  - /docs/v0.34.0/api/tray/
  - /docs/v0.33.9/api/tray/
  - /docs/v0.33.8/api/tray/
  - /docs/v0.33.7/api/tray/
  - /docs/v0.33.6/api/tray/
  - /docs/v0.33.4/api/tray/
  - /docs/v0.33.3/api/tray/
  - /docs/v0.33.2/api/tray/
  - /docs/v0.33.1/api/tray/
  - /docs/v0.33.0/api/tray/
  - /docs/v0.32.3/api/tray/
  - /docs/v0.32.2/api/tray/
  - /docs/v0.31.2/api/tray/
  - /docs/v0.31.0/api/tray/
  - /docs/v0.30.4/api/tray/
  - /docs/v0.29.2/api/tray/
  - /docs/v0.29.1/api/tray/
  - /docs/v0.28.3/api/tray/
  - /docs/v0.28.2/api/tray/
  - /docs/v0.28.1/api/tray/
  - /docs/v0.28.0/api/tray/
  - /docs/v0.27.3/api/tray/
  - /docs/v0.27.2/api/tray/
  - /docs/v0.27.1/api/tray/
  - /docs/v0.27.0/api/tray/
  - /docs/v0.26.1/api/tray/
  - /docs/v0.26.0/api/tray/
  - /docs/v0.25.3/api/tray/
  - /docs/v0.25.2/api/tray/
  - /docs/v0.25.1/api/tray/
  - /docs/v0.25.0/api/tray/
  - /docs/v0.24.0/api/tray/
  - /docs/v0.23.0/api/tray/
  - /docs/v0.22.3/api/tray/
  - /docs/v0.22.2/api/tray/
  - /docs/v0.22.1/api/tray/
  - /docs/v0.21.3/api/tray/
  - /docs/v0.21.2/api/tray/
  - /docs/v0.21.1/api/tray/
  - /docs/v0.21.0/api/tray/
  - /docs/v0.20.8/api/tray/
  - /docs/v0.20.7/api/tray/
  - /docs/v0.20.6/api/tray/
  - /docs/v0.20.5/api/tray/
  - /docs/v0.20.4/api/tray/
  - /docs/v0.20.3/api/tray/
  - /docs/v0.20.2/api/tray/
  - /docs/v0.20.1/api/tray/
  - /docs/v0.20.0/api/tray/
  - /docs/latest/api/tray/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/tray.md'
title: Tray
excerpt: Add icons and context menus to the system&apos;s notification area.
sort_title: tray
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

    https://github.com/electron/electron/blob/master/docs/api/tray.md

    Thanks!

-->
## Class: Tray

> Add icons and context menus to the system's notification area.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

`Tray` is an [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter).

```javascript
const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('/path/to/my/icon')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
```

**Platform limitations:**

*   On Linux the app indicator will be used if it is supported, otherwise `GtkStatusIcon` will be used instead.
*   On Linux distributions that only have app indicator support, you have to install `libappindicator1` to make the tray icon work.
*   App indicator will only be shown when it has a context menu.
*   When app indicator is used on Linux, the `click` event is ignored.
*   On Linux in order for changes made to individual `MenuItem`s to take effect, you have to call `setContextMenu` again. For example:

```javascript
const {app, Menu, Tray} = require('electron')

let appIcon = null
app.on('ready', () => {
  appIcon = new Tray('/path/to/my/icon')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'}
  ])

  // Make a change to the context menu
  contextMenu.items[1].checked = false

  // Call this again for Linux because we modified the context menu
  appIcon.setContextMenu(contextMenu)
})
```

*   On Windows it is recommended to use `ICO` icons to get best visual effects.

If you want to keep exact same behaviors on all platforms, you should not rely on the `click` event and always attach a context menu to the tray icon.

### `new Tray(image)`

*   `image` ([NativeImage]({{site.baseurl}}/docs/api/native-image) &#124; String)

Creates a new tray icon associated with the `image`.

### Instance Events

The `Tray` module emits the following events:

#### Event: 'click'

*   `event` Event
    *   `altKey` Boolean
    *   `shiftKey` Boolean
    *   `ctrlKey` Boolean
    *   `metaKey` Boolean
*   `bounds` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle) - The bounds of tray icon

Emitted when the tray icon is clicked.

#### Event: 'right-click' _macOS_ _Windows_

*   `event` Event
    *   `altKey` Boolean
    *   `shiftKey` Boolean
    *   `ctrlKey` Boolean
    *   `metaKey` Boolean
*   `bounds` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle) - The bounds of tray icon

Emitted when the tray icon is right clicked.

#### Event: 'double-click' _macOS_ _Windows_

*   `event` Event
    *   `altKey` Boolean
    *   `shiftKey` Boolean
    *   `ctrlKey` Boolean
    *   `metaKey` Boolean
*   `bounds` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle) - The bounds of tray icon

Emitted when the tray icon is double clicked.

#### Event: 'balloon-show' _Windows_

Emitted when the tray balloon shows.

#### Event: 'balloon-click' _Windows_

Emitted when the tray balloon is clicked.

#### Event: 'balloon-closed' _Windows_

Emitted when the tray balloon is closed because of timeout or user manually closes it.

#### Event: 'drop' _macOS_

Emitted when any dragged items are dropped on the tray icon.

#### Event: 'drop-files' _macOS_

*   `event` Event
*   `files` String[] - The paths of the dropped files.

Emitted when dragged files are dropped in the tray icon.

#### Event: 'drop-text' _macOS_

*   `event` Event
*   `text` String - the dropped text string

Emitted when dragged text is dropped in the tray icon.

#### Event: 'drag-enter' _macOS_

Emitted when a drag operation enters the tray icon.

#### Event: 'drag-leave' _macOS_

Emitted when a drag operation exits the tray icon.

#### Event: 'drag-end' _macOS_

Emitted when a drag operation ends on the tray or ends at another location.

#### Event: 'mouse-enter' _macOS_

*   `event` Event
    *   `altKey` Boolean
    *   `shiftKey` Boolean
    *   `ctrlKey` Boolean
    *   `metaKey` Boolean
*   `position` [Point]({{site.baseurl}}/docs/api/structures/point) - The position of the event

Emitted when the mouse enters the tray icon.

#### Event: 'mouse-leave' _macOS_

*   `event` Event
    *   `altKey` Boolean
    *   `shiftKey` Boolean
    *   `ctrlKey` Boolean
    *   `metaKey` Boolean
*   `position` [Point]({{site.baseurl}}/docs/api/structures/point) - The position of the event

Emitted when the mouse exits the tray icon.

### Instance Methods

The `Tray` class has the following methods:

#### `tray.destroy()`

Destroys the tray icon immediately.

#### `tray.setImage(image)`

*   `image` ([NativeImage]({{site.baseurl}}/docs/api/native-image) &#124; String)

Sets the `image` associated with this tray icon.

#### `tray.setPressedImage(image)` _macOS_

*   `image` [NativeImage]({{site.baseurl}}/docs/api/native-image)

Sets the `image` associated with this tray icon when pressed on macOS.

#### `tray.setToolTip(toolTip)`

*   `toolTip` String

Sets the hover text for this tray icon.

#### `tray.setTitle(title)` _macOS_

*   `title` String

Sets the title displayed aside of the tray icon in the status bar.

#### `tray.setHighlightMode(mode)` _macOS_

*   `mode` String - Highlight mode with one of the following values:
    *   `selection` - Highlight the tray icon when it is clicked and also when its context menu is open. This is the default.
    *   `always` - Always highlight the tray icon.
    *   `never` - Never highlight the tray icon.

Sets when the tray's icon background becomes highlighted (in blue).

**Note:** You can use `highlightMode` with a [`BrowserWindow`]({{site.baseurl}}/docs/api/browser-window) by toggling between `'never'` and `'always'` modes when the window visibility changes.

```javascript
const {BrowserWindow, Tray} = require('electron')

const win = new BrowserWindow({width: 800, height: 600})
const tray = new Tray('/path/to/my/icon')

tray.on('click', () => {
  win.isVisible() ? win.hide() : win.show()
})
win.on('show', () => {
  tray.setHighlightMode('always')
})
win.on('hide', () => {
  tray.setHighlightMode('never')
})
```

#### `tray.displayBalloon(options)` _Windows_

*   `options` Object
    *   `icon` ([NativeImage]({{site.baseurl}}/docs/api/native-image) &#124; String) - (optional)
    *   `title` String - (optional)
    *   `content` String - (optional)

Displays a tray balloon.

#### `tray.popUpContextMenu([menu, position])` _macOS_ _Windows_

*   `menu` Menu (optional)
*   `position` [Point]({{site.baseurl}}/docs/api/structures/point) (optional) - The pop up position.

Pops up the context menu of the tray icon. When `menu` is passed, the `menu` will be shown instead of the tray icon's context menu.

The `position` is only available on Windows, and it is (0, 0) by default.

#### `tray.setContextMenu(menu)`

*   `menu` Menu

Sets the context menu for this icon.

#### `tray.getBounds()` _macOS_ _Windows_

Returns [`Rectangle`]({{site.baseurl}}/docs/api/structures/rectangle)

The `bounds` of this tray icon as `Object`.

#### `tray.isDestroyed()`

Returns `Boolean` - Whether the tray icon is destroyed.
