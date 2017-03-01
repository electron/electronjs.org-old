---
version: v1.6.1
permalink: /docs/tutorial/electron-versioning/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/electron-versioning/
  - /docs/v0.37.7/tutorial/electron-versioning/
  - /docs/v0.37.6/tutorial/electron-versioning/
  - /docs/v0.37.5/tutorial/electron-versioning/
  - /docs/v0.37.4/tutorial/electron-versioning/
  - /docs/v0.37.3/tutorial/electron-versioning/
  - /docs/v0.36.12/tutorial/electron-versioning/
  - /docs/v0.37.1/tutorial/electron-versioning/
  - /docs/v0.37.0/tutorial/electron-versioning/
  - /docs/v0.36.11/tutorial/electron-versioning/
  - /docs/v0.36.10/tutorial/electron-versioning/
  - /docs/v0.36.9/tutorial/electron-versioning/
  - /docs/v0.36.8/tutorial/electron-versioning/
  - /docs/v0.36.7/tutorial/electron-versioning/
  - /docs/v0.36.6/tutorial/electron-versioning/
  - /docs/v0.36.5/tutorial/electron-versioning/
  - /docs/v0.36.4/tutorial/electron-versioning/
  - /docs/v0.36.3/tutorial/electron-versioning/
  - /docs/v0.35.5/tutorial/electron-versioning/
  - /docs/v0.36.2/tutorial/electron-versioning/
  - /docs/v0.36.0/tutorial/electron-versioning/
  - /docs/v0.35.4/tutorial/electron-versioning/
  - /docs/v0.35.3/tutorial/electron-versioning/
  - /docs/v0.35.2/tutorial/electron-versioning/
  - /docs/v0.34.4/tutorial/electron-versioning/
  - /docs/v0.35.1/tutorial/electron-versioning/
  - /docs/v0.34.3/tutorial/electron-versioning/
  - /docs/v0.34.2/tutorial/electron-versioning/
  - /docs/v0.34.1/tutorial/electron-versioning/
  - /docs/v0.34.0/tutorial/electron-versioning/
  - /docs/v0.33.9/tutorial/electron-versioning/
  - /docs/v0.33.8/tutorial/electron-versioning/
  - /docs/v0.33.7/tutorial/electron-versioning/
  - /docs/v0.33.6/tutorial/electron-versioning/
  - /docs/v0.33.4/tutorial/electron-versioning/
  - /docs/v0.33.3/tutorial/electron-versioning/
  - /docs/v0.33.2/tutorial/electron-versioning/
  - /docs/v0.33.1/tutorial/electron-versioning/
  - /docs/v0.33.0/tutorial/electron-versioning/
  - /docs/v0.32.3/tutorial/electron-versioning/
  - /docs/v0.32.2/tutorial/electron-versioning/
  - /docs/v0.31.2/tutorial/electron-versioning/
  - /docs/v0.31.0/tutorial/electron-versioning/
  - /docs/v0.30.4/tutorial/electron-versioning/
  - /docs/v0.29.2/tutorial/electron-versioning/
  - /docs/v0.29.1/tutorial/electron-versioning/
  - /docs/v0.28.3/tutorial/electron-versioning/
  - /docs/v0.28.2/tutorial/electron-versioning/
  - /docs/v0.28.1/tutorial/electron-versioning/
  - /docs/v0.28.0/tutorial/electron-versioning/
  - /docs/v0.27.3/tutorial/electron-versioning/
  - /docs/v0.27.2/tutorial/electron-versioning/
  - /docs/v0.27.1/tutorial/electron-versioning/
  - /docs/v0.27.0/tutorial/electron-versioning/
  - /docs/v0.26.1/tutorial/electron-versioning/
  - /docs/v0.26.0/tutorial/electron-versioning/
  - /docs/v0.25.3/tutorial/electron-versioning/
  - /docs/v0.25.2/tutorial/electron-versioning/
  - /docs/v0.25.1/tutorial/electron-versioning/
  - /docs/v0.25.0/tutorial/electron-versioning/
  - /docs/v0.24.0/tutorial/electron-versioning/
  - /docs/v0.23.0/tutorial/electron-versioning/
  - /docs/v0.22.3/tutorial/electron-versioning/
  - /docs/v0.22.2/tutorial/electron-versioning/
  - /docs/v0.22.1/tutorial/electron-versioning/
  - /docs/v0.21.3/tutorial/electron-versioning/
  - /docs/v0.21.2/tutorial/electron-versioning/
  - /docs/v0.21.1/tutorial/electron-versioning/
  - /docs/v0.21.0/tutorial/electron-versioning/
  - /docs/v0.20.8/tutorial/electron-versioning/
  - /docs/v0.20.7/tutorial/electron-versioning/
  - /docs/v0.20.6/tutorial/electron-versioning/
  - /docs/v0.20.5/tutorial/electron-versioning/
  - /docs/v0.20.4/tutorial/electron-versioning/
  - /docs/v0.20.3/tutorial/electron-versioning/
  - /docs/v0.20.2/tutorial/electron-versioning/
  - /docs/v0.20.1/tutorial/electron-versioning/
  - /docs/v0.20.0/tutorial/electron-versioning/
  - /docs/latest/tutorial/electron-versioning/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/electron-versioning.md
title: Electron Versioning
excerpt: ''
sort_title: electron-versioning
---


<--

Greetings, Electron hacker!

This file is generated automatically, so it should not be edited.

To make changes, head over to the electron/electron repository:

https://github.com/electron/electron/blob/master/docs/tutorial/electron-versioning.md

-->

# Electron Versioning

If you are a seasoned Node developer, you are surely aware of `semver` - and might be used to giving your dependency management systems only rough guidelines rather than fixed version numbers. Due to the hard dependency on Node and Chromium, Electron is in a slightly more difficult position and does not follow semver. You should therefore always reference a specific version of Electron.

Version numbers are bumped using the following rules:

*   Major: For breaking changes in Electron's API - if you upgrade from `0.37.0` to `1.0.0`, you will have to update your app.
*   Minor: For major Chrome and minor Node upgrades; or significant Electron changes - if you upgrade from `1.0.0` to `1.1.0`, your app is supposed to still work, but you might have to work around small changes.
*   Patch: For new features and bug fixes - if you upgrade from `1.0.0` to `1.0.1`, your app will continue to work as-is.

If you are using `electron` or `electron-prebuilt`, we recommend that you set a fixed version number (`1.1.0` instead of `^1.1.0`) to ensure that all upgrades of Electron are a manual operation made by you, the developer.
