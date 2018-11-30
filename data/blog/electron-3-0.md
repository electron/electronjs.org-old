---
title: Electron 3.0.0
author: codebytere
date: '2018-09-18'
---

The Electron team is excited to announce that the first stable release of Electron 3 is now
available from [electronjs.org](https://electronjs.org/) and via `npm install electron@latest`! It's jam-packed with upgrades, fixes, and new features, and we can't wait to see what you build with them. Below are details about this release, and we welcome your feedback as you explore.

---

## Release Process

As we undertook development of `v3.0.0`, we sought to more empirically define criteria for a stable release by formalizing the feedback progress for progressive beta releases. `v3.0.0` would not have been possible without our [App Feedback Program](https://github.com/electron/electron/blob/3-0-x/docs/tutorial/app-feedback-program.md) partners, who provided early testing and feedback during the beta cycle. Thanks to Atlassian, Atom, Microsoft Teams, Oculus, OpenFin, Slack, Symphony, VS Code, and other program members for their work. If you'd like to participate in future betas, please mail us at [info@electronjs.org](mailto:info@electronjs.org).

## Changes / New Features

Major bumps to several important parts of Electron's toolchain, including Chrome `v66.0.3359.181`, Node `v10.2.0`, and V8 `v6.6.346.23.`

* [[#12656](https://github.com/electron/electron/pull/12656)] feat: `app.isPackaged`
* [[#12652](https://github.com/electron/electron/pull/12652)] feat: `app.whenReady()`
* [[#13183](https://github.com/electron/electron/pull/13183)] feat: `process.getHeapStatistics()`
* [[#12485](https://github.com/electron/electron/pull/12485)] feat: `win.moveTop()` to move window z-order to top
* [[#13110](https://github.com/electron/electron/pull/13110)] feat: TextField and Button APIs
* [[#13068](https://github.com/electron/electron/pull/13068)] feat: netLog API for dynamic logging control
* [[#13539](https://github.com/electron/electron/pull/13539)] feat: enable `webview` in sandbox renderer
* [[#14118](https://github.com/electron/electron/pull/14118)] feat: `fs.readSync` now works with massive files
* [[#14031](https://github.com/electron/electron/pull/14031)] feat: node `fs` wrappers to make `fs.realpathSync.native` and `fs.realpath.native` available

## Breaking API changes

* [[#12362](https://github.com/electron/electron/pull/12362)] feat: updates to menu item order control
* [[#13050](https://github.com/electron/electron/pull/13050)] refactor: removed documented deprecated APIs
  * See [docs](https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md#breaking-api-changes-30) for more details
* [[#12477](https://github.com/electron/electron/pull/12477)] refactor: removed `did-get-response-details` and `did-get-redirect-request` events
* [[#12655](https://github.com/electron/electron/pull/12655)] feat: default to disabling navigating on drag/drop
* [[#12993](https://github.com/electron/electron/pull/12993)] feat: Node `v4.x` or greater is required use the `electron` npm module
* [[#12008](https://github.com/electron/electron/pull/12008) [#12140](https://github.com/electron/electron/pull/12140) [#12503](https://github.com/electron/electron/pull/12503) [#12514](https://github.com/electron/electron/pull/12514) [#12584](https://github.com/electron/electron/pull/12584) [#12596](https://github.com/electron/electron/pull/12596) [#12637](https://github.com/electron/electron/pull/12637) [#12660](https://github.com/electron/electron/pull/12660) [#12696](https://github.com/electron/electron/pull/12696) [#12716](https://github.com/electron/electron/pull/12716) [#12750](https://github.com/electron/electron/pull/12750) [#12787](https://github.com/electron/electron/pull/12787) [#12858](https://github.com/electron/electron/pull/12858)] refactor: `NativeWindow`
* [[#11968](https://github.com/electron/electron/pull/11968)] refactor: `menu.popup()`
* [[#8953](https://github.com/electron/electron/pull/8953)] feat: no longer use JSON to send the result of `ipcRenderer.sendSync`
* [[#13039](https://github.com/electron/electron/pull/13039)] feat: default to ignore command line arguments following a URL
* [[#12004](https://github.com/electron/electron/pull/12004)] refactor: rename `api::Window` to `api::BrowserWindow`
* [[#12679](https://github.com/electron/electron/pull/12679)] feat: visual zoom now turned off by default
* [[#12408](https://github.com/electron/electron/pull/12408)] refactor: rename app-command `media-play_pause` to `media-play-pause`

### macOS

* [[#12093](https://github.com/electron/electron/pull/12093)] feat: workspace notifications support
* [[#12496](https://github.com/electron/electron/pull/12496)] feat: `tray.setIgnoreDoubleClickEvents(ignore)` to ignore tray double click events. 
* [[#12281](https://github.com/electron/electron/pull/12281)] feat: mouse forward functionality on macOS
* [[#12714](https://github.com/electron/electron/pull/12714)] feat: screen lock / unlock events

### Windows

* [[#12879](https://github.com/electron/electron/pull/12879)] feat: added DIP to/from screen coordinate conversions

**Nota Bene:** Switching to an older version of Electron after running this version will require you to clear out your user data directory to avoid older versions crashing. You can get the user data directory by running `console.log(app.getPath("userData"))` or see [docs](https://electronjs.org/docs/api/app#appgetpathname) for more details.

## Bug Fixes

* [[#13397](https://github.com/electron/electron/pull/13397)] fix: issue with `fs.statSyncNoException` throwing exceptions
* [[#13476](https://github.com/electron/electron/pull/13476), [#13452](https://github.com/electron/electron/pull/13452)] fix: crash when loading site with jquery
* [[#14092](https://github.com/electron/electron/pull/14092)] fix: crash in `net::ClientSocketHandle` destructor
* [[#14453](https://github.com/electron/electron/pull/14453)] fix: notify focus change right away rather not on next tick

### MacOS

* [[#13220](https://github.com/electron/electron/pull/13220)] fix: issue allowing bundles to be selected in `<input file="type">` open file dialog
* [[#12404](https://github.com/electron/electron/pull/12404)] fix: issue blocking main process when using async dialog
* [[#12043](https://github.com/electron/electron/pull/12043)] fix: context menu click callback
* [[#12527](https://github.com/electron/electron/pull/12527)] fix: event leak on reuse of touchbar item
* [[#12352](https://github.com/electron/electron/pull/12352)] fix: tray title crash
* [[#12327](https://github.com/electron/electron/pull/12327)] fix: non-draggable regions
* [[#12809](https://github.com/electron/electron/pull/12809)] fix: to prevent menu update while it's open
* [[#13162](https://github.com/electron/electron/pull/13162)] fix: tray icon bounds not allowing negative values
* [[#13085](https://github.com/electron/electron/pull/13085)] fix: tray title not inverting when highlighted
* [[#12196](https://github.com/electron/electron/pull/12196)] fix: Mac build when `enable_run_as_node==false`
* [[#12157](https://github.com/electron/electron/pull/12157)] fix: additional issues on frameless windows with vibrancy
* [[#13326](https://github.com/electron/electron/pull/13326)] fix: to set mac protocol to none after calling `app.removeAsDefaultProtocolClient`
* [[#13530](https://github.com/electron/electron/pull/13530)] fix: incorrect usage of private APIs in MAS build
* [[#13517](https://github.com/electron/electron/pull/13517)] fix: `tray.setContextMenu` crash
* [[#14205](https://github.com/electron/electron/pull/14205)] fix: pressing escape on a dialog now closes it even if `defaultId` is set

### Linux

* [[#12507](https://github.com/electron/electron/pull/12507)] fix: `BrowserWindow.focus()` for offscreen windows

## Other Notes

* PDF Viewer is currently not working but is being worked on and will be functional once again soon
* `TextField` and `Button` APIs are experimental and are therefore off by default
  * They can be enabled with the `enable_view_api` build flag

# What's Next

The Electron team continues to work on defining our processes for more rapid and smooth upgrades as we seek to ultimately maintain parity with the development cadences of Chromium, Node, and V8.
