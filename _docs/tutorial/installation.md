---
version: v1.7.9
permalink: /docs/tutorial/installation/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/installation/
  - /docs/v0.37.7/tutorial/installation/
  - /docs/v0.37.6/tutorial/installation/
  - /docs/v0.37.5/tutorial/installation/
  - /docs/v0.37.4/tutorial/installation/
  - /docs/v0.37.3/tutorial/installation/
  - /docs/v0.37.1/tutorial/installation/
  - /docs/v0.37.0/tutorial/installation/
  - /docs/v0.36.12/tutorial/installation/
  - /docs/v0.36.11/tutorial/installation/
  - /docs/v0.36.10/tutorial/installation/
  - /docs/v0.36.9/tutorial/installation/
  - /docs/v0.36.8/tutorial/installation/
  - /docs/v0.36.7/tutorial/installation/
  - /docs/v0.36.6/tutorial/installation/
  - /docs/v0.36.5/tutorial/installation/
  - /docs/v0.36.4/tutorial/installation/
  - /docs/v0.36.3/tutorial/installation/
  - /docs/v0.36.2/tutorial/installation/
  - /docs/v0.36.0/tutorial/installation/
  - /docs/v0.35.5/tutorial/installation/
  - /docs/v0.35.4/tutorial/installation/
  - /docs/v0.35.3/tutorial/installation/
  - /docs/v0.35.2/tutorial/installation/
  - /docs/v0.35.1/tutorial/installation/
  - /docs/v0.34.4/tutorial/installation/
  - /docs/v0.34.3/tutorial/installation/
  - /docs/v0.34.2/tutorial/installation/
  - /docs/v0.34.1/tutorial/installation/
  - /docs/v0.34.0/tutorial/installation/
  - /docs/v0.33.9/tutorial/installation/
  - /docs/v0.33.8/tutorial/installation/
  - /docs/v0.33.7/tutorial/installation/
  - /docs/v0.33.6/tutorial/installation/
  - /docs/v0.33.4/tutorial/installation/
  - /docs/v0.33.3/tutorial/installation/
  - /docs/v0.33.2/tutorial/installation/
  - /docs/v0.33.1/tutorial/installation/
  - /docs/v0.33.0/tutorial/installation/
  - /docs/v0.32.3/tutorial/installation/
  - /docs/v0.32.2/tutorial/installation/
  - /docs/v0.31.2/tutorial/installation/
  - /docs/v0.31.0/tutorial/installation/
  - /docs/v0.30.4/tutorial/installation/
  - /docs/v0.29.2/tutorial/installation/
  - /docs/v0.29.1/tutorial/installation/
  - /docs/v0.28.3/tutorial/installation/
  - /docs/v0.28.2/tutorial/installation/
  - /docs/v0.28.1/tutorial/installation/
  - /docs/v0.28.0/tutorial/installation/
  - /docs/v0.27.3/tutorial/installation/
  - /docs/v0.27.2/tutorial/installation/
  - /docs/v0.27.1/tutorial/installation/
  - /docs/v0.27.0/tutorial/installation/
  - /docs/v0.26.1/tutorial/installation/
  - /docs/v0.26.0/tutorial/installation/
  - /docs/v0.25.3/tutorial/installation/
  - /docs/v0.25.2/tutorial/installation/
  - /docs/v0.25.1/tutorial/installation/
  - /docs/v0.25.0/tutorial/installation/
  - /docs/v0.24.0/tutorial/installation/
  - /docs/v0.23.0/tutorial/installation/
  - /docs/v0.22.3/tutorial/installation/
  - /docs/v0.22.2/tutorial/installation/
  - /docs/v0.22.1/tutorial/installation/
  - /docs/v0.21.3/tutorial/installation/
  - /docs/v0.21.2/tutorial/installation/
  - /docs/v0.21.1/tutorial/installation/
  - /docs/v0.21.0/tutorial/installation/
  - /docs/v0.20.8/tutorial/installation/
  - /docs/v0.20.7/tutorial/installation/
  - /docs/v0.20.6/tutorial/installation/
  - /docs/v0.20.5/tutorial/installation/
  - /docs/v0.20.4/tutorial/installation/
  - /docs/v0.20.3/tutorial/installation/
  - /docs/v0.20.2/tutorial/installation/
  - /docs/v0.20.1/tutorial/installation/
  - /docs/v0.20.0/tutorial/installation/
  - /docs/latest/tutorial/installation/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/installation.md'
title: Installation
excerpt: Tips for installing Electron
sort_title: installation
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

    https://github.com/electron/electron/blob/master/docs/tutorial/installation.md

    Thanks!

-->
# Installation

> Tips for installing Electron

To install prebuilt Electron binaries, use [`npm`](https://docs.npmjs.com/). The preferred method is to install Electron as a development dependency in your app:

```sh
npm install electron --save-dev --save-exact
```

The `--save-exact` flag is recommended as Electron does not follow semantic versioning. See the [versioning doc](https://electron.atom.io/docs/tutorial/electron-versioning/) for info on how to manage Electron versions in your apps.

## Global Installation

You can also install the `electron` command globally in your `$PATH`:

```sh
npm install electron -g
```

## Customization

If you want to change the architecture that is downloaded (e.g., `ia32` on an `x64` machine), you can use the `--arch` flag with npm install or set the `npm_config_arch` environment variable:

```shell
npm install --arch=ia32 electron
```

In addition to changing the architecture, you can also specify the platform (e.g., `win32`, `linux`, etc.) using the `--platform` flag:

```shell
npm install --platform=win32 electron
```

## Proxies

If you need to use an HTTP proxy you can [set these environment variables](https://github.com/request/request/tree/f0c4ec061141051988d1216c24936ad2e7d5c45d#controlling-proxy-behaviour-using-environment-variables).

## Troubleshooting

When running `npm install electron`, some users occasionally encounter installation errors.

In almost all cases, these errors are the result of network problems and not actual issues with the `electron` npm package. Errors like `ELIFECYCLE`, `EAI_AGAIN`, `ECONNRESET`, and `ETIMEDOUT` are all indications of such network problems. The best resolution is to try switching networks, or just wait a bit and try installing again.

You can also attempt to download Electron directly from [electron/electron/releases](https://github.com/electron/electron/releases) if installing via `npm` is failing.

If installation fails with an `EACCESS` error you may need to [fix your npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

If the above error persists, the [unsafe-perm](https://docs.npmjs.com/misc/config#unsafe-perm) flag may need to be set to true:

```sh
sudo npm install electron --unsafe-perm=true
```

On slower networks, it may be advisable to use the `--verbose` flag in order to show download progress:

```sh
npm install --verbose electron
```

If you need to force a re-download of the asset and the SHASUM file set the `force_no_cache` enviroment variable to `true`.
