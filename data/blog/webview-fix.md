---
title: Webview Vulnerability Fix
author: ckerr
date: '2018-03-21'
---

A vulnerability has been discovered which allows Node.js integration to be re-enabled in some Electron applications that disable it. This vulnerability has been assigned the CVE identifier [CVE-2018-1000136](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000136).

---

## Affected Applications

An application is affected if *all* of the following are true:

 1. Runs on Electron 1.7, 1.8, or a 2.0.0-beta
 2. Allows execution of arbitrary remote code
 3. Disables Node.js integration
 4. Does not explicitly declare `webviewTag: false` in its webPreferences
 5. Does not enable the `nativeWindowOption` option
 6. Does not intercept `new-window` events and manually override `event.newGuest` without using the supplied options tag

Although this appears to be a minority of Electron applicatons, we encourage all applications to be upgraded as a precaution.

## Mitigation

This vulnerability is fixed in today's [1.7.13](https://github.com/electron/electron/releases/tag/v1.7.13), [1.8.4](https://github.com/electron/electron/releases/tag/v1.8.4), and [2.0.0-beta.5](https://github.com/electron/electron/releases/tag/v2.0.0-beta.5) releases.

Developers who are unable to upgrade their application's Electron version can mitigate the vulnerability with the following code:

```js
app.on('web-contents-created', (event, win) => {
  win.on('new-window', (event, newURL, frameName, disposition,
                        options, additionalFeatures) => {
    if (!options.webPreferences) options.webPreferences = {};
    options.webPreferences.nodeIntegration = false;
    options.webPreferences.nodeIntegrationInWorker = false;
    options.webPreferences.webviewTag = false;
    delete options.webPreferences.preload;
  })
})

// and *IF* you don't use WebViews at all,
// you might also want
app.on('web-contents-created', (event, win) => {
  win.on('will-attach-webview', (event, webPreferences, params) => {
    event.preventDefault();
  })
})
```

## Further Information

This vulnerability was found and reported responsibly to the Electron project by Brendan Scarvell of [Trustwave SpiderLabs](https://www.trustwave.com/Company/SpiderLabs/).

To learn more about best practices for keeping your Electron apps secure, see our [security tutorial](https://electronjs.org/docs/tutorial/security).

To report a vulnerability in Electron, please email security@electronjs.org.

Please join our [email list](https://groups.google.com/forum/#!forum/electronjs) to receive updates about releases and security updates.

