---
title: "Switching to the GN Build System"
author: nornagon
date: '2018-09-05'
---

This is the main blurb.

---

# Moving from GYP to GN
​
When Electron was first released in $YEAR, Chromium's build configuration was
written with GYP, short for "Generate Your Projects".
​
In $YEAR, the Chromium project introduced a new build configuration tool,
called GN (short for "Generate Ninja"). Over a period of $DURATION, Chromium's
build files were migrated from GYP to GN, and in $YEAR the migration was
complete and GYP was removed from the Chromium source code.
​
Through all that time, Electron has been well-served by the separation between
libchromiumcontent, the part of Electron which wraps up the 'content' submodule
of Chromium, and the main Electron code: libchromiumcontent switched to
building with GN when Chromium did, and Electron carried on using GYP like it
always had.
​
However, like two gears that don't quite mesh, any time two different build
systems meet there is friction. From `#defines` that needed to be meticulously
kept in sync between Chromium, Node, V8 and Electron, to carefully matched
compiler flags, maintaining Electron's GYP build was getting harder and harder.
​
Over the past few months, the Electron team has been working on finally pulling
the plug on GYP and moving everything over to GN. Today, the commit to remove
the last of the GYP code from Electron was landed in master.
​
What does this mean for you? If you're developing an app with Electron, there
are a few minor changes you might notice in the new Electron 4.0.0-nightly, but
more than likely, Electron's change in build system will be totally transparent
to you.
​
If you're contributing to Electron itself, the process of checking out and
building Electron is very different from how it was in the era of GYP. See
[the new build instructions](...link...) for details.
​
- BoringSSL instead of OpenSSL...?
​
We hope that smoothing out the build configuration system will help to reduce
the amount of work required to upgrade to a new version of Chromium—in fact,
it's already helped us substantially, because Chromium 67 removed support for
MSVC and switched to building with Clang on Windows. With the GN build, we
inherit all the compiler commands from Chromium directly, so we got the Clang
build on Windows for free!
