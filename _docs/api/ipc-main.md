---
version: v1.7.9
permalink: /docs/api/ipc-main/
category: API
redirect_from:
  - /docs/v0.37.8/api/ipc-main/
  - /docs/v0.37.7/api/ipc-main/
  - /docs/v0.37.6/api/ipc-main/
  - /docs/v0.37.5/api/ipc-main/
  - /docs/v0.37.4/api/ipc-main/
  - /docs/v0.37.3/api/ipc-main/
  - /docs/v0.37.1/api/ipc-main/
  - /docs/v0.37.0/api/ipc-main/
  - /docs/v0.36.12/api/ipc-main/
  - /docs/v0.36.11/api/ipc-main/
  - /docs/v0.36.10/api/ipc-main/
  - /docs/v0.36.9/api/ipc-main/
  - /docs/v0.36.8/api/ipc-main/
  - /docs/v0.36.7/api/ipc-main/
  - /docs/v0.36.6/api/ipc-main/
  - /docs/v0.36.5/api/ipc-main/
  - /docs/v0.36.4/api/ipc-main/
  - /docs/v0.36.3/api/ipc-main/
  - /docs/v0.36.2/api/ipc-main/
  - /docs/v0.36.0/api/ipc-main/
  - /docs/v0.35.5/api/ipc-main/
  - /docs/v0.35.4/api/ipc-main/
  - /docs/v0.35.3/api/ipc-main/
  - /docs/v0.35.2/api/ipc-main/
  - /docs/v0.35.1/api/ipc-main/
  - /docs/v0.34.4/api/ipc-main/
  - /docs/v0.34.3/api/ipc-main/
  - /docs/v0.34.2/api/ipc-main/
  - /docs/v0.34.1/api/ipc-main/
  - /docs/v0.34.0/api/ipc-main/
  - /docs/v0.33.9/api/ipc-main/
  - /docs/v0.33.8/api/ipc-main/
  - /docs/v0.33.7/api/ipc-main/
  - /docs/v0.33.6/api/ipc-main/
  - /docs/v0.33.4/api/ipc-main/
  - /docs/v0.33.3/api/ipc-main/
  - /docs/v0.33.2/api/ipc-main/
  - /docs/v0.33.1/api/ipc-main/
  - /docs/v0.33.0/api/ipc-main/
  - /docs/v0.32.3/api/ipc-main/
  - /docs/v0.32.2/api/ipc-main/
  - /docs/v0.31.2/api/ipc-main/
  - /docs/v0.31.0/api/ipc-main/
  - /docs/v0.30.4/api/ipc-main/
  - /docs/v0.29.2/api/ipc-main/
  - /docs/v0.29.1/api/ipc-main/
  - /docs/v0.28.3/api/ipc-main/
  - /docs/v0.28.2/api/ipc-main/
  - /docs/v0.28.1/api/ipc-main/
  - /docs/v0.28.0/api/ipc-main/
  - /docs/v0.27.3/api/ipc-main/
  - /docs/v0.27.2/api/ipc-main/
  - /docs/v0.27.1/api/ipc-main/
  - /docs/v0.27.0/api/ipc-main/
  - /docs/v0.26.1/api/ipc-main/
  - /docs/v0.26.0/api/ipc-main/
  - /docs/v0.25.3/api/ipc-main/
  - /docs/v0.25.2/api/ipc-main/
  - /docs/v0.25.1/api/ipc-main/
  - /docs/v0.25.0/api/ipc-main/
  - /docs/v0.24.0/api/ipc-main/
  - /docs/v0.23.0/api/ipc-main/
  - /docs/v0.22.3/api/ipc-main/
  - /docs/v0.22.2/api/ipc-main/
  - /docs/v0.22.1/api/ipc-main/
  - /docs/v0.21.3/api/ipc-main/
  - /docs/v0.21.2/api/ipc-main/
  - /docs/v0.21.1/api/ipc-main/
  - /docs/v0.21.0/api/ipc-main/
  - /docs/v0.20.8/api/ipc-main/
  - /docs/v0.20.7/api/ipc-main/
  - /docs/v0.20.6/api/ipc-main/
  - /docs/v0.20.5/api/ipc-main/
  - /docs/v0.20.4/api/ipc-main/
  - /docs/v0.20.3/api/ipc-main/
  - /docs/v0.20.2/api/ipc-main/
  - /docs/v0.20.1/api/ipc-main/
  - /docs/v0.20.0/api/ipc-main/
  - /docs/latest/api/ipc-main/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/ipc-main.md'
title: ipcMain
excerpt: Communicate asynchronously from the main process to renderer processes.
sort_title: ipc-main
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

    https://github.com/electron/electron/blob/master/docs/api/ipc-main.md

    Thanks!

-->
# ipcMain

> Communicate asynchronously from the main process to renderer processes.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

The `ipcMain` module is an instance of the [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) class. When used in the main process, it handles asynchronous and synchronous messages sent from a renderer process (web page). Messages sent from a renderer will be emitted to this module.

## Sending Messages

It is also possible to send messages from the main process to the renderer process, see [webContents.send]({{site.baseurl}}/docs/api/web-contents#webcontentssendchannel-arg1-arg2-) for more information.

*   When sending a message, the event name is the `channel`.
*   To reply to a synchronous message, you need to set `event.returnValue`.
*   To send an asynchronous message back to the sender, you can use `event.sender.send(...)`.

An example of sending and handling messages between the render and main processes:

```javascript
// In main process.
const {ipcMain} = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.returnValue = 'pong'
})
```

```javascript
// In renderer process (web page).
const {ipcRenderer} = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')
```

## Methods

The `ipcMain` module has the following method to listen for events:

### `ipcMain.on(channel, listener)`

*   `channel` String
*   `listener` Function

Listens to `channel`, when a new message arrives `listener` would be called with `listener(event, args...)`.

### `ipcMain.once(channel, listener)`

*   `channel` String
*   `listener` Function

Adds a one time `listener` function for the event. This `listener` is invoked only the next time a message is sent to `channel`, after which it is removed.

### `ipcMain.removeListener(channel, listener)`

*   `channel` String
*   `listener` Function

Removes the specified `listener` from the listener array for the specified `channel`.

### `ipcMain.removeAllListeners([channel])`

*   `channel` String

Removes listeners of the specified `channel`.

## Event object

The `event` object passed to the `callback` has the following methods:

### `event.returnValue`

Set this to the value to be returned in a synchronous message.

### `event.sender`

Returns the `webContents` that sent the message, you can call `event.sender.send` to reply to the asynchronous message, see [webContents.send]({{site.baseurl}}/docs/api/web-contents#webcontentssendchannel-arg1-arg2-) for more information.
