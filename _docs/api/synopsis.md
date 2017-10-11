---
version: v1.7.9
permalink: /docs/api/synopsis/
category: API
redirect_from:
  - /docs/v0.37.8/api/synopsis/
  - /docs/v0.37.7/api/synopsis/
  - /docs/v0.37.6/api/synopsis/
  - /docs/v0.37.5/api/synopsis/
  - /docs/v0.37.4/api/synopsis/
  - /docs/v0.37.3/api/synopsis/
  - /docs/v0.37.1/api/synopsis/
  - /docs/v0.37.0/api/synopsis/
  - /docs/v0.36.12/api/synopsis/
  - /docs/v0.36.11/api/synopsis/
  - /docs/v0.36.10/api/synopsis/
  - /docs/v0.36.9/api/synopsis/
  - /docs/v0.36.8/api/synopsis/
  - /docs/v0.36.7/api/synopsis/
  - /docs/v0.36.6/api/synopsis/
  - /docs/v0.36.5/api/synopsis/
  - /docs/v0.36.4/api/synopsis/
  - /docs/v0.36.3/api/synopsis/
  - /docs/v0.36.2/api/synopsis/
  - /docs/v0.36.0/api/synopsis/
  - /docs/v0.35.5/api/synopsis/
  - /docs/v0.35.4/api/synopsis/
  - /docs/v0.35.3/api/synopsis/
  - /docs/v0.35.2/api/synopsis/
  - /docs/v0.35.1/api/synopsis/
  - /docs/v0.34.4/api/synopsis/
  - /docs/v0.34.3/api/synopsis/
  - /docs/v0.34.2/api/synopsis/
  - /docs/v0.34.1/api/synopsis/
  - /docs/v0.34.0/api/synopsis/
  - /docs/v0.33.9/api/synopsis/
  - /docs/v0.33.8/api/synopsis/
  - /docs/v0.33.7/api/synopsis/
  - /docs/v0.33.6/api/synopsis/
  - /docs/v0.33.4/api/synopsis/
  - /docs/v0.33.3/api/synopsis/
  - /docs/v0.33.2/api/synopsis/
  - /docs/v0.33.1/api/synopsis/
  - /docs/v0.33.0/api/synopsis/
  - /docs/v0.32.3/api/synopsis/
  - /docs/v0.32.2/api/synopsis/
  - /docs/v0.31.2/api/synopsis/
  - /docs/v0.31.0/api/synopsis/
  - /docs/v0.30.4/api/synopsis/
  - /docs/v0.29.2/api/synopsis/
  - /docs/v0.29.1/api/synopsis/
  - /docs/v0.28.3/api/synopsis/
  - /docs/v0.28.2/api/synopsis/
  - /docs/v0.28.1/api/synopsis/
  - /docs/v0.28.0/api/synopsis/
  - /docs/v0.27.3/api/synopsis/
  - /docs/v0.27.2/api/synopsis/
  - /docs/v0.27.1/api/synopsis/
  - /docs/v0.27.0/api/synopsis/
  - /docs/v0.26.1/api/synopsis/
  - /docs/v0.26.0/api/synopsis/
  - /docs/v0.25.3/api/synopsis/
  - /docs/v0.25.2/api/synopsis/
  - /docs/v0.25.1/api/synopsis/
  - /docs/v0.25.0/api/synopsis/
  - /docs/v0.24.0/api/synopsis/
  - /docs/v0.23.0/api/synopsis/
  - /docs/v0.22.3/api/synopsis/
  - /docs/v0.22.2/api/synopsis/
  - /docs/v0.22.1/api/synopsis/
  - /docs/v0.21.3/api/synopsis/
  - /docs/v0.21.2/api/synopsis/
  - /docs/v0.21.1/api/synopsis/
  - /docs/v0.21.0/api/synopsis/
  - /docs/v0.20.8/api/synopsis/
  - /docs/v0.20.7/api/synopsis/
  - /docs/v0.20.6/api/synopsis/
  - /docs/v0.20.5/api/synopsis/
  - /docs/v0.20.4/api/synopsis/
  - /docs/v0.20.3/api/synopsis/
  - /docs/v0.20.2/api/synopsis/
  - /docs/v0.20.1/api/synopsis/
  - /docs/v0.20.0/api/synopsis/
  - /docs/latest/api/synopsis/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/synopsis.md'
title: Synopsis
excerpt: How to use Node.js and Electron APIs.
sort_title: synopsis
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

    https://github.com/electron/electron/blob/master/docs/api/synopsis.md

    Thanks!

-->
# Synopsis

> How to use Node.js and Electron APIs.

All of [Node.js's built-in modules](https://nodejs.org/api/) are available in Electron and third-party node modules also fully supported as well (including the [native modules]({{site.baseurl}}/docs/tutorial/using-native-node-modules)).

Electron also provides some extra built-in modules for developing native desktop applications. Some modules are only available in the main process, some are only available in the renderer process (web page), and some can be used in both processes.

The basic rule is: if a module is [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface) or low-level system related, then it should be only available in the main process. You need to be familiar with the concept of [main process vs. renderer process]({{site.baseurl}}/docs/tutorial/quick-start#main-process) scripts to be able to use those modules.

The main process script is just like a normal Node.js script:

```javascript
const {app, BrowserWindow} = require('electron')
let win = null

app.on('ready', () => {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('https://github.com')
})
```

The renderer process is no different than a normal web page, except for the extra ability to use node modules:

```html
<!DOCTYPE html>
<html>
<body>
<script>
  const {app} = require('electron').remote
  console.log(app.getVersion())
</script>
</body>
</html>
```

To run your app, read [Run your app]({{site.baseurl}}/docs/tutorial/quick-start#run-your-app).

## Destructuring assignment

As of 0.37, you can use [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to make it easier to use built-in modules.

```javascript
const {app, BrowserWindow} = require('electron')

let win

app.on('ready', () => {
  win = new BrowserWindow()
  win.loadURL('https://github.com')
})
```

If you need the entire `electron` module, you can require it and then using destructuring to access the individual modules from `electron`.

```javascript
const electron = require('electron')
const {app, BrowserWindow} = electron

let win

app.on('ready', () => {
  win = new BrowserWindow()
  win.loadURL('https://github.com')
})
```

This is equivalent to the following code:

```javascript
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let win

app.on('ready', () => {
  win = new BrowserWindow()
  win.loadURL('https://github.com')
})
```
