---
version: v1.6.2
permalink: /docs/development/upgrading-chrome/
category: Development
redirect_from:
  - /docs/v0.37.8/development/upgrading-chrome/
  - /docs/v0.37.7/development/upgrading-chrome/
  - /docs/v0.37.6/development/upgrading-chrome/
  - /docs/v0.37.5/development/upgrading-chrome/
  - /docs/v0.37.4/development/upgrading-chrome/
  - /docs/v0.37.3/development/upgrading-chrome/
  - /docs/v0.37.1/development/upgrading-chrome/
  - /docs/v0.37.0/development/upgrading-chrome/
  - /docs/v0.36.12/development/upgrading-chrome/
  - /docs/v0.36.11/development/upgrading-chrome/
  - /docs/v0.36.10/development/upgrading-chrome/
  - /docs/v0.36.9/development/upgrading-chrome/
  - /docs/v0.36.8/development/upgrading-chrome/
  - /docs/v0.36.7/development/upgrading-chrome/
  - /docs/v0.36.6/development/upgrading-chrome/
  - /docs/v0.36.5/development/upgrading-chrome/
  - /docs/v0.36.4/development/upgrading-chrome/
  - /docs/v0.36.3/development/upgrading-chrome/
  - /docs/v0.36.2/development/upgrading-chrome/
  - /docs/v0.36.0/development/upgrading-chrome/
  - /docs/v0.35.5/development/upgrading-chrome/
  - /docs/v0.35.4/development/upgrading-chrome/
  - /docs/v0.35.3/development/upgrading-chrome/
  - /docs/v0.35.2/development/upgrading-chrome/
  - /docs/v0.35.1/development/upgrading-chrome/
  - /docs/v0.34.4/development/upgrading-chrome/
  - /docs/v0.34.3/development/upgrading-chrome/
  - /docs/v0.34.2/development/upgrading-chrome/
  - /docs/v0.34.1/development/upgrading-chrome/
  - /docs/v0.34.0/development/upgrading-chrome/
  - /docs/v0.33.9/development/upgrading-chrome/
  - /docs/v0.33.8/development/upgrading-chrome/
  - /docs/v0.33.7/development/upgrading-chrome/
  - /docs/v0.33.6/development/upgrading-chrome/
  - /docs/v0.33.4/development/upgrading-chrome/
  - /docs/v0.33.3/development/upgrading-chrome/
  - /docs/v0.33.2/development/upgrading-chrome/
  - /docs/v0.33.1/development/upgrading-chrome/
  - /docs/v0.33.0/development/upgrading-chrome/
  - /docs/v0.32.3/development/upgrading-chrome/
  - /docs/v0.32.2/development/upgrading-chrome/
  - /docs/v0.31.2/development/upgrading-chrome/
  - /docs/v0.31.0/development/upgrading-chrome/
  - /docs/v0.30.4/development/upgrading-chrome/
  - /docs/v0.29.2/development/upgrading-chrome/
  - /docs/v0.29.1/development/upgrading-chrome/
  - /docs/v0.28.3/development/upgrading-chrome/
  - /docs/v0.28.2/development/upgrading-chrome/
  - /docs/v0.28.1/development/upgrading-chrome/
  - /docs/v0.28.0/development/upgrading-chrome/
  - /docs/v0.27.3/development/upgrading-chrome/
  - /docs/v0.27.2/development/upgrading-chrome/
  - /docs/v0.27.1/development/upgrading-chrome/
  - /docs/v0.27.0/development/upgrading-chrome/
  - /docs/v0.26.1/development/upgrading-chrome/
  - /docs/v0.26.0/development/upgrading-chrome/
  - /docs/v0.25.3/development/upgrading-chrome/
  - /docs/v0.25.2/development/upgrading-chrome/
  - /docs/v0.25.1/development/upgrading-chrome/
  - /docs/v0.25.0/development/upgrading-chrome/
  - /docs/v0.24.0/development/upgrading-chrome/
  - /docs/v0.23.0/development/upgrading-chrome/
  - /docs/v0.22.3/development/upgrading-chrome/
  - /docs/v0.22.2/development/upgrading-chrome/
  - /docs/v0.22.1/development/upgrading-chrome/
  - /docs/v0.21.3/development/upgrading-chrome/
  - /docs/v0.21.2/development/upgrading-chrome/
  - /docs/v0.21.1/development/upgrading-chrome/
  - /docs/v0.21.0/development/upgrading-chrome/
  - /docs/v0.20.8/development/upgrading-chrome/
  - /docs/v0.20.7/development/upgrading-chrome/
  - /docs/v0.20.6/development/upgrading-chrome/
  - /docs/v0.20.5/development/upgrading-chrome/
  - /docs/v0.20.4/development/upgrading-chrome/
  - /docs/v0.20.3/development/upgrading-chrome/
  - /docs/v0.20.2/development/upgrading-chrome/
  - /docs/v0.20.1/development/upgrading-chrome/
  - /docs/v0.20.0/development/upgrading-chrome/
  - /docs/latest/development/upgrading-chrome/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/upgrading-chrome.md
title: Upgrading Chrome Checklist
excerpt: ''
sort_title: upgrading-chrome
---


<!--

Greetings, Electron hacker!

This file is generated automatically, so it should not be edited.

To make changes, head over to the electron/electron repository:

https://github.com/electron/electron/blob/master/docs/development/upgrading-chrome.md

-->

# Upgrading Chrome Checklist

This document is meant to serve as an overview of what steps are needed on each Chrome upgrade in Electron.

These are things to do in addition to updating the Electron code for any Chrome/Node API changes.

*   Verify the new Chrome version is available from https://github.com/zcbenz/chromium-source-tarball/releases
*   Update the `VERSION` file at the root of the `electron/libchromiumcontent` repository
*   Update the `CLANG_REVISION` in `script/update-clang.sh` to match the version Chrome is using in `libchromiumcontent/src/tools/clang/scripts/update.py`
*   Upgrade `vendor/node` to the Node release that corresponds to the v8 version being used in the new Chrome release. See the v8 versions in Node on https://nodejs.org/en/download/releases for more details
*   Upgrade `vendor/crashpad` for any crash reporter changes needed
*   Upgrade `vendor/depot_tools` for any build tools changes needed
*   Update the `libchromiumcontent` SHA-1 to download in `script/lib/config.py`
*   Open a pull request on `electron/libchromiumcontent` with the changes
*   Open a pull request on `electron/brightray` with the changes
    *   This should include upgrading the `vendor/libchromiumcontent` submodule
*   Open a pull request on `electron/electron` with the changes
    *   This should include upgrading the submodules in `vendor/` as needed
*   Verify debug builds succeed on:
    *   macOS
    *   32-bit Windows
    *   64-bit Window
    *   32-bit Linux
    *   64-bit Linux
    *   ARM Linux
*   Verify release builds succeed on:
    *   macOS
    *   32-bit Windows
    *   64-bit Window
    *   32-bit Linux
    *   64-bit Linux
    *   ARM Linux
*   Verify tests pass on:
    *   macOS
    *   32-bit Windows
    *   64-bit Window
    *   32-bit Linux
    *   64-bit Linux
    *   ARM Linux

## Links

*   [Chrome Release Schedule](https://www.chromium.org/developers/calendar)
