---
version: v1.7.9
permalink: /docs/development/build-instructions-osx/
category: Development
redirect_from:
  - /docs/v0.37.8/development/build-instructions-osx/
  - /docs/v0.37.7/development/build-instructions-osx/
  - /docs/v0.37.6/development/build-instructions-osx/
  - /docs/v0.37.5/development/build-instructions-osx/
  - /docs/v0.37.4/development/build-instructions-osx/
  - /docs/v0.37.3/development/build-instructions-osx/
  - /docs/v0.37.1/development/build-instructions-osx/
  - /docs/v0.37.0/development/build-instructions-osx/
  - /docs/v0.36.12/development/build-instructions-osx/
  - /docs/v0.36.11/development/build-instructions-osx/
  - /docs/v0.36.10/development/build-instructions-osx/
  - /docs/v0.36.9/development/build-instructions-osx/
  - /docs/v0.36.8/development/build-instructions-osx/
  - /docs/v0.36.7/development/build-instructions-osx/
  - /docs/v0.36.6/development/build-instructions-osx/
  - /docs/v0.36.5/development/build-instructions-osx/
  - /docs/v0.36.4/development/build-instructions-osx/
  - /docs/v0.36.3/development/build-instructions-osx/
  - /docs/v0.36.2/development/build-instructions-osx/
  - /docs/v0.36.0/development/build-instructions-osx/
  - /docs/v0.35.5/development/build-instructions-osx/
  - /docs/v0.35.4/development/build-instructions-osx/
  - /docs/v0.35.3/development/build-instructions-osx/
  - /docs/v0.35.2/development/build-instructions-osx/
  - /docs/v0.35.1/development/build-instructions-osx/
  - /docs/v0.34.4/development/build-instructions-osx/
  - /docs/v0.34.3/development/build-instructions-osx/
  - /docs/v0.34.2/development/build-instructions-osx/
  - /docs/v0.34.1/development/build-instructions-osx/
  - /docs/v0.34.0/development/build-instructions-osx/
  - /docs/v0.33.9/development/build-instructions-osx/
  - /docs/v0.33.8/development/build-instructions-osx/
  - /docs/v0.33.7/development/build-instructions-osx/
  - /docs/v0.33.6/development/build-instructions-osx/
  - /docs/v0.33.4/development/build-instructions-osx/
  - /docs/v0.33.3/development/build-instructions-osx/
  - /docs/v0.33.2/development/build-instructions-osx/
  - /docs/v0.33.1/development/build-instructions-osx/
  - /docs/v0.33.0/development/build-instructions-osx/
  - /docs/v0.32.3/development/build-instructions-osx/
  - /docs/v0.32.2/development/build-instructions-osx/
  - /docs/v0.31.2/development/build-instructions-osx/
  - /docs/v0.31.0/development/build-instructions-osx/
  - /docs/v0.30.4/development/build-instructions-osx/
  - /docs/v0.29.2/development/build-instructions-osx/
  - /docs/v0.29.1/development/build-instructions-osx/
  - /docs/v0.28.3/development/build-instructions-osx/
  - /docs/v0.28.2/development/build-instructions-osx/
  - /docs/v0.28.1/development/build-instructions-osx/
  - /docs/v0.28.0/development/build-instructions-osx/
  - /docs/v0.27.3/development/build-instructions-osx/
  - /docs/v0.27.2/development/build-instructions-osx/
  - /docs/v0.27.1/development/build-instructions-osx/
  - /docs/v0.27.0/development/build-instructions-osx/
  - /docs/v0.26.1/development/build-instructions-osx/
  - /docs/v0.26.0/development/build-instructions-osx/
  - /docs/v0.25.3/development/build-instructions-osx/
  - /docs/v0.25.2/development/build-instructions-osx/
  - /docs/v0.25.1/development/build-instructions-osx/
  - /docs/v0.25.0/development/build-instructions-osx/
  - /docs/v0.24.0/development/build-instructions-osx/
  - /docs/v0.23.0/development/build-instructions-osx/
  - /docs/v0.22.3/development/build-instructions-osx/
  - /docs/v0.22.2/development/build-instructions-osx/
  - /docs/v0.22.1/development/build-instructions-osx/
  - /docs/v0.21.3/development/build-instructions-osx/
  - /docs/v0.21.2/development/build-instructions-osx/
  - /docs/v0.21.1/development/build-instructions-osx/
  - /docs/v0.21.0/development/build-instructions-osx/
  - /docs/v0.20.8/development/build-instructions-osx/
  - /docs/v0.20.7/development/build-instructions-osx/
  - /docs/v0.20.6/development/build-instructions-osx/
  - /docs/v0.20.5/development/build-instructions-osx/
  - /docs/v0.20.4/development/build-instructions-osx/
  - /docs/v0.20.3/development/build-instructions-osx/
  - /docs/v0.20.2/development/build-instructions-osx/
  - /docs/v0.20.1/development/build-instructions-osx/
  - /docs/v0.20.0/development/build-instructions-osx/
  - /docs/latest/development/build-instructions-osx/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/build-instructions-osx.md
title: Build Instructions (macOS)
excerpt: ''
sort_title: build-instructions-osx
---



<!--


                                      ::::
                                    :o+//+o:
                                    +o    oo-
                                    :o+//oo/+o/
                                      -::-   -oo:
                                               /s/
                      -::::::::-                :s/  :::--
                  :+oo+////////+:        -:/+oo/ :s:-///++oo+:
                /o+:                -/+oo+/:-     +o-      -:+o:
               /s:              -:+o+/:           -o+         :s/
              -s/            -/oo/:                /s-         +s-
              -s/         -/oo/-                   -s/         /s-
               oo       :+o/-                       oo         oo
               -s/    :oo/                          /s-       /s-
                :s/ :oo:              -::-          /s-      /s:
                  -+o/               /ssss/         :s:    -+o-
                 :o+--               /ssss/         :s:   :o+-
                :s/  +o:              -::-          /s-   --
               -s/    :+o/-                         /s-
               oo       -+o+-                       oo
              -s/         -/oo/-                   -s/
             -+soo+:         -/oo/:                /s-      /oooo+-
             o+   :s:           -:+o+/:-          -o+      /s:  -oo
             oo:--/s:       ::      -:+oo+/:-     -/-      /s/--:o+
              :+++/-        :s:          -:/+ooo++//////++oo//+o+:
                             /s:                --::::::--
                              /s/              /s-
                               :oo:          :oo:
                                 /oo/-    -/oo/
                                   -/+oooo+/-





                   _______  _______  _______  _______  __
                  |       ||       ||       ||       ||  |
                  |  _____||_     _||   _   ||    _  ||  |
                  | |_____   |   |  |  | |  ||   |_| ||  |
                  |_____  |  |   |  |  |_|  ||    ___||__|
                   _____| |  |   |  |       ||   |     __
                  |_______|  |___|  |_______||___|    |__|


    This file is generated automatically, so it should not be edited.

    To make changes, head over to the electron/electron repository:

    https://github.com/electron/electron/blob/master/docs/development/build-instructions-osx.md

    Thanks!

-->
# Build Instructions (macOS)

Follow the guidelines below for building Electron on macOS.

## Prerequisites

*   macOS >= 10.11.6
*   [Xcode](https://developer.apple.com/technologies/tools/) >= 8.2.1
*   [node.js](http://nodejs.org) (external)

If you are using the Python downloaded by Homebrew, you also need to install the following Python modules:

*   [pyobjc](https://pythonhosted.org/pyobjc/install.html)

## macOS SDK

If you're simply developing Electron and don't plan to redistribute your custom Electron build, you may skip this section.

For certain features (e.g. pinch-zoom) to work properly, you must target the macOS 10.10 SDK.

Official Electron builds are built with [Xcode 8.2.1](http://adcdownload.apple.com/Developer_Tools/Xcode_8.2.1/Xcode_8.2.1.xip), which does not contain the 10.10 SDK by default. To obtain it, first download and mount the [Xcode 6.4](http://developer.apple.com/devcenter/download.action?path=/Developer_Tools/Xcode_6.4/Xcode_6.4.dmg) DMG.

Then, assuming that the Xcode 6.4 DMG has been mounted at `/Volumes/Xcode` and that your Xcode 8.2.1 install is at `/Applications/Xcode.app`, run:

```bash
cp -r /Volumes/Xcode/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.10.sdk /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/
```

You will also need to enable Xcode to build against the 10.10 SDK:

*   Open `/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Info.plist`
*   Set the `MinimumSDKVersion` to `10.10`
*   Save the file

## Getting the Code

```bash
$ git clone https://github.com/electron/electron
```

## Bootstrapping

The bootstrap script will download all necessary build dependencies and create the build project files. Notice that we're using [ninja](https://ninja-build.org/) to build Electron so there is no Xcode project generated.

```bash
$ cd electron
$ ./script/bootstrap.py -v
```

## Building

Build both `Release` and `Debug` targets:

```bash
$ ./script/build.py
```

You can also only build the `Debug` target:

```bash
$ ./script/build.py -c D
```

After building is done, you can find `Electron.app` under `out/D`.

## 32bit Support

Electron can only be built for a 64bit target on macOS and there is no plan to support 32bit macOS in the future.

## Cleaning

To clean the build files:

```bash
$ npm run clean
```

To clean only `out` and `dist` directories:

```bash
$ npm run clean-build
```

**Note:** Both clean commands require running `bootstrap` again before building.

## Tests

See [Build System Overview: Tests]({{site.baseurl}}/docs/development/build-system-overview#tests)
