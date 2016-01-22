---
version: v0.36.5
category: 'Table of Contents'
title: README
source_url: 'https://github.com/atom/electron/blob/master/docs/README.md'
permalink: /docs/v0.36.5/index.html
---

Please make sure that you use the documents that match your Electron version.
The version number should be a part of the page URL. If it's not, you are
probably using the documentation of a development branch which may contain API
changes that are not compatible with your Electron version. If that's the case,
you can switch to a different version of the documentation at the
[available versions](http://electron.atom.io/docs/) list on atom.io, or if
you're using the GitHub interface, open the "Switch branches/tags" dropdown and
select the tag that matches your version.

## FAQ

There are questions that are asked quite often, check this out before creating
an issue:

* [Electron FAQ](faq/electron-faq)

## Guides

* [Supported Platforms](tutorial/supported-platforms)
* [Application Distribution](tutorial/application-distribution)
* [Mac App Store Submission Guide](tutorial/mac-app-store-submission-guide)
* [Application Packaging](tutorial/application-packaging)
* [Using Native Node Modules](tutorial/using-native-node-modules)
* [Debugging Main Process](tutorial/debugging-main-process)
* [Using Selenium and WebDriver](tutorial/using-selenium-and-webdriver)
* [DevTools Extension](tutorial/devtools-extension)
* [Using Pepper Flash Plugin](tutorial/using-pepper-flash-plugin)
* [Using Widevine CDM Plugin](tutorial/using-widevine-cdm-plugin)

## Tutorials

* [Quick Start](tutorial/quick-start)
* [Desktop Environment Integration](tutorial/desktop-environment-integration)
* [Online/Offline Event Detection](tutorial/online-offline-events)

## API References

* [Synopsis](api/synopsis)
* [Process Object](api/process)
* [Supported Chrome Command Line Switches](api/chrome-command-line-switches)
* [Environment Variables](api/environment-variables)

### Custom DOM Elements:

* [`File` Object](api/file-object)
* [`<webview>` Tag](api/web-view-tag)
* [`window.open` Function](api/window-open)

### Modules for the Main Process:

* [app](api/app)
* [autoUpdater](api/auto-updater)
* [BrowserWindow](api/browser-window)
* [contentTracing](api/content-tracing)
* [dialog](api/dialog)
* [globalShortcut](api/global-shortcut)
* [ipcMain](api/ipc-main)
* [Menu](api/menu)
* [MenuItem](api/menu-item)
* [powerMonitor](api/power-monitor)
* [powerSaveBlocker](api/power-save-blocker)
* [protocol](api/protocol)
* [session](api/session)
* [webContents](api/web-contents)
* [Tray](api/tray)

### Modules for the Renderer Process (Web Page):

* [desktopCapturer](api/desktop-capturer)
* [ipcRenderer](api/ipc-renderer)
* [remote](api/remote)
* [webFrame](api/web-frame)

### Modules for Both Processes:

* [clipboard](api/clipboard)
* [crashReporter](api/crash-reporter)
* [nativeImage](api/native-image)
* [screen](api/screen)
* [shell](api/shell)

## Development

* [Coding Style](development/coding-style)
* [Source Code Directory Structure](development/source-code-directory-structure)
* [Technical Differences to NW.js (formerly node-webkit)](development/atom-shell-vs-node-webkit)
* [Build System Overview](development/build-system-overview)
* [Build Instructions (OS X)](development/build-instructions-osx)
* [Build Instructions (Windows)](development/build-instructions-windows)
* [Build Instructions (Linux)](development/build-instructions-linux)
* [Setting Up Symbol Server in debugger](development/setting-up-symbol-server)
