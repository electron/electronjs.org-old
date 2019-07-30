---
title: Electron 6.0.0
author: 
- sofianguy
- ckerr
- codebytere
date: '2019-07-30'
---

The Electron team is excited to announce the release of Electron 6.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

---

## What's New

Today marks a first for the Electron project: this is the first time we've made a stable Electron release **on the same day** as the corresponding [Chrome stable release](https://www.chromestatus.com/features/schedule)! 🎉

Much of Electron's functionality is provided by the core components of Chromium, Node.js, and V8. Electron keeps up-to-date with these projects to provide our users with new JavaScript features, performance improvements, and security fixes. Each of these packages has a major version bump in Electron 6:

- Chromium `76.0.3809.88`
  - [New in 74](https://developers.google.com/web/updates/2019/04/nic74)
  - [New in 75](https://developers.google.com/web/updates/2019/06/nic75)
  - [New in 76](https://developers.google.com/web/updates/2019/07/nic76)
- Node.js `12.4.0`
  - [Node 12.4.0 blog post](https://nodejs.org/en/blog/release/v12.4.0/)
- V8 `7.6.303.22`
    - [V8 7.6 blog post](https://v8.dev/blog/v8-release-76)

This release also includes improvements to Electron's APIs. [The release notes](https://github.com/electron/electron/releases/tag/v6.0.0) have a more complete list, but here are the highlights:

### Promisification

Electron 6.0 continues the modernization [initiative](https://github.com/electron/electron/blob/master/docs/api/modernization/promisification.md) started in 5.0 to improve [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) support.

These functions now return Promises and still support older callback-based invocation:
 * `contentTracing.getCategories()` [#16583](https://github.com/electron/electron/pull/16583)
 * `contentTracing.getCategories()` [#16583](https://github.com/electron/electron/pull/16583)
 * `contentTracing.getTraceBufferUsage()` [#16600](https://github.com/electron/electron/pull/16600)
 * `contents.executeJavaScript()` [#17312](https://github.com/electron/electron/pull/17312)
 * `cookies.flushStore()` [#16464](https://github.com/electron/electron/pull/16464)
 * `cookies.get()` [#16464](https://github.com/electron/electron/pull/16464)
 * `cookies.remove()` [#16464](https://github.com/electron/electron/pull/16464)
 * `cookies.set()` [#16464](https://github.com/electron/electron/pull/16464)
 * `dialog.showCertificateTrustDialog()` [#17181](https://github.com/electron/electron/pull/17181)
 * `inAppPurchase.getProducts()` [#17355](https://github.com/electron/electron/pull/17355)
 * `inAppPurchase.purchaseProduct()`[#17355](https://github.com/electron/electron/pull/17355)
 * `netLog.stopLogging()` [#16862](https://github.com/electron/electron/pull/16862)
 * `session.clearAuthCache()` [#17259](https://github.com/electron/electron/pull/17259)
 * `session.clearCache()`  [#17185](https://github.com/electron/electron/pull/17185)
 * `session.clearHostResolverCache()` [#17229](https://github.com/electron/electron/pull/17229)
 * `session.clearStorageData()` [#17249](https://github.com/electron/electron/pull/17249)
 * `session.getBlobData()` [#17303](https://github.com/electron/electron/pull/17303)
 * `session.getCacheSize()`  [#17185](https://github.com/electron/electron/pull/17185)
 * `session.resolveProxy()` [#17222](https://github.com/electron/electron/pull/17222)
 * `session.setProxy()`  [#17222](https://github.com/electron/electron/pull/17222)
 * `webContents.hasServiceWorker()` [#16535](https://github.com/electron/electron/pull/16535)
 * `webContents.printToPDF()` [#16795](https://github.com/electron/electron/pull/16795)
 * `webContents.savePage()` [#16742](https://github.com/electron/electron/pull/16742)
 * `webFrame.executeJavaScript()` [#17312](https://github.com/electron/electron/pull/17312)
 * `webFrame.executeJavaScriptInIsolatedWorld()` [#17312](https://github.com/electron/electron/pull/17312)
 * `webviewTag.executeJavaScript()` [#17312](https://github.com/electron/electron/pull/17312)

These functions now have two forms, synchronous and Promise-based asynchronous:
 * `dialog.showMessageBox()`/`dialog.showMessageBoxSync()` [#17298](https://github.com/electron/electron/pull/17298)
 * `dialog.showOpenDialog()`/`dialog.showOpenDialogSync()` [#16973](https://github.com/electron/electron/pull/16973)
 * `dialog.showSaveDialog()`/`dialog.showSaveDialogSync()` [#17054](https://github.com/electron/electron/pull/17054)

These functions now return Promises:
 * `app.dock.show()` [#16904](https://github.com/electron/electron/pull/16904)

### `Electron Helper (Renderer).app`, `Electron Helper (GPU).app` and `Electron Helper (Plugin).app`

In order to enable the [hardened runtime](https://developer.apple.com/documentation/security/hardened_runtime_entitlements?language=objc), which restricts things like
writable-executable memory and loading code signed by a different Team
ID, special code signing entitlements needed to be granted to the Helper.

To keep these entitlements scoped to the process types that require them, Chromium [added](https://chromium-review.googlesource.com/c/chromium/src/+/1627456) 
three new variants of the Helper app: one for renderers (`Electron Helper (Renderer).app`), one for the GPU process (`Electron Helper (GPU).app`) and one for plugins (`Electron Helper (Plugin).app`).

Folks using `electron-osx-sign` to codesign their Electron app shouldn't have to make any changes to their build logic.
If you're codesigning your app with custom scripts, you should ensure
that the three new Helper applications are correctly codesigned.

In order to package your application correctly with these new helpers you need to be using `electron-packager@14.0.4` or higher.  If you are using `electron-builder` you should follow [this issue](https://github.com/electron-userland/electron-builder/issues/4104) to track support for these new helpers.

## Breaking Changes

 * This release begins laying the groundwork for a future requirement that native Node modules loaded in the renderer process be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). The reasons for this change are faster performance, stronger security, and reduced maintenance workload. Read the full details including the proposed timeline in [this issue](https://github.com/electron/electron/issues/18397). This change is expected to be completed in Electron v11.

 * `net.IncomingMessage` headers have [changed slightly](https://github.com/electron/electron/pull/17517#issue-263752903) to more closely match [Node.js behavior](https://nodejs.org/api/http.html#http_message_headers), particularly with the value of `set-cookie` and how duplicate headers are handled. [#17517](https://github.com/electron/electron/pull/17517).

 * `shell.showItemInFolder()` now returns void and is an asynchronous call. [#17121](https://github.com/electron/electron/pull/17121)

 * Apps must now explicitly set a log path by calling the new function `app.setAppLogPath()` before using `app.getPath('log')`. [#17841](https://github.com/electron/electron/pull/17841)

## End of Support for 3.x.y

Per our [support policy](https://electronjs.org/docs/tutorial/support#supported-versions), 3.x.y has reached end of life. Developers and applications are encouraged to upgrade to a newer version of Electron.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 7.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 7 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
