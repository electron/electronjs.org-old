---
title: Electron 4.0.0
author: BinaryMuse
date: '2018-12-18'
---

The Electron team is excited to announce that the stable release of Electron 4 is now available! You can install it from [electronjs.org](https://electronjs.org/) or from npm via `npm install electron@latest`. The release is packed with upgrades, fixes, and new features, and we can't wait to see what you build with them. Read more for details about this release, and please share any feedback you have as you explore!

---

## What's New?

One area of focus for the Electron team is maintaining parity with the development cadences of Chromium, Node, and V8, which make up a large part of Electron's functionality, as much as possible. As such, Electron 4 features major version bumps to several core parts of Electron's toolchain, including Chromium `x.x.x`, Node `x.x.x`, and V8 `x.x.x`.

You can find descriptions of major changes in Electron 4 below; for the full list of changes, check out the [Electron 4.0.0 release notes](TODO_RELEASE_NOTES).

### Breaking Changes

#### Single Instance Locking

Previously, to make your app a Single Instance Application (insuring that only one instance of your app is running at any given time), you could use the `app.makeSingleInstance()` method. Starting in Electron 4.0, you must use `app.requestSingleInstanceLock()` instead. The return value of this method indicates whether or not this instance of your application successfully obtained the lock. If it failed to obtain the lock, you can assume that another instance of your application is already running with the lock and exit immediately.

For an example of using `requestSingleInstanceLock()` and information on nuanced behavior on various platforms, [see the documentation for `app.requestSingleInstanceLock()` and related methods](https://electronjs.org/docs/api/app#apprequestsingleinstancelock) and [the `second-instance` event](https://electronjs.org/docs/api/app#event-second-instance).

### Deprecations

The following breaking changes are planned for Electron 5.0, and thus are deprecated in Electron 4.0.

#### Node.js Integration Disabled for `nativeWindowOpen`-ed Windows

Starting in Electron 5.0, child windows opened with the `nativeWindowOpen` option will always have Node.js integration disabled.

TODO: what is the behavior in 4.0?

#### `webPreferences` Default Values

When creating a new `BrowerWindow` with the `webPreferences` option set, the following `webPreferences` option defaults are deprecated in favor of new defaults listed below:

| Property | Deprecated Default | New Default |
|----------|--------------------|-------------|
| `contextIsolation` | `false` | `true` |
| `nodeIntegration` | `true` | `false` |
| `webviewTag` | value of `nodeIntegration` if set, otherwise `true` | `false` |

TODO: does Electron 4.0 still use the old default values and just warn you?

## App Feedback Program

The [App Feedback Program](https://electronjs.org/blog/app-feedback-program) we instituted during the development of Electron 3.0 was successful, so we've continued it during the development of 4.0 as well. We'd like to extend a massive thank you to company1, company2, and other program members for their involvement during the 4.0 beta cycle. To learn more about the App Feedback Program and to participate in future betas, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

# What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. [See our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).
