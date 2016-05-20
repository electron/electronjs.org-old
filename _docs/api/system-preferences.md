---
version: v1.1.1
category: API
redirect_from:
    - /docs/v0.24.0/api/system-preferences/
    - /docs/v0.25.0/api/system-preferences/
    - /docs/v0.26.0/api/system-preferences/
    - /docs/v0.27.0/api/system-preferences/
    - /docs/v0.28.0/api/system-preferences/
    - /docs/v0.29.0/api/system-preferences/
    - /docs/v0.30.0/api/system-preferences/
    - /docs/v0.31.0/api/system-preferences/
    - /docs/v0.32.0/api/system-preferences/
    - /docs/v0.33.0/api/system-preferences/
    - /docs/v0.34.0/api/system-preferences/
    - /docs/v0.35.0/api/system-preferences/
    - /docs/v0.36.0/api/system-preferences/
    - /docs/v0.36.3/api/system-preferences/
    - /docs/v0.36.4/api/system-preferences/
    - /docs/v0.36.5/api/system-preferences/
    - /docs/v0.36.6/api/system-preferences/
    - /docs/v0.36.7/api/system-preferences/
    - /docs/v0.36.8/api/system-preferences/
    - /docs/v0.36.9/api/system-preferences/
    - /docs/v0.36.10/api/system-preferences/
    - /docs/v0.36.11/api/system-preferences/
    - /docs/v0.37.0/api/system-preferences/
    - /docs/v0.37.1/api/system-preferences/
    - /docs/v0.37.2/api/system-preferences/
    - /docs/v0.37.3/api/system-preferences/
    - /docs/v0.37.4/api/system-preferences/
    - /docs/v0.37.5/api/system-preferences/
    - /docs/v0.37.6/api/system-preferences/
    - /docs/v0.37.7/api/system-preferences/
    - /docs/v0.37.8/api/system-preferences/
    - /docs/v1.0.0/api/system-preferences/
    - /docs/v1.0.1/api/system-preferences/
    - /docs/v1.1.0/api/system-preferences/
    - /docs/v1.1.1/api/system-preferences/
    - /docs/latest/api/system-preferences/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/system-preferences.md'
excerpt: "Get system preferences."
title: "systemPreferences"
sort_title: "systempreferences"
---

# systemPreferences

> Get system preferences.

## Methods

### `systemPreferences.isDarkMode()` _OS X_

This method returns `true` if the system is in Dark Mode, and `false` otherwise.

### `systemPreferences.subscribeNotification(event, callback)` _OS X_

* `event` String
* `callback` Function

Subscribes to native notifications of OS X, `callback` will be called with
`callback(event, userInfo)` when the corresponding `event` happens. The
`userInfo` is an Object that contains the user information dictionary sent
along with the notification.

The `id` of the subscriber is returned, which can be used to unsubscribe the
`event`.

Under the hood this API subscribes to `NSDistributedNotificationCenter`,
example values of `event` are:

* `AppleInterfaceThemeChangedNotification`
* `AppleAquaColorVariantChanged`
* `AppleColorPreferencesChangedNotification`
* `AppleShowScrollBarsSettingChanged`

### `systemPreferences.unsubscribeNotification(id)` _OS X_

* `id` Integer

Removes the subscriber with `id`.

### `systemPreferences.getUserDefault(key, type)` _OS X_

* `key` String
* `type` String - Can be `string`, `boolean`, `integer`, `float`, `double`,
  `url`.

Get the value of `key` in system preferences.

This API reads from `NSUserDefaults` on OS X, some popular `key` and `type`s
are:

* `AppleInterfaceStyle: string`
* `AppleAquaColorVariant: integer`
* `AppleHighlightColor: string`
* `AppleShowScrollBars: string`

### `systemPreferences.isAeroGlassEnabled()` _Windows_

This method returns `true` if [DWM composition][dwm-composition] (Aero Glass) is
enabled, and `false` otherwise.

An example of using it to determine if you should create a transparent window or
not (transparent windows won't work correctly when DWM composition is disabled):

```javascript
let browserOptions = {width: 1000, height: 800};

// Make the window transparent only if the platform supports it.
if (process.platform !== 'win32' || systemPreferences.isAeroGlassEnabled()) {
  browserOptions.transparent = true;
  browserOptions.frame = false;
}

// Create the window.
let win = new BrowserWindow(browserOptions);

// Navigate.
if (browserOptions.transparent) {
  win.loadURL('file://' + __dirname + '/index.html');
} else {
  // No transparency, so we load a fallback that uses basic styles.
  win.loadURL('file://' + __dirname + '/fallback.html');
}
```

[dwm-composition]:https://msdn.microsoft.com/en-us/library/windows/desktop/aa969540.aspx
