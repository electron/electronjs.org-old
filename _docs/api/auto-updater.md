---
version: v1.7.9
permalink: /docs/api/auto-updater/
category: API
redirect_from:
  - /docs/v0.37.8/api/auto-updater/
  - /docs/v0.37.7/api/auto-updater/
  - /docs/v0.37.6/api/auto-updater/
  - /docs/v0.37.5/api/auto-updater/
  - /docs/v0.37.4/api/auto-updater/
  - /docs/v0.37.3/api/auto-updater/
  - /docs/v0.37.1/api/auto-updater/
  - /docs/v0.37.0/api/auto-updater/
  - /docs/v0.36.12/api/auto-updater/
  - /docs/v0.36.11/api/auto-updater/
  - /docs/v0.36.10/api/auto-updater/
  - /docs/v0.36.9/api/auto-updater/
  - /docs/v0.36.8/api/auto-updater/
  - /docs/v0.36.7/api/auto-updater/
  - /docs/v0.36.6/api/auto-updater/
  - /docs/v0.36.5/api/auto-updater/
  - /docs/v0.36.4/api/auto-updater/
  - /docs/v0.36.3/api/auto-updater/
  - /docs/v0.36.2/api/auto-updater/
  - /docs/v0.36.0/api/auto-updater/
  - /docs/v0.35.5/api/auto-updater/
  - /docs/v0.35.4/api/auto-updater/
  - /docs/v0.35.3/api/auto-updater/
  - /docs/v0.35.2/api/auto-updater/
  - /docs/v0.35.1/api/auto-updater/
  - /docs/v0.34.4/api/auto-updater/
  - /docs/v0.34.3/api/auto-updater/
  - /docs/v0.34.2/api/auto-updater/
  - /docs/v0.34.1/api/auto-updater/
  - /docs/v0.34.0/api/auto-updater/
  - /docs/v0.33.9/api/auto-updater/
  - /docs/v0.33.8/api/auto-updater/
  - /docs/v0.33.7/api/auto-updater/
  - /docs/v0.33.6/api/auto-updater/
  - /docs/v0.33.4/api/auto-updater/
  - /docs/v0.33.3/api/auto-updater/
  - /docs/v0.33.2/api/auto-updater/
  - /docs/v0.33.1/api/auto-updater/
  - /docs/v0.33.0/api/auto-updater/
  - /docs/v0.32.3/api/auto-updater/
  - /docs/v0.32.2/api/auto-updater/
  - /docs/v0.31.2/api/auto-updater/
  - /docs/v0.31.0/api/auto-updater/
  - /docs/v0.30.4/api/auto-updater/
  - /docs/v0.29.2/api/auto-updater/
  - /docs/v0.29.1/api/auto-updater/
  - /docs/v0.28.3/api/auto-updater/
  - /docs/v0.28.2/api/auto-updater/
  - /docs/v0.28.1/api/auto-updater/
  - /docs/v0.28.0/api/auto-updater/
  - /docs/v0.27.3/api/auto-updater/
  - /docs/v0.27.2/api/auto-updater/
  - /docs/v0.27.1/api/auto-updater/
  - /docs/v0.27.0/api/auto-updater/
  - /docs/v0.26.1/api/auto-updater/
  - /docs/v0.26.0/api/auto-updater/
  - /docs/v0.25.3/api/auto-updater/
  - /docs/v0.25.2/api/auto-updater/
  - /docs/v0.25.1/api/auto-updater/
  - /docs/v0.25.0/api/auto-updater/
  - /docs/v0.24.0/api/auto-updater/
  - /docs/v0.23.0/api/auto-updater/
  - /docs/v0.22.3/api/auto-updater/
  - /docs/v0.22.2/api/auto-updater/
  - /docs/v0.22.1/api/auto-updater/
  - /docs/v0.21.3/api/auto-updater/
  - /docs/v0.21.2/api/auto-updater/
  - /docs/v0.21.1/api/auto-updater/
  - /docs/v0.21.0/api/auto-updater/
  - /docs/v0.20.8/api/auto-updater/
  - /docs/v0.20.7/api/auto-updater/
  - /docs/v0.20.6/api/auto-updater/
  - /docs/v0.20.5/api/auto-updater/
  - /docs/v0.20.4/api/auto-updater/
  - /docs/v0.20.3/api/auto-updater/
  - /docs/v0.20.2/api/auto-updater/
  - /docs/v0.20.1/api/auto-updater/
  - /docs/v0.20.0/api/auto-updater/
  - /docs/latest/api/auto-updater/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/auto-updater.md'
title: autoUpdater
excerpt: Enable apps to automatically update themselves.
sort_title: auto-updater
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

    https://github.com/electron/electron/blob/master/docs/api/auto-updater.md

    Thanks!

-->
# autoUpdater

> Enable apps to automatically update themselves.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

The `autoUpdater` module provides an interface for the [Squirrel](https://github.com/Squirrel) framework.

You can quickly launch a multi-platform release server for distributing your application by using one of these projects:

*   [nuts](https://github.com/GitbookIO/nuts): _A smart release server for your applications, using GitHub as a backend. Auto-updates with Squirrel (Mac & Windows)_
*   [electron-release-server](https://github.com/ArekSredzki/electron-release-server): _A fully featured, self-hosted release server for electron applications, compatible with auto-updater_
*   [squirrel-updates-server](https://github.com/Aluxian/squirrel-updates-server): _A simple node.js server for Squirrel.Mac and Squirrel.Windows which uses GitHub releases_
*   [squirrel-release-server](https://github.com/Arcath/squirrel-release-server): _A simple PHP application for Squirrel.Windows which reads updates from a folder. Supports delta updates._

## Platform notices

Though `autoUpdater` provides a uniform API for different platforms, there are still some subtle differences on each platform.

### macOS

On macOS, the `autoUpdater` module is built upon [Squirrel.Mac](https://github.com/Squirrel/Squirrel.Mac), meaning you don't need any special setup to make it work. For server-side requirements, you can read [Server Support](https://github.com/Squirrel/Squirrel.Mac#server-support). Note that [App Transport Security](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW35) (ATS) applies to all requests made as part of the update process. Apps that need to disable ATS can add the `NSAllowsArbitraryLoads` key to their app's plist.

**Note:** Your application must be signed for automatic updates on macOS. This is a requirement of `Squirrel.Mac`.

### Windows

On Windows, you have to install your app into a user's machine before you can use the `autoUpdater`, so it is recommended that you use the [electron-winstaller](https://github.com/electron/windows-installer), [electron-forge](https://github.com/electron-userland/electron-forge) or the [grunt-electron-installer](https://github.com/electron/grunt-electron-installer) package to generate a Windows installer.

When using [electron-winstaller](https://github.com/electron/windows-installer) or [electron-forge](https://github.com/electron-userland/electron-forge) make sure you do not try to update your app [the first time it runs](https://github.com/electron/windows-installer#handling-squirrel-events) (Also see [this issue for more info](https://github.com/electron/electron/issues/7155)). It's also recommended to use [electron-squirrel-startup](https://github.com/mongodb-js/electron-squirrel-startup) to get desktop shortcuts for your app.

The installer generated with Squirrel will create a shortcut icon with an [Application User Model ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx) in the format of `com.squirrel.PACKAGE_ID.YOUR_EXE_WITHOUT_DOT_EXE`, examples are `com.squirrel.slack.Slack` and `com.squirrel.code.Code`. You have to use the same ID for your app with `app.setAppUserModelId` API, otherwise Windows will not be able to pin your app properly in task bar.

Unlike Squirrel.Mac, Windows can host updates on S3 or any other static file host. You can read the documents of [Squirrel.Windows](https://github.com/Squirrel/Squirrel.Windows) to get more details about how Squirrel.Windows works.

### Linux

There is no built-in support for auto-updater on Linux, so it is recommended to use the distribution's package manager to update your app.

## Events

The `autoUpdater` object emits the following events:

### Event: 'error'

Returns:

*   `error` Error

Emitted when there is an error while updating.

### Event: 'checking-for-update'

Emitted when checking if an update has started.

### Event: 'update-available'

Emitted when there is an available update. The update is downloaded automatically.

### Event: 'update-not-available'

Emitted when there is no available update.

### Event: 'update-downloaded'

Returns:

*   `event` Event
*   `releaseNotes` String
*   `releaseName` String
*   `releaseDate` Date
*   `updateURL` String

Emitted when an update has been downloaded.

On Windows only `releaseName` is available.

## Methods

The `autoUpdater` object has the following methods:

### `autoUpdater.setFeedURL(url[, requestHeaders])`

*   `url` String
*   `requestHeaders` Object _macOS_ (optional) - HTTP request headers.

Sets the `url` and initialize the auto updater.

### `autoUpdater.getFeedURL()`

Returns `String` - The current update feed URL.

### `autoUpdater.checkForUpdates()`

Asks the server whether there is an update. You must call `setFeedURL` before using this API.

### `autoUpdater.quitAndInstall()`

Restarts the app and installs the update after it has been downloaded. It should only be called after `update-downloaded` has been emitted.

**Note:** `autoUpdater.quitAndInstall()` will close all application windows first and only emit `before-quit` event on `app` after that. This is different from the normal quit event sequence.
