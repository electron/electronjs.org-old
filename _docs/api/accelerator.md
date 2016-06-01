---
version: v1.2.1
category: API
redirect_from:
    - /docs/v0.24.0/api/accelerator/
    - /docs/v0.25.0/api/accelerator/
    - /docs/v0.26.0/api/accelerator/
    - /docs/v0.27.0/api/accelerator/
    - /docs/v0.28.0/api/accelerator/
    - /docs/v0.29.0/api/accelerator/
    - /docs/v0.30.0/api/accelerator/
    - /docs/v0.31.0/api/accelerator/
    - /docs/v0.32.0/api/accelerator/
    - /docs/v0.33.0/api/accelerator/
    - /docs/v0.34.0/api/accelerator/
    - /docs/v0.35.0/api/accelerator/
    - /docs/v0.36.0/api/accelerator/
    - /docs/v0.36.3/api/accelerator/
    - /docs/v0.36.4/api/accelerator/
    - /docs/v0.36.5/api/accelerator/
    - /docs/v0.36.6/api/accelerator/
    - /docs/v0.36.7/api/accelerator/
    - /docs/v0.36.8/api/accelerator/
    - /docs/v0.36.9/api/accelerator/
    - /docs/v0.36.10/api/accelerator/
    - /docs/v0.36.11/api/accelerator/
    - /docs/v0.37.0/api/accelerator/
    - /docs/v0.37.1/api/accelerator/
    - /docs/v0.37.2/api/accelerator/
    - /docs/v0.37.3/api/accelerator/
    - /docs/v0.37.4/api/accelerator/
    - /docs/v0.37.5/api/accelerator/
    - /docs/v0.37.6/api/accelerator/
    - /docs/v0.37.7/api/accelerator/
    - /docs/v0.37.8/api/accelerator/
    - /docs/latest/api/accelerator/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/accelerator.md'
excerpt: "Define keyboard shortcuts."
title: "Accelerator"
sort_title: "accelerator"
---

# Accelerator

> Define keyboard shortcuts.

Accelerators can contain multiple modifiers and key codes, combined by
the `+` character.

Examples:

* `CommandOrControl+A`
* `CommandOrControl+Shift+Z`

## Platform notice

On Linux and Windows, the `Command` key does not have any effect so
use `CommandOrControl` which represents `Command` on OS X and `Control` on
Linux and Windows to define some accelerators.

Use `Alt` instead of `Option`. The `Option` key only exists on OS X, whereas
the `Alt` key is available on all platforms.

The `Super` key is mapped to the `Windows` key on Windows and Linux and
`Cmd` on OS X.

## Available modifiers

* `Command` (or `Cmd` for short)
* `Control` (or `Ctrl` for short)
* `CommandOrControl` (or `CmdOrCtrl` for short)
* `Alt`
* `Option`
* `AltGr`
* `Shift`
* `Super`

## Available key codes

* `0` to `9`
* `A` to `Z`
* `F1` to `F24`
* Punctuations like `~`, `!`, `@`, `#`, `$`, etc.
* `Plus`
* `Space`
* `Tab`
* `Backspace`
* `Delete`
* `Insert`
* `Return` (or `Enter` as alias)
* `Up`, `Down`, `Left` and `Right`
* `Home` and `End`
* `PageUp` and `PageDown`
* `Escape` (or `Esc` for short)
* `VolumeUp`, `VolumeDown` and `VolumeMute`
* `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` and `MediaPlayPause`
* `PrintScreen`
