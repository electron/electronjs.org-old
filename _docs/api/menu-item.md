---
version: v1.7.9
permalink: /docs/api/menu-item/
category: API
redirect_from:
  - /docs/v0.37.8/api/menu-item/
  - /docs/v0.37.7/api/menu-item/
  - /docs/v0.37.6/api/menu-item/
  - /docs/v0.37.5/api/menu-item/
  - /docs/v0.37.4/api/menu-item/
  - /docs/v0.37.3/api/menu-item/
  - /docs/v0.37.1/api/menu-item/
  - /docs/v0.37.0/api/menu-item/
  - /docs/v0.36.12/api/menu-item/
  - /docs/v0.36.11/api/menu-item/
  - /docs/v0.36.10/api/menu-item/
  - /docs/v0.36.9/api/menu-item/
  - /docs/v0.36.8/api/menu-item/
  - /docs/v0.36.7/api/menu-item/
  - /docs/v0.36.6/api/menu-item/
  - /docs/v0.36.5/api/menu-item/
  - /docs/v0.36.4/api/menu-item/
  - /docs/v0.36.3/api/menu-item/
  - /docs/v0.36.2/api/menu-item/
  - /docs/v0.36.0/api/menu-item/
  - /docs/v0.35.5/api/menu-item/
  - /docs/v0.35.4/api/menu-item/
  - /docs/v0.35.3/api/menu-item/
  - /docs/v0.35.2/api/menu-item/
  - /docs/v0.35.1/api/menu-item/
  - /docs/v0.34.4/api/menu-item/
  - /docs/v0.34.3/api/menu-item/
  - /docs/v0.34.2/api/menu-item/
  - /docs/v0.34.1/api/menu-item/
  - /docs/v0.34.0/api/menu-item/
  - /docs/v0.33.9/api/menu-item/
  - /docs/v0.33.8/api/menu-item/
  - /docs/v0.33.7/api/menu-item/
  - /docs/v0.33.6/api/menu-item/
  - /docs/v0.33.4/api/menu-item/
  - /docs/v0.33.3/api/menu-item/
  - /docs/v0.33.2/api/menu-item/
  - /docs/v0.33.1/api/menu-item/
  - /docs/v0.33.0/api/menu-item/
  - /docs/v0.32.3/api/menu-item/
  - /docs/v0.32.2/api/menu-item/
  - /docs/v0.31.2/api/menu-item/
  - /docs/v0.31.0/api/menu-item/
  - /docs/v0.30.4/api/menu-item/
  - /docs/v0.29.2/api/menu-item/
  - /docs/v0.29.1/api/menu-item/
  - /docs/v0.28.3/api/menu-item/
  - /docs/v0.28.2/api/menu-item/
  - /docs/v0.28.1/api/menu-item/
  - /docs/v0.28.0/api/menu-item/
  - /docs/v0.27.3/api/menu-item/
  - /docs/v0.27.2/api/menu-item/
  - /docs/v0.27.1/api/menu-item/
  - /docs/v0.27.0/api/menu-item/
  - /docs/v0.26.1/api/menu-item/
  - /docs/v0.26.0/api/menu-item/
  - /docs/v0.25.3/api/menu-item/
  - /docs/v0.25.2/api/menu-item/
  - /docs/v0.25.1/api/menu-item/
  - /docs/v0.25.0/api/menu-item/
  - /docs/v0.24.0/api/menu-item/
  - /docs/v0.23.0/api/menu-item/
  - /docs/v0.22.3/api/menu-item/
  - /docs/v0.22.2/api/menu-item/
  - /docs/v0.22.1/api/menu-item/
  - /docs/v0.21.3/api/menu-item/
  - /docs/v0.21.2/api/menu-item/
  - /docs/v0.21.1/api/menu-item/
  - /docs/v0.21.0/api/menu-item/
  - /docs/v0.20.8/api/menu-item/
  - /docs/v0.20.7/api/menu-item/
  - /docs/v0.20.6/api/menu-item/
  - /docs/v0.20.5/api/menu-item/
  - /docs/v0.20.4/api/menu-item/
  - /docs/v0.20.3/api/menu-item/
  - /docs/v0.20.2/api/menu-item/
  - /docs/v0.20.1/api/menu-item/
  - /docs/v0.20.0/api/menu-item/
  - /docs/latest/api/menu-item/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/menu-item.md'
title: MenuItem
excerpt: Add items to native application menus and context menus.
sort_title: menu-item
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

    https://github.com/electron/electron/blob/master/docs/api/menu-item.md

    Thanks!

-->
## Class: MenuItem

> Add items to native application menus and context menus.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

See [`Menu`]({{site.baseurl}}/docs/api/menu) for examples.

### `new MenuItem(options)`

*   `options` Object
    *   `click` Function (optional) - Will be called with `click(menuItem, browserWindow, event)` when the menu item is clicked.
        *   `menuItem` MenuItem
        *   `browserWindow` BrowserWindow
        *   `event` Event
    *   `role` String (optional) - Define the action of the menu item, when specified the `click` property will be ignored. See [roles](#roles).
    *   `type` String (optional) - Can be `normal`, `separator`, `submenu`, `checkbox` or `radio`.
    *   `label` String - (optional)
    *   `sublabel` String - (optional)
    *   `accelerator` [Accelerator]({{site.baseurl}}/docs/api/accelerator) (optional)
    *   `icon` ([NativeImage]({{site.baseurl}}/docs/api/native-image) &#124; String) (optional)
    *   `enabled` Boolean (optional) - If false, the menu item will be greyed out and unclickable.
    *   `visible` Boolean (optional) - If false, the menu item will be entirely hidden.
    *   `checked` Boolean (optional) - Should only be specified for `checkbox` or `radio` type menu items.
    *   `submenu` (MenuItemConstructorOptions[] &#124; Menu) (optional) - Should be specified for `submenu` type menu items. If `submenu` is specified, the `type: 'submenu'` can be omitted. If the value is not a `Menu` then it will be automatically converted to one using `Menu.buildFromTemplate`.
    *   `id` String (optional) - Unique within a single menu. If defined then it can be used as a reference to this item by the position attribute.
    *   `position` String (optional) - This field allows fine-grained definition of the specific location within a given menu.

### Roles

Roles allow menu items to have predefined behaviors.

It is best to specify `role` for any menu item that matches a standard role, rather than trying to manually implement the behavior in a `click` function. The built-in `role` behavior will give the best native experience.

The `label` and `accelerator` values are optional when using a `role` and will default to appropriate values for each platform.

The `role` property can have following values:

*   `undo`
*   `redo`
*   `cut`
*   `copy`
*   `paste`
*   `pasteandmatchstyle`
*   `selectall`
*   `delete`
*   `minimize` - Minimize current window
*   `close` - Close current window
*   `quit`- Quit the application
*   `reload` - Reload the current window
*   `forcereload` - Reload the current window ignoring the cache.
*   `toggledevtools` - Toggle developer tools in the current window
*   `togglefullscreen`- Toggle full screen mode on the current window
*   `resetzoom` - Reset the focused page's zoom level to the original size
*   `zoomin` - Zoom in the focused page by 10%
*   `zoomout` - Zoom out the focused page by 10%
*   `editMenu` - Whole default "Edit" menu (Undo, Copy, etc.)
*   `windowMenu` - Whole default "Window" menu (Minimize, Close, etc.)

The following additional roles are available on macOS:

*   `about` - Map to the `orderFrontStandardAboutPanel` action
*   `hide` - Map to the `hide` action
*   `hideothers` - Map to the `hideOtherApplications` action
*   `unhide` - Map to the `unhideAllApplications` action
*   `startspeaking` - Map to the `startSpeaking` action
*   `stopspeaking` - Map to the `stopSpeaking` action
*   `front` - Map to the `arrangeInFront` action
*   `zoom` - Map to the `performZoom` action
*   `window` - The submenu is a "Window" menu
*   `help` - The submenu is a "Help" menu
*   `services` - The submenu is a "Services" menu

When specifying a `role` on macOS, `label` and `accelerator` are the only options that will affect the menu item. All other options will be ignored.

### Instance Properties

The following properties are available on instances of `MenuItem`:

#### `menuItem.enabled`

A `Boolean` indicating whether the item is enabled, this property can be dynamically changed.

#### `menuItem.visible`

A `Boolean` indicating whether the item is visible, this property can be dynamically changed.

#### `menuItem.checked`

A `Boolean` indicating whether the item is checked, this property can be dynamically changed.

A `checkbox` menu item will toggle the `checked` property on and off when selected.

A `radio` menu item will turn on its `checked` property when clicked, and will turn off that property for all adjacent items in the same menu.

You can add a `click` function for additional behavior.

#### `menuItem.label`

A `String` representing the menu items visible label

#### `menuItem.click`

A `Function` that is fired when the MenuItem receives a click event
