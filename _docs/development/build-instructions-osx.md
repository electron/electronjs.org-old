---
version: v1.0.1
category: Development
title: 'Build Instructions Osx'
redirect_from:
    - /docs/v0.24.0/development/build-instructions-osx/
    - /docs/v0.25.0/development/build-instructions-osx/
    - /docs/v0.26.0/development/build-instructions-osx/
    - /docs/v0.27.0/development/build-instructions-osx/
    - /docs/v0.28.0/development/build-instructions-osx/
    - /docs/v0.29.0/development/build-instructions-osx/
    - /docs/v0.30.0/development/build-instructions-osx/
    - /docs/v0.31.0/development/build-instructions-osx/
    - /docs/v0.32.0/development/build-instructions-osx/
    - /docs/v0.33.0/development/build-instructions-osx/
    - /docs/v0.34.0/development/build-instructions-osx/
    - /docs/v0.35.0/development/build-instructions-osx/
    - /docs/v0.36.0/development/build-instructions-osx/
    - /docs/v0.36.3/development/build-instructions-osx/
    - /docs/v0.36.4/development/build-instructions-osx/
    - /docs/v0.36.5/development/build-instructions-osx/
    - /docs/v0.36.6/development/build-instructions-osx/
    - /docs/v0.36.7/development/build-instructions-osx/
    - /docs/v0.36.8/development/build-instructions-osx/
    - /docs/v0.36.9/development/build-instructions-osx/
    - /docs/v0.36.10/development/build-instructions-osx/
    - /docs/v0.36.11/development/build-instructions-osx/
    - /docs/v0.37.0/development/build-instructions-osx/
    - /docs/v0.37.1/development/build-instructions-osx/
    - /docs/v0.37.2/development/build-instructions-osx/
    - /docs/v0.37.3/development/build-instructions-osx/
    - /docs/v0.37.4/development/build-instructions-osx/
    - /docs/v0.37.5/development/build-instructions-osx/
    - /docs/v0.37.6/development/build-instructions-osx/
    - /docs/v0.37.7/development/build-instructions-osx/
    - /docs/v0.37.8/development/build-instructions-osx/
    - /docs/v1.0.0/development/build-instructions-osx/
    - /docs/v1.0.1/development/build-instructions-osx/
    - /docs/latest/development/build-instructions-osx/
source_url: 'https://github.com/electron/electron/blob/master/docs/development/build-instructions-osx.md'
---

# Build Instructions (OS X)

Follow the guidelines below for building Electron on OS X.

## Prerequisites

* OS X >= 10.8
* [Xcode](https://developer.apple.com/technologies/tools/) >= 5.1
* [node.js](http://nodejs.org) (external)

If you are using the Python downloaded by Homebrew, you also need to install
following python modules:

* pyobjc

## Getting the Code

```bash
$ git clone https://github.com/electron/electron.git
```

## Bootstrapping

The bootstrap script will download all necessary build dependencies and create
the build project files. Notice that we're using [ninja](https://ninja-build.org/)
to build Electron so there is no Xcode project generated.

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

Electron can only be built for a 64bit target on OS X and there is no plan to
support 32bit OS X in future.

## Tests

Test your changes conform to the project coding style using:

```bash
$ ./script/cpplint.py
```

Test functionality using:

```bash
$ ./script/test.py
```
