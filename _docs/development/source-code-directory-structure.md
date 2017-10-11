---
version: v1.7.9
permalink: /docs/development/source-code-directory-structure/
category: Development
redirect_from:
  - /docs/v0.37.8/development/source-code-directory-structure/
  - /docs/v0.37.7/development/source-code-directory-structure/
  - /docs/v0.37.6/development/source-code-directory-structure/
  - /docs/v0.37.5/development/source-code-directory-structure/
  - /docs/v0.37.4/development/source-code-directory-structure/
  - /docs/v0.37.3/development/source-code-directory-structure/
  - /docs/v0.37.1/development/source-code-directory-structure/
  - /docs/v0.37.0/development/source-code-directory-structure/
  - /docs/v0.36.12/development/source-code-directory-structure/
  - /docs/v0.36.11/development/source-code-directory-structure/
  - /docs/v0.36.10/development/source-code-directory-structure/
  - /docs/v0.36.9/development/source-code-directory-structure/
  - /docs/v0.36.8/development/source-code-directory-structure/
  - /docs/v0.36.7/development/source-code-directory-structure/
  - /docs/v0.36.6/development/source-code-directory-structure/
  - /docs/v0.36.5/development/source-code-directory-structure/
  - /docs/v0.36.4/development/source-code-directory-structure/
  - /docs/v0.36.3/development/source-code-directory-structure/
  - /docs/v0.36.2/development/source-code-directory-structure/
  - /docs/v0.36.0/development/source-code-directory-structure/
  - /docs/v0.35.5/development/source-code-directory-structure/
  - /docs/v0.35.4/development/source-code-directory-structure/
  - /docs/v0.35.3/development/source-code-directory-structure/
  - /docs/v0.35.2/development/source-code-directory-structure/
  - /docs/v0.35.1/development/source-code-directory-structure/
  - /docs/v0.34.4/development/source-code-directory-structure/
  - /docs/v0.34.3/development/source-code-directory-structure/
  - /docs/v0.34.2/development/source-code-directory-structure/
  - /docs/v0.34.1/development/source-code-directory-structure/
  - /docs/v0.34.0/development/source-code-directory-structure/
  - /docs/v0.33.9/development/source-code-directory-structure/
  - /docs/v0.33.8/development/source-code-directory-structure/
  - /docs/v0.33.7/development/source-code-directory-structure/
  - /docs/v0.33.6/development/source-code-directory-structure/
  - /docs/v0.33.4/development/source-code-directory-structure/
  - /docs/v0.33.3/development/source-code-directory-structure/
  - /docs/v0.33.2/development/source-code-directory-structure/
  - /docs/v0.33.1/development/source-code-directory-structure/
  - /docs/v0.33.0/development/source-code-directory-structure/
  - /docs/v0.32.3/development/source-code-directory-structure/
  - /docs/v0.32.2/development/source-code-directory-structure/
  - /docs/v0.31.2/development/source-code-directory-structure/
  - /docs/v0.31.0/development/source-code-directory-structure/
  - /docs/v0.30.4/development/source-code-directory-structure/
  - /docs/v0.29.2/development/source-code-directory-structure/
  - /docs/v0.29.1/development/source-code-directory-structure/
  - /docs/v0.28.3/development/source-code-directory-structure/
  - /docs/v0.28.2/development/source-code-directory-structure/
  - /docs/v0.28.1/development/source-code-directory-structure/
  - /docs/v0.28.0/development/source-code-directory-structure/
  - /docs/v0.27.3/development/source-code-directory-structure/
  - /docs/v0.27.2/development/source-code-directory-structure/
  - /docs/v0.27.1/development/source-code-directory-structure/
  - /docs/v0.27.0/development/source-code-directory-structure/
  - /docs/v0.26.1/development/source-code-directory-structure/
  - /docs/v0.26.0/development/source-code-directory-structure/
  - /docs/v0.25.3/development/source-code-directory-structure/
  - /docs/v0.25.2/development/source-code-directory-structure/
  - /docs/v0.25.1/development/source-code-directory-structure/
  - /docs/v0.25.0/development/source-code-directory-structure/
  - /docs/v0.24.0/development/source-code-directory-structure/
  - /docs/v0.23.0/development/source-code-directory-structure/
  - /docs/v0.22.3/development/source-code-directory-structure/
  - /docs/v0.22.2/development/source-code-directory-structure/
  - /docs/v0.22.1/development/source-code-directory-structure/
  - /docs/v0.21.3/development/source-code-directory-structure/
  - /docs/v0.21.2/development/source-code-directory-structure/
  - /docs/v0.21.1/development/source-code-directory-structure/
  - /docs/v0.21.0/development/source-code-directory-structure/
  - /docs/v0.20.8/development/source-code-directory-structure/
  - /docs/v0.20.7/development/source-code-directory-structure/
  - /docs/v0.20.6/development/source-code-directory-structure/
  - /docs/v0.20.5/development/source-code-directory-structure/
  - /docs/v0.20.4/development/source-code-directory-structure/
  - /docs/v0.20.3/development/source-code-directory-structure/
  - /docs/v0.20.2/development/source-code-directory-structure/
  - /docs/v0.20.1/development/source-code-directory-structure/
  - /docs/v0.20.0/development/source-code-directory-structure/
  - /docs/latest/development/source-code-directory-structure/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/source-code-directory-structure.md
title: Source Code Directory Structure
excerpt: ''
sort_title: source-code-directory-structure
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

    https://github.com/electron/electron/blob/master/docs/development/source-code-directory-structure.md

    Thanks!

-->
# Source Code Directory Structure

The source code of Electron is separated into a few parts, mostly following Chromium on the separation conventions.

You may need to become familiar with [Chromium's multi-process architecture](http://dev.chromium.org/developers/design-documents/multi-process-architecture) to understand the source code better.

## Structure of Source Code

```
Electron
├── atom/ - C++ source code.
|   ├── app/ - System entry code.
|   ├── browser/ - The frontend including the main window, UI, and all of the
|   |   main process things. This talks to the renderer to manage web pages.
|   |   ├── ui/ - Implementation of UI stuff for different platforms.
|   |   |   ├── cocoa/ - Cocoa specific source code.
|   |   |   ├── win/ - Windows GUI specific source code.
|   |   |   └── x/ - X11 specific source code.
|   |   ├── api/ - The implementation of the main process APIs.
|   |   ├── net/ - Network related code.
|   |   ├── mac/ - Mac specific Objective-C source code.
|   |   └── resources/ - Icons, platform-dependent files, etc.
|   ├── renderer/ - Code that runs in renderer process.
|   |   └── api/ - The implementation of renderer process APIs.
|   └── common/ - Code that used by both the main and renderer processes,
|       including some utility functions and code to integrate node's message
|       loop into Chromium's message loop.
|       └── api/ - The implementation of common APIs, and foundations of
|           Electron's built-in modules.
├── chromium_src/ - Source code that copied from Chromium.
├── default_app/ - The default page to show when Electron is started without
|   providing an app.
├── docs/ - Documentations.
├── lib/ - JavaScript source code.
|   ├── browser/ - Javascript main process initialization code.
|   |   └── api/ - Javascript API implementation.
|   ├── common/ - JavaScript used by both the main and renderer processes
|   |   └── api/ - Javascript API implementation.
|   └── renderer/ - Javascript renderer process initialization code.
|       └── api/ - Javascript API implementation.
├── spec/ - Automatic tests.
├── electron.gyp - Building rules of Electron.
└── common.gypi - Compiler specific settings and building rules for other
    components like `node` and `breakpad`.

```

## Structure of Other Directories

*   **script** - Scripts used for development purpose like building, packaging, testing, etc.
*   **tools** - Helper scripts used by gyp files, unlike `script`, scripts put here should never be invoked by users directly.
*   **vendor** - Source code of third party dependencies, we didn't use `third_party` as name because it would confuse it with the same directory in Chromium's source code tree.
*   **node_modules** - Third party node modules used for building.
*   **out** - Temporary output directory of `ninja`.
*   **dist** - Temporary directory created by `script/create-dist.py` script when creating a distribution.
*   **external_binaries** - Downloaded binaries of third-party frameworks which do not support building with `gyp`.

## Keeping Git Submodules Up to Date

The Electron repository has a few vendored dependencies, found in the [/vendor](https://github.com/electron/electron/tree/master/vendor) directory. Occasionally you might see a message like this when running `git status`:

```sh
$ git status

	modified:   vendor/libchromiumcontent (new commits)
	modified:   vendor/node (new commits)
```

To update these vendored dependencies, run the following command:

```sh
git submodule update --init --recursive
```

If you find yourself running this command often, you can create an alias for it in your `~/.gitconfig` file:

```
[alias]
	su = submodule update --init --recursive

```
