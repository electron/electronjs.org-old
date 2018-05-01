---
title: Easier AutoUpdating for Open-Source Apps
author: zeke
date: '2018-05-01'
---

Today we're releasing a free, open-source, hosted 
[updates webservice][update.electronjs.org] and companion 
[npm package][update-electron-app]
to enable easy automatic updates for open-source Electron apps.

This is a step toward enabling Electron app developers to think less about
deployment and more about developing high-quality experiences for their users.

---

![screenshot](https://github.com/electron/update-electron-app/raw/master/screenshot.png)

Electron has an [autoUpdater] API that gives Electron apps the ability to
check for updates, download them in the background, and install them 
automatically.

The autoUpdater works by consuming metadata from a remote endpoint. This has 
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

Apps already using Electron's autoUpdater API can use this service too. 
To do so, you can 
[customize the `update-electron-app`][update-electron-app] module
or 
[integrate directly with update.electronjs.org][update.electronjs.org].

## Alternatives

If you're using [electron-builder] to package your app, you can use its 
built-in updater. For details, see 
[electron.build/auto-update](https://www.electron.build/auto-update).

If your app is private, you may need to run your own update server. There are 
a number of open-source tools for this, including Zeit's [Hazel] and
Atlassian's [Nucleus]. See the [Deploying an Update Server] tutorial for more 
info.

## Thanks

Thanks to [Julian Gruber] for helping design and build this simple and scalable 
web service. Thanks to the folks at [Zeit] for their open-source [Hazel] 
service, from which we drew design inspiration. Thanks to [Samuel Attard] for 
the code reviews. Thanks to the Electron community for helping test this 
service.

🌲 Here's to an evergreen future for Electron apps!

[autoUpdater]: https://electronjs.org/docs/tutorial/updates
[electron-builder]: https://github.com/electron-userland/electron-builder
[Hazel]: https://github.com/zeit/hazel
[Julian Gruber]: http://juliangruber.com/
[main process]: https://electronjs.org/docs/glossary#main-process
[Deploying an Update Server]: https://electronjs.org/docs/tutorial/updates#deploying-an-update-server
[Nucleus]: https://github.com/atlassian/nucleus
[Samuel Attard]: https://www.samuelattard.com/
[update-electron-app]: https://ghub.io/update-electron-app
[update.electronjs.org]: https://ghub.io/update.electronjs.org
[Zeit]: https://zeit.co