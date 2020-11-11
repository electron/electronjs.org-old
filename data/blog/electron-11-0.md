---
title: Electron 11.0.0
author:
- VerteDinde
- sofianguy
date: '2020-11-17'
---

Electron 11.0.0 has been released! It includes upgrades to Chromium `87`, V8 `8.7`, and Node.js `12.18.3`. We've added support for Apple silicon, and general improvements. Read below for more details!

---

The Electron team is excited to announce the release of Electron 11.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new support for Apple's upcoming silicon products. 

We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `87.xx`
    * [New in Chrome 86](https://developers.google.com/web/updates/2020/10/nic86)
    * [New in Chrome 87]()
* Node.js `12.18.3`
    * [Node 12.18.3 blog post](https://nodejs.org/en/blog/release/v12.18.3/)
* V8 `8.7`
    * [V8 8.6 blog post](https://v8.dev/blog/v8-release-86)
    * [V8 8.7 blog post](https://v8.dev/blog/v8-release-87)

### Highlight Features

* Support for Apple Silicon: As of Electron 11, Electron will be shipping separate versions of Electron for Intel Macs (x64) and Apple's upcoming Silicon hardware (arm64). You can learn more about how to get your Electron app [running on Apple Silicon here.](https://www.electronjs.org/blog/apple-silicon)
* Minimal changes to Electron APIs: To make upgrading Electron easier for app consumers, the Electron team shipped Electron 11 as a “quiet release”, with no changes to Electron APIs. Work for depreciating the remote module and requiring node modules to be context aware continued from previous releases (detailed below).

See the [11.0.0 release notes](https://github.com/electron/electron/releases/tag/v11.0.0) for a full list of new features and changes.

## Breaking Changes

No breaking changes were made in Electron 11. More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

To make upgrading easier for our app developers, Electron 11 was a quiet release. No Electron API changes or depreciations were made.

## End of Support for 8.x.y

Electron 8.x.y has reached end-of-support as per the project's [support policy](https://electronjs.org/docs/tutorial/support#supported-versions). Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 12.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 12.0 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### Continued Work for Deprecation of `remote` Module (in Electron 12)
We started work to remove the remote module in [Electron 9](https://www.electronjs.org/blog/electron-9-0) and we're continuing plans to remove the `remote` module. In Electron 12, we plan to continue refactor work for implementing [WeakRef](https://v8.dev/features/weak-references) as we have done in Electron 11. Please read and follow [this issue](https://github.com/electron/electron/issues/21408) for full plans and details for deprecation.

### Final Step for Requiring Native Node Modules to be Context Aware or N-API (in Electron 12)
From Electron 6 onwards, we've been laying the groundwork to require [native Node modules](https://nodejs.org/api/addons.html) loaded in the renderer process to be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Enforcing this change allows for stronger security, faster performance, and reduced maintenance workload. The final step of this plan is to remove the ability to disable render process reuse in Electron 12. Read [this issue](https://github.com/electron/electron/issues/18397) for full details including the proposed timeline.
