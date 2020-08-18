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

See the [10.0.0 release notes](https://github.com/electron/electron/releases/tag/v10.0.0) for a full list of new features and changes.

## Breaking Changes

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes


### Deprecated APIs

The following APIs are now deprecated or removed:


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
