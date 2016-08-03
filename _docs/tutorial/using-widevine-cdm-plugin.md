---
version: v1.3.2
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.25.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.26.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.27.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.28.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.29.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.30.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.31.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.32.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.33.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.34.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.35.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.3/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.4/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.5/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.6/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.7/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.8/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.9/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.10/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.36.11/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.0/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.1/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.2/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.3/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.4/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.5/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.6/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.7/tutorial/using-widevine-cdm-plugin/
    - /docs/v0.37.8/tutorial/using-widevine-cdm-plugin/
    - /docs/latest/tutorial/using-widevine-cdm-plugin/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/using-widevine-cdm-plugin.md'
title: "Using Widevine CDM Plugin"
sort_title: "using widevine cdm plugin"
---

# Using Widevine CDM Plugin

In Electron you can use the Widevine CDM plugin shipped with Chrome browser.

## Getting the plugin

Electron doesn't ship with the Widevine CDM plugin for license reasons, to get
it, you need to install the official Chrome browser first, which should match
the architecture and Chrome version of the Electron build you use.

**Note:** The major version of Chrome browser has to be the same with the Chrome
version used by Electron, otherwise the plugin will not work even though
`navigator.plugins` would show it has been loaded.

### Windows & macOS

Open `chrome://components/` in Chrome browser, find `WidevineCdm` and make
sure it is up to date, then you can find all the plugin binaries from the
`APP_DATA/Google/Chrome/WidevineCDM/VERSION/_platform_specific/PLATFORM_ARCH/`
directory.

`APP_DATA` is system's location for storing app data, on Windows it is
`%LOCALAPPDATA%`, on macOS it is `~/Library/Application Support`. `VERSION` is
Widevine CDM plugin's version string, like `1.4.8.866`. `PLATFORM` is `mac` or
`win`. `ARCH` is `x86` or `x64`.

On Windows the required binaries are `widevinecdm.dll` and
`widevinecdmadapter.dll`, on macOS they are `libwidevinecdm.dylib` and
`widevinecdmadapter.plugin`. You can copy them to anywhere you like, but they
have to be put together.

### Linux

On Linux the plugin binaries are shipped together with Chrome browser, you can
find them under `/opt/google/chrome`, the filenames are `libwidevinecdm.so` and
`libwidevinecdmadapter.so`.

## Using the plugin

After getting the plugin files, you should pass the `widevinecdmadapter`'s path
to Electron with `--widevine-cdm-path` command line switch, and the plugin's
version with `--widevine-cdm-version` switch.

**Note:** Though only the `widevinecdmadapter` binary is passed to Electron, the
`widevinecdm` binary has to be put aside it.

The command line switches have to be passed before the `ready` event of `app`
module gets emitted, and the page that uses this plugin must have plugin
enabled.

Example code:

```javascript
const {app, BrowserWindow} = require('electron')

// You have to pass the filename of `widevinecdmadapter` here, it is
// * `widevinecdmadapter.plugin` on macOS,
// * `libwidevinecdmadapter.so` on Linux,
// * `widevinecdmadapter.dll` on Windows.
app.commandLine.appendSwitch('widevine-cdm-path', '/path/to/widevinecdmadapter.plugin')
// The version of plugin can be got from `chrome://plugins` page in Chrome.
app.commandLine.appendSwitch('widevine-cdm-version', '1.4.8.866')

let win = null
app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      // The `plugins` have to be enabled.
      plugins: true
    }
  })
  win.show()
})
```

## Verifying the plugin

To verify whether the plugin works, you can use following ways:

* Open devtools and check whether `navigator.plugins` includes the Widevine
CDM plugin.
* Open https://shaka-player-demo.appspot.com/ and load a manifest that uses
`Widevine`.
* Open http://www.dash-player.com/demo/drm-test-area/, check whether the page
says `bitdash uses Widevine in your browser`, then play the video.
