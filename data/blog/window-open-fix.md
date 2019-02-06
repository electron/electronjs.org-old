---
title:  BrowserView window.open() Vulnerability Fix
author: ckerr
date: '2019-02-03'
---

A code vulnerability has been discovered that allows Node to be re-enabled in child windows.

---

Opening a BrowserView with `sandbox: true` or `nativeWindowOpen: true` and `nodeIntegration: false` results in a webContents where `window.open` can be called and the newly opened child window will have `nodeIntegration` enabled. This vulnerability affects all supported versions of Electron.

## Mitigation

We've published new versions of Electron which include fixes for  this vulnerability:
[`2.0.17`](https://github.com/electron/electron/releases/tag/v2.0.17),
[`3.0.15`](https://github.com/electron/electron/releases/tag/v3.0.15),
[`3.1.3`](https://github.com/electron/electron/releases/tag/v3.1.3),
[`4.0.4`](https://github.com/electron/electron/releases/tag/v4.0.4), and
[`5.0.0-beta.2`](https://github.com/electron/electron/releases/tag/v5.0.0-beta.2).
We encourage all Electron developers to update their apps to the latest stable version immediately.

If for some reason you are unable to upgrade your Electron version, you can mitigate this issue by disabling all child web contents:

```javascript
view.webContents.on('-add-new-contents', e => e.preventDefault());
```

## Further Information

This vulnerability was found and reported responsibly to the Electron project by [PalmerAL](https://github.com/PalmerAL).

To learn more about best practices for keeping your Electron apps secure, see our [security tutorial].

If you wish to report a vulnerability in Electron, email security@electronjs.org.

[security tutorial]: https://electronjs.org/docs/tutorial/security
