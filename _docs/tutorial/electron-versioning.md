---
version: v1.1.3
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/electron-versioning/
    - /docs/v0.25.0/tutorial/electron-versioning/
    - /docs/v0.26.0/tutorial/electron-versioning/
    - /docs/v0.27.0/tutorial/electron-versioning/
    - /docs/v0.28.0/tutorial/electron-versioning/
    - /docs/v0.29.0/tutorial/electron-versioning/
    - /docs/v0.30.0/tutorial/electron-versioning/
    - /docs/v0.31.0/tutorial/electron-versioning/
    - /docs/v0.32.0/tutorial/electron-versioning/
    - /docs/v0.33.0/tutorial/electron-versioning/
    - /docs/v0.34.0/tutorial/electron-versioning/
    - /docs/v0.35.0/tutorial/electron-versioning/
    - /docs/v0.36.0/tutorial/electron-versioning/
    - /docs/v0.36.3/tutorial/electron-versioning/
    - /docs/v0.36.4/tutorial/electron-versioning/
    - /docs/v0.36.5/tutorial/electron-versioning/
    - /docs/v0.36.6/tutorial/electron-versioning/
    - /docs/v0.36.7/tutorial/electron-versioning/
    - /docs/v0.36.8/tutorial/electron-versioning/
    - /docs/v0.36.9/tutorial/electron-versioning/
    - /docs/v0.36.10/tutorial/electron-versioning/
    - /docs/v0.36.11/tutorial/electron-versioning/
    - /docs/v0.37.0/tutorial/electron-versioning/
    - /docs/v0.37.1/tutorial/electron-versioning/
    - /docs/v0.37.2/tutorial/electron-versioning/
    - /docs/v0.37.3/tutorial/electron-versioning/
    - /docs/v0.37.4/tutorial/electron-versioning/
    - /docs/v0.37.5/tutorial/electron-versioning/
    - /docs/v0.37.6/tutorial/electron-versioning/
    - /docs/v0.37.7/tutorial/electron-versioning/
    - /docs/v0.37.8/tutorial/electron-versioning/
    - /docs/latest/tutorial/electron-versioning/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/electron-versioning.md'
title: "Electron Versioning"
sort_title: "electron versioning"
---

# Electron Versioning

If you are a seasoned Node developer, you are surely aware of `semver` - and
might be used to giving your dependency management systems only rough guidelines
rather than fixed version numbers. Due to the hard dependency on Node and
Chromium, Electron is in a slightly more difficult position and does not follow
semver. You should therefor always reference a specific version of Electron.

Version numbers are bumped using the following rules:

* Major: For breaking changes in Electron's API - if you upgrade from `0.37.0`
  to `1.0.0`, you will have to update your app.
* Minor: For major Chrome and minor Node upgrades; or significant Electron
  changes - if you upgrade from `1.0.0` to `1.1.0`, your app is supposed to
  still work, but you might have to work around small changes.
* Patch: For new features and bug fixes - if you upgrade from `1.0.0` to
  `1.0.1`, your app will continue to work as-is.

If you are using `electron-prebuilt`, we recommend that you set a fixed version
number (`1.1.0` instead of `^1.1.0`) to ensure that all upgrades of Electron are
a manual operation made by you, the developer.
