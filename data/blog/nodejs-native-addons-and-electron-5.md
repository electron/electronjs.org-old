---
title: Node.js Native Addons and Electron 5.0
author: BinaryMuse
date: '2019-02-01'
---

If you're having trouble using a native Node.js addon with Electron 5.0, there's a chance it needs to be updated to work with the most recent version of V8.

---

## Goodbye `v8::Handle`, Hello `v8::Local`

In 2014, the V8 team deprecated `v8::Handle` in favor of `v8::Local` for local handles. Electron 5.0 includes a version of V8 that has finally removed `v8::Handle` for good, and native Node.js addons that still use it will need to be updated before they can be used with Electron 5.0.

The required code change is minimal, but *every* native Node module that still uses `v8::Handle` will fail to build with Electron 5.0 and will need to be modified. The good news is that Node.js v12 will also include this V8 change, so any modules that use `v8::Handle` will need to be updated *anyway* to work with the upcoming version of Node.

## I maintain a native addon, how can I help?

If you maintain a native addon for Node.js, ensure you replace all occurrences of `v8::Handle` with `v8::Local`. The former was just an alias of the latter, so no other changes need to be made to address this specific issue.

You may also be interested in looking into [N-API](https://nodejs.org/api/n-api.html), which is maintained separately from V8 as a part of Node.js itself, and aims to insulate native addons from changes in the underlying JavaScript engine. You can find more information [in the N-API documentation on the Node.js website](https://nodejs.org/api/n-api.html#n_api_n_api).

## Help! I use a native addon in my app and it won't work!

If you're consuming a native addon for Node.js in your app and the native addon will not build because of this issue, check with the author of the addon to see if they've released a new version that fixes the problem. If not, reaching out to the author (or [opening a Pull Request!](https://help.github.com/articles/about-pull-requests/)) is probably your best bet.
