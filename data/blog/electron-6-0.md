---
title: Electron 6.0.0
author: 
- sofianguy
date: '2019-07-30'
---

The Electron team is excited to announce the release of Electron 6.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

---

## What's New

This is the first Electron stable release to ever release on the *same day* as [Chrome stable](https://www.chromestatus.com/features/schedule) 🎉

Much of Electron's functionality is provided by the core components of Chromium, Node.js, and V8. Electron keeps up-to-date with these projects to provide our users with new JavaScript features, performance improvements, and security fixes. Each of these packages has a major version bump in Electron 6:

- Chromium `76.0.3809.77`
  - [New in 74](https://developers.google.com/web/updates/2019/04/nic74)
  - [New in 75](https://developers.google.com/web/updates/2019/06/nic75)
  - [New in 76](https://developers.google.com/web/updates/tags/chrome76)
- Node.js `12.4.0`
  - [Node 12.4.0 blog post](https://nodejs.org/en/blog/release/v12.4.0/)
- V8 `7.6.303.22`
    - [V8 7.6 blog post](https://v8.dev/blog/v8-release-76)

Electron 6 also includes improvements to Electron-specific APIs. Highlights of the major changes is below; for the full list of changes, check out the [Electron v6.0.0 release notes](https://github.com/electron/electron/releases/tag/v6.0.0).

### Promisification

Electron 6 continues [Promisification initiative](https://github.com/electron/electron/blob/5-0-x/docs/api/promisification.md) initiative to convert Electron's callback-based API to use Promises. These APIs were converted for Electron 6:
* Cookies API
* `app.dock.show()`
* `contentTracing.getCategories()`
* `contentTracing.getTraceBufferUsage()`
* `contents.executeJavaScript()`
* `webFrame.executeJavaScript()`
* `webFrame.executeJavaScriptInIsolatedWorld()`
* `webviewTag.executeJavaScript()`
* `dialog.showCertificateTrustDialog()`
* `netLog.stopLogging()`
* `session.clearAuthCache()`
* `session.clearHostResolverCache()`
* `session.clearStorageData()`
* `session.getBlobData()`
* `session.getCacheSize()`
* `session.clearCache()`
* `session.setProxy()`
* `session.resolveProxy()`
* `webContents.hasServiceWorker()`
* `webContents.printToPDF()`
* `webContents.savePage()`
* `dialog.showMessageBox()`
* `dialog.showOpenDialog()`
* `dialog.showSaveDialog()`

### `Electron Helper (Render).app` and `Electron Helper (Plugin).app`
[TODO: fill in details about new Helpers]

## Breaking Changes

### `app.allowRendererProcessReuse` option
Groundwork for requiring any native Node modules that are loaded in the renderer process to be either NAPI or Context Aware. The main reasons for this change are for app performance, security benefits, and lessen maintenance. Read the full details in [this issue](https://github.com/electron/electron/issues/18397). This change is expected to complete in Electron v11.

Outline for change:
* Electron v6: option to disable site instance patches [#18396](https://github.com/electron/electron/pull/18396)
* Electron v7: first deprecation warning for non-context aware native modules
* Electron v8: deprecation warning for the default value of app.allowRendererProcessReuse to switch
* Electron v9: switch the default value of `app.allowRendererProcessReuse`
* Electron v10: deprecate the ability to change `app.allowRendererProcessReuse`
* Electron v11: remove the ability to change `app.allowRendererProcessReuse`

### other breaking changes
[TODO: need to provide details for the following bullet items or omit from blog post]
* Fixed disparity between `net` module headers and Node.js'  `http.IncomingMessage` headers. [#17517](https://github.com/electron/electron/pull/17517)
* Made `ShowItemInFolder` asynchronous with no return value. [#17121](https://github.com/electron/electron/pull/17121)
* Made app log directory creation opt-in with a new function `app.setAppLogsPath`. [#17841](https://github.com/electron/electron/pull/17841)

## Deprecations

## End of Support for 3.0.x

Per our [supported versions policy](https://electronjs.org/docs/tutorial/support#supported-versions), 3.0.x has reached end of life.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next
In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 7.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 7 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).