---
title: Electron 10.0.0
author:
- VerteDinde
- sofianguy
date: '2020-08-25'
---

Electron 10.0.0 has been released! It includes upgrades to Chromium `85`, V8 `8.5`, and Node.js `12.16`. We've added several new API integrations and improvements. Read below for more details!

---

The Electron team is excited to announce the release of Electron 10.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. 

In the Electron 10 release, we also made a change to our release notes. To make it easier to tell what's brand new in Electron 10 and what may have changed between Electron 10 and past releases, we now also include changes that were introduced to Electron 10, but backported to previous releases. We hope this makes it easier to apps to find new features and bug fixes when upgrading Electron.

We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `85.0.4183.84`
    * [New in Chrome 84](https://developers.google.com/web/updates/2020/07/nic84)
    * [New in Chrome 85](https://chromereleases.googleblog.com/2020/08/stable-channel-update-for-desktop_25.html)
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

* Changed the default value of `enableRemoteModule` to `false`. [#22091](https://github.com/electron/electron/pull/22091)
    * This is part of our plans for deprecating the `remote` module and moving it to userland. You can read and follow [this issue](https://github.com/electron/electron/issues/21408) that details our reasons for this and includes a proposed timeline for deprecation.
* Changed the default value of `app.allowRendererProcessReuse` to `true`. [#22336](https://github.com/electron/electron/pull/22336) (Also in [Electron 9](https://github.com/electron/electron/pull/22401))
   * This will prevent loading of non-context-aware native modules in renderer processes. 
   * You can read and follow [this issue](https://github.com/electron/electron/issues/18397) that details our reasons for this and includes a proposed timeline for deprecation.
* Fixed the positioning of window buttons on macOS when the OS locale is set to an RTL language (like Arabic or Hebrew). Frameless window apps may have to account for this change while styling their windows. [#22016](https://github.com/electron/electron/pull/22016) 

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

* Session: Can now check if a given `session` is persistent by calling the `ses.isPersistent()` API. [#22622](https://github.com/electron/electron/pull/22622)
* Contents: Added `contents.getBackgroundThrottling()` method and `contents.backgroundThrottling` property. [#21036](https://github.com/electron/electron/pull/21036)

### Deprecated APIs

The following APIs are now deprecated or removed:

* Removed the deprecated `currentlyLoggingPath` property of `netLog`. Additionally, `netLog.stopLogging` no longer returns the path to the recorded log. [#22732](https://github.com/electron/electron/pull/22732)
* Deprecated uncompressed crash uploads in `crashReporter`. [#23598](https://github.com/electron/electron/pull/23598)

## End of Support for 7.x.y

Electron 7.x.y has reached end-of-support as per the project's [support policy](https://electronjs.org/docs/tutorial/support#supported-versions). Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 11.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 11.0 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### Continued Work for Deprecation of `remote` Module (in Electron 11)
We started work to remove the remote module in [Electron 9](https://www.electronjs.org/blog/electron-9-0) and we're continuing plans to remove the `remote` module. In Electron 11, we plan to continue refactor work for implementing [WeakRef](https://v8.dev/features/weak-references) as we have done in Electron 10. Please read and follow [this issue](https://github.com/electron/electron/issues/21408) for full plans and details for deprecation.

### Final Step for Requiring Native Node Modules to be Context Aware or N-API (in Electron 12)
_Edit: Originally, this blog post stated that we would disable renderer process reuse in Electron 11. Disabling renderer process reuse has now been pushed to Electron 12._

From Electron 6 onwards, we've been laying the groundwork to require [native Node modules](https://nodejs.org/api/addons.html) loaded in the renderer process to be either [N-API](https://nodejs.org/api/n-api.html) or [Context Aware](https://nodejs.org/api/addons.html#addons_context_aware_addons). Enforcing this change allows for stronger security, faster performance, and reduced maintenance workload. The final step of this plan is to remove the ability to disable render process reuse in Electron 12. Read [this issue](https://github.com/electron/electron/issues/18397) for full details including the proposed timeline.
