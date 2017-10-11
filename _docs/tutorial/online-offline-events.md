---
version: v1.7.9
permalink: /docs/tutorial/online-offline-events/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/online-offline-events/
  - /docs/v0.37.7/tutorial/online-offline-events/
  - /docs/v0.37.6/tutorial/online-offline-events/
  - /docs/v0.37.5/tutorial/online-offline-events/
  - /docs/v0.37.4/tutorial/online-offline-events/
  - /docs/v0.37.3/tutorial/online-offline-events/
  - /docs/v0.37.1/tutorial/online-offline-events/
  - /docs/v0.37.0/tutorial/online-offline-events/
  - /docs/v0.36.12/tutorial/online-offline-events/
  - /docs/v0.36.11/tutorial/online-offline-events/
  - /docs/v0.36.10/tutorial/online-offline-events/
  - /docs/v0.36.9/tutorial/online-offline-events/
  - /docs/v0.36.8/tutorial/online-offline-events/
  - /docs/v0.36.7/tutorial/online-offline-events/
  - /docs/v0.36.6/tutorial/online-offline-events/
  - /docs/v0.36.5/tutorial/online-offline-events/
  - /docs/v0.36.4/tutorial/online-offline-events/
  - /docs/v0.36.3/tutorial/online-offline-events/
  - /docs/v0.36.2/tutorial/online-offline-events/
  - /docs/v0.36.0/tutorial/online-offline-events/
  - /docs/v0.35.5/tutorial/online-offline-events/
  - /docs/v0.35.4/tutorial/online-offline-events/
  - /docs/v0.35.3/tutorial/online-offline-events/
  - /docs/v0.35.2/tutorial/online-offline-events/
  - /docs/v0.35.1/tutorial/online-offline-events/
  - /docs/v0.34.4/tutorial/online-offline-events/
  - /docs/v0.34.3/tutorial/online-offline-events/
  - /docs/v0.34.2/tutorial/online-offline-events/
  - /docs/v0.34.1/tutorial/online-offline-events/
  - /docs/v0.34.0/tutorial/online-offline-events/
  - /docs/v0.33.9/tutorial/online-offline-events/
  - /docs/v0.33.8/tutorial/online-offline-events/
  - /docs/v0.33.7/tutorial/online-offline-events/
  - /docs/v0.33.6/tutorial/online-offline-events/
  - /docs/v0.33.4/tutorial/online-offline-events/
  - /docs/v0.33.3/tutorial/online-offline-events/
  - /docs/v0.33.2/tutorial/online-offline-events/
  - /docs/v0.33.1/tutorial/online-offline-events/
  - /docs/v0.33.0/tutorial/online-offline-events/
  - /docs/v0.32.3/tutorial/online-offline-events/
  - /docs/v0.32.2/tutorial/online-offline-events/
  - /docs/v0.31.2/tutorial/online-offline-events/
  - /docs/v0.31.0/tutorial/online-offline-events/
  - /docs/v0.30.4/tutorial/online-offline-events/
  - /docs/v0.29.2/tutorial/online-offline-events/
  - /docs/v0.29.1/tutorial/online-offline-events/
  - /docs/v0.28.3/tutorial/online-offline-events/
  - /docs/v0.28.2/tutorial/online-offline-events/
  - /docs/v0.28.1/tutorial/online-offline-events/
  - /docs/v0.28.0/tutorial/online-offline-events/
  - /docs/v0.27.3/tutorial/online-offline-events/
  - /docs/v0.27.2/tutorial/online-offline-events/
  - /docs/v0.27.1/tutorial/online-offline-events/
  - /docs/v0.27.0/tutorial/online-offline-events/
  - /docs/v0.26.1/tutorial/online-offline-events/
  - /docs/v0.26.0/tutorial/online-offline-events/
  - /docs/v0.25.3/tutorial/online-offline-events/
  - /docs/v0.25.2/tutorial/online-offline-events/
  - /docs/v0.25.1/tutorial/online-offline-events/
  - /docs/v0.25.0/tutorial/online-offline-events/
  - /docs/v0.24.0/tutorial/online-offline-events/
  - /docs/v0.23.0/tutorial/online-offline-events/
  - /docs/v0.22.3/tutorial/online-offline-events/
  - /docs/v0.22.2/tutorial/online-offline-events/
  - /docs/v0.22.1/tutorial/online-offline-events/
  - /docs/v0.21.3/tutorial/online-offline-events/
  - /docs/v0.21.2/tutorial/online-offline-events/
  - /docs/v0.21.1/tutorial/online-offline-events/
  - /docs/v0.21.0/tutorial/online-offline-events/
  - /docs/v0.20.8/tutorial/online-offline-events/
  - /docs/v0.20.7/tutorial/online-offline-events/
  - /docs/v0.20.6/tutorial/online-offline-events/
  - /docs/v0.20.5/tutorial/online-offline-events/
  - /docs/v0.20.4/tutorial/online-offline-events/
  - /docs/v0.20.3/tutorial/online-offline-events/
  - /docs/v0.20.2/tutorial/online-offline-events/
  - /docs/v0.20.1/tutorial/online-offline-events/
  - /docs/v0.20.0/tutorial/online-offline-events/
  - /docs/latest/tutorial/online-offline-events/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/online-offline-events.md
title: Online/Offline Event Detection
excerpt: ''
sort_title: online-offline-events
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

    https://github.com/electron/electron/blob/master/docs/tutorial/online-offline-events.md

    Thanks!

-->
# Online/Offline Event Detection

Online and offline event detection can be implemented in the renderer process using standard HTML5 APIs, as shown in the following example.

_main.js_

```javascript
const {app, BrowserWindow} = require('electron')

let onlineStatusWindow

app.on('ready', () => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/online-status.html`)
})
```

_online-status.html_

```html
<!DOCTYPE html>
<html>
<body>
<script>
  const alertOnlineStatus = () => {
    window.alert(navigator.onLine ? 'online' : 'offline')
  }

  window.addEventListener('online',  alertOnlineStatus)
  window.addEventListener('offline',  alertOnlineStatus)

  alertOnlineStatus()
</script>
</body>
</html>
```

There may be instances where you want to respond to these events in the main process as well. The main process however does not have a `navigator` object and thus cannot detect these events directly. Using Electron's inter-process communication utilities, the events can be forwarded to the main process and handled as needed, as shown in the following example.

_main.js_

```javascript
const {app, BrowserWindow, ipcMain} = require('electron')
let onlineStatusWindow

app.on('ready', () => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/online-status.html`)
})

ipcMain.on('online-status-changed', (event, status) => {
  console.log(status)
})
```

_online-status.html_

```html
<!DOCTYPE html>
<html>
<body>
<script>
  const {ipcRenderer} = require('electron')
  const updateOnlineStatus = () => {
    ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline')
  }

  window.addEventListener('online',  updateOnlineStatus)
  window.addEventListener('offline',  updateOnlineStatus)

  updateOnlineStatus()
</script>
</body>
</html>
```

**NOTE:** If Electron is not able to connect to a local area network (LAN) or a router, it is considered offline; all other conditions return `true`. So while you can assume that Electron is offline when `navigator.onLine` returns a `false` value, you cannot assume that a `true` value necessarily means that Electron can access the internet. You could be getting false positives, such as in cases where the computer is running a virtualization software that has virtual ethernet adapters that are always "connected." Therefore, if you really want to determine the internet access status of Electron, you should develop additional means for checking.
