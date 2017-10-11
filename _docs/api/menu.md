---
version: v1.7.9
permalink: /docs/api/menu/
category: API
redirect_from:
  - /docs/v0.37.8/api/menu/
  - /docs/v0.37.7/api/menu/
  - /docs/v0.37.6/api/menu/
  - /docs/v0.37.5/api/menu/
  - /docs/v0.37.4/api/menu/
  - /docs/v0.37.3/api/menu/
  - /docs/v0.37.1/api/menu/
  - /docs/v0.37.0/api/menu/
  - /docs/v0.36.12/api/menu/
  - /docs/v0.36.11/api/menu/
  - /docs/v0.36.10/api/menu/
  - /docs/v0.36.9/api/menu/
  - /docs/v0.36.8/api/menu/
  - /docs/v0.36.7/api/menu/
  - /docs/v0.36.6/api/menu/
  - /docs/v0.36.5/api/menu/
  - /docs/v0.36.4/api/menu/
  - /docs/v0.36.3/api/menu/
  - /docs/v0.36.2/api/menu/
  - /docs/v0.36.0/api/menu/
  - /docs/v0.35.5/api/menu/
  - /docs/v0.35.4/api/menu/
  - /docs/v0.35.3/api/menu/
  - /docs/v0.35.2/api/menu/
  - /docs/v0.35.1/api/menu/
  - /docs/v0.34.4/api/menu/
  - /docs/v0.34.3/api/menu/
  - /docs/v0.34.2/api/menu/
  - /docs/v0.34.1/api/menu/
  - /docs/v0.34.0/api/menu/
  - /docs/v0.33.9/api/menu/
  - /docs/v0.33.8/api/menu/
  - /docs/v0.33.7/api/menu/
  - /docs/v0.33.6/api/menu/
  - /docs/v0.33.4/api/menu/
  - /docs/v0.33.3/api/menu/
  - /docs/v0.33.2/api/menu/
  - /docs/v0.33.1/api/menu/
  - /docs/v0.33.0/api/menu/
  - /docs/v0.32.3/api/menu/
  - /docs/v0.32.2/api/menu/
  - /docs/v0.31.2/api/menu/
  - /docs/v0.31.0/api/menu/
  - /docs/v0.30.4/api/menu/
  - /docs/v0.29.2/api/menu/
  - /docs/v0.29.1/api/menu/
  - /docs/v0.28.3/api/menu/
  - /docs/v0.28.2/api/menu/
  - /docs/v0.28.1/api/menu/
  - /docs/v0.28.0/api/menu/
  - /docs/v0.27.3/api/menu/
  - /docs/v0.27.2/api/menu/
  - /docs/v0.27.1/api/menu/
  - /docs/v0.27.0/api/menu/
  - /docs/v0.26.1/api/menu/
  - /docs/v0.26.0/api/menu/
  - /docs/v0.25.3/api/menu/
  - /docs/v0.25.2/api/menu/
  - /docs/v0.25.1/api/menu/
  - /docs/v0.25.0/api/menu/
  - /docs/v0.24.0/api/menu/
  - /docs/v0.23.0/api/menu/
  - /docs/v0.22.3/api/menu/
  - /docs/v0.22.2/api/menu/
  - /docs/v0.22.1/api/menu/
  - /docs/v0.21.3/api/menu/
  - /docs/v0.21.2/api/menu/
  - /docs/v0.21.1/api/menu/
  - /docs/v0.21.0/api/menu/
  - /docs/v0.20.8/api/menu/
  - /docs/v0.20.7/api/menu/
  - /docs/v0.20.6/api/menu/
  - /docs/v0.20.5/api/menu/
  - /docs/v0.20.4/api/menu/
  - /docs/v0.20.3/api/menu/
  - /docs/v0.20.2/api/menu/
  - /docs/v0.20.1/api/menu/
  - /docs/v0.20.0/api/menu/
  - /docs/latest/api/menu/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/menu.md'
title: Menu
excerpt: Create native application menus and context menus.
sort_title: menu
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

    https://github.com/electron/electron/blob/master/docs/api/menu.md

    Thanks!

-->
## Class: Menu

> Create native application menus and context menus.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

### `new Menu()`

Creates a new menu.

### Static Methods

The `menu` class has the following static methods:

#### `Menu.setApplicationMenu(menu)`

*   `menu` Menu

Sets `menu` as the application menu on macOS. On Windows and Linux, the `menu` will be set as each window's top menu.

Passing `null` will remove the menu bar on Windows and Linux but has no effect on macOS.

**Note:** This API has to be called after the `ready` event of `app` module.

#### `Menu.getApplicationMenu()`

Returns `Menu` - The application menu, if set, or `null`, if not set.

**Note:** The returned `Menu` instance doesn't support dynamic addition or removal of menu items. [Instance properties](#instance-properties) can still be dynamically modified.

#### `Menu.sendActionToFirstResponder(action)` _macOS_

*   `action` String

Sends the `action` to the first responder of application. This is used for emulating default macOS menu behaviors. Usually you would just use the [`role`]({{site.baseurl}}/docs/api/menu-item#roles) property of a [`MenuItem`]({{site.baseurl}}/docs/api/menu-item).

See the [macOS Cocoa Event Handling Guide](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/EventOverview/EventArchitecture/EventArchitecture.html#//apple_ref/doc/uid/10000060i-CH3-SW7) for more information on macOS' native actions.

#### `Menu.buildFromTemplate(template)`

*   `template` MenuItemConstructorOptions[]

Returns `Menu`

Generally, the `template` is just an array of `options` for constructing a [MenuItem]({{site.baseurl}}/docs/api/menu-item). The usage can be referenced above.

You can also attach other fields to the element of the `template` and they will become properties of the constructed menu items.

### Instance Methods

The `menu` object has the following instance methods:

#### `menu.popup([browserWindow, options])`

*   `browserWindow` BrowserWindow (optional) - Default is the focused window.
*   `options` Object (optional)
    *   `x` Number (optional) - Default is the current mouse cursor position. Must be declared if `y` is declared.
    *   `y` Number (optional) - Default is the current mouse cursor position. Must be declared if `x` is declared.
    *   `async` Boolean (optional) - Set to `true` to have this method return immediately called, `false` to return after the menu has been selected or closed. Defaults to `false`.
    *   `positioningItem` Number (optional) _macOS_ - The index of the menu item to be positioned under the mouse cursor at the specified coordinates. Default is -1.

Pops up this menu as a context menu in the `browserWindow`.

#### `menu.closePopup([browserWindow])`

*   `browserWindow` BrowserWindow (optional) - Default is the focused window.

Closes the context menu in the `browserWindow`.

#### `menu.append(menuItem)`

*   `menuItem` MenuItem

Appends the `menuItem` to the menu.

#### `menu.insert(pos, menuItem)`

*   `pos` Integer
*   `menuItem` MenuItem

Inserts the `menuItem` to the `pos` position of the menu.

### Instance Properties

`menu` objects also have the following properties:

#### `menu.items`

A `MenuItem[]` array containing the menu's items.

Each `Menu` consists of multiple [`MenuItem`]({{site.baseurl}}/docs/api/menu-item)s and each `MenuItem` can have a submenu.

## Examples

The `Menu` class is only available in the main process, but you can also use it in the render process via the [`remote`]({{site.baseurl}}/docs/api/remote) module.

### Main process

An example of creating the application menu in the main process with the simple template API:

```javascript
const {app, Menu} = require('electron')

const template = [
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
```

### Render process

Below is an example of creating a menu dynamically in a web page (render process) by using the [`remote`]({{site.baseurl}}/docs/api/remote) module, and showing it when the user right clicks the page:

```html
<!-- index.html -->
<script>
const {remote} = require('electron')
const {Menu, MenuItem} = remote

const menu = new Menu()
menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked') }}))
menu.append(new MenuItem({type: 'separator'}))
menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}))

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup(remote.getCurrentWindow())
}, false)
</script>
```

## Notes on macOS Application Menu

macOS has a completely different style of application menu from Windows and Linux. Here are some notes on making your app's menu more native-like.

### Standard Menus

On macOS there are many system-defined standard menus, like the `Services` and `Windows` menus. To make your menu a standard menu, you should set your menu's `role` to one of the following and Electron will recognize them and make them become standard menus:

*   `window`
*   `help`
*   `services`

### Standard Menu Item Actions

macOS has provided standard actions for some menu items, like `About xxx`, `Hide xxx`, and `Hide Others`. To set the action of a menu item to a standard action, you should set the `role` attribute of the menu item.

### Main Menu's Name

On macOS the label of the application menu's first item is always your app's name, no matter what label you set. To change it, modify your app bundle's `Info.plist` file. See [About Information Property List Files](https://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html) for more information.

## Setting Menu for Specific Browser Window (_Linux_ _Windows_)

The [`setMenu` method](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetmenumenu-linux-windows) of browser windows can set the menu of certain browser windows.

## Menu Item Position

You can make use of `position` and `id` to control how the item will be placed when building a menu with `Menu.buildFromTemplate`.

The `position` attribute of `MenuItem` has the form `[placement]=[id]`, where `placement` is one of `before`, `after`, or `endof` and `id` is the unique ID of an existing item in the menu:

*   `before` - Inserts this item before the id referenced item. If the referenced item doesn't exist the item will be inserted at the end of the menu.
*   `after` - Inserts this item after id referenced item. If the referenced item doesn't exist the item will be inserted at the end of the menu.
*   `endof` - Inserts this item at the end of the logical group containing the id referenced item (groups are created by separator items). If the referenced item doesn't exist, a new separator group is created with the given id and this item is inserted after that separator.

When an item is positioned, all un-positioned items are inserted after it until a new item is positioned. So if you want to position a group of menu items in the same location you only need to specify a position for the first item.

### Examples

Template:

```javascript
[
  {label: '4', id: '4'},
  {label: '5', id: '5'},
  {label: '1', id: '1', position: 'before=4'},
  {label: '2', id: '2'},
  {label: '3', id: '3'}
]
```

Menu:

```
- 1
- 2
- 3
- 4
- 5

```

Template:

```javascript
[
  {label: 'a', position: 'endof=letters'},
  {label: '1', position: 'endof=numbers'},
  {label: 'b', position: 'endof=letters'},
  {label: '2', position: 'endof=numbers'},
  {label: 'c', position: 'endof=letters'},
  {label: '3', position: 'endof=numbers'}
]
```

Menu:

```
- ---
- a
- b
- c
- ---
- 1
- 2
- 3

```
