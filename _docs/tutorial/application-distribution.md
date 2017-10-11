---
version: v1.7.9
permalink: /docs/tutorial/application-distribution/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/application-distribution/
  - /docs/v0.37.7/tutorial/application-distribution/
  - /docs/v0.37.6/tutorial/application-distribution/
  - /docs/v0.37.5/tutorial/application-distribution/
  - /docs/v0.37.4/tutorial/application-distribution/
  - /docs/v0.37.3/tutorial/application-distribution/
  - /docs/v0.37.1/tutorial/application-distribution/
  - /docs/v0.37.0/tutorial/application-distribution/
  - /docs/v0.36.12/tutorial/application-distribution/
  - /docs/v0.36.11/tutorial/application-distribution/
  - /docs/v0.36.10/tutorial/application-distribution/
  - /docs/v0.36.9/tutorial/application-distribution/
  - /docs/v0.36.8/tutorial/application-distribution/
  - /docs/v0.36.7/tutorial/application-distribution/
  - /docs/v0.36.6/tutorial/application-distribution/
  - /docs/v0.36.5/tutorial/application-distribution/
  - /docs/v0.36.4/tutorial/application-distribution/
  - /docs/v0.36.3/tutorial/application-distribution/
  - /docs/v0.36.2/tutorial/application-distribution/
  - /docs/v0.36.0/tutorial/application-distribution/
  - /docs/v0.35.5/tutorial/application-distribution/
  - /docs/v0.35.4/tutorial/application-distribution/
  - /docs/v0.35.3/tutorial/application-distribution/
  - /docs/v0.35.2/tutorial/application-distribution/
  - /docs/v0.35.1/tutorial/application-distribution/
  - /docs/v0.34.4/tutorial/application-distribution/
  - /docs/v0.34.3/tutorial/application-distribution/
  - /docs/v0.34.2/tutorial/application-distribution/
  - /docs/v0.34.1/tutorial/application-distribution/
  - /docs/v0.34.0/tutorial/application-distribution/
  - /docs/v0.33.9/tutorial/application-distribution/
  - /docs/v0.33.8/tutorial/application-distribution/
  - /docs/v0.33.7/tutorial/application-distribution/
  - /docs/v0.33.6/tutorial/application-distribution/
  - /docs/v0.33.4/tutorial/application-distribution/
  - /docs/v0.33.3/tutorial/application-distribution/
  - /docs/v0.33.2/tutorial/application-distribution/
  - /docs/v0.33.1/tutorial/application-distribution/
  - /docs/v0.33.0/tutorial/application-distribution/
  - /docs/v0.32.3/tutorial/application-distribution/
  - /docs/v0.32.2/tutorial/application-distribution/
  - /docs/v0.31.2/tutorial/application-distribution/
  - /docs/v0.31.0/tutorial/application-distribution/
  - /docs/v0.30.4/tutorial/application-distribution/
  - /docs/v0.29.2/tutorial/application-distribution/
  - /docs/v0.29.1/tutorial/application-distribution/
  - /docs/v0.28.3/tutorial/application-distribution/
  - /docs/v0.28.2/tutorial/application-distribution/
  - /docs/v0.28.1/tutorial/application-distribution/
  - /docs/v0.28.0/tutorial/application-distribution/
  - /docs/v0.27.3/tutorial/application-distribution/
  - /docs/v0.27.2/tutorial/application-distribution/
  - /docs/v0.27.1/tutorial/application-distribution/
  - /docs/v0.27.0/tutorial/application-distribution/
  - /docs/v0.26.1/tutorial/application-distribution/
  - /docs/v0.26.0/tutorial/application-distribution/
  - /docs/v0.25.3/tutorial/application-distribution/
  - /docs/v0.25.2/tutorial/application-distribution/
  - /docs/v0.25.1/tutorial/application-distribution/
  - /docs/v0.25.0/tutorial/application-distribution/
  - /docs/v0.24.0/tutorial/application-distribution/
  - /docs/v0.23.0/tutorial/application-distribution/
  - /docs/v0.22.3/tutorial/application-distribution/
  - /docs/v0.22.2/tutorial/application-distribution/
  - /docs/v0.22.1/tutorial/application-distribution/
  - /docs/v0.21.3/tutorial/application-distribution/
  - /docs/v0.21.2/tutorial/application-distribution/
  - /docs/v0.21.1/tutorial/application-distribution/
  - /docs/v0.21.0/tutorial/application-distribution/
  - /docs/v0.20.8/tutorial/application-distribution/
  - /docs/v0.20.7/tutorial/application-distribution/
  - /docs/v0.20.6/tutorial/application-distribution/
  - /docs/v0.20.5/tutorial/application-distribution/
  - /docs/v0.20.4/tutorial/application-distribution/
  - /docs/v0.20.3/tutorial/application-distribution/
  - /docs/v0.20.2/tutorial/application-distribution/
  - /docs/v0.20.1/tutorial/application-distribution/
  - /docs/v0.20.0/tutorial/application-distribution/
  - /docs/latest/tutorial/application-distribution/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md
title: Application Distribution
excerpt: ''
sort_title: application-distribution
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

    https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md

    Thanks!

-->
# Application Distribution

To distribute your app with Electron, you need to download Electron's [prebuilt binaries](https://github.com/electron/electron/releases). Next, the folder containing your app should be named `app` and placed in Electron's resources directory as shown in the following examples. Note that the location of Electron's prebuilt binaries is indicated with `electron/` in the examples below.

On macOS:

```text
electron/Electron.app/Contents/Resources/app/
├── package.json
├── main.js
└── index.html
```

On Windows and Linux:

```text
electron/resources/app
├── package.json
├── main.js
└── index.html
```

Then execute `Electron.app` (or `electron` on Linux, `electron.exe` on Windows), and Electron will start as your app. The `electron` directory will then be your distribution to deliver to final users.

## Packaging Your App into a File

Apart from shipping your app by copying all of its source files, you can also package your app into an [asar](https://github.com/electron/asar) archive to avoid exposing your app's source code to users.

To use an `asar` archive to replace the `app` folder, you need to rename the archive to `app.asar`, and put it under Electron's resources directory like below, and Electron will then try to read the archive and start from it.

On macOS:

```text
electron/Electron.app/Contents/Resources/
└── app.asar
```

On Windows and Linux:

```text
electron/resources/
└── app.asar
```

More details can be found in [Application packaging]({{site.baseurl}}/docs/tutorial/application-packaging).

## Rebranding with Downloaded Binaries

After bundling your app into Electron, you will want to rebrand Electron before distributing it to users.

### Windows

You can rename `electron.exe` to any name you like, and edit its icon and other information with tools like [rcedit](https://github.com/atom/rcedit).

### macOS

You can rename `Electron.app` to any name you want, and you also have to rename the `CFBundleDisplayName`, `CFBundleIdentifier` and `CFBundleName` fields in the following files:

*   `Electron.app/Contents/Info.plist`
*   `Electron.app/Contents/Frameworks/Electron Helper.app/Contents/Info.plist`

You can also rename the helper app to avoid showing `Electron Helper` in the Activity Monitor, but make sure you have renamed the helper app's executable file's name.

The structure of a renamed app would be like:

```
MyApp.app/Contents
├── Info.plist
├── MacOS/
│   └── MyApp
└── Frameworks/
    ├── MyApp Helper EH.app
    |   ├── Info.plist
    |   └── MacOS/
    |       └── MyApp Helper EH
    ├── MyApp Helper NP.app
    |   ├── Info.plist
    |   └── MacOS/
    |       └── MyApp Helper NP
    └── MyApp Helper.app
        ├── Info.plist
        └── MacOS/
            └── MyApp Helper

```

### Linux

You can rename the `electron` executable to any name you like.

## Packaging Tools

Apart from packaging your app manually, you can also choose to use third party packaging tools to do the work for you:

*   [electron-forge](https://github.com/electron-userland/electron-forge)
*   [electron-builder](https://github.com/electron-userland/electron-builder)
*   [electron-packager](https://github.com/electron-userland/electron-packager)

## Rebranding by Rebuilding Electron from Source

It is also possible to rebrand Electron by changing the product name and building it from source. To do this you need to modify the `atom.gyp` file and have a clean rebuild.

### Creating a Custom Electron Fork

Creating a custom fork of Electron is almost certainly not something you will need to do in order to build your app, even for "Production Level" applications. Using a tool such as `electron-packager` or `electron-forge` will allow you to "Rebrand" Electron without having to do these steps.

You need to fork Electron when you have custom C++ code that you have patched directly into Electron, that either cannot be upstreamed, or has been rejected from the official version. As maintainers of Electron, we very much would like to make your scenario work, so please try as hard as you can to get your changes into the official version of Electron, it will be much much easier on you, and we appreciate your help.

#### Creating a Custom Release with surf-build

1.  Install [Surf](https://github.com/surf-build/surf), via npm: `npm install -g surf-build@latest`

2.  Create a new S3 bucket and create the following empty directory structure:

    ```
    - atom-shell/
      - symbols/
      - dist/

    ```

3.  Set the following Environment Variables:

*   `ELECTRON_GITHUB_TOKEN` - a token that can create releases on GitHub
*   `ELECTRON_S3_ACCESS_KEY`, `ELECTRON_S3_BUCKET`, `ELECTRON_S3_SECRET_KEY` - the place where you'll upload node.js headers as well as symbols
*   `ELECTRON_RELEASE` - Set to `true` and the upload part will run, leave unset and `surf-build` will just do CI-type checks, appropriate to run for every pull request.
*   `CI` - Set to `true` or else it will fail
*   `GITHUB_TOKEN` - set it to the same as `ELECTRON_GITHUB_TOKEN`
*   `SURF_TEMP` - set to `C:\Temp` on Windows to prevent path too long issues
*   `TARGET_ARCH` - set to `ia32` or `x64`

1.  In `script/upload.py`, you _must_ set `ELECTRON_REPO` to your fork (`MYORG/electron`), especially if you are a contributor to Electron proper.

2.  `surf-build -r https://github.com/MYORG/electron -s YOUR_COMMIT -n 'surf-PLATFORM-ARCH'`

3.  Wait a very, very long time for the build to complete.
