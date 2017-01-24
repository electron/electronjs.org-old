---
version: v1.5.0
permalink: /docs/tutorial/planned-breaking-changes/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/planned-breaking-changes/
  - /docs/v0.37.7/tutorial/planned-breaking-changes/
  - /docs/v0.37.6/tutorial/planned-breaking-changes/
  - /docs/v0.37.5/tutorial/planned-breaking-changes/
  - /docs/v0.37.4/tutorial/planned-breaking-changes/
  - /docs/v0.37.3/tutorial/planned-breaking-changes/
  - /docs/v0.36.12/tutorial/planned-breaking-changes/
  - /docs/v0.37.1/tutorial/planned-breaking-changes/
  - /docs/v0.37.0/tutorial/planned-breaking-changes/
  - /docs/v0.36.11/tutorial/planned-breaking-changes/
  - /docs/v0.36.10/tutorial/planned-breaking-changes/
  - /docs/v0.36.9/tutorial/planned-breaking-changes/
  - /docs/v0.36.8/tutorial/planned-breaking-changes/
  - /docs/v0.36.7/tutorial/planned-breaking-changes/
  - /docs/v0.36.6/tutorial/planned-breaking-changes/
  - /docs/v0.36.5/tutorial/planned-breaking-changes/
  - /docs/v0.36.4/tutorial/planned-breaking-changes/
  - /docs/v0.36.3/tutorial/planned-breaking-changes/
  - /docs/v0.35.5/tutorial/planned-breaking-changes/
  - /docs/v0.36.2/tutorial/planned-breaking-changes/
  - /docs/v0.36.0/tutorial/planned-breaking-changes/
  - /docs/v0.35.4/tutorial/planned-breaking-changes/
  - /docs/v0.35.3/tutorial/planned-breaking-changes/
  - /docs/v0.35.2/tutorial/planned-breaking-changes/
  - /docs/v0.34.4/tutorial/planned-breaking-changes/
  - /docs/v0.35.1/tutorial/planned-breaking-changes/
  - /docs/v0.34.3/tutorial/planned-breaking-changes/
  - /docs/v0.34.2/tutorial/planned-breaking-changes/
  - /docs/v0.34.1/tutorial/planned-breaking-changes/
  - /docs/v0.34.0/tutorial/planned-breaking-changes/
  - /docs/v0.33.9/tutorial/planned-breaking-changes/
  - /docs/v0.33.8/tutorial/planned-breaking-changes/
  - /docs/v0.33.7/tutorial/planned-breaking-changes/
  - /docs/v0.33.6/tutorial/planned-breaking-changes/
  - /docs/v0.33.4/tutorial/planned-breaking-changes/
  - /docs/v0.33.3/tutorial/planned-breaking-changes/
  - /docs/v0.33.2/tutorial/planned-breaking-changes/
  - /docs/v0.33.1/tutorial/planned-breaking-changes/
  - /docs/v0.33.0/tutorial/planned-breaking-changes/
  - /docs/v0.32.3/tutorial/planned-breaking-changes/
  - /docs/v0.32.2/tutorial/planned-breaking-changes/
  - /docs/v0.31.2/tutorial/planned-breaking-changes/
  - /docs/v0.31.0/tutorial/planned-breaking-changes/
  - /docs/v0.30.4/tutorial/planned-breaking-changes/
  - /docs/v0.29.2/tutorial/planned-breaking-changes/
  - /docs/v0.29.1/tutorial/planned-breaking-changes/
  - /docs/v0.28.3/tutorial/planned-breaking-changes/
  - /docs/v0.28.2/tutorial/planned-breaking-changes/
  - /docs/v0.28.1/tutorial/planned-breaking-changes/
  - /docs/v0.28.0/tutorial/planned-breaking-changes/
  - /docs/v0.27.3/tutorial/planned-breaking-changes/
  - /docs/v0.27.2/tutorial/planned-breaking-changes/
  - /docs/v0.27.1/tutorial/planned-breaking-changes/
  - /docs/v0.27.0/tutorial/planned-breaking-changes/
  - /docs/v0.26.1/tutorial/planned-breaking-changes/
  - /docs/v0.26.0/tutorial/planned-breaking-changes/
  - /docs/v0.25.3/tutorial/planned-breaking-changes/
  - /docs/v0.25.2/tutorial/planned-breaking-changes/
  - /docs/v0.25.1/tutorial/planned-breaking-changes/
  - /docs/v0.25.0/tutorial/planned-breaking-changes/
  - /docs/v0.24.0/tutorial/planned-breaking-changes/
  - /docs/v0.23.0/tutorial/planned-breaking-changes/
  - /docs/v0.22.3/tutorial/planned-breaking-changes/
  - /docs/v0.22.2/tutorial/planned-breaking-changes/
  - /docs/v0.22.1/tutorial/planned-breaking-changes/
  - /docs/v0.21.3/tutorial/planned-breaking-changes/
  - /docs/v0.21.2/tutorial/planned-breaking-changes/
  - /docs/v0.21.1/tutorial/planned-breaking-changes/
  - /docs/v0.21.0/tutorial/planned-breaking-changes/
  - /docs/v0.20.8/tutorial/planned-breaking-changes/
  - /docs/v0.20.7/tutorial/planned-breaking-changes/
  - /docs/v0.20.6/tutorial/planned-breaking-changes/
  - /docs/v0.20.5/tutorial/planned-breaking-changes/
  - /docs/v0.20.4/tutorial/planned-breaking-changes/
  - /docs/v0.20.3/tutorial/planned-breaking-changes/
  - /docs/v0.20.2/tutorial/planned-breaking-changes/
  - /docs/v0.20.1/tutorial/planned-breaking-changes/
  - /docs/v0.20.0/tutorial/planned-breaking-changes/
  - /docs/latest/tutorial/planned-breaking-changes/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/planned-breaking-changes.md
title: Planned Breaking API Changes
excerpt: ''
sort_title: planned-breaking-changes
---
# Planned Breaking API Changes

The following list includes the APIs that will be removed in Electron 2.0.

There is no timetable for when this release will occur but deprecation warnings will be added at least 90 days beforehand.

## `BrowserWindow`

```js
// Deprecated
let optionsA = {webPreferences: {blinkFeatures: ''}}
let windowA = new BrowserWindow(optionsA)
// Replace with
let optionsB = {webPreferences: {enableBlinkFeatures: ''}}
let windowB = new BrowserWindow(optionsB)
```

## `clipboard`

```js
// Deprecated
clipboard.readRtf()
// Replace with
clipboard.readRTF()

// Deprecated
clipboard.writeRtf()
// Replace with
clipboard.writeRTF()

// Deprecated
clipboard.readHtml()
// Replace with
clipboard.readHTML()

// Deprecated
clipboard.writeHtml()
// Replace with
clipboard.writeHTML()
```

## `crashReporter`

```js
// Deprecated
crashReporter.start({
  companyName: 'Crashly',
  submitURL: 'https://crash.server.com',
  autoSubmit: true
})
// Replace with
crashReporter.start({
  companyName: 'Crashly',
  submitURL: 'https://crash.server.com',
  uploadToServer: true
})
```

## `nativeImage`

```js
// Deprecated
nativeImage.toPng()
// Replace with
nativeImage.toPNG()

// Deprecated
nativeImage.toJpeg()
// Replace with
nativeImage.toJPEG()

// Deprecated
nativeImage.createFromBuffer(buffer, 1.0)
// Replace with
nativeImage.createFromBuffer(buffer, {
  scaleFactor: 1.0
})
```

## `process`

```js
// Deprecated
process.versions['atom-shell']
// Replace with
process.versions.electron
```

*   `process.versions.electron` and `process.version.chrome` will be made read-only properties for consistency with the other `process.versions` properties set by Node.

## `Tray`

```js
// Deprecated
tray.setHighlightMode(true)
// Replace with
tray.setHighlightMode('on')

// Deprecated
tray.setHighlightMode(false)
// Replace with
tray.setHighlightMode('off')
```

## `webContents`

```js
// Deprecated
webContents.openDevTools({detach: true})
// Replace with
webContents.openDevTools({mode: 'detach'})
```

```js
// Deprecated
webContents.setZoomLevelLimits(1, 2)
// Replace with
webContents.setVisualZoomLevelLimits(1, 2)
```

## `webFrame`

```js
// Deprecated
webFrame.setZoomLevelLimits(1, 2)
// Replace with
webFrame.setVisualZoomLevelLimits(1, 2)

// Deprecated
webFrame.registerURLSchemeAsSecure('app')
// Replace with
protocol.registerStandardSchemes(['app'], {secure: true})

// Deprecated
webFrame.registerURLSchemeAsPrivileged('app', {secure: true})
// Replace with
protocol.registerStandardSchemes(['app'], {secure: true})
```

## `<webview>`

```js
// Deprecated
webview.setZoomLevelLimits(1, 2)
// Replace with
webview.setVisualZoomLevelLimits(1, 2)
```

## Node Headers URL

This is the URL specified as `disturl` in a `.npmrc` file or as the `--dist-url` command line flag when building native Node modules.

Deprecated: https://atom.io/download/atom-shell

Replace with: https://atom.io/download/electron
