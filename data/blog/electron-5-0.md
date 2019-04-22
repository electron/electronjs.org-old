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

A large part of Electron's functionality is provided by Chromium, Node.js, and V8, the core components that make up Electron. As such, a key goal for the Electron team is to keep up with changes to these projects as much as possible, providing developers who build Electron apps access to new web and JavaScript features. To this end, Electron 5 features major version bumps to each of these components; Electron v5.0.0 includes Chromium `73.0.3683.117`, Node `12.0.0`, and V8 `7.3.492.27`.

In addition, Electron 5 includes changes to Electron-specific APIs. You can find a summary of the major changes in Electron 5 below; for the full list of changes, check out the [Electron v5.0.0 release notes](https://github.com/electron/electron/releases/tag/v5.0.0).

### Promisification

Electron 5 contains changes as part of our [Promisification](https://github.com/electron/electron/blob/master/docs/api/modernization/promisification.md) initiative to convert callback-based functions in Electron to return Promises.  The following APIs were converted for Electron 5:
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

Three functions were changes or added to `systemPreferences` to access macOS systems
colors.  Those functions are:
* `systemPreferences.getAccentColor`
* `systemPreferences.getColor`
* `systemPreferences.getSystemColor`

### Process memory information

The function `process.getProcessMemoryInfo` has been added to get memory usage
statistics about the current process.

### Additional filtering for remote APIs.

In an effort to improve security but still allow use of the remote API, there are now
new remote events so that `remote.getBuiltin`, `remote.getCurrentWindow`, `remote.getCurrentWebContents` and `<webview>.getWebContents` can be filtered.

### Multiple BrowserViews on BrowserWindow

BrowserWindow now supports managing multiple BrowserViews within the same BrowserWindow.

## Breaking Changes

### Defaults for packaged apps

Packaged apps will now behave the same as the default app, which means that a default
application menu will be created unless the app has one and the `window-all-closed`
event will be automatically handled unless the app handles the event.

### Mixed sandbox

Mixed sandbox mode is now enabled by default.  Renderers launched with `sandbox: true`
will now be actually sandboxed, where previously they would only be sandboxed if mixed-sandbox mode was also enabled.

### Security improvements
The default values of `nodeIntegration` and `webviewTag` are now false to improve security.

### Spellchecker now asynchronous

The SpellCheck API has been changed to provide asynchronous results.

## Deprecations

The following breaking changes are planned for Electron 6.0, and thus are deprecated in Electron 5.0.

### Mksnapshot binaries for arm and arm64
Native binaries of mksnapshot for arm and arm64 are deprecated and will be removed in 6.0.0.  Snapshots can be created for arm and arm64 using the x64 binaries.

### ServiceWorker APIs on WebContents
Deprecated ServiceWorker APIs on WebContents in preparation for their removal.

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

The [App Feedback Program](https://electronjs.org/blog/app-feedback-program) we instituted during the development of Electron 3.0 was successful, so we've continued it during the development of 5.0 as well. To learn more about the App Feedback Program and to participate in future betas, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly.  The [tentative 6.0.0 schedule](https://github.com/electron/electron/blob/master/docs/tutorial/electron-timelines.md#600-release-schedule) maps out key dates in the Electron 6 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
