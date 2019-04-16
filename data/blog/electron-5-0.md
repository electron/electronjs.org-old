---
title: Electron 5.0.0
author:
- BinaryMuse
- jkleinsc
date: '2018-04-23'
---

The Electron team is excited to announce that the stable release of Electron 5 is now available! You can install it from [electronjs.org](https://electronjs.org/) or from npm via `npm install electron@latest`. The release is packed with upgrades, fixes, and new features, and we can't wait to see what you build with them. Read more for details about this release, and please share any feedback you have as you explore!

---

## What's New?

A large part of Electron's functionality is provided by Chromium, Node.js, and V8, the core components that make up Electron. As such, a key goal for the Electron team is to keep up with changes to these projects as much as possible, providing developers who build Electron apps access to new web and JavaScript features. To this end, Electron 5 features major version bumps to each of these components; Electron v5.0.0 includes Chromium `...`, Node `...`, and V8 `...`.

In addition, Electron 5 includes changes to Electron-specific APIs. You can find a summary of the major changes in Electron 5 below; for the full list of changes, check out the [Electron v5.0.0 release notes](https://github.com/electron/electron/releases/tag/v5.0.0).

### Feature

#### Promisification
Electron 5 contains changes as part of our [Promisification](https://github.com/electron/electron/blob/master/docs/api/modernization/promisification.md) initiative to convert callback-based functions in Electron to return Promises.  The following APIs were converted for Electron
5:
* app.getFileIcon
* contentTracing.getCategories
* contentTracing.startRecording
* contentTracing.stopRecording
* Cookies API
* shell.openExternal
* webContents.loadFile
* webContents.loadFile
* webContents.loadURL
* webContents.zoomLevel
* webContents.zoomFactor
* win.capturePage


Description of feature
Added activate option to webContents.openDevTools. #13852
Added app.commandLine.hasSwitch() / app.commandLine.getSwitchValue(). #16282
Added fileMenu / viewMenu / appMenu roles. #16328
Added ipc-message and ipc-message-sync events to webContents. #16468
Added preload-error event to webContents emitted when preload script fails (parse error, unhandled exception, etc.). #16411
Added a way to query for system colors on MacOS via systemPreferences.getSystemColor(). #16248
Added about panel customization on linux. #15658
Added event and method to detect high contrast color schemes . #15493
Added getMemoryFootprint API. #14847
Added macOS support for systemPreferences.getAccentColor(). #16251
Added macOS support to systemPreferences.getColor(). #16249
Added methods to DownloadItem that enable customization of the save dialog options during will-download events. #15497
Added response header support to protocol.registerFileProtocol to match protocol.registerStreamProtocol. #16098
Added support for DesktopCapturerSource.appIcon. 1f55f16
Added support for multiple browser views per BrowserWindow. #16148
Added support for running preload scripts and nodeIntegration in iframes. #16425
Allow for MacOS notifications to be immediately delivered. #16060
Allow numpad keys to be used as accelerators. #15689
Allow partial setting of window bounds with win.setBounds(). #15677
Allow registering of multiple globalShortcuts. #15542
Allowed filtering of remote.getBuiltin(), remote.getCurrentWindow(), remote.getCurrentWebContents and <webview>.getWebContents(). #16293


Exposes an API to allow apps to determine their status as a trusted accessibility client. #16119
Feat: provide user system's region with app.getLocaleCountryCode(). #15035

Mixed-sandbox mode works on Linux. #15870
The browser-backward and browser-forward app-command events events available in BrowserWindow now work on Linux. #15441
Unified behavior between the default app and packaged apps (application menu / window-all-closed handling). #16310
Updated SpellCheck API to support asynchronous results. #14032
Upgraded to Chromium 71.0.3578.98. #15966
Added --disable-color-correct-rendering switch. #15898

Added win.removeMenu() to remove application menus instead of using win.setMenu(null). #16657
Added caps lock and numlock as keyboard accelerator modifiers. #16725
Converted debugger.sendCommand() to return a Promise instead of taking a callback. #16931
Updated Menu.buildFromTemplate() to allow it to accept MenuItems in addition to plain objects. #16783
Added webFrame.setIsolatedWorldInfo API and deprecated related APIs. #16932

Enabled NodeIntegrationInSubFrames option usage for webview tags. #17398
Enabled the setuid sandbox on Linux, allowing Electron to launch sandboxed processes in environments that disable CLONE_NEWUSER for unprivileged users. #17343


## Breaking Changes

### Breaking Change

https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md#planned-breaking-api-changes-50

Mixed-sandbox mode is now enabled by default. enableMixedSandbox and the --enable-mixed-sandbox command-line switch still exist for compatibility, but are deprecated and have no effect. #15894
The default values of nodeIntegration and webviewTag are now false to improve security. #16235

## Deprecations

The following breaking changes are planned for Electron 6.0, and thus are deprecated in Electron 5.0.

### Deprecation

https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md#planned-breaking-api-changes-60

Native versions of mksnapshot for arm and arm64 are deprecated.
Deprecated ServiceWorker APIs on WebContents in preparation for their removal. #16732
Deprecated modules internally using remote.require in sandboxed renderer context. #15145
Added webFrame.setIsolatedWorldInfo API and deprecated related APIs. #16932
enableMixedSandbox and the --enable-mixed-sandbox command-line switch still exist for compatibility, but are deprecated and have no effect. #15894

## App Feedback Program

The [App Feedback Program](https://electronjs.org/blog/app-feedback-program) we instituted during the development of Electron 3.0 was successful, so we've continued it during the development of 5.0 as well. To learn more about the App Feedback Program and to participate in future betas, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. [See our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
