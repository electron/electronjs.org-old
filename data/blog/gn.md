---
title: "Using GN to Build Electron"
author: nornagon
date: '2018-09-05'
---

Electron now uses GN to build itself. Here's a discussion of why.

---

# GYP and GN

When Electron was first released in 2013, Chromium's build configuration was written with [GYP], short for "Generate Your Projects".

In 2014, the Chromium project introduced a new build configuration tool called [GN] (short for "Generate [Ninja]") Chromium's build files were migrated to GN and GYP was removed from the source code.

Electron has historically kept a separation between the main [Electron code] and [libchromiumcontent], the part of Electron that wraps Chromium's 'content' submodule. Electron has carried on using GYP, while libchromiumcontent -- as a subset of Chromium -- switched to GN when Chromium did.

Like gears that don't quite mesh, there was friction between using the two build systems. Maintaining compatibility was error-prone, from compiler flags and `#defines` that needed to be meticulously kept in sync between Chromium, Node, V8, and Electron.

To address this, the Electron team has been working on moving everything to GN. Today, the [commit](https://github.com/electron/electron/pull/14097) to remove the last of the GYP code from Electron was landed in master.

# What this means for you

If you're contributing to Electron itself, the process of checking out and building Electron from `master` or 4.0.0 is very different than it was in 3.0.0 and earlier. See the [GN build instructions](https://github.com/electron/electron/blob/master/docs/development/build-instructions-gn.md) for details.

If you're developing an app with Electron, there are a few minor changes you might notice in the new Electron 4.0.0-nightly; but more than likely, Electron's change in build system will be totally transparent to you.

# What this means for Electron

GN is [faster](https://chromium.googlesource.com/chromium/src/tools/gn/+/48062805e19b4697c5fbd926dc649c78b6aaa138/README.md) than GYP and its files are more readable and maintainable. Moreover, we hope that using a single build configuration system will reduce the work required to upgrade Electron to new versions of Chromium.

 * It's already helped development on Electron 4.0.0 substantially because Chromium 67 removed support for MSVC and switched to building with Clang on Windows. With the GN build, we inherit all the compiler commands from Chromium directly, so we got the Clang build on Windows for free!

 * It's also made it easier for Electron to use [BoringSSL] in a unified build across Electron, Chromium, and Node -- something that was [problematic before](https://electronjs.org/blog/electron-internals-using-node-as-a-library#shared-library-or-static-library).


[BoringSSL]: https://boringssl.googlesource.com/boringssl/
[Electron code]: https://github.com/electron/electron
[GN]: https://gn.googlesource.com/gn/
[GYP]: https://gyp.gsrc.io/
[Ninja]: https://ninja-build.org/
[libchromiumcontent]: https://github.com/electron/libchromiumcontent
