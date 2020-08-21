---
title: Electron 10.0.0
author:
- VerteDinde
- sofianguy
date: '2020-08-25'
---

Electron 10.0.0 has been released! It includes upgrades to Chromium `85`, V8 `8.5`, and Node.js `12.16`. We've added several new API integrations for our spellchecker feature, enabled PDF viewer, and much more!

---

The Electron team is excited to announce the release of Electron 10.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `85.` [TODO: final patch number]
    * [New in Chrome 84](https://developers.google.com/web/updates/2020/07/nic84)
    * [New in Chrome 85](TODO)
* Node.js `12.16.3`
    * [Node 12.16.3 blog post](https://nodejs.org/en/blog/release/v12.16.3/)
* V8 `8.5`
    * [V8 8.4 blog post](https://v8.dev/blog/v8-release-84)
    * [V8 8.5 blog post](https://v8.dev/blog/v8-release-85)

### Highlight Features

* Added `contents.getBackgroundThrottling()` method and `contents.backgroundThrottling` property. [#21036]
* Exposed the `desktopCapturer` module in the main process. [#23548](https://github.com/electron/electron/pull/23548) 
* Can now check if a given `session` is persistent by calling the `ses.isPersistent()` API. [#22622](https://github.com/electron/electron/pull/22622) 
* Resolve network issues that prevented RTC calls from being connected due to network IP address changes and ICE. (Chromium issue 1113227). [#24998](https://github.com/electron/electron/pull/24998)

See the [10.0.0 release notes](https://github.com/electron/electron/releases/tag/v10.0.0) for a full list of new features and changes.

## Breaking Changes

* Changed the default value of 'enableRemoteModule' to false. [#22091](https://github.com/electron/electron/pull/22091) 
* Changed the default value of `app.allowRendererProcessReuse` to `true`.
   * This will prevent loading of non-context-aware native modules in renderer processes.  See #18397 for more information on this change. [#22336](https://github.com/electron/electron/pull/22336) [#22401](Also in [9](https://github.com/electron/electron/pull/22401)
* Fixed the positioning of window buttons on MacOS when the OS locale is set to an RTL language (like Arabic or Hebrew). Frameless window apps may have to account for this change while styling their windows. [#22016](https://github.com/electron/electron/pull/22016) 

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

* Session: Can now check if a given `session` is persistent by calling the `ses.isPersistent()` API. [#22622](https://github.com/electron/electron/pull/22622) 

### Deprecated APIs

The following APIs are now deprecated or removed:

* Removed the deprecated `currentlyLoggingPath` property of `netLog`. Additionally, `netLog.stopLogging` no longer returns the path to the recorded log. [#22732](https://github.com/electron/electron/pull/22732)
* Deprecated uncompressed crash uploads in `crashReporter`. [#23598](https://github.com/electron/electron/pull/23598) 

## End of Support for 7.x.y

Electron 7.x.y has reached end-of-support as per the project's
[support policy](https://electronjs.org/docs/tutorial/support#supported-versions).
Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 11.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 11.0 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### Change the default of `contextIsolation` from `false` to `true` (Starting in Electron 10)

Without contextIsolation, any code running in a renderer process can quite easily reach into Electron internals or an app's preload script. That code can then perform privileged actions that Electron wants to keep restricted.

Changing this default improves the default security of Electron apps, so that apps will need to deliberately opt in to the insecure behaviour. Electron will depreciate the current default of `contextIsolation` in Electron 10.0, and change to the new default (`true`) in Electron 12.0.

For more information on `contextIsolation`, how to enable it easily and it's security benefits please see our dedicated [Context Isolation Document](https://github.com/electron/electron/blob/master/docs/tutorial/context-isolation.md).
