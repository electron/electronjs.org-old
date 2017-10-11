---
version: v1.7.9
permalink: /docs/tutorial/quick-start/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/quick-start/
  - /docs/v0.37.7/tutorial/quick-start/
  - /docs/v0.37.6/tutorial/quick-start/
  - /docs/v0.37.5/tutorial/quick-start/
  - /docs/v0.37.4/tutorial/quick-start/
  - /docs/v0.37.3/tutorial/quick-start/
  - /docs/v0.37.1/tutorial/quick-start/
  - /docs/v0.37.0/tutorial/quick-start/
  - /docs/v0.36.12/tutorial/quick-start/
  - /docs/v0.36.11/tutorial/quick-start/
  - /docs/v0.36.10/tutorial/quick-start/
  - /docs/v0.36.9/tutorial/quick-start/
  - /docs/v0.36.8/tutorial/quick-start/
  - /docs/v0.36.7/tutorial/quick-start/
  - /docs/v0.36.6/tutorial/quick-start/
  - /docs/v0.36.5/tutorial/quick-start/
  - /docs/v0.36.4/tutorial/quick-start/
  - /docs/v0.36.3/tutorial/quick-start/
  - /docs/v0.36.2/tutorial/quick-start/
  - /docs/v0.36.0/tutorial/quick-start/
  - /docs/v0.35.5/tutorial/quick-start/
  - /docs/v0.35.4/tutorial/quick-start/
  - /docs/v0.35.3/tutorial/quick-start/
  - /docs/v0.35.2/tutorial/quick-start/
  - /docs/v0.35.1/tutorial/quick-start/
  - /docs/v0.34.4/tutorial/quick-start/
  - /docs/v0.34.3/tutorial/quick-start/
  - /docs/v0.34.2/tutorial/quick-start/
  - /docs/v0.34.1/tutorial/quick-start/
  - /docs/v0.34.0/tutorial/quick-start/
  - /docs/v0.33.9/tutorial/quick-start/
  - /docs/v0.33.8/tutorial/quick-start/
  - /docs/v0.33.7/tutorial/quick-start/
  - /docs/v0.33.6/tutorial/quick-start/
  - /docs/v0.33.4/tutorial/quick-start/
  - /docs/v0.33.3/tutorial/quick-start/
  - /docs/v0.33.2/tutorial/quick-start/
  - /docs/v0.33.1/tutorial/quick-start/
  - /docs/v0.33.0/tutorial/quick-start/
  - /docs/v0.32.3/tutorial/quick-start/
  - /docs/v0.32.2/tutorial/quick-start/
  - /docs/v0.31.2/tutorial/quick-start/
  - /docs/v0.31.0/tutorial/quick-start/
  - /docs/v0.30.4/tutorial/quick-start/
  - /docs/v0.29.2/tutorial/quick-start/
  - /docs/v0.29.1/tutorial/quick-start/
  - /docs/v0.28.3/tutorial/quick-start/
  - /docs/v0.28.2/tutorial/quick-start/
  - /docs/v0.28.1/tutorial/quick-start/
  - /docs/v0.28.0/tutorial/quick-start/
  - /docs/v0.27.3/tutorial/quick-start/
  - /docs/v0.27.2/tutorial/quick-start/
  - /docs/v0.27.1/tutorial/quick-start/
  - /docs/v0.27.0/tutorial/quick-start/
  - /docs/v0.26.1/tutorial/quick-start/
  - /docs/v0.26.0/tutorial/quick-start/
  - /docs/v0.25.3/tutorial/quick-start/
  - /docs/v0.25.2/tutorial/quick-start/
  - /docs/v0.25.1/tutorial/quick-start/
  - /docs/v0.25.0/tutorial/quick-start/
  - /docs/v0.24.0/tutorial/quick-start/
  - /docs/v0.23.0/tutorial/quick-start/
  - /docs/v0.22.3/tutorial/quick-start/
  - /docs/v0.22.2/tutorial/quick-start/
  - /docs/v0.22.1/tutorial/quick-start/
  - /docs/v0.21.3/tutorial/quick-start/
  - /docs/v0.21.2/tutorial/quick-start/
  - /docs/v0.21.1/tutorial/quick-start/
  - /docs/v0.21.0/tutorial/quick-start/
  - /docs/v0.20.8/tutorial/quick-start/
  - /docs/v0.20.7/tutorial/quick-start/
  - /docs/v0.20.6/tutorial/quick-start/
  - /docs/v0.20.5/tutorial/quick-start/
  - /docs/v0.20.4/tutorial/quick-start/
  - /docs/v0.20.3/tutorial/quick-start/
  - /docs/v0.20.2/tutorial/quick-start/
  - /docs/v0.20.1/tutorial/quick-start/
  - /docs/v0.20.0/tutorial/quick-start/
  - /docs/latest/tutorial/quick-start/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md'
title: Quick Start
excerpt: ''
sort_title: quick-start
---



<!--


                                      ::::
                                    :o+//+o:
                                    +o    oo-
                                    :o+//oo/+o/
                                      -::-   -oo:
                                               /s/
                      -::::::::-                :s/  :::--
                  :+oo+////////+:        -:/+oo/ :s:-///++oo+:
                /o+:                -/+oo+/:-     +o-      -:+o:
               /s:              -:+o+/:           -o+         :s/
              -s/            -/oo/:                /s-         +s-
              -s/         -/oo/-                   -s/         /s-
               oo       :+o/-                       oo         oo
               -s/    :oo/                          /s-       /s-
                :s/ :oo:              -::-          /s-      /s:
                  -+o/               /ssss/         :s:    -+o-
                 :o+--               /ssss/         :s:   :o+-
                :s/  +o:              -::-          /s-   --
               -s/    :+o/-                         /s-
               oo       -+o+-                       oo
              -s/         -/oo/-                   -s/
             -+soo+:         -/oo/:                /s-      /oooo+-
             o+   :s:           -:+o+/:-          -o+      /s:  -oo
             oo:--/s:       ::      -:+oo+/:-     -/-      /s/--:o+
              :+++/-        :s:          -:/+ooo++//////++oo//+o+:
                             /s:                --::::::--
                              /s/              /s-
                               :oo:          :oo:
                                 /oo/-    -/oo/
                                   -/+oooo+/-





                   _______  _______  _______  _______  __
                  |       ||       ||       ||       ||  |
                  |  _____||_     _||   _   ||    _  ||  |
                  | |_____   |   |  |  | |  ||   |_| ||  |
                  |_____  |  |   |  |  |_|  ||    ___||__|
                   _____| |  |   |  |       ||   |     __
                  |_______|  |___|  |_______||___|    |__|


    This file is generated automatically, so it should not be edited.

    To make changes, head over to the electron/electron repository:

    https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md

    Thanks!

-->
# Quick Start

Electron enables you to create desktop applications with pure JavaScript by providing a runtime with rich native (operating system) APIs. You could see it as a variant of the Node.js runtime that is focused on desktop applications instead of web servers.

This doesn't mean Electron is a JavaScript binding to graphical user interface (GUI) libraries. Instead, Electron uses web pages as its GUI, so you could also see it as a minimal Chromium browser, controlled by JavaScript.

### Main Process

In Electron, the process that runs `package.json`'s `main` script is called **the main process**. The script that runs in the main process can display a GUI by creating web pages.

### Renderer Process

Since Electron uses Chromium for displaying web pages, Chromium's multi-process architecture is also used. Each web page in Electron runs in its own process, which is called **the renderer process**.

In normal browsers, web pages usually run in a sandboxed environment and are not allowed access to native resources. Electron users, however, have the power to use Node.js APIs in web pages allowing lower level operating system interactions.

### Differences Between Main Process and Renderer Process

The main process creates web pages by creating `BrowserWindow` instances. Each `BrowserWindow` instance runs the web page in its own renderer process. When a `BrowserWindow` instance is destroyed, the corresponding renderer process is also terminated.

The main process manages all web pages and their corresponding renderer processes. Each renderer process is isolated and only cares about the web page running in it.

In web pages, calling native GUI related APIs is not allowed because managing native GUI resources in web pages is very dangerous and it is easy to leak resources. If you want to perform GUI operations in a web page, the renderer process of the web page must communicate with the main process to request that the main process perform those operations.

In Electron, we have several ways to communicate between the main process and renderer processes. Like [`ipcRenderer`]({{site.baseurl}}/docs/api/ipc-renderer) and [`ipcMain`]({{site.baseurl}}/docs/api/ipc-main) modules for sending messages, and the [remote]({{site.baseurl}}/docs/api/remote) module for RPC style communication. There is also an FAQ entry on [how to share data between web pages]({{site.baseurl}}/docs/faq#how-to-share-data-between-web-pages).

## Write your First Electron App

Generally, an Electron app is structured like this:

```text
your-app/
├── package.json
├── main.js
└── index.html
```

The format of `package.json` is exactly the same as that of Node's modules, and the script specified by the `main` field is the startup script of your app, which will run the main process. An example of your `package.json` might look like this:

```json
{
  "name"    : "your-app",
  "version" : "0.1.0",
  "main"    : "main.js"
}
```

**Note**: If the `main` field is not present in `package.json`, Electron will attempt to load an `index.js`.

The `main.js` should create windows and handle system events, a typical example being:

```javascript
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

Finally the `index.html` is the web page you want to show:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```

## Run your app

Once you've created your initial `main.js`, `index.html`, and `package.json` files, you'll probably want to try running your app locally to test it and make sure it's working as expected.

### `electron`

[`electron`](https://github.com/electron-userland/electron-prebuilt) is an `npm` module that contains pre-compiled versions of Electron.

If you've installed it globally with `npm`, then you will only need to run the following in your app's source directory:

```bash
electron .
```

If you've installed it locally, then run:

#### macOS / Linux

```bash
$ ./node_modules/.bin/electron .
```

#### Windows

```
$ .\node_modules\.bin\electron .

```

### Manually Downloaded Electron Binary

If you downloaded Electron manually, you can also use the included binary to execute your app directly.

#### macOS

```bash
$ ./Electron.app/Contents/MacOS/Electron your-app/
```

#### Linux

```bash
$ ./electron/electron your-app/
```

#### Windows

```
$ .\electron\electron.exe your-app\

```

`Electron.app` here is part of the Electron's release package, you can download it from [here](https://github.com/electron/electron/releases).

### Run as a distribution

After you're done writing your app, you can create a distribution by following the [Application Distribution]({{site.baseurl}}/docs/tutorial/application-distribution) guide and then executing the packaged app.

### Try this Example

Clone and run the code in this tutorial by using the [`electron/electron-quick-start`](https://github.com/electron/electron-quick-start) repository.

**Note**: Running this requires [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which includes [npm](https://npmjs.org)) on your system.

```bash
# Clone the repository
$ git clone https://github.com/electron/electron-quick-start
# Go into the repository
$ cd electron-quick-start
# Install dependencies
$ npm install
# Run the app
$ npm start
```

For more example apps, see the [list of boilerplates](https://electron.atom.io/community/#boilerplates) created by the awesome electron community.
