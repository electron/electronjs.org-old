---
title: Electron 4.0.0
author: BinaryMuse
date: '2018-12-20'
---

The Electron team is excited to announce that the stable release of Electron 4 is now available! You can install it from [electronjs.org](https://electronjs.org/) or from npm via `npm install electron@latest`. The release is packed with upgrades, fixes, and new features, and we can't wait to see what you build with them. Read more for details about this release, and please share any feedback you have as you explore!

---

## What's New?

A large part of Electron's functionality is provided by Chromium, Node.js, and V8, the core components that make up Electron. As such, a key goal for the Electron team is to keep up with changes to these projects as much as possible, providing developers who build Electron apps access to new web and JavaScript features. To this end, Electron 4 features major version bumps to each of these components; Electron v4.0.0 includes Chromium `69.0.3497.106`, Node `10.11.0`, and V8 `6.9.427.24`.

In addition, Electron 4 includes changes to Electron-specific APIs. You can find a summary of the major changes in Electron 4 below; for the full list of changes, check out the [Electron v4.0.0 release notes](https://github.com/electron/electron/releases/tag/v4.0.0).

### Disabling the `remote` Module

You now have the ability to disable the `remote` module for security reasons. The module can be disabled for `BrowserWindow`s and for `webview` tags:

```javascript
// BrowserWindow
new BrowserWindow({
  webPreferences: {
    enableRemoteModule: false
  }
})

// webview tag
<webview src="http://www.google.com/" enableremotemodule="false"></webview>
```

See the [BrowserWindow](https://electronjs.org/docs/api/browser-window) and [`<webview>` Tag](https://electronjs.org/docs/api/webview-tag) documentation for more information.

### Filtering `remote.require()` / `remote.getGlobal()` Requests

This feature is useful if you don't want to completely disable the `remote` module in your renderer process or `webview` but would like additional control over which modules can be required via `remote.require`.

When a module is required via `remote.require` in a renderer process, a `remote-require` event is raised on the [`app` module](https://electronjs.org/docs/api/app). You can call `event.preventDefault()` on the the event (the first argument) to prevent the module from being loaded. The [`WebContents` instance](https://electronjs.org/docs/api/web-contents) where the require occurred is passed as the second argument, and the name of the module is passed as the third argument. The same event is also emitted on the `WebContents` instance, but in this case the only arguments are the event and the module name. In both cases, you can return a custom value by setting the value of `event.returnValue`.

```javascript
// Control `remote.require` from all WebContents:
app.on('remote-require', function (event, webContents, requestedModuleName) {
  // ...
})

// Control `remote.require` from a specific WebContents instance:
browserWin.webContents.on('remote-require', function (event, requestedModuleName) {
  // ...
})
```

In a similar fashion, when `remote.getGlobal(name)` is called, a `remote-get-global` event is raised. This works the same way as the `remote-require` event: call `preventDefault()` to prevent the global from being returned, and set `event.returnValue` to return a custom value.

```javascript
// Control `remote.getGlobal` from all WebContents:
app.on('remote-get-global', function (event, webContents, requrestedGlobalName) {
  // ...
})

// Control `remote.getGlobal` from a specific WebContents instance:
browserWin.webContents.on('remote-get-global', function (event, requestedGlobalName) {
  // ...
})
```

For more information, see the following documentation:

* [`remote.require`](https://electronjs.org/docs/api/remote#remoterequiremodule)
* [`remote.getGlobal`](https://electronjs.org/docs/api/remote#remotegetglobalname)
* [`app`](https://electronjs.org/docs/api/app)
* [`WebContents`](https://electronjs.org/docs/api/web-contents)

### JavaScript Access to the About Panel

On macOS, you can now call `app.showAboutPanel()` to programmatically show the About panel, just like clicking the menu item created via `{role: 'about'}`. See the [`showAboutPanel` documentation](https://electronjs.org/docs/api/app?query=show#appshowaboutpanel-macos) for more information

### Controlling `WebContents` Background Throttling

`WebContents` instances now have a method `setBackgroundThrottling(allowed)` to enable or disable throttling of timers and animations when the page is backgrounded.

```javascript
let win = new BrowserWindow(...)
win.webContents.setBackgroundThrottling(enableBackgroundThrottling)
```

See [the `setBackgroundThrottling` documentation](https://electronjs.org/docs/api/web-contents#contentssetbackgroundthrottlingallowed) for more information.

## Breaking Changes

### No More macOS 10.9 Support

Chromium no longer supports macOS 10.9 (OS X Mavericks), and as a result [Electron 4.0 and beyond does not support it either](https://github.com/electron/electron/pull/15357).

### Single Instance Locking

Previously, to make your app a Single Instance Application (ensuring that only one instance of your app is running at any given time), you could use the `app.makeSingleInstance()` method. Starting in Electron 4.0, you must use `app.requestSingleInstanceLock()` instead. The return value of this method indicates whether or not this instance of your application successfully obtained the lock. If it failed to obtain the lock, you can assume that another instance of your application is already running with the lock and exit immediately.

For an example of using `requestSingleInstanceLock()` and information on nuanced behavior on various platforms, [see the documentation for `app.requestSingleInstanceLock()` and related methods](https://electronjs.org/docs/api/app#apprequestsingleinstancelock) and [the `second-instance` event](https://electronjs.org/docs/api/app#event-second-instance).

### `win_delay_load_hook`

When building native modules for windows, the `win_delay_load_hook` variable in the module's `binding.gyp` must be true (which is the default). If this hook is not present, then the native module will fail to load on Windows, with an error message like `Cannot find module`. [See the native module guide](https://electronjs.org/docs/tutorial/using-native-node-modules#a-note-about-win_delay_load_hook) for more information.

## Deprecations

The following breaking changes are planned for Electron 5.0, and thus are deprecated in Electron 4.0.

### Node.js Integration Disabled for `nativeWindowOpen`-ed Windows

Starting in Electron 5.0, child windows opened with the `nativeWindowOpen` option will always have Node.js integration disabled.

### `webPreferences` Default Values

When creating a new `BrowserWindow` with the `webPreferences` option set, the following `webPreferences` option defaults are deprecated in favor of new defaults listed below:

<div class="table table-ruled table-full-width">

| Property | Deprecated Default | New Default |
|----------|--------------------|-------------|
| `contextIsolation` | `false` | `true` |
| `nodeIntegration` | `true` | `false` |
| `webviewTag` | value of `nodeIntegration` if set, otherwise `true` | `false` |

</div>

Please note: there is currently [a known bug (#9736)](https://github.com/electron/electron/issues/9736) that prevents the `webview` tag from working if `contextIsolation` is on. Keep an eye on the GitHub issue for up-to-date information!

Learn more about context isolation, Node integration, and the `webview` tag in [the Electron security document](https://electronjs.org/docs/tutorial/security).

Electron 4.0 will still use the current defaults, but if you don't pass an explicit value for them, you'll see a deprecation warning. To prepare your app for Electron 5.0, use explicit values for these options. [See the `BrowserWindow` docs](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions) for details on each of these options.

### `webContents.findInPage(text[, options])`

The `medialCapitalAsWordStart` and `wordStart` options have been deprecated as they have been removed upstream.

## App Feedback Program

The [App Feedback Program](https://electronjs.org/blog/app-feedback-program) we instituted during the development of Electron 3.0 was successful, so we've continued it during the development of 4.0 as well. We'd like to extend a massive thank you to Atlassian, Discord, MS Teams, OpenFin, Slack, Symphony, WhatsApp, and the other program members for their involvement during the 4.0 beta cycle. To learn more about the App Feedback Program and to participate in future betas, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. [See our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
