---
title: Electron 2.0.0
author: ckerr
date: '2018-05-02'
---

After more than four months of development, eight beta releases, and worldwide
testing from many apps' staged rollouts, the release of Electron 2.0.0 is now
available from [electronjs.org][electronjs.org].

---

## Release Process

Starting with 2.0.0, Electron's releases will follow
[semantic versioning](https://electronjs.org/blog/electron-2-semantic-boogaloo).
This means the major version will bump more often and will usually
be a major update to Chromium. Patch releases should be more stable
because they will contain only high-priority bug fixes.

Electron 2.0.0 also represents an improvement to how Electron
is stabilized before a major release. Several large scale Electron apps
have included 2.0.0 betas in staged rollouts, providing the best
feedback loop Electron's ever had for a beta series.

## Changes / New Features

 * Major bumps to several important parts of Electron's toolchain,
   including Chrome 61, Node 8.9.3, V8 6.1.534.41, GTK+ 3 on Linux,
   updated spellchecker, and Squirrel.
 * [In-app purchases](https://electronjs.org/blog/in-app-purchases)
   are now supported on MacOS. #11292
 * New API for loading files. #11565
 * New API to enable/disable a window. #11832
 * New API app.setLocale(). #11469
 * New support for logging IPC messages. #11880
 * New menu events. #11754
 * Add a `shutdown` event to powerMonitor. #11417
 * Add `affinity` option for gathering several BrowserWindows into a single process. #11501
 * Add the ability for saveDialog to list available extensions. #11873
 * Support for additional notification actions #11647
 * The ability to set macOS notification close button title. #11654
 * Add conditional for menu.popup(window, callback)
 * Memory improvements in touchbar items. #12527
 * Improved security recommendation checklist.
 * Add App-Scoped Security scoped bookmarks. #11711
 * Add ability to set arbitrary arguments in a renderer process. #11850
 * Add accessory view for format picker. #11873
 * Fixed network delegate race condition. #12053
 * Removed [deprecated APIs](https://github.com/electron/electron/blob/v2.0.0-beta.8/docs/tutorial/planned-breaking-changes.md).

## Bug Fixes

 * Changed to make sure `webContents.isOffscreen()` is always available. #12531 
 * Fixed `BrowserWindow.getFocusedWindow()` when DevTools is undocked and focused. #12554 
 * Fixed preload not loading in sandboxed render if preload path contains special chars. #12643 
 * Correct the default of allowRunningInsecureContent as per docs. #12629
 * Fixed transparency on nativeImage. #12683 
 * Fixed issue with `Menu.buildFromTemplate`. #12703 
 * Confirmed menu.popup options are objects. #12330
 * Removed a race condition between new process creation and context release. #12361
 * Update draggable regions when changing BrowserView. #12370 
 * Fixed menubar toggle alt key detection on focus. #12235 
 * Fixed incorrect warnings in webviews. #12236 
 * Fixed inheritance of 'show' option from parent windows. #122444
 * Ensure that `getLastCrashReport()` is actually the last crash report. #12255
 * Fixed require on network share path. #12287 
 * Fixed context menu click callback. #12170
 * Fixed popup menu position. #12181
 * Improved libuv loop cleanup. #11465
 * Fixed `hexColorDWORDToRGBA` for transparent colors. #11557
 * Fixed null pointer dereference with getWebPreferences api. #12245
 * Fixed a cyclic reference in menu delegate. #11967
 * Fixed protocol filtering of net.request. #11657
 * WebFrame.setVisualZoomLevelLimits now sets user-agent scale constraints #12510
 * Set appropriate defaults for webview options. #12292
 * Improved vibrancy support. #12157 #12171 #11886
 * Fixed timing issue in singleton fixture.
 * Fixed broken production cache in NotifierSupportsActions()
 * Made MenuItem roles camelCase-compatible. #11532
 * Improved touch bar updates. #11812, #11761.
 * Removed extra menu separators. #11827
 * Fixed Bluetooth chooser bug. Closes #11399.
 * Fixed macos Full Screen Toggle menu item label. #11633
 * Improved tooltip hiding when a window is deactivated. #11644
 * Migrated deprecated web-view method. #11798
 * Fixed closing a window opened from a browserview. #11799
 * Fixed Bluetooth chooser bug. #11492
 * Updated to use task scheduler for app.getFileIcon API. #11595
 * Changed to fire `console-message` event even when rendering offscreen. #11921
 * Fixed downloading from custom protocols using `WebContents.downloadURL`. #11804
 * Fixed transparent windows losing transparency when devtools detaches. #11956
 * Fixed Electron apps canceling restart or shutdown. #11625

### macOS
 * Fixed event leak on reuse of touchbar item. #12624 
 * Fixed tray highlight in darkmode. #12398 
 * Fixed blocking main process for async dialog. #12407 
 * Fixed `setTitle` tray crash. #12356
 * Fixed crash when setting dock menu. #12087

### Linux
 * Better Linux desktop notifications. #12229 #12216 #11965 #11980
 * Better GTK+ theme support for menus. #12331 
 * Exit gracefully on linux. #12139
 * Use the app’s name as the tray icon's default tooltip. #12393

### Windows
 * Added Visual Studio 2017 support. #11656
 * Fixed passing of exception to the system crash handler. #12259
 * Fixed hiding tooltip from minimized window. #11644
 * Fixed `desktopCapturer` to capture the correct screen. #11664
 * Fixed `disableHardwareAcceleration` with transparency. #11704


# What's Next

The Electron team is hard at work to support newer versions of Chromium, Node,
and v8.  Expect 3.0.0-beta.1 soon!

