---
title: Electron 9.0.0
author:
- sofianguy
- VerteDinde
date: '2020-05-19'
---

Electron 9.0.0 has been released! It includes upgrades to Chromium `83`, V8 `8.3`, and Node.js `12.14`. We've added several new API integrations for our spellchecker feature, enabled PDF viewer, and much more!

---

The Electron team is excited to announce the release of Electron 9.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `83.0.4103.64`
    * [New in Chrome 81](https://developers.google.com/web/updates/2020/04/nic81)
    * [Chrome 82 was skipped](https://chromereleases.googleblog.com/2020/03/chrome-and-chrome-os-release-updates.html)
    * [New in Chrome 83](https://developers.google.com/web/updates/2020/05/nic83)
* Node.js `12.14.1`
    * [Node 12.14.1 blog post](https://nodejs.org/en/blog/release/v12.14.1/)
* V8 `8.3`
    * [V8 8.1 blog post](https://v8.dev/blog/v8-release-81)
    * [V8 8.3 blog post](https://v8.dev/blog/v8-release-83)

### Highlight Features

* Multiple improvements to the spellchecker feature. See more details in [#22128](https://github.com/electron/electron/pull/22128) and [#22368](https://github.com/electron/electron/pull/22368).
* Improved window events handler efficiency on Linux. [#23260](https://github.com/electron/electron/pull/23260).
* Enable PDF viewer. [#22131](https://github.com/electron/electron/pull/22131).

See the [9.0.0 release notes](https://github.com/electron/electron/releases/tag/v9.0.0) for a full list of new features and changes.

## Breaking Changes

* Deprecation warning when using `remote` without `enableRemoteModule: true`. [#21546](https://github.com/electron/electron/pull/21546)
    * This is the first step in our plans for deprecating the `remote` module and moving it to userland. You can read and follow [this issue](https://github.com/electron/electron/issues/21408) that details our reasons for this and includes a proposed timeline for deprecation.
* Set `app.enableRendererProcessReuse` to true by default. [#22336](https://github.com/electron/electron/pull/22336) 
    * This is continued work for a future requirement that native Node modules loaded in the renderer process be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Full info and proposed timeline is detailed in [this issue](https://github.com/electron/electron/issues/18397).
* Sending non-JavaScript objects over IPC now throws an exception. [#21560](https://github.com/electron/electron/pull/21560)
    * This behavior was depreciated in Electron 8.0. In Electron 9.0, the old serialization algorithm has been removed, and sending such non-serializable objects will now throw an "object could not be cloned" error.

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

* `shell` API changes:
   * The `shell.openItem` API has been replaced with an asynchronous `shell.openPath API`. [proposal](https://github.com/electron/governance/blob/master/wg-api/spec-documents/shell-openitem.md)
* `session`API changes:
   * Added `session.listWordsFromSpellCheckerDictionary` API to list custom words in the dictionary. [#22128](https://github.com/electron/electron/pull/22128)
   * Added `session.removeWordFromSpellCheckerDictionary` API to remove custom words in the dictionary. [#22368](https://github.com/electron/electron/pull/22368)
   * Added `session.serviceWorkerContext` API to access basic service worker info and receive console logs from service workers. [#22313](https://github.com/electron/electron/pull/22313)
* `app` API changes:
   * Added a new force parameter to `app.focus()` on macOS to allow apps to forcefully take focus. [#23447](https://github.com/electron/electron/pull/23447)
* `BrowserWindow` API changes:
   * Added support for property access to some getter/setter pairs on `BrowserWindow`. [#23208](https://github.com/electron/electron/pull/23208)

### Deprecated APIs

The following APIs are now deprecated or removed:

* `shell.openItem` API is now depreciated, and replaced with an asynchronous `shell.openPath API`.
* `<webview>.getWebContents`, which was deprecated in Electron 8.0, is now removed.
* `webFrame.setLayoutZoomLevelLimits`, which was deprecated in Electron 8.0, is now removed.

## End of Support for 6.x.y

Electron 6.x.y has reached end-of-support as per the project's
[support policy](https://electronjs.org/docs/tutorial/support#supported-versions).
Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 10.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 10.0 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### Change the default of `contextIsolation` from `false` to `true` (Starting in Electron 10)

Without contextIsolation, any code running in a renderer process can quite easily reach into Electron internals or an app's preload script. That code can then perform privileged actions that Electron wants to keep restricted.

Changing this default improves the default security of Electron apps, so that apps will need to deliberately opt in to the insecure behaviour. Electron will depreciate the current default of `contextIsolation` in Electron 10.0, and change to the new default (`true`) in Electron 12.0.

For more information on `contextIsolation`, how to enable it easily and it's security benefits please see our dedicated [Context Isolation Document](https://github.com/electron/electron/blob/master/docs/tutorial/context-isolation.md).
