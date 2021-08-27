---
title: Electron 14.0.0
author:
- electron
date: '2021-08-31'
---

Electron 14.0.0 has been released! It includes upgrades to Chromium `93` and V8 `9.3`. We've added several API updates, bug fixes, and general improvements. Read below for more details!

---

The Electron team is excited to announce the release of Electron 14.0.0! You can install it with npm via `npm install electron@latest` or download it from our [releases website](https://electronjs.org/releases/stable). Continue reading for details about this release, and please share any feedback you have!

## Notable Changes

### Stack Changes

* Chromium `93`
    * [New in Chrome 91](https://developer.chrome.com/blog/new-in-chrome-91/)
    * [New in Chrome 90](https://developer.chrome.com/blog/new-in-chrome-90/)
* Node.js `14.17.0`
    * [Node 14.17.0 blog post](https://nodejs.org/en/blog/release/v14.17.0/)
* V8 `9.3`
    * [V8 9.3 blog post](https://v8.dev/blog/v8-release-93)
    * [V8 9.2 blog post](https://v8.dev/blog/v8-release-92)

### Highlight Features

* TODO: Add highlight features

See the [14.0.0 release notes](https://github.com/electron/electron/releases/tag/v14.0.0) for a full list of new features and changes.

## Breaking Changes

Below are breaking changes introduced in Electron 14. More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

### Removed: `app.allowRendererProcessReuse`

The `app.allowRendererProcessReuse` property will be removed as part of our plan to
more closely align with Chromium's process model for security, performance and maintainability.

For more detailed information see [#18397](https://github.com/electron/electron/issues/18397).

### Removed: Browser Window Affinity

The `affinity` option when constructing a new `BrowserWindow` will be removed
as part of our plan to more closely align with Chromium's process model for security,
performance and maintainability.

For more detailed information see [#18397](https://github.com/electron/electron/issues/18397).

### API Changed: `window.open()`

The optional parameter `frameName` will no longer set the title of the window. This now follows the specification described by the [native documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#parameters) under the corresponding parameter `windowName`.

If you were using this parameter to set the title of a window, you can instead use [win.setTitle(title)](https://www.electronjs.org/docs/api/browser-window#winsettitletitle).

### Removed: `worldSafeExecuteJavaScript`

In Electron 14, `worldSafeExecuteJavaScript` will be removed.  There is no alternative, please
ensure your code works with this property enabled.  It has been enabled by default since Electron
12.

You will be affected by this change if you use either `webFrame.executeJavaScript` or `webFrame.executeJavaScriptInIsolatedWorld`. You will need to ensure that values returned by either of those methods are supported by the [Context Bridge API](https://www.electronjs.org/docs/api/context-bridge.md#parameter--error--return-type-support) as these methods use the same value passing semantics.

### Default Changed: `nativeWindowOpen` defaults to `true`

Prior to Electron 14, `window.open` was by default shimmed to use
`BrowserWindowProxy`. This meant that `window.open('about:blank')` did not work
to open synchronously scriptable child windows, among other incompatibilities.
`nativeWindowOpen` is no longer experimental, and is now the default.

See the documentation for [window.open in Electron](https://www.electronjs.org/docs/api/window-open.md)
for more details.

### Removed: BrowserWindowConstructorOptions inheriting from parent windows

Prior to Electron 14, windows opened with `window.open` would inherit
BrowserWindow constructor options such as `transparent` and `resizable` from
their parent window. Beginning with Electron 14, this behavior is removed, and
windows will not inherit any BrowserWindow constructor options from their
parents.

Instead, explicitly set options for the new window with `setWindowOpenHandler`:

```js
webContents.setWindowOpenHandler((details) => {
  return {
    action: 'allow',
    overrideBrowserWindowOptions: {
      // ...
    }
  }
})
```

### Removed: `additionalFeatures`

The deprecated `additionalFeatures` property in the `new-window` and
`did-create-window` events of WebContents has been removed. Since `new-window`
uses positional arguments, the argument is still present, but will always be
the empty array `[]`. (Though note, the `new-window` event itself is
deprecated, and is replaced by `setWindowOpenHandler`.) Bare keys in window
features will now present as keys with the value `true` in the options object.

```js
// Removed in Electron 14
// Triggered by window.open('...', '', 'my-key')
webContents.on('did-create-window', (window, details) => {
  if (details.additionalFeatures.includes('my-key')) {
    // ...
  }
})

// Replace with
webContents.on('did-create-window', (window, details) => {
  if (details.options['my-key']) {
    // ...
  }
})
```

More information about these and future changes can be found on the [Planned Breaking Changes](https://github.com/electron/electron/blob/master/docs/breaking-changes.md) page.

## API Changes

* TODO: add any API changes

### Removed/Deprecated Changes

The following APIs have been removed or are now deprecated:

* TODO

## End of Support for 11.x.y

Electron 11.x.y has reached end-of-support as per the project's [support policy](https://electronjs.org/docs/tutorial/support#supported-versions). Developers and applications are encouraged to upgrade to a newer version of Electron.

## What's Next

In the short term, you can expect the team to continue to focus on keeping up with the development of the major components that make up Electron, including Chromium, Node, and V8. Although we are careful not to make promises about release dates, our plan is release new major versions of Electron with new versions of those components approximately quarterly.

For information on planned breaking changes in upcoming versions of Electron, [see our Planned Breaking Changes doc](https://github.com/electron/electron/blob/master/docs/breaking-changes.md).

### New Electron Cadence

Beginning in September 2021 with Electron 15, Electron will release a new major stable version every 8 weeks. You can read the [full details here](https://www.electronjs.org/blog/8-week-cadence). Electron 15 will begin beta on September 1, 2021 and stable release will be September 21, 2021. You can find [Electron's public timeline here](https://electronjs.org/docs/tutorial/electron-timelines).

Additionally, Electron will be changing supported versions from latest three versions to latest four versions until May 2022. See [see our versioning document](https://electronjs.org/docs/tutorial/electron-versioning) for more detailed information about versioning in Electron.
