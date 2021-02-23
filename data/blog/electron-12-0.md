---
title: Electron 12.0.0
author:
- VerteDinde
- mlaurencin
- sofianguy
date: '2021-03-02'
---

Electron 12.0.0 has been released! It includes upgrades to Chromium `xx`, V8 `xx`, and Node.js `xx`. We've added (features), and general improvements. Read below for more details!

---

The Electron team is excited to announce the release of Electron 12.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `xx`
    * [New in Chrome 88]()
    * [New in Chrome 89]()
* Node.js `xx`
    * [Node 14.15.1 blog post]()
* V8 `8.x`
    * [V8 8.4 blog post]()
    * [V8 8.5 blog post]()

### Highlight Features

* One
* Two

See the [12.0.0 release notes](https://github.com/electron/electron/releases/tag/v12.0.0) for a full list of new features and changes.

## Breaking Changes

* Deprecation of `remote` Module: The `remote` module is now deprecated. Please read and follow [this issue](https://github.com/electron/electron/issues/21408) for more information.
* Requiring Native Node Modules to be Context Aware or N-API: Since Electron 6, we've been laying the groundwork to require [native Node modules](https://nodejs.org/api/addons.html) loaded in the renderer process to be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Enforcing this change allows for stronger security, faster performance, and reduced maintenance workload. We've removed the ability to disable render process reuse in Electron 12. Read [this issue](https://github.com/electron/electron/issues/18397) for full details.

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

To make upgrading easier for our app developers, Electron 11 was a quiet release. No Electron API changes or depreciations were made.

## End of Support for 9.x.y

Electron 9.x.y has reached end-of-support as per the project's [support policy](https://electronjs.org/docs/tutorial/support#supported-versions). Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 13.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 13.0 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

