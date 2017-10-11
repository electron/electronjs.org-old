---
version: v1.7.9
permalink: /docs/api/global-shortcut/
category: API
redirect_from:
  - /docs/v0.37.8/api/global-shortcut/
  - /docs/v0.37.7/api/global-shortcut/
  - /docs/v0.37.6/api/global-shortcut/
  - /docs/v0.37.5/api/global-shortcut/
  - /docs/v0.37.4/api/global-shortcut/
  - /docs/v0.37.3/api/global-shortcut/
  - /docs/v0.37.1/api/global-shortcut/
  - /docs/v0.37.0/api/global-shortcut/
  - /docs/v0.36.12/api/global-shortcut/
  - /docs/v0.36.11/api/global-shortcut/
  - /docs/v0.36.10/api/global-shortcut/
  - /docs/v0.36.9/api/global-shortcut/
  - /docs/v0.36.8/api/global-shortcut/
  - /docs/v0.36.7/api/global-shortcut/
  - /docs/v0.36.6/api/global-shortcut/
  - /docs/v0.36.5/api/global-shortcut/
  - /docs/v0.36.4/api/global-shortcut/
  - /docs/v0.36.3/api/global-shortcut/
  - /docs/v0.36.2/api/global-shortcut/
  - /docs/v0.36.0/api/global-shortcut/
  - /docs/v0.35.5/api/global-shortcut/
  - /docs/v0.35.4/api/global-shortcut/
  - /docs/v0.35.3/api/global-shortcut/
  - /docs/v0.35.2/api/global-shortcut/
  - /docs/v0.35.1/api/global-shortcut/
  - /docs/v0.34.4/api/global-shortcut/
  - /docs/v0.34.3/api/global-shortcut/
  - /docs/v0.34.2/api/global-shortcut/
  - /docs/v0.34.1/api/global-shortcut/
  - /docs/v0.34.0/api/global-shortcut/
  - /docs/v0.33.9/api/global-shortcut/
  - /docs/v0.33.8/api/global-shortcut/
  - /docs/v0.33.7/api/global-shortcut/
  - /docs/v0.33.6/api/global-shortcut/
  - /docs/v0.33.4/api/global-shortcut/
  - /docs/v0.33.3/api/global-shortcut/
  - /docs/v0.33.2/api/global-shortcut/
  - /docs/v0.33.1/api/global-shortcut/
  - /docs/v0.33.0/api/global-shortcut/
  - /docs/v0.32.3/api/global-shortcut/
  - /docs/v0.32.2/api/global-shortcut/
  - /docs/v0.31.2/api/global-shortcut/
  - /docs/v0.31.0/api/global-shortcut/
  - /docs/v0.30.4/api/global-shortcut/
  - /docs/v0.29.2/api/global-shortcut/
  - /docs/v0.29.1/api/global-shortcut/
  - /docs/v0.28.3/api/global-shortcut/
  - /docs/v0.28.2/api/global-shortcut/
  - /docs/v0.28.1/api/global-shortcut/
  - /docs/v0.28.0/api/global-shortcut/
  - /docs/v0.27.3/api/global-shortcut/
  - /docs/v0.27.2/api/global-shortcut/
  - /docs/v0.27.1/api/global-shortcut/
  - /docs/v0.27.0/api/global-shortcut/
  - /docs/v0.26.1/api/global-shortcut/
  - /docs/v0.26.0/api/global-shortcut/
  - /docs/v0.25.3/api/global-shortcut/
  - /docs/v0.25.2/api/global-shortcut/
  - /docs/v0.25.1/api/global-shortcut/
  - /docs/v0.25.0/api/global-shortcut/
  - /docs/v0.24.0/api/global-shortcut/
  - /docs/v0.23.0/api/global-shortcut/
  - /docs/v0.22.3/api/global-shortcut/
  - /docs/v0.22.2/api/global-shortcut/
  - /docs/v0.22.1/api/global-shortcut/
  - /docs/v0.21.3/api/global-shortcut/
  - /docs/v0.21.2/api/global-shortcut/
  - /docs/v0.21.1/api/global-shortcut/
  - /docs/v0.21.0/api/global-shortcut/
  - /docs/v0.20.8/api/global-shortcut/
  - /docs/v0.20.7/api/global-shortcut/
  - /docs/v0.20.6/api/global-shortcut/
  - /docs/v0.20.5/api/global-shortcut/
  - /docs/v0.20.4/api/global-shortcut/
  - /docs/v0.20.3/api/global-shortcut/
  - /docs/v0.20.2/api/global-shortcut/
  - /docs/v0.20.1/api/global-shortcut/
  - /docs/v0.20.0/api/global-shortcut/
  - /docs/latest/api/global-shortcut/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/global-shortcut.md'
title: globalShortcut
excerpt: Detect keyboard events when the application does not have keyboard focus.
sort_title: global-shortcut
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

    https://github.com/electron/electron/blob/master/docs/api/global-shortcut.md

    Thanks!

-->
# globalShortcut

> Detect keyboard events when the application does not have keyboard focus.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

The `globalShortcut` module can register/unregister a global keyboard shortcut with the operating system so that you can customize the operations for various shortcuts.

**Note:** The shortcut is global; it will work even if the app does not have the keyboard focus. You should not use this module until the `ready` event of the app module is emitted.

```javascript
const {app, globalShortcut} = require('electron')

app.on('ready', () => {
  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+X')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
```

## Methods

The `globalShortcut` module has the following methods:

### `globalShortcut.register(accelerator, callback)`

*   `accelerator` [Accelerator]({{site.baseurl}}/docs/api/accelerator)
*   `callback` Function

Registers a global shortcut of `accelerator`. The `callback` is called when the registered shortcut is pressed by the user.

When the accelerator is already taken by other applications, this call will silently fail. This behavior is intended by operating systems, since they don't want applications to fight for global shortcuts.

### `globalShortcut.isRegistered(accelerator)`

*   `accelerator` [Accelerator]({{site.baseurl}}/docs/api/accelerator)

Returns `Boolean` - Whether this application has registered `accelerator`.

When the accelerator is already taken by other applications, this call will still return `false`. This behavior is intended by operating systems, since they don't want applications to fight for global shortcuts.

### `globalShortcut.unregister(accelerator)`

*   `accelerator` [Accelerator]({{site.baseurl}}/docs/api/accelerator)

Unregisters the global shortcut of `accelerator`.

### `globalShortcut.unregisterAll()`

Unregisters all of the global shortcuts.
