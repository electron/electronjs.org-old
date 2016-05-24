---
version: v1.1.2
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/supported-platforms/
    - /docs/v0.25.0/tutorial/supported-platforms/
    - /docs/v0.26.0/tutorial/supported-platforms/
    - /docs/v0.27.0/tutorial/supported-platforms/
    - /docs/v0.28.0/tutorial/supported-platforms/
    - /docs/v0.29.0/tutorial/supported-platforms/
    - /docs/v0.30.0/tutorial/supported-platforms/
    - /docs/v0.31.0/tutorial/supported-platforms/
    - /docs/v0.32.0/tutorial/supported-platforms/
    - /docs/v0.33.0/tutorial/supported-platforms/
    - /docs/v0.34.0/tutorial/supported-platforms/
    - /docs/v0.35.0/tutorial/supported-platforms/
    - /docs/v0.36.0/tutorial/supported-platforms/
    - /docs/v0.36.3/tutorial/supported-platforms/
    - /docs/v0.36.4/tutorial/supported-platforms/
    - /docs/v0.36.5/tutorial/supported-platforms/
    - /docs/v0.36.6/tutorial/supported-platforms/
    - /docs/v0.36.7/tutorial/supported-platforms/
    - /docs/v0.36.8/tutorial/supported-platforms/
    - /docs/v0.36.9/tutorial/supported-platforms/
    - /docs/v0.36.10/tutorial/supported-platforms/
    - /docs/v0.36.11/tutorial/supported-platforms/
    - /docs/v0.37.0/tutorial/supported-platforms/
    - /docs/v0.37.1/tutorial/supported-platforms/
    - /docs/v0.37.2/tutorial/supported-platforms/
    - /docs/v0.37.3/tutorial/supported-platforms/
    - /docs/v0.37.4/tutorial/supported-platforms/
    - /docs/v0.37.5/tutorial/supported-platforms/
    - /docs/v0.37.6/tutorial/supported-platforms/
    - /docs/v0.37.7/tutorial/supported-platforms/
    - /docs/v0.37.8/tutorial/supported-platforms/
    - /docs/v1.0.0/tutorial/supported-platforms/
    - /docs/v1.0.1/tutorial/supported-platforms/
    - /docs/v1.1.0/tutorial/supported-platforms/
    - /docs/v1.1.1/tutorial/supported-platforms/
    - /docs/v1.1.2/tutorial/supported-platforms/
    - /docs/latest/tutorial/supported-platforms/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/supported-platforms.md'
title: "Supported Platforms"
sort_title: "supported platforms"
---

# Supported Platforms

Following platforms are supported by Electron:

### OS X

Only 64bit binaries are provided for OS X, and the minimum OS X version
supported is OS X 10.9.

### Windows

Windows 7 and later are supported, older operating systems are not supported
(and do not work).

Both `x86` and `amd64` (x64) binaries are provided for Windows. Please note, the
`ARM` version of Windows is not supported for now.

### Linux

The prebuilt `ia32`(`i686`) and `x64`(`amd64`) binaries of Electron are built on
Ubuntu 12.04, the `arm` binary is built against ARM v7 with hard-float ABI and
NEON for Debian Wheezy.

Whether the prebuilt binary can run on a distribution depends on whether the
distribution includes the libraries that Electron is linked to on the building
platform, so only Ubuntu 12.04 is guaranteed to work, but following platforms
are also verified to be able to run the prebuilt binaries of Electron:

* Ubuntu 12.04 and later
* Fedora 21
* Debian 8
