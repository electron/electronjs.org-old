---
title: Electron 7.0.0
author:
- sofianguy
- ckerr
date: '2019-10-22'
---

Electron 7.0.0 has been released! It includes upgrades to Chromium 78, V8 7.8, and Node.js 12.8.1. We've added a Window on Arm 64 release, faster IPC methods, a new `nativeTheme` API, and much more!

---

The Electron team is excited to announce the release of Electron 7.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes
 * Stack Upgrades:

   | Stack    | Version in Electron 6 | Version in Electron 7 | What's New                                                                                                                                                                                                                                                                |
   |:---------|:----------------------|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | Chromium | 76.0.3809.146         | **78.0.3905.1**       | [77](https://developers.google.com/web/updates/2019/09/nic77), [78](https://developers.google.com/web/updates/2019/10/nic78)
   | V8       | 7.6                   | **7.8**               | [7.7](https://v8.dev/blog/v8-release-77), [7.8](https://v8.dev/blog/v8-release-78)
   | Node.js  | 12.4.0                | **12.8.1**            | [12.5](https://nodejs.org/en/blog/release/v12.5.0/), [12.6](https://nodejs.org/en/blog/release/v12.6.0/), [12.7](https://nodejs.org/en/blog/release/v12.7.0/), [12.8](https://nodejs.org/en/blog/release/v12.8.0/), [12.8.1](https://nodejs.org/en/blog/release/v12.8.1/)
 * Added Windows on Arm (64 bit) release. [#18591](https://github.com/electron/electron/pull/18591), [#20112](https://github.com/electron/electron/pull/20112)
 * Added `ipcRenderer.invoke()` and `ipcMain.handle()` for asynchronous request/response-style IPC. These are strongly recommended over the `remote` module. See this "[Electron’s ‘remote’ module considered harmful](https://medium.com/@nornagon/electrons-remote-module-considered-harmful-70d69500f31)" blog post for more information. [#18449](https://github.com/electron/electron/pull/18449)
 * Added `nativeTheme` API to read and respond to changes in the OS's theme and color scheme. [#19758](https://github.com/electron/electron/pull/19758), [#20486](https://github.com/electron/electron/pull/20486)
 * Switched to a new TypeScript Definitions [generator](https://github.com/electron/docs-parser). The resulting definitions are more precise; so if your TypeScript build fails, this is the likely cause. [#18103](https://github.com/electron/electron/pull/18103)

See the [7.0.0 release notes](https://github.com/electron/electron/releases/tag/v7.0.0) for a longer list of changes.

## Breaking Changes

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md) page.

 * Removed deprecated APIs:
     * Callback-based versions of functions that now use Promises. [#17907](https://github.com/electron/electron/pull/17907)
     * `Tray.setHighlightMode()` (macOS). [#18981](https://github.com/electron/electron/pull/18981)
     * `app.enableMixedSandbox()` [#17894](https://github.com/electron/electron/pull/17894)
     * `app.getApplicationMenu()`,
     * `app.setApplicationMenu()`,
     * `powerMonitor.querySystemIdleState()`,
     * `powerMonitor.querySystemIdleTime()`,
     * `webFrame.setIsolatedWorldContentSecurityPolicy()`,
     * `webFrame.setIsolatedWorldHumanReadableName()`,
     * `webFrame.setIsolatedWorldSecurityOrigin()` [#18159](https://github.com/electron/electron/pull/18159)
 * `Session.clearAuthCache()` no longer allows filtering the cleared cache entries. [#17970](https://github.com/electron/electron/pull/17970)
 * Native interfaces on macOS (menus, dialogs, etc.) now automatically match the dark mode setting on the user's machine. [#19226](https://github.com/electron/electron/pull/19226)
 * Updated the `electron` module to use `@electron/get`.  The minimum supported node version is now Node 8. [#18413](https://github.com/electron/electron/pull/18413)
 * The file `electron.asar` no longer exists. Any packaging scripts that depend on its existence should be updated. [#18577](https://github.com/electron/electron/pull/18577)

## End of Support for 4.x.y

Electron 4.x.y has reached end-of-support as per the project's
[support policy](https://electronjs.org/docs/tutorial/support#supported-versions).
Developers and applications are encouraged to upgrade to a newer version of Electron.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program)
for testing. Projects who participate in this program test Electron betas
on their apps; and in return, the new bugs they find are prioritized for
the stable release. If you'd like to participate or learn more,
[check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 8.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 8 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
