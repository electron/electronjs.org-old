---
title: Easier AutoUpdating for Open-Source Apps
author: zeke
date: '2018-05-01'
---

Today we're releasing a free, open-source, hosted 
[updates webservice][update.electronjs.org] and companion 
[npm package][update-electron-app]
to enable easy automatic updates for open-source Electron apps.

This is one step on our path toward enabling app developers to spend less
time thinking about deployment and more time focusing on developing 
high-quality experiences for their users.

---

![screenshot](https://github.com/electron/update-electron-app/raw/master/screenshot.png)

Electron has an [autoUpdater] API that gives Electron apps the ability to
check for updates, download them in the background, and install them 
automatically.

The autoUpdater works by consuming JSON from a remote endpoint. This has 
been a cumbersome step in the app deployment process for many developers, 
as it requires a web server to be deployed and maintained just to serve the app
version history metadata.

Today we are announcing a new drop-in solution for automatic app updates.
If your Electron app is in a public repository on GitHub and you're using 
GitHub Releases to publish assets, you can use this service to deliver 
continuous app updates to your users.

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
require('update-electron-app')()
```

That's it! By default, this module will check for updates at app startup, then 
every ten minutes. When an update is found, it will automatically be downloaded 
in the background. When the download completes, a dialog is displayed allowing 
the user to restart the app.

## Migrating existing apps

If your app already has automatic updates configured, you may still want to 
switch over to this service so you can retire your existing updates server.
To do so, you can 
[customize the `update-electron-app`][update-electron-app] module
or 
[integrate directly with update.electronjs.org][update.electronjs.org].

## Thanks

Thanks to [Julian Gruber] for helping design and build this simple and scalable 
web service. Thanks to the folks at [Zeit] for their open-source [hazel] 
service, from which we drew design inspiration. Thanks to [Samuel Attard] for 
the code reviews. Thanks to the Electron community for helping test this 
service.

🌲 Here's to an evergreen future for Electron apps!

[autoUpdater]: https://electronjs.org/docs/tutorial/updates
[hazel]: https://github.com/zeit/hazel
[Julian Gruber]: http://juliangruber.com/
[main process]: https://electronjs.org/docs/glossary#main-process
[Samuel Attard]: https://www.samuelattard.com/
[update-electron-app]: https://ghub.io/update-electron-app
[update.electronjs.org]: https://ghub.io/update.electronjs.org
[Zeit]: https://zeit.co