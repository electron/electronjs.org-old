---
version: v1.7.9
permalink: /docs/api/accelerator/
category: API
redirect_from:
  - /docs/v0.37.8/api/accelerator/
  - /docs/v0.37.7/api/accelerator/
  - /docs/v0.37.6/api/accelerator/
  - /docs/v0.37.5/api/accelerator/
  - /docs/v0.37.4/api/accelerator/
  - /docs/v0.37.3/api/accelerator/
  - /docs/v0.37.1/api/accelerator/
  - /docs/v0.37.0/api/accelerator/
  - /docs/v0.36.12/api/accelerator/
  - /docs/v0.36.11/api/accelerator/
  - /docs/v0.36.10/api/accelerator/
  - /docs/v0.36.9/api/accelerator/
  - /docs/v0.36.8/api/accelerator/
  - /docs/v0.36.7/api/accelerator/
  - /docs/v0.36.6/api/accelerator/
  - /docs/v0.36.5/api/accelerator/
  - /docs/v0.36.4/api/accelerator/
  - /docs/v0.36.3/api/accelerator/
  - /docs/v0.36.2/api/accelerator/
  - /docs/v0.36.0/api/accelerator/
  - /docs/v0.35.5/api/accelerator/
  - /docs/v0.35.4/api/accelerator/
  - /docs/v0.35.3/api/accelerator/
  - /docs/v0.35.2/api/accelerator/
  - /docs/v0.35.1/api/accelerator/
  - /docs/v0.34.4/api/accelerator/
  - /docs/v0.34.3/api/accelerator/
  - /docs/v0.34.2/api/accelerator/
  - /docs/v0.34.1/api/accelerator/
  - /docs/v0.34.0/api/accelerator/
  - /docs/v0.33.9/api/accelerator/
  - /docs/v0.33.8/api/accelerator/
  - /docs/v0.33.7/api/accelerator/
  - /docs/v0.33.6/api/accelerator/
  - /docs/v0.33.4/api/accelerator/
  - /docs/v0.33.3/api/accelerator/
  - /docs/v0.33.2/api/accelerator/
  - /docs/v0.33.1/api/accelerator/
  - /docs/v0.33.0/api/accelerator/
  - /docs/v0.32.3/api/accelerator/
  - /docs/v0.32.2/api/accelerator/
  - /docs/v0.31.2/api/accelerator/
  - /docs/v0.31.0/api/accelerator/
  - /docs/v0.30.4/api/accelerator/
  - /docs/v0.29.2/api/accelerator/
  - /docs/v0.29.1/api/accelerator/
  - /docs/v0.28.3/api/accelerator/
  - /docs/v0.28.2/api/accelerator/
  - /docs/v0.28.1/api/accelerator/
  - /docs/v0.28.0/api/accelerator/
  - /docs/v0.27.3/api/accelerator/
  - /docs/v0.27.2/api/accelerator/
  - /docs/v0.27.1/api/accelerator/
  - /docs/v0.27.0/api/accelerator/
  - /docs/v0.26.1/api/accelerator/
  - /docs/v0.26.0/api/accelerator/
  - /docs/v0.25.3/api/accelerator/
  - /docs/v0.25.2/api/accelerator/
  - /docs/v0.25.1/api/accelerator/
  - /docs/v0.25.0/api/accelerator/
  - /docs/v0.24.0/api/accelerator/
  - /docs/v0.23.0/api/accelerator/
  - /docs/v0.22.3/api/accelerator/
  - /docs/v0.22.2/api/accelerator/
  - /docs/v0.22.1/api/accelerator/
  - /docs/v0.21.3/api/accelerator/
  - /docs/v0.21.2/api/accelerator/
  - /docs/v0.21.1/api/accelerator/
  - /docs/v0.21.0/api/accelerator/
  - /docs/v0.20.8/api/accelerator/
  - /docs/v0.20.7/api/accelerator/
  - /docs/v0.20.6/api/accelerator/
  - /docs/v0.20.5/api/accelerator/
  - /docs/v0.20.4/api/accelerator/
  - /docs/v0.20.3/api/accelerator/
  - /docs/v0.20.2/api/accelerator/
  - /docs/v0.20.1/api/accelerator/
  - /docs/v0.20.0/api/accelerator/
  - /docs/latest/api/accelerator/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/accelerator.md'
title: Accelerator
excerpt: Define keyboard shortcuts.
sort_title: accelerator
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

    https://github.com/electron/electron/blob/master/docs/api/accelerator.md

    Thanks!

-->
# Accelerator

> Define keyboard shortcuts.

Accelerators are Strings that can contain multiple modifiers and key codes, combined by the `+` character, and are used to define keyboard shortcuts throughout your application.

Examples:

*   `CommandOrControl+A`
*   `CommandOrControl+Shift+Z`

Shortcuts are registered with the [`globalShortcut`]({{site.baseurl}}/docs/api/global-shortcut) module using the [`register`]({{site.baseurl}}/docs/api/global-shortcut#globalshortcutregisteraccelerator-callback) method, i.e.

```javascript
const {app, globalShortcut} = require('electron')

app.on('ready', () => {
  // Register a 'CommandOrControl+Y' shortcut listener.
  globalShortcut.register('CommandOrControl+Y', () => {
    // Do stuff when Y and either Command/Control is pressed.
  })
})
```

## Platform notice

On Linux and Windows, the `Command` key does not have any effect so use `CommandOrControl` which represents `Command` on macOS and `Control` on Linux and Windows to define some accelerators.

Use `Alt` instead of `Option`. The `Option` key only exists on macOS, whereas the `Alt` key is available on all platforms.

The `Super` key is mapped to the `Windows` key on Windows and Linux and `Cmd` on macOS.

## Available modifiers

*   `Command` (or `Cmd` for short)
*   `Control` (or `Ctrl` for short)
*   `CommandOrControl` (or `CmdOrCtrl` for short)
*   `Alt`
*   `Option`
*   `AltGr`
*   `Shift`
*   `Super`

## Available key codes

*   `0` to `9`
*   `A` to `Z`
*   `F1` to `F24`
*   Punctuations like `~`, `!`, `@`, `#`, `$`, etc.
*   `Plus`
*   `Space`
*   `Tab`
*   `Backspace`
*   `Delete`
*   `Insert`
*   `Return` (or `Enter` as alias)
*   `Up`, `Down`, `Left` and `Right`
*   `Home` and `End`
*   `PageUp` and `PageDown`
*   `Escape` (or `Esc` for short)
*   `VolumeUp`, `VolumeDown` and `VolumeMute`
*   `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` and `MediaPlayPause`
*   `PrintScreen`
