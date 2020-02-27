---
title: Electron 8.0.0
author:
- jkleinsc
- sofianguy
date: '2020-02-04'
---

Electron 8.0.0 has been released! It includes upgrades to Chromium `80`, V8 `8.0`, and Node.js `12.13.0`. We've added Chrome's built-in spellchecker, and much more!

---

The Electron team is excited to announce the release of Electron 8.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes
* Chromium `80.0.3987.86`
    * [New in Chrome 79](https://developers.google.com/web/updates/2019/12/nic79)
    * [New in Chrome 80](https://chromereleases.googleblog.com/2020/02/stable-channel-update-for-desktop.html)
* Node.js `12.13.0`
    * [Node 12.13.0 blog post](https://nodejs.org/en/blog/release/v12.13.0/)
* V8 `8.0`
    * [V8 7.9 blog post](https://v8.dev/blog/v8-release-79)
    * [V8 8.0 blog post](https://v8.dev/blog/v8-release-80)

### Highlight Features
* Implemented usage of Chrome's built-in spellchecker feature. See more details in [#20692](https://github.com/electron/electron/pull/20692) and [#21266](https://github.com/electron/electron/pull/21266).
* IPC communication now uses v8's Structured Clone Algorithm. This is faster, more featureful, and less surprising than the existing logic, and brings about a 2x performance boost for large buffers and complex objects. Latency for small messages is not significantly affected. See more details in [#20214](https://github.com/electron/electron/pull/20214).

See the [8.0.0 release notes](https://github.com/electron/electron/releases/tag/v8.0.0) for a full list of new features and changes.

## Breaking Changes

* Show module name in deprecation warning for context-aware modules. [#21952](https://github.com/electron/electron/pull/21952) 
    * This is continued work for a future requirement that native Node modules loaded in the renderer process be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Full info and proposed timeline is detailed in [this issue](https://github.com/electron/electron/issues/18397).
* Values sent over IPC are now serialized with Structured Clone Algorithm.  [#20214](https://github.com/electron/electron/pull/20214)
* Offscreen Rendering is currently disabled due to lack of a maintainer to work on this feature.  It broke during the Chromium upgrade and was subsequently disabled. [#20772](https://github.com/electron/electron/issues/20772) 

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes
* `app` API changes:
    * Added `app.getApplicationNameForProtocol(url)`. [#20399](https://github.com/electron/electron/pull/20399)
    * Added `app.showAboutPanel()` and `app.setAboutPanelOptions(options)` support on Windows. [#19420](https://github.com/electron/electron/pull/19420)
* `BrowserWindow` API changes:
    * Updated docs to note that BrowserWindow options `hasShadow` is available on all platforms [#20038](https://github.com/electron/electron/pull/20038)
    * Added `trafficLightPosition` option to BrowserWindow options to allow custom positioning for traffic light buttons. [#21781](https://github.com/electron/electron/pull/21781)
    * Added `accessibleTitle` option to BrowserWindow for setting the accessible window title [#19698](https://github.com/electron/electron/pull/19698)
    * `BrowserWindow.fromWebContents()` can now return null [#19983](https://github.com/electron/electron/pull/19983)
    * Added `BrowserWindow.getMediaSourceId()` and `BrowserWindow.moveAbove(mediaSourceId)`. [#18926](https://github.com/electron/electron/pull/18926)
    * Added support for `will-move` event on macOS. [#19641](https://github.com/electron/electron/pull/19641)
* Documented previously undocumented `crashReporter.getCrashesDirectory()`. [#20417](https://github.com/electron/electron/pull/20417)
* `dialog` API changes:
    * Added `dontAddToRecent` property to `dialog.showOpenDialog` and `dialog.showOpenDialogSync` to prevent documents from being added to recent documents on Windows in open dialogs. [#19669](https://github.com/electron/electron/pull/19669)
    * Added property customization to `dialog.showSaveDialog` and `dialog.showSaveDialogSync`. [#19672](https://github.com/electron/electron/pull/19672)
* `Notification` API changes:
    * Added `timeoutType` option to allow Linux/Windows users to set the type of notification timeout. [#20153](https://github.com/electron/electron/pull/20153)
    * Added `urgency`  option to set urgency on Linux notifications. [#20152](https://github.com/electron/electron/pull/20152)
* `session` API changes:
    * Updated documentation on `session.setProxy(config)` and `session.setCertificateVerifyProc(proc)` to note optional options. [#19604](https://github.com/electron/electron/pull/19604)
    * Added `session.downloadURL(url)` to allow to triggering downloads without a BrowserWindow. [#19889](https://github.com/electron/electron/pull/19889)
    * Added support for HTTP preconnect resource hints via `session.preconnect(options)` and the `preconnect` event. [#18671](http://github.com/electron/electron/pull/18671)
    * Added `session.addWordToSpellCheckerDictionary` to allow custom words in the dictionary [#21297](http://github.com/electron/electron/pull/21297)
* Added option to `shell.moveItemToTrash(fullPath[, deleteOnFail])` on macOS to specify what happens when moveItemToTrash fails. [#19700](https://github.com/electron/electron/pull/19700)
* `systemPreferences` API changes:
    * Updated `systemPreferences.getColor(color)` documentation for macOS. [#20611](https://github.com/electron/electron/pull/20611)
    * Added `screen` media type to `systemPreferences.getMediaAccessStatus()`. [#20764](https://github.com/electron/electron/pull/20764)
* Added `nativeTheme.themeSource` to allow apps to override Chromium and the OS's theme choice. [#19960](https://github.com/electron/electron/pull/19960)
* TouchBar API changes:
    * Added `accessibilityLabel` property to `TouchBarButton` and `TouchBarLabel` to improve TouchBarButton/TouchBarLabel accessibility. [#20454](https://github.com/electron/electron/pull/20454)
    * Updated TouchBar related documentation [#19444](https://github.com/electron/electron/pull/19444)
* `tray` API changes:
    * Added new options to `tray.displayBalloon()`: `iconType`, `largeIcon`, `noSound` and `respectQuietTime`. [#19544](https://github.com/electron/electron/pull/19544)
    * Added tray.removeBalloon(), which removes an already displayed balloon notification. [#19547](https://github.com/electron/electron/pull/19547)
    * Added tray.focus(), which returns focus to the taskbar notification area. feat: add tray.focus() [#19548](https://github.com/electron/electron/pull/19548)
* `webContents` API changes:
    * Added `contents.executeJavaScriptInIsolatedWorld(worldId, scripts[, userGesture])` to expose executeJavaScriptInIsolatedWorld on the webContents API. [#21190](https://github.com/electron/electron/pull/21190)
    * Added methods to capture a hidden webContents. [#21679](https://github.com/electron/electron/pull/21679)
    * Added options to `webContents.print([options], [callback])` to enable customization of print page headers and footers. [#19688](https://github.com/electron/electron/pull/19688)
    * Added ability to inspect specific shared workers via `webContents.getAllSharedWorkers()` and `webContents.inspectSharedWorkerById(workerId)`. [#20389](https://github.com/electron/electron/pull/20389)
    * Added the support of `fitToPageEnabled` and `scaleFactor` options in WebContents.printToPDF(). [#20436](https://github.com/electron/electron/pull/20436)
* Updated `webview.printToPDF` documentation to indicate return type is now Uint8Array. [#20505](https://github.com/electron/electron/pull/20505)

### Deprecated APIs
The following APIs are now deprecated:
* Deprecated the nonfunctional `visibleOnFullScreen` option within `BrowserWindow.setVisibleOnAllWorkspaces` prior to its removal in the next major release version. [#21732](https://github.com/electron/electron/pull/21732)
* Deprecated `alternate-selected-control-text` on `systemPreferences.getColor(color)` for macOS. [#20611](https://github.com/electron/electron/pull/20611)
* Deprecated `setLayoutZoomLevelLimits` on `webContents`, `webFrame`, and `<webview> Tag` because Chromium removed this capability. [#21296](https://github.com/electron/electron/pull/21296)
* The default value of `false` for `app.allowRendererProcessReuse` is now deprecated. [#21287](https://github.com/electron/electron/pull/21287)
* Deprecated `<webview>.getWebContents()` as it depends on the remote module. [#20726](https://github.com/electron/electron/pull/20726)

## End of Support for 5.x.y

Electron 5.x.y has reached end-of-support as per the project's
[support policy](https://electronjs.org/docs/tutorial/support#supported-versions).
Developers and applications are encouraged to upgrade to a newer version of Electron.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 9.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 9 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### Deprecation of `remote` Module (Starting in Electron 9)
Due to serious security liabilities, we are beginning plans to deprecate the [`remote` module](https://www.electronjs.org/docs/api/remote) starting in Electron 9. You can read and follow [this issue](https://github.com/electron/electron/issues/21408) that details our reasons for this and includes a proposed timeline for deprecation.
