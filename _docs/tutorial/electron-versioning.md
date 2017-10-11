---
version: v1.7.9
permalink: /docs/tutorial/electron-versioning/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/electron-versioning/
  - /docs/v0.37.7/tutorial/electron-versioning/
  - /docs/v0.37.6/tutorial/electron-versioning/
  - /docs/v0.37.5/tutorial/electron-versioning/
  - /docs/v0.37.4/tutorial/electron-versioning/
  - /docs/v0.37.3/tutorial/electron-versioning/
  - /docs/v0.37.1/tutorial/electron-versioning/
  - /docs/v0.37.0/tutorial/electron-versioning/
  - /docs/v0.36.12/tutorial/electron-versioning/
  - /docs/v0.36.11/tutorial/electron-versioning/
  - /docs/v0.36.10/tutorial/electron-versioning/
  - /docs/v0.36.9/tutorial/electron-versioning/
  - /docs/v0.36.8/tutorial/electron-versioning/
  - /docs/v0.36.7/tutorial/electron-versioning/
  - /docs/v0.36.6/tutorial/electron-versioning/
  - /docs/v0.36.5/tutorial/electron-versioning/
  - /docs/v0.36.4/tutorial/electron-versioning/
  - /docs/v0.36.3/tutorial/electron-versioning/
  - /docs/v0.36.2/tutorial/electron-versioning/
  - /docs/v0.36.0/tutorial/electron-versioning/
  - /docs/v0.35.5/tutorial/electron-versioning/
  - /docs/v0.35.4/tutorial/electron-versioning/
  - /docs/v0.35.3/tutorial/electron-versioning/
  - /docs/v0.35.2/tutorial/electron-versioning/
  - /docs/v0.35.1/tutorial/electron-versioning/
  - /docs/v0.34.4/tutorial/electron-versioning/
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

    https://github.com/electron/electron/blob/master/docs/tutorial/electron-versioning.md

    Thanks!

-->
# Electron Versioning

If you've been using Node and npm for a while, you are probably aware of [Semantic Versioning](http://semver.org), or SemVer for short. It's a convention for specifying version numbers for software that helps communicate intentions to the users of your software.

## Overview of Semantic Versioning

Semantic versions are always made up of three numbers:

```
major.minor.patch

```

Semantic version numbers are bumped (incremented) using the following rules:

*   **Major** is for changes that break backwards compatibility.
*   **Minor** is for new features that don't break backwards compatibility.
*   **Patch** is for bug fixes and other minor changes.

A simple mnemonic for remembering this scheme is as follows:

```
breaking.feature.fix

```

## Electron Versioning

Due to its dependency on Node and Chromium, it is not possible for the Electron project to adhere to a SemVer policy. **You should therefore always reference a specific version of Electron.**

Electron version numbers are bumped using the following rules:

*   **Major** is for breaking changes in Electron's API. If you upgrade from `0.37.0` to `1.0.0`, you will have to make changes to your app.
*   **Minor** is for major Chrome and minor Node upgrades, or significant Electron changes. If you upgrade from `1.5.0` to `1.6.0`, your app is supposed to still work, but you might have to work around small changes.
*   **Patch** is for new features and bug fixes. If you upgrade from `1.6.2` to `1.6.3`, your app will continue to work as-is.

We recommend that you set a fixed version when installing Electron from npm:

```sh
npm install electron --save-exact --save-dev
```

The `--save-exact` flag will add `electron` to your `package.json` file without using a `^` or `~`, e.g. `1.6.2` instead of `^1.6.2`. This practice ensures that all upgrades of Electron are a manual operation made by you, the developer.

Alternatively, you can use the `~` prefix in your SemVer range, like `~1.6.2`. This will lock your major and minor version, but allow new patch versions to be installed.
