---
title: Electron 8.0.0
author:
- jkleinsc
- sofianguy
date: '2020-02-04'
---

Electron 8.0.0 has been released! It includes upgrades to Chromium `80`, V8 `8.0`, and Node.js `12.13.0`. We've added ...., and much more!

---

The Electron team is excited to announce the release of Electron 8.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes
* Chromium `80.0.3987.75`
    * [New in Chrome 79](https://developers.google.com/web/updates/2019/12/nic79)
    * [New in Chrome 80](TODO)
* Node.js `12.13.0`
    * [Node 12.13.0 blog post](https://nodejs.org/en/blog/release/v12.13.0/)
* V8 `8.0`
    * [V8 7.9 blog post](https://v8.dev/blog/v8-release-79)
    * [V8 8.0 blog post](https://v8.dev/blog/v8-release-80)

### Highlight Features
* Implemented usage of Chrome's built-in spellchecker feature. See more details in [#20692](https://github.com/electron/electron/pull/20692) and [#21266](https://github.com/electron/electron/pull/21266).
* 

See the [8.0.0 release notes](https://github.com/electron/electron/releases/tag/v8.0.0) for a full list of new features and changes.

## Breaking Changes

* [#21952](https://github.com/electron/electron/pull/21952) Show module name in deprecation warning for context-aware modules.
    * This is continued work for a future requirement that native Node modules loaded in the renderer process be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Full info and proposed timeline is detailed in [this issue](https://github.com/electron/electron/issues/18397).
* [#20214](https://github.com/electron/electron/pull/20214) Refactored use of v8 serialization for IPC.
* 

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## End of Support for 5.x.y

Electron 5.x.y has reached end-of-support as per the project's
[support policy](https://electronjs.org/docs/tutorial/support#supported-versions).
Developers and applications are encouraged to upgrade to a newer version of Electron.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 9.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 9 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### Deprecation of `remote` Module (Starting in Electron 9)
Due to serious security liabilities, we are beginning plans to deprecate the [`remote` module](https://www.electronjs.org/docs/api/remote) starting in Electron 9. You can read and follow [this issue](https://github.com/electron/electron/issues/21408) that details our reasons for this and includes a proposed timeline for deprecation.
