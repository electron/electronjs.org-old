---
title: Electron 6.0.0
author: 
- sofianguy
date: '2019-07-30'
---

The Electron team is excited to announce the release of Electron 6.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). The release is packed with upgrades, fixes, and new features. We can't wait to see what you build with them! Continue reading for details about this release, and please share any feedback you have!

---

## What's New

This is the first Electron stable release to ever release on the *same day* as [Chrome stable](https://www.chromestatus.com/features/schedule) 🎉

Much of Electron's functionality is provided by the core components of Chromium, Node.js, and V8. Electron keeps up-to-date with these projects to provide our users with new JavaScript features, performance improvements, and security fixes. Each of these packages has a major version bump in Electron 6:

- Chromium `76.0.3809.77`
  - [New in 74](https://developers.google.com/web/updates/2019/04/nic74)
  - [New in 75](https://developers.google.com/web/updates/2019/06/nic75)
  - [New in 76](https://developers.google.com/web/updates/tags/chrome76)
- Node.js `12.4.0`
  - [Node 12.4.0 Blog Post](https://nodejs.org/en/blog/release/v12.4.0/)
- V8 [TODO: edit]

Electron 6 also includes improvements to Electron-specific APIs. A summary of the major changes is below; for the full list of changes, check out the [Electron v6.0.0 release notes](https://github.com/electron/electron/releases/tag/v6.0.0).

## Breaking Changes

## Deprecations

## End of Support for 3.0.x

Per our [supported versions policy](https://electronjs.org/docs/tutorial/support#supported-versions), 3.0.x has reached end of life.

## App Feedback Program

We continue to use our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) for testing. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release. If you'd like to participate or learn more, [check out our blog post about the program](https://electronjs.org/blog/app-feedback-program).

## What's Next
In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly. The [tentative 7.0.0 schedule](https://electronjs.org/docs/tutorial/electron-timelines) maps out key dates in the Electron 7 development life cycle. Also, [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md).