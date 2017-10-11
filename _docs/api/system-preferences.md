---
version: v1.7.9
permalink: /docs/api/system-preferences/
category: API
redirect_from:
  - /docs/v0.37.8/api/system-preferences/
  - /docs/v0.37.7/api/system-preferences/
  - /docs/v0.37.6/api/system-preferences/
  - /docs/v0.37.5/api/system-preferences/
  - /docs/v0.37.4/api/system-preferences/
  - /docs/v0.37.3/api/system-preferences/
  - /docs/v0.37.1/api/system-preferences/
  - /docs/v0.37.0/api/system-preferences/
  - /docs/v0.36.12/api/system-preferences/
  - /docs/v0.36.11/api/system-preferences/
  - /docs/v0.36.10/api/system-preferences/
  - /docs/v0.36.9/api/system-preferences/
  - /docs/v0.36.8/api/system-preferences/
  - /docs/v0.36.7/api/system-preferences/
  - /docs/v0.36.6/api/system-preferences/
  - /docs/v0.36.5/api/system-preferences/
  - /docs/v0.36.4/api/system-preferences/
  - /docs/v0.36.3/api/system-preferences/
  - /docs/v0.36.2/api/system-preferences/
  - /docs/v0.36.0/api/system-preferences/
  - /docs/v0.35.5/api/system-preferences/
  - /docs/v0.35.4/api/system-preferences/
  - /docs/v0.35.3/api/system-preferences/
  - /docs/v0.35.2/api/system-preferences/
  - /docs/v0.35.1/api/system-preferences/
  - /docs/v0.34.4/api/system-preferences/
  - /docs/v0.34.3/api/system-preferences/
  - /docs/v0.34.2/api/system-preferences/
  - /docs/v0.34.1/api/system-preferences/
  - /docs/v0.34.0/api/system-preferences/
  - /docs/v0.33.9/api/system-preferences/
  - /docs/v0.33.8/api/system-preferences/
  - /docs/v0.33.7/api/system-preferences/
  - /docs/v0.33.6/api/system-preferences/
  - /docs/v0.33.4/api/system-preferences/
  - /docs/v0.33.3/api/system-preferences/
  - /docs/v0.33.2/api/system-preferences/
  - /docs/v0.33.1/api/system-preferences/
  - /docs/v0.33.0/api/system-preferences/
  - /docs/v0.32.3/api/system-preferences/
  - /docs/v0.32.2/api/system-preferences/
  - /docs/v0.31.2/api/system-preferences/
  - /docs/v0.31.0/api/system-preferences/
  - /docs/v0.30.4/api/system-preferences/
  - /docs/v0.29.2/api/system-preferences/
  - /docs/v0.29.1/api/system-preferences/
  - /docs/v0.28.3/api/system-preferences/
  - /docs/v0.28.2/api/system-preferences/
  - /docs/v0.28.1/api/system-preferences/
  - /docs/v0.28.0/api/system-preferences/
  - /docs/v0.27.3/api/system-preferences/
  - /docs/v0.27.2/api/system-preferences/
  - /docs/v0.27.1/api/system-preferences/
  - /docs/v0.27.0/api/system-preferences/
  - /docs/v0.26.1/api/system-preferences/
  - /docs/v0.26.0/api/system-preferences/
  - /docs/v0.25.3/api/system-preferences/
  - /docs/v0.25.2/api/system-preferences/
  - /docs/v0.25.1/api/system-preferences/
  - /docs/v0.25.0/api/system-preferences/
  - /docs/v0.24.0/api/system-preferences/
  - /docs/v0.23.0/api/system-preferences/
  - /docs/v0.22.3/api/system-preferences/
  - /docs/v0.22.2/api/system-preferences/
  - /docs/v0.22.1/api/system-preferences/
  - /docs/v0.21.3/api/system-preferences/
  - /docs/v0.21.2/api/system-preferences/
  - /docs/v0.21.1/api/system-preferences/
  - /docs/v0.21.0/api/system-preferences/
  - /docs/v0.20.8/api/system-preferences/
  - /docs/v0.20.7/api/system-preferences/
  - /docs/v0.20.6/api/system-preferences/
  - /docs/v0.20.5/api/system-preferences/
  - /docs/v0.20.4/api/system-preferences/
  - /docs/v0.20.3/api/system-preferences/
  - /docs/v0.20.2/api/system-preferences/
  - /docs/v0.20.1/api/system-preferences/
  - /docs/v0.20.0/api/system-preferences/
  - /docs/latest/api/system-preferences/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/api/system-preferences.md
title: systemPreferences
excerpt: Get system preferences.
sort_title: system-preferences
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

    https://github.com/electron/electron/blob/master/docs/api/system-preferences.md

    Thanks!

-->
# systemPreferences

> Get system preferences.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

```javascript
const {systemPreferences} = require('electron')
console.log(systemPreferences.isDarkMode())
```

## Events

The `systemPreferences` object emits the following events:

### Event: 'accent-color-changed' _Windows_

Returns:

*   `event` Event
*   `newColor` String - The new RGBA color the user assigned to be their system accent color.

### Event: 'color-changed' _Windows_

Returns:

*   `event` Event

### Event: 'inverted-color-scheme-changed' _Windows_

Returns:

*   `event` Event
*   `invertedColorScheme` Boolean - `true` if an inverted color scheme, such as a high contrast theme, is being used, `false` otherwise.

## Methods

### `systemPreferences.isDarkMode()` _macOS_

Returns `Boolean` - Whether the system is in Dark Mode.

### `systemPreferences.isSwipeTrackingFromScrollEventsEnabled()` _macOS_

Returns `Boolean` - Whether the Swipe between pages setting is on.

### `systemPreferences.postNotification(event, userInfo)` _macOS_

*   `event` String
*   `userInfo` Object

Posts `event` as native notifications of macOS. The `userInfo` is an Object that contains the user information dictionary sent along with the notification.

### `systemPreferences.postLocalNotification(event, userInfo)` _macOS_

*   `event` String
*   `userInfo` Object

Posts `event` as native notifications of macOS. The `userInfo` is an Object that contains the user information dictionary sent along with the notification.

### `systemPreferences.subscribeNotification(event, callback)` _macOS_

*   `event` String
*   `callback` Function
    *   `event` String
    *   `userInfo` Object

Subscribes to native notifications of macOS, `callback` will be called with `callback(event, userInfo)` when the corresponding `event` happens. The `userInfo` is an Object that contains the user information dictionary sent along with the notification.

The `id` of the subscriber is returned, which can be used to unsubscribe the `event`.

Under the hood this API subscribes to `NSDistributedNotificationCenter`, example values of `event` are:

*   `AppleInterfaceThemeChangedNotification`
*   `AppleAquaColorVariantChanged`
*   `AppleColorPreferencesChangedNotification`
*   `AppleShowScrollBarsSettingChanged`

### `systemPreferences.unsubscribeNotification(id)` _macOS_

*   `id` Integer

Removes the subscriber with `id`.

### `systemPreferences.subscribeLocalNotification(event, callback)` _macOS_

*   `event` String
*   `callback` Function
    *   `event` String
    *   `userInfo` Object

Same as `subscribeNotification`, but uses `NSNotificationCenter` for local defaults. This is necessary for events such as `NSUserDefaultsDidChangeNotification`

### `systemPreferences.unsubscribeLocalNotification(id)` _macOS_

*   `id` Integer

Same as `unsubscribeNotification`, but removes the subscriber from `NSNotificationCenter`.

### `systemPreferences.getUserDefault(key, type)` _macOS_

*   `key` String
*   `type` String - Can be `string`, `boolean`, `integer`, `float`, `double`, `url`, `array`, `dictionary`

Returns `any` - The value of `key` in system preferences.

This API uses `NSUserDefaults` on macOS. Some popular `key` and `type`s are:

*   `AppleInterfaceStyle`: `string`
*   `AppleAquaColorVariant`: `integer`
*   `AppleHighlightColor`: `string`
*   `AppleShowScrollBars`: `string`
*   `NSNavRecentPlaces`: `array`
*   `NSPreferredWebServices`: `dictionary`
*   `NSUserDictionaryReplacementItems`: `array`

### `systemPreferences.setUserDefault(key, type, value)` _macOS_

*   `key` String
*   `type` String - See [`getUserDefault`][#systempreferencesgetuserdefaultkey-type-macos]
*   `value` String

Set the value of `key` in system preferences.

Note that `type` should match actual type of `value`. An exception is thrown if they don't.

This API uses `NSUserDefaults` on macOS. Some popular `key` and `type`s are:

*   `ApplePressAndHoldEnabled`: `boolean`

### `systemPreferences.isAeroGlassEnabled()` _Windows_

Returns `Boolean` - `true` if [DWM composition](https://msdn.microsoft.com/en-us/library/windows/desktop/aa969540.aspx) (Aero Glass) is enabled, and `false` otherwise.

An example of using it to determine if you should create a transparent window or not (transparent windows won't work correctly when DWM composition is disabled):

```javascript
const {BrowserWindow, systemPreferences} = require('electron')
let browserOptions = {width: 1000, height: 800}

// Make the window transparent only if the platform supports it.
if (process.platform !== 'win32' || systemPreferences.isAeroGlassEnabled()) {
  browserOptions.transparent = true
  browserOptions.frame = false
}

// Create the window.
let win = new BrowserWindow(browserOptions)

// Navigate.
if (browserOptions.transparent) {
  win.loadURL(`file://${__dirname}/index.html`)
} else {
  // No transparency, so we load a fallback that uses basic styles.
  win.loadURL(`file://${__dirname}/fallback.html`)
}
```

### `systemPreferences.getAccentColor()` _Windows_

Returns `String` - The users current system wide accent color preference in RGBA hexadecimal form.

```js
const color = systemPreferences.getAccentColor() // `"aabbccdd"`
const red = color.substr(0, 2) // "aa"
const green = color.substr(2, 2) // "bb"
const blue = color.substr(4, 2) // "cc"
const alpha = color.substr(6, 2) // "dd"
```

### `systemPreferences.getColor(color)` _Windows_

*   `color` String - One of the following values:
    *   `3d-dark-shadow` - Dark shadow for three-dimensional display elements.
    *   `3d-face` - Face color for three-dimensional display elements and for dialog box backgrounds.
    *   `3d-highlight` - Highlight color for three-dimensional display elements.
    *   `3d-light` - Light color for three-dimensional display elements.
    *   `3d-shadow` - Shadow color for three-dimensional display elements.
    *   `active-border` - Active window border.
    *   `active-caption` - Active window title bar. Specifies the left side color in the color gradient of an active window's title bar if the gradient effect is enabled.
    *   `active-caption-gradient` - Right side color in the color gradient of an active window's title bar.
    *   `app-workspace` - Background color of multiple document interface (MDI) applications.
    *   `button-text` - Text on push buttons.
    *   `caption-text` - Text in caption, size box, and scroll bar arrow box.
    *   `desktop` - Desktop background color.
    *   `disabled-text` - Grayed (disabled) text.
    *   `highlight` - Item(s) selected in a control.
    *   `highlight-text` - Text of item(s) selected in a control.
    *   `hotlight` - Color for a hyperlink or hot-tracked item.
    *   `inactive-border` - Inactive window border.
    *   `inactive-caption` - Inactive window caption. Specifies the left side color in the color gradient of an inactive window's title bar if the gradient effect is enabled.
    *   `inactive-caption-gradient` - Right side color in the color gradient of an inactive window's title bar.
    *   `inactive-caption-text` - Color of text in an inactive caption.
    *   `info-background` - Background color for tooltip controls.
    *   `info-text` - Text color for tooltip controls.
    *   `menu` - Menu background.
    *   `menu-highlight` - The color used to highlight menu items when the menu appears as a flat menu.
    *   `menubar` - The background color for the menu bar when menus appear as flat menus.
    *   `menu-text` - Text in menus.
    *   `scrollbar` - Scroll bar gray area.
    *   `window` - Window background.
    *   `window-frame` - Window frame.
    *   `window-text` - Text in windows.

Returns `String` - The system color setting in RGB hexadecimal form (`#ABCDEF`). See the [Windows docs](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724371(v=vs.85).aspx) for more details.

### `systemPreferences.isInvertedColorScheme()` _Windows_

Returns `Boolean` - `true` if an inverted color scheme, such as a high contrast theme, is active, `false` otherwise.
