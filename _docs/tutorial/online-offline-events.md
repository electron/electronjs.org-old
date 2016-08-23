---
version: v1.3.4
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/online-offline-events/
    - /docs/v0.25.0/tutorial/online-offline-events/
    - /docs/v0.26.0/tutorial/online-offline-events/
    - /docs/v0.27.0/tutorial/online-offline-events/
    - /docs/v0.28.0/tutorial/online-offline-events/
    - /docs/v0.29.0/tutorial/online-offline-events/
    - /docs/v0.30.0/tutorial/online-offline-events/
    - /docs/v0.31.0/tutorial/online-offline-events/
    - /docs/v0.32.0/tutorial/online-offline-events/
    - /docs/v0.33.0/tutorial/online-offline-events/
    - /docs/v0.34.0/tutorial/online-offline-events/
    - /docs/v0.35.0/tutorial/online-offline-events/
    - /docs/v0.36.0/tutorial/online-offline-events/
    - /docs/v0.36.3/tutorial/online-offline-events/
    - /docs/v0.36.4/tutorial/online-offline-events/
    - /docs/v0.36.5/tutorial/online-offline-events/
    - /docs/v0.36.6/tutorial/online-offline-events/
    - /docs/v0.36.7/tutorial/online-offline-events/
    - /docs/v0.36.8/tutorial/online-offline-events/
    - /docs/v0.36.9/tutorial/online-offline-events/
    - /docs/v0.36.10/tutorial/online-offline-events/
    - /docs/v0.36.11/tutorial/online-offline-events/
    - /docs/v0.37.0/tutorial/online-offline-events/
    - /docs/v0.37.1/tutorial/online-offline-events/
    - /docs/v0.37.2/tutorial/online-offline-events/
    - /docs/v0.37.3/tutorial/online-offline-events/
    - /docs/v0.37.4/tutorial/online-offline-events/
    - /docs/v0.37.5/tutorial/online-offline-events/
    - /docs/v0.37.6/tutorial/online-offline-events/
    - /docs/v0.37.7/tutorial/online-offline-events/
    - /docs/v0.37.8/tutorial/online-offline-events/
    - /docs/latest/tutorial/online-offline-events/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/online-offline-events.md'
title: "Online/Offline Event Detection"
sort_title: "online/offline event detection"
---

# Online/Offline Event Detection

Online and offline event detection can be implemented in the renderer process
using standard HTML5 APIs, as shown in the following example.

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

There may be instances where you want to respond to these events in the
main process as well. The main process however does not have a
`navigator` object and thus cannot detect these events directly. Using
Electron's inter-process communication utilities, the events can be forwarded
to the main process and handled as needed, as shown in the following example.

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
