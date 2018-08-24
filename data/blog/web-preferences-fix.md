---
title:  WebPreferences Vulnerability Fix
author: ckerr
date: '2018-08-22'
---

A remote code execution vulnerability has been discovered affecting apps with the ability to open nested child windows on Electron versions (3.0.0-beta.6, 2.0.7, 1.8.7, and 1.7.15). This vulnerability has been assigned the CVE identifier [CVE-2018-15685].

---

## Affected Platforms

You are impacted if:

1. You embed _any_ remote user content, even in a sandbox
2. You accept user input with any XSS vulnerabilities

_Details_

You are impacted if any user code runs inside an `iframe` / can create an `iframe`. Given the possibility of an XSS vulnerability it can be assumed that most apps are vulnerable to this case.

You are also impacted if you open any of your windows with the `nativeWindowOpen: true` or `sandbox: true` option.  Although this vulnerability also requires an XSS vulnerability to exist in your app, you should still apply one of the mitigations below if you use either of these options.

## Mitigation

We've published new versions of Electron which include fixes for  this vulnerability: [`3.0.0-beta.7`](https://github.com/electron/electron/releases/tag/v3.0.0-beta.7), [`2.0.8`](https://github.com/electron/electron/releases/tag/v2.0.8), [`1.8.8`](https://github.com/electron/electron/releases/tag/v1.8.8), and [`1.7.16`](https://github.com/electron/electron/releases/tag/v1.7.16). We urge all Electron developers to update their apps to the latest stable version immediately.

If for some reason you are unable to upgrade your Electron version, you can protect your app by blanket-calling `event.preventDefault()` on the `new-window` event for all  `webContents`'. If you don't use `window.open` or any child windows at all then this is also a valid mitigation for your app.

```javascript
mainWindow.webContents.on('new-window', e => e.preventDefault())
```

If you rely on the ability of your child windows to make grandchild windows, then a third mitigation strategy is to use the following code on your top level window:

```javascript
const enforceInheritance = (topWebContents) => {
  const handle = (webContents) => {
    webContents.on('new-window', (event, url, frameName, disposition, options) => {
      if (!options.webPreferences) {
        options.webPreferences = {}
      }
      Object.assign(options.webPreferences, topWebContents.getLastWebPreferences())
      if (options.webContents) {
        handle(options.webContents)
      }
    })
  }
  handle(topWebContents)
}

enforceInheritance(mainWindow.webContents)
```

This code will manually enforce that the top level windows `webPreferences` is manually applied to all child windows infinitely deep.

## Further Information

This vulnerability was found and reported responsibly to the Electron project by [Matt Austin](https://twitter.com/mattaustin) of [Contrast Security](https://www.contrastsecurity.com/security-influencers/cve-2018-15685).

To learn more about best practices for keeping your Electron apps secure, see our [security tutorial].

If you wish to report a vulnerability in Electron, email security@electronjs.org.

[security tutorial]: https://electronjs.org/docs/tutorial/security
[CVE-2018-15685]: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-15685
