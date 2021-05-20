---
title: Electron 13.0.0
author:
- VerteDinde
- clavin
- georgexu99
date: '2021-05-25'
---

Electron 13.0.0 has been released! It includes upgrades to Chromium `91`, V8 `x.x` and Node.js `14.x`. We've added {highlighted changes}, and general improvements. Read below for more details!

---

The Electron team is excited to announce the release of Electron 13.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `91`
    * [New in Chrome 88](https://developer.chrome.com/blog/new-in-chrome-88/)
    * [New in Chrome 89](https://developer.chrome.com/blog/new-in-chrome-89/)
* Node.js `14.x`
    * [Node 14.16.0 blog post](https://nodejs.org/en/blog/release/v14.16.0/)
    * [Node 14.0.0 blog post](https://nodejs.org/en/blog/release/v14.0.0/)
* V8 `x.x`
    * [V8 8.8 blog post](https://v8.dev/blog/v8-release-88)
    * [V8 8.9 blog post](https://v8.dev/blog/v8-release-89)

### Highlight Features

* Added `process.contextId` used by `@electron/remote`. [#28251](https://github.com/electron/electron/pull/28251) 
* Added `process.contextIsolated` property that indicates whether the current renderer context has `contextIsolation` enabled. [#28252](https://github.com/electron/electron/pull/28252) 
* Added new `session.storagePath` API to get the path on disk for session-specific data. [#28866](https://github.com/electron/electron/pull/28866) 
* The `submitURL` option for `crashReporter.start` is no longer a required argument when `uploadToServer` is false. [#28283](https://github.com/electron/electron/pull/28283) 

See the [13.0.0 release notes](https://github.com/electron/electron/releases/tag/v13.0.0) for a full list of new features and changes.

## Breaking Changes

* Changed `session.setPermissionCheckHandler(handler)` to allow for `handler`'s first parameter, `webContents` to be `null`. [#19903](https://github.com/electron/electron/pull/19903)

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

* TBD

### Removed/Deprecated Changes

The following APIs have been removed or are now deprecated:

* Removed deprecated `shell.moveItemToTrash()`. [#26723](https://github.com/electron/electron/pull/26723)

## End of Support for 10.x.y

Electron 10.x.y has reached end-of-support as per the project's [support policy](https://electronjs.org/docs/tutorial/support#supported-versions). Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 14.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 14.0 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).
