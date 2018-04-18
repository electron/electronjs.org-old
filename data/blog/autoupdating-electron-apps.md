---
title: Easier AutoUpdating for Open-Source Apps
author: zeke
date: '2018-04-25'
---

Today we're releasing a free, open-source, hosted webservice and npm package to 
enable easy automatic updates for open-source Electron apps.

---

Electron has an [autoUpdater] API that gives Electron apps the ability to
check for updates, download them in the background, and install them automatically.

The autoUpdater works by consuming JSON from a remote endpoint. This has 
been a cumbersome step in the app deployment process for many developers, 
as it requires a web server to be deployed and maintained just to serve the app
version history metadata.

Today we are announcing a new drop-in solution for automatic app updates.
If your Electron app is in a public repository on GitHub and you're using 
GitHub Releases to publish assets, you can use our service for free.

## Usage

To minimize the required configuration on your part, we've created 
[update-electron-app], an npm module which integrates with the new 
[update.electronjs.org] hosted webservice.

Install the module:

```
npm install update-electron-app
```

Call it from anywhere in your app's [main process]:

```js
require('update-electron-app')({repo: 'your/github-repo'})
```

## Gotchas

A few things to keep in mind:

- autoUpdater works on macOS and Windows. There is no built-in support for auto-updater on Linux, so it is recommended to use the distribution's package manager to update your app.
- To use autoUpdater, your app must be code signed.

[autoUpdater]: https://electronjs.org/docs/tutorial/updates
[main process]: https://electronjs.org/docs/glossary#main-process
[update-electron-app]: https://ghub.io/update-electron-app
[update.electronjs.org]: https://ghub.io/update.electronjs.org