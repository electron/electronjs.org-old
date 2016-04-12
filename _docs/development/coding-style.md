---
version: v0.37.5
category: Electron-Electron-55b8e9a
title: Docs
redirect-from:
    - 'http://electron.atom.io/docs/v0.24.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.25.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.26.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.27.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.28.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.29.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.30.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.31.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.32.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.33.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.34.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.35.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.3/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.4/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.5/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.6/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.7/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.8/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.9/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.10/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.36.11/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.37.0/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.37.1/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.37.2/development/coding-style/'
    - 'http://electron.atom.io/docs/v0.37.5/development/coding-style/'
source_url: 'https://github.com/electron/electron/blob/master/docs/development/coding-style.md'
---

# Coding Style

These are the style guidelines for coding in Electron.

You can run `npm run lint` to show any style issues detected by `cpplint` and
`eslint`.

## C++ and Python

For C++ and Python, we follow Chromium's [Coding
Style](http://www.chromium.org/developers/coding-style). There is also a
script `script/cpplint.py` to check whether all files conform.

The Python version we are using now is Python 2.7.

The C++ code uses a lot of Chromium's abstractions and types, so it's
recommended to get acquainted with them. A good place to start is
Chromium's [Important Abstractions and Data Structures](https://www.chromium.org/developers/coding-style/important-abstractions-and-data-structures)
document. The document mentions some special types, scoped types (that
automatically release their memory when going out of scope), logging mechanisms
etc.

## JavaScript

* Write [standard](http://npm.im/standard) JavaScript style.
* Files should **NOT** end with new line, because we want to match Google's
  styles.
* File names should be concatenated with `-` instead of `_`, e.g.
  `file-name.js` rather than `file_name.js`, because in
  [github/atom](https://github.com/github/atom) module names are usually in
  the `module-name` form. This rule only applies to `.js` files.
* Use newer ES6/ES2015 syntax where appropriate
  * [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    for requires and other constants
  * [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    for defining variables
  * [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    instead of `function () { }`
  * [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    instead of string concatenation using `+`

## API Names

When creating a new API, we should prefer getters and setters instead of
jQuery's one-function style. For example, `.getText()` and `.setText(text)`
are preferred to `.text([text])`. There is a
[discussion](https://github.com/electron/electron/issues/46) on this.
