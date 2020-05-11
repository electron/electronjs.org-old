---
title: Electron 9.0.0
author:
- sofianguy
- VerteDinde
date: '2020-05-19'
---

Electron 9.0.0 has been released! It includes upgrades to Chromium `83`, V8 `8.3`, and Node.js `12.14`. We've added 

---

The Electron team is excited to announce the release of Electron 9.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `80.0.3987.86`
    * [New in Chrome 81](https://developers.google.com/web/updates/2020/04/nic81)
    * [Chrome 82 was skipped](https://chromereleases.googleblog.com/2020/03/chrome-and-chrome-os-release-updates.html)
    * [New in Chrome 83]() TODO
* Node.js `12.14.1`
    * [Node 12.14.1 blog post](https://nodejs.org/en/blog/release/v12.14.1/)
* V8 `8.3`
    * [V8 8.1 blog post](https://v8.dev/blog/v8-release-81)
    * [V8 8.3 blog post](https://v8.dev/blog/v8-release-83)

### Highlight Features

* 

See the [9.0.0 release notes](https://github.com/electron/electron/releases/tag/v9.0.0) for a full list of new features and changes.

## Breaking Changes

* Deprecation warming when using `remote` without `enableRemoteModle: true`. [#21546](https://github.com/electron/electron/pull/21546)
    * This is the first step in our plans for deprecating the `remote` module and moving it to userland. You can read and follow [this issue](https://github.com/electron/electron/issues/21408) that details our reasons for this and includes a proposed timeline for deprecation.
* Set `app.enableRendererProcessReuse` to true by default. [#22336](https://github.com/electron/electron/pull/22336) 
    * This is continued work for a future requirement that native Node modules loaded in the renderer process be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Full info and proposed timeline is detailed in [this issue](https://github.com/electron/electron/issues/18397).

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

* 

### Deprecated APIs

The following APIs are now deprecated:


## End of Support for 6.x.y

Electron 6.x.y has reached end-of-support as per the project's
[support policy](https://electronjs.org/docs/tutorial/support#supported-versions).
Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 10.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 10 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).
