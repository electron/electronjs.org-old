---
title: Electron 7.0.0
author:
- sofianguy
date: '2019-10-22'
---

The Electron team is excited to announce the release of Electron 7.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

---

## What's New

Much of Electron's functionality is provided by the core components of Chromium, Node.js, and V8. Electron keeps up-to-date with these projects to provide our users with new JavaScript features, performance improvements, and security fixes. Each of these packages has a major version bump in Electron 7:

* Chromium `78.0.3905.1`
    * [New in 77](https://developers.google.com/web/updates/2019/09/nic77)
    * [New in 78](TODO when M78 releases on Oct 22)
* Node.js `12.8.1`
    *  [Node 12.8.1 blog post](https://nodejs.org/en/blog/release/v12.8.1/)
* V8 `7.8`
    * [V8 7.8 blog post](https://v8.dev/blog/v8-release-78)

This release also includes improvements to Electron's APIs. [The release notes](https://github.com/electron/electron/releases/tag/v7.0.0) have a more complete list, but here are some highlights:

* New `nativeTheme.themeSource` module for allowing apps to override Chromium and the OS's theme choice. See ref [#20486](https://github.com/electron/electron/pull/20486).
* Refactor of `netLog` to directly use network service now. See ref [#18289](https://github.com/electron/electron/pull/18289). This change has the following three impacts:
    * Fixed an issue where `netLog.startLogging()` would silently fail when called immediately during `app.on('ready')`
    * `netLog.startLogging()` now returns a promise which resolves when the net log has started recording
    * Deprecated `netLog.currentlyLoggingPath`
* Removal of `electron.asar`. Impact is the `electron.asar` file no longer exists and this means you should update your packaging scripts if you depended on `electron.asar`. See ref [#18577](https://github.com/electron/electron/pull/18577).
* Move to the new `@electron/docs-parser` module for improved markdown parsing. For full details on the migration see ref [#18103](https://github.com/electron/electron/pull/18103).

## Breaking Changes

Below is a complete list of breaking changes in Electron 7. Please visit our [Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md) for future breaking changes in coming versions of Electron.

* Continued promisification work of removing callbacks. See ref [#17907](https://github.com/electron/electron/pull/17907).
* Removal of deprecated APIs: `powerMonitor.querySystemIdleState()`, `powerMonitor.querySystemIdleTime()`, `webFrame.setIsolatedWorldContentSecurityPolicy()`, `webFrame.setIsolatedWorldHumanReadableName()`, `webFrame.setIsolatedWorldSecurityOrigin()`, `app.getApplicationMenu()`, `app.setApplicationMenu()`, and `app.enableMixedSandbox()`. See refs [#18159](https://github.com/electron/electron/pull/18159) and [#17894](https://github.com/electron/electron/pull/17894).
* Removal of deprecated `Tray.setHighlightMode` method for macOS and migrated Tray from native view to be compatible with Catalina (macOS). See ref [#18981](https://github.com/electron/electron/pull/18981).
* `session.clearAuthCache` no longer allows filtering the cleared cache entries. See ref [#17970](https://github.com/electron/electron/pull/17970).
* Default dark mode support on macOS. See ref [#19226](https://github.com/electron/electron/pull/19226).
* Updated the `electron` module to use `@electron/get` and minimum supported Node version is now Node v8. See ref [#18413](https://github.com/electron/electron/pull/18413).

## End of Support for 4.x.y

Per our [support policy](https://electronjs.org/docs/tutorial/support#supported-versions), 4.x.y has reached end of life. Developers and applications are encouraged to upgrade to a newer version of Electron.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 8.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 8 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
