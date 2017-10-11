---
version: v1.7.9
permalink: /docs/development/coding-style/
category: Development
redirect_from:
  - /docs/v0.37.8/development/coding-style/
  - /docs/v0.37.7/development/coding-style/
  - /docs/v0.37.6/development/coding-style/
  - /docs/v0.37.5/development/coding-style/
  - /docs/v0.37.4/development/coding-style/
  - /docs/v0.37.3/development/coding-style/
  - /docs/v0.37.1/development/coding-style/
  - /docs/v0.37.0/development/coding-style/
  - /docs/v0.36.12/development/coding-style/
  - /docs/v0.36.11/development/coding-style/
  - /docs/v0.36.10/development/coding-style/
  - /docs/v0.36.9/development/coding-style/
  - /docs/v0.36.8/development/coding-style/
  - /docs/v0.36.7/development/coding-style/
  - /docs/v0.36.6/development/coding-style/
  - /docs/v0.36.5/development/coding-style/
  - /docs/v0.36.4/development/coding-style/
  - /docs/v0.36.3/development/coding-style/
  - /docs/v0.36.2/development/coding-style/
  - /docs/v0.36.0/development/coding-style/
  - /docs/v0.35.5/development/coding-style/
  - /docs/v0.35.4/development/coding-style/
  - /docs/v0.35.3/development/coding-style/
  - /docs/v0.35.2/development/coding-style/
  - /docs/v0.35.1/development/coding-style/
  - /docs/v0.34.4/development/coding-style/
  - /docs/v0.34.3/development/coding-style/
  - /docs/v0.34.2/development/coding-style/
  - /docs/v0.34.1/development/coding-style/
  - /docs/v0.34.0/development/coding-style/
  - /docs/v0.33.9/development/coding-style/
  - /docs/v0.33.8/development/coding-style/
  - /docs/v0.33.7/development/coding-style/
  - /docs/v0.33.6/development/coding-style/
  - /docs/v0.33.4/development/coding-style/
  - /docs/v0.33.3/development/coding-style/
  - /docs/v0.33.2/development/coding-style/
  - /docs/v0.33.1/development/coding-style/
  - /docs/v0.33.0/development/coding-style/
  - /docs/v0.32.3/development/coding-style/
  - /docs/v0.32.2/development/coding-style/
  - /docs/v0.31.2/development/coding-style/
  - /docs/v0.31.0/development/coding-style/
  - /docs/v0.30.4/development/coding-style/
  - /docs/v0.29.2/development/coding-style/
  - /docs/v0.29.1/development/coding-style/
  - /docs/v0.28.3/development/coding-style/
  - /docs/v0.28.2/development/coding-style/
  - /docs/v0.28.1/development/coding-style/
  - /docs/v0.28.0/development/coding-style/
  - /docs/v0.27.3/development/coding-style/
  - /docs/v0.27.2/development/coding-style/
  - /docs/v0.27.1/development/coding-style/
  - /docs/v0.27.0/development/coding-style/
  - /docs/v0.26.1/development/coding-style/
  - /docs/v0.26.0/development/coding-style/
  - /docs/v0.25.3/development/coding-style/
  - /docs/v0.25.2/development/coding-style/
  - /docs/v0.25.1/development/coding-style/
  - /docs/v0.25.0/development/coding-style/
  - /docs/v0.24.0/development/coding-style/
  - /docs/v0.23.0/development/coding-style/
  - /docs/v0.22.3/development/coding-style/
  - /docs/v0.22.2/development/coding-style/
  - /docs/v0.22.1/development/coding-style/
  - /docs/v0.21.3/development/coding-style/
  - /docs/v0.21.2/development/coding-style/
  - /docs/v0.21.1/development/coding-style/
  - /docs/v0.21.0/development/coding-style/
  - /docs/v0.20.8/development/coding-style/
  - /docs/v0.20.7/development/coding-style/
  - /docs/v0.20.6/development/coding-style/
  - /docs/v0.20.5/development/coding-style/
  - /docs/v0.20.4/development/coding-style/
  - /docs/v0.20.3/development/coding-style/
  - /docs/v0.20.2/development/coding-style/
  - /docs/v0.20.1/development/coding-style/
  - /docs/v0.20.0/development/coding-style/
  - /docs/latest/development/coding-style/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/coding-style.md
title: Coding Style
excerpt: ''
sort_title: coding-style
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

    https://github.com/electron/electron/blob/master/docs/development/coding-style.md

    Thanks!

-->
# Coding Style

These are the style guidelines for coding in Electron.

You can run `npm run lint` to show any style issues detected by `cpplint` and `eslint`.

## C++ and Python

For C++ and Python, we follow Chromium's [Coding Style](http://www.chromium.org/developers/coding-style). You can use [clang-format]({{site.baseurl}}/docs/development/clang-format) to format the C++ code automatically. There is also a script `script/cpplint.py` to check whether all files conform.

The Python version we are using now is Python 2.7.

The C++ code uses a lot of Chromium's abstractions and types, so it's recommended to get acquainted with them. A good place to start is Chromium's [Important Abstractions and Data Structures](https://www.chromium.org/developers/coding-style/important-abstractions-and-data-structures) document. The document mentions some special types, scoped types (that automatically release their memory when going out of scope), logging mechanisms etc.

## JavaScript

*   Write [standard](http://npm.im/standard) JavaScript style.
*   File names should be concatenated with `-` instead of `_`, e.g. `file-name.js` rather than `file_name.js`, because in [github/atom](https://github.com/github/atom) module names are usually in the `module-name` form. This rule only applies to `.js` files.
*   Use newer ES6/ES2015 syntax where appropriate
    *   [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) for requires and other constants
    *   [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) for defining variables
    *   [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) instead of `function () { }`
    *   [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation using `+`

## Naming Things

Electron APIs uses the same capitalization scheme as Node.js:

*   When the module itself is a class like `BrowserWindow`, use `CamelCase`.
*   When the module is a set of APIs, like `globalShortcut`, use `mixedCase`.
*   When the API is a property of object, and it is complex enough to be in a separate chapter like `win.webContents`, use `mixedCase`.
*   For other non-module APIs, use natural titles, like `<webview> Tag` or `Process Object`.

When creating a new API, it is preferred to use getters and setters instead of jQuery's one-function style. For example, `.getText()` and `.setText(text)` are preferred to `.text([text])`. There is a [discussion](https://github.com/electron/electron/issues/46) on this.
