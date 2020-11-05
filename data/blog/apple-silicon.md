---
title: Apple Silicon Support
author: MarshallOfSound
date: '2020-10-15'
---

With Apple Silicon hardware being released later this year, what does the path look like for you to get your Electron app running on the new hardware?

---

With the release of Electron 11.0.0-beta.1, the Electron team is now shipping builds of Electron that run on the new Apple Silicon hardware that Apple plans on shipping later this year. You can grab the latest beta with `npm install electron@beta` or download it directly from our [releases website](https://electronjs.org/releases/stable).

## How does it work?

As of Electron 11, we will be shipping separate versions of Electron for Intel Macs and Apple Silicon Macs. Prior to this change, we were already shipping two artifacts, `darwin-x64` and `mas-x64`, with the latter being for Mac App Store compatibility usage. We are now shipping another two artifacts, `darwin-arm64` and `mas-arm64`, which are the Apple Silicon equivalents of the aforementioned artifacts.

## What do I need to do?

You will need to ship two versions of your app: one for x64 (Intel Mac) and one for arm64 (Apple Silicon). The good news is that [`electron-packager`](https://github.com/electron/electron-packager/), [`electron-rebuild`](https://github.com/electron/electron-rebuild/) and [`electron-forge`](https://github.com/electron-userland/electron-forge/) already support targeting the `arm64` architecture. As long as you're running the latest versions of those packages, your app should work flawlessly once you update the target architecture to `arm64`.

In the future, we will release a package that allows you to "merge" your `arm64` and `x64` apps into a single universal binary, but it's worth noting that this binary would be _huge_ and probably isn't ideal for shipping to users.

## Potential Issues

### Native Modules

As you are targeting a new architecture, you'll need to update several dependencies which may cause build issues. The minimum version of certain dependencies are included below for your reference.

| Dependency | Version Requirement |
|------------|---------------------|
| Xcode | `>=12.2.0` |
| `node-gyp` | `>=7.1.0` |
| `electron-rebuild` | `>=1.12.0` |
| `electron-packager` | `>=15.1.0` |

As a result of these dependency version requirements, you may have to fix/update certain native modules.  One thing of note is that the Xcode upgrade will introduce a new version of the macOS SDK, which may cause build failures for your native modules.


## How do I test it?

Currently, Apple Silicon applications only run on Apple Silicon hardware, which isn't commercially available at the time of writing this blog post. If you have a [Developer Transition Kit](https://developer.apple.com/programs/universal/), you can test your application on that. Otherwise, you'll have to wait for the release of production Apple Silicon hardware to test if your application works.

## What about Rosetta 2?

Rosetta 2 is Apple's latest iteration of their [Rosetta](https://en.wikipedia.org/wiki/Rosetta_(software)) technology, which allows you to run x64 Intel applications on their new arm64 Apple Silicon hardware. Although we believe that x64 Electron apps will run under Rosetta 2, there are some important things to note (and reasons why you should ship a native arm64 binary).

* Your app's performance will be significantly degraded. Electron / V8 uses [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) compilation for JavaScript, and due to how Rosetta works, you will effectively be running JIT twice (once in V8 and once in Rosetta).
* You lose the benefit of new technology in Apple Silicon, such as the increased memory page size.
* Did we mention that the performance will be **significantly** degraded?
