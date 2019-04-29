---
title: Electron 5.0.0
author:
- BinaryMuse
- ckerr
- jkleinsc
date: '2019-04-23'
---

The Electron team is excited to announce the release of Electron 5.0.0! You can install it with npm via `npm install electron@latest` or download the tarballs from [our releases page](https://github.com/electron/electron/releases/tag/v5.0.0). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

---

## What's New?

Much of Electron's functionality is provided by the core components of Chromium, Node.js, and V8. Electron keeps up-to-date with these projects to provide our users with new JavaScript features, performance improvements, and security fixes. Each of these packages has a major version bump in Electron 5:

- Chromium `73.0.3683.119`
  - [New in 70](https://developers.google.com/web/updates/2018/10/nic70)
  - [New in 71](https://developers.google.com/web/updates/2018/12/nic71)
  - [New in 72](https://developers.google.com/web/updates/2019/01/nic72)
  - [New in 73](https://developers.google.com/web/updates/2019/03/nic73)
- Node.js `12.0.0`
  - [Node 12 Blog Post](https://nodejs.org/en/blog/release/v12.0.0/)
- V8 `7.3.492.27`.
  - [New JS Features](https://twitter.com/mathias/status/1120700101637353473)

Electron 5 also includes improvements to Electron-specific APIs. A summary of the major changes is below; for the full list of changes, check out the [Electron v5.0.0 release notes](https://github.com/electron/electron/releases/tag/v5.0.0).

### Promisification

Electron 5 continues [Promisification initiative](https://github.com/electron/electron/blob/5-0-x/docs/api/promisification.md) initiative to convert Electron's callback-based API to use Promises. These APIs were converted for Electron 5:
* `app.getFileIcon`
* `contentTracing.getCategories`
* `contentTracing.startRecording`
* `contentTracing.stopRecording`
* `debugger.sendCommand`
* Cookies API
* `shell.openExternal`
* `webContents.loadFile`
* `webContents.loadURL`
* `webContents.zoomLevel`
* `webContents.zoomFactor`
* `win.capturePage`

### System colors access for macOS

These functions were changed or added to `systemPreferences` to access macOS systems' colors:
* `systemPreferences.getAccentColor`
* `systemPreferences.getColor`
* `systemPreferences.getSystemColor`

### Process memory information

The function `process.getProcessMemoryInfo` has been added to get memory usage statistics about the current process.

### Additional filtering for remote APIs

To improve security in the `remote` API, new remote events have been added so that `remote.getBuiltin`, `remote.getCurrentWindow`, `remote.getCurrentWebContents` and `<webview>.getWebContents` can be [filtered](https://github.com/electron/electron/blob/master/docs/tutorial/security.md#13-disable-or-limit-creation-of-new-windows).

### Multiple BrowserViews on BrowserWindow

BrowserWindow now supports managing multiple BrowserViews within the same BrowserWindow.

## Breaking Changes

### Defaults for packaged apps

Packaged apps will now behave the same as the default app: a default application menu will be created unless the app has one and the `window-all-closed` event will be automatically handled unless the app handles the event.

### Mixed sandbox

Mixed sandbox mode is now enabled by default. Renderers launched with `sandbox: true` will now be actually sandboxed, where previously they would only be sandboxed if mixed-sandbox mode was also enabled.

### Security improvements
The default values of `nodeIntegration` and `webviewTag` are now `false` to improve security.

### Spellchecker now asynchronous

The SpellCheck API has been changed to provide [asynchronous results](https://github.com/electron/electron/blob/5-0-x/docs/api/web-frame.md#webframesetspellcheckproviderlanguage-provider).

## Deprecations

The following APIs are newly deprecated in Electron 5.0.0 and planned for removal in 6.0.0:

### Mksnapshot binaries for arm and arm64
Native binaries of mksnapshot for arm and arm64 are deprecated and will be removed in 6.0.0. Snapshots can be created for arm and arm64 using the x64 binaries.

### ServiceWorker APIs on WebContents
Deprecated ServiceWorker APIs on WebContents in preparation for their removal.
* `webContents.hasServiceWorker`
* `webContents.unregisterServiceWorker`

### Automatic modules with sandboxed webContents
In order to improve security, the following modules are being deprecated for use directly via `require` and will instead need to be included via `remote.require` in a sandboxed webcontents:
* `electron.screen`
* `child_process`
* `fs`
* `os`
* `path`

## webFrame Isolated World APIs
`webFrame.setIsolatedWorldContentSecurityPolicy`,`webFrame.setIsolatedWorldHumanReadableName`, `webFrame.setIsolatedWorldSecurityOrigin` have been deprecated in favor of `webFrame.setIsolatedWorldInfo`.

### Mixed sandbox
`enableMixedSandbox` and the `--enable-mixed-sandbox` command-line switch still exist for compatibility, but are deprecated and have no effect.

## End of support for 2.0.x

Per our [supported versions policy](https://electronjs.org/docs/tutorial/support#supported-versions), 2.0.x has reached end of life.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 6.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines#600-release-schedule) maps out key dates in the Electron 6 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
