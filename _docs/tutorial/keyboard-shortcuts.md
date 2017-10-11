---
version: v1.7.9
permalink: /docs/tutorial/keyboard-shortcuts/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/keyboard-shortcuts/
  - /docs/v0.37.7/tutorial/keyboard-shortcuts/
  - /docs/v0.37.6/tutorial/keyboard-shortcuts/
  - /docs/v0.37.5/tutorial/keyboard-shortcuts/
  - /docs/v0.37.4/tutorial/keyboard-shortcuts/
  - /docs/v0.37.3/tutorial/keyboard-shortcuts/
  - /docs/v0.37.1/tutorial/keyboard-shortcuts/
  - /docs/v0.37.0/tutorial/keyboard-shortcuts/
  - /docs/v0.36.12/tutorial/keyboard-shortcuts/
  - /docs/v0.36.11/tutorial/keyboard-shortcuts/
  - /docs/v0.36.10/tutorial/keyboard-shortcuts/
  - /docs/v0.36.9/tutorial/keyboard-shortcuts/
  - /docs/v0.36.8/tutorial/keyboard-shortcuts/
  - /docs/v0.36.7/tutorial/keyboard-shortcuts/
  - /docs/v0.36.6/tutorial/keyboard-shortcuts/
  - /docs/v0.36.5/tutorial/keyboard-shortcuts/
  - /docs/v0.36.4/tutorial/keyboard-shortcuts/
  - /docs/v0.36.3/tutorial/keyboard-shortcuts/
  - /docs/v0.36.2/tutorial/keyboard-shortcuts/
  - /docs/v0.36.0/tutorial/keyboard-shortcuts/
  - /docs/v0.35.5/tutorial/keyboard-shortcuts/
  - /docs/v0.35.4/tutorial/keyboard-shortcuts/
  - /docs/v0.35.3/tutorial/keyboard-shortcuts/
  - /docs/v0.35.2/tutorial/keyboard-shortcuts/
  - /docs/v0.35.1/tutorial/keyboard-shortcuts/
  - /docs/v0.34.4/tutorial/keyboard-shortcuts/
  - /docs/v0.34.3/tutorial/keyboard-shortcuts/
  - /docs/v0.34.2/tutorial/keyboard-shortcuts/
  - /docs/v0.34.1/tutorial/keyboard-shortcuts/
  - /docs/v0.34.0/tutorial/keyboard-shortcuts/
  - /docs/v0.33.9/tutorial/keyboard-shortcuts/
  - /docs/v0.33.8/tutorial/keyboard-shortcuts/
  - /docs/v0.33.7/tutorial/keyboard-shortcuts/
  - /docs/v0.33.6/tutorial/keyboard-shortcuts/
  - /docs/v0.33.4/tutorial/keyboard-shortcuts/
  - /docs/v0.33.3/tutorial/keyboard-shortcuts/
  - /docs/v0.33.2/tutorial/keyboard-shortcuts/
  - /docs/v0.33.1/tutorial/keyboard-shortcuts/
  - /docs/v0.33.0/tutorial/keyboard-shortcuts/
  - /docs/v0.32.3/tutorial/keyboard-shortcuts/
  - /docs/v0.32.2/tutorial/keyboard-shortcuts/
  - /docs/v0.31.2/tutorial/keyboard-shortcuts/
  - /docs/v0.31.0/tutorial/keyboard-shortcuts/
  - /docs/v0.30.4/tutorial/keyboard-shortcuts/
  - /docs/v0.29.2/tutorial/keyboard-shortcuts/
  - /docs/v0.29.1/tutorial/keyboard-shortcuts/
  - /docs/v0.28.3/tutorial/keyboard-shortcuts/
  - /docs/v0.28.2/tutorial/keyboard-shortcuts/
  - /docs/v0.28.1/tutorial/keyboard-shortcuts/
  - /docs/v0.28.0/tutorial/keyboard-shortcuts/
  - /docs/v0.27.3/tutorial/keyboard-shortcuts/
  - /docs/v0.27.2/tutorial/keyboard-shortcuts/
  - /docs/v0.27.1/tutorial/keyboard-shortcuts/
  - /docs/v0.27.0/tutorial/keyboard-shortcuts/
  - /docs/v0.26.1/tutorial/keyboard-shortcuts/
  - /docs/v0.26.0/tutorial/keyboard-shortcuts/
  - /docs/v0.25.3/tutorial/keyboard-shortcuts/
  - /docs/v0.25.2/tutorial/keyboard-shortcuts/
  - /docs/v0.25.1/tutorial/keyboard-shortcuts/
  - /docs/v0.25.0/tutorial/keyboard-shortcuts/
  - /docs/v0.24.0/tutorial/keyboard-shortcuts/
  - /docs/v0.23.0/tutorial/keyboard-shortcuts/
  - /docs/v0.22.3/tutorial/keyboard-shortcuts/
  - /docs/v0.22.2/tutorial/keyboard-shortcuts/
  - /docs/v0.22.1/tutorial/keyboard-shortcuts/
  - /docs/v0.21.3/tutorial/keyboard-shortcuts/
  - /docs/v0.21.2/tutorial/keyboard-shortcuts/
  - /docs/v0.21.1/tutorial/keyboard-shortcuts/
  - /docs/v0.21.0/tutorial/keyboard-shortcuts/
  - /docs/v0.20.8/tutorial/keyboard-shortcuts/
  - /docs/v0.20.7/tutorial/keyboard-shortcuts/
  - /docs/v0.20.6/tutorial/keyboard-shortcuts/
  - /docs/v0.20.5/tutorial/keyboard-shortcuts/
  - /docs/v0.20.4/tutorial/keyboard-shortcuts/
  - /docs/v0.20.3/tutorial/keyboard-shortcuts/
  - /docs/v0.20.2/tutorial/keyboard-shortcuts/
  - /docs/v0.20.1/tutorial/keyboard-shortcuts/
  - /docs/v0.20.0/tutorial/keyboard-shortcuts/
  - /docs/latest/tutorial/keyboard-shortcuts/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/keyboard-shortcuts.md
title: Keyboard Shortcuts
excerpt: Configure local and global keyboard shortcuts
sort_title: keyboard-shortcuts
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

    https://github.com/electron/electron/blob/master/docs/tutorial/keyboard-shortcuts.md

    Thanks!

-->
# Keyboard Shortcuts

> Configure local and global keyboard shortcuts

## Local Shortcuts

You can use the [Menu]({{site.baseurl}}/docs/api/menu) module to configure keyboard shortcuts that will be triggered only when the app is focused. To do so, specify an [`accelerator`]({{site.baseurl}}/docs/api/accelerator) property when creating a [MenuItem]({{site.baseurl}}/docs/api/menu-item).

```js
const {Menu, MenuItem} = require('electron')
const menu = new Menu()

menu.append(new MenuItem({
  label: 'Print',
  accelerator: 'CmdOrCtrl+P',
  click: () => { console.log('time to print stuff') }
}))
```

It's easy to configure different key combinations based on the user's operating system.

```js
{
  accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Ctrl+Shift+I'
}
```

## Global Shortcuts

You can use the [globalShortcut]({{site.baseurl}}/docs/api/global-shortcut) module to detect keyboard events even when the application does not have keyboard focus.

```js
const {app, globalShortcut} = require('electron')

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })
})
```

## Shortcuts within a BrowserWindow

If you want to handle keyboard shortcuts for a [BrowserWindow]({{site.baseurl}}/docs/api/browser-window), you can use the `keyup` and `keydown` event listeners on the window object inside the renderer process.

```js
window.addEventListener('keyup', doSomething, true)
```

Note the third parameter `true` which means the listener will always receive key presses before other listeners so they can't have `stopPropagation()` called on them.

The [`before-input-event`]({{site.baseurl}}/docs/tutorial/web-contents#event-before-input-event) event is emitted before dispatching `keydown` and `keyup` events in the page. It can be used to catch and handle custom shortcuts that are not visible in the menu.

If you don't want to do manual shortcut parsing there are libraries that do advanced key detection such as [mousetrap](https://github.com/ccampbell/mousetrap).

```js
Mousetrap.bind('4', () => { console.log('4') })
Mousetrap.bind('?', () => { console.log('show shortcuts!') })
Mousetrap.bind('esc', () => { console.log('escape') }, 'keyup')

// combinations
Mousetrap.bind('command+shift+k', () => { console.log('command shift k') })

// map multiple combinations to the same callback
Mousetrap.bind(['command+k', 'ctrl+k'], () => {
  console.log('command k or control k')

  // return false to prevent default behavior and stop event from bubbling
  return false
})

// gmail style sequences
Mousetrap.bind('g i', () => { console.log('go to inbox') })
Mousetrap.bind('* a', () => { console.log('select all') })

// konami code!
Mousetrap.bind('up up down down left right left right b a enter', () => {
  console.log('konami code')
})
```
