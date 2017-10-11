---
version: v1.7.9
permalink: /docs/api/ipc-renderer/
category: API
redirect_from:
  - /docs/v0.37.8/api/ipc-renderer/
  - /docs/v0.37.7/api/ipc-renderer/
  - /docs/v0.37.6/api/ipc-renderer/
  - /docs/v0.37.5/api/ipc-renderer/
  - /docs/v0.37.4/api/ipc-renderer/
  - /docs/v0.37.3/api/ipc-renderer/
  - /docs/v0.37.1/api/ipc-renderer/
  - /docs/v0.37.0/api/ipc-renderer/
  - /docs/v0.36.12/api/ipc-renderer/
  - /docs/v0.36.11/api/ipc-renderer/
  - /docs/v0.36.10/api/ipc-renderer/
  - /docs/v0.36.9/api/ipc-renderer/
  - /docs/v0.36.8/api/ipc-renderer/
  - /docs/v0.36.7/api/ipc-renderer/
  - /docs/v0.36.6/api/ipc-renderer/
  - /docs/v0.36.5/api/ipc-renderer/
  - /docs/v0.36.4/api/ipc-renderer/
  - /docs/v0.36.3/api/ipc-renderer/
  - /docs/v0.36.2/api/ipc-renderer/
  - /docs/v0.36.0/api/ipc-renderer/
  - /docs/v0.35.5/api/ipc-renderer/
  - /docs/v0.35.4/api/ipc-renderer/
  - /docs/v0.35.3/api/ipc-renderer/
  - /docs/v0.35.2/api/ipc-renderer/
  - /docs/v0.35.1/api/ipc-renderer/
  - /docs/v0.34.4/api/ipc-renderer/
  - /docs/v0.34.3/api/ipc-renderer/
  - /docs/v0.34.2/api/ipc-renderer/
  - /docs/v0.34.1/api/ipc-renderer/
  - /docs/v0.34.0/api/ipc-renderer/
  - /docs/v0.33.9/api/ipc-renderer/
  - /docs/v0.33.8/api/ipc-renderer/
  - /docs/v0.33.7/api/ipc-renderer/
  - /docs/v0.33.6/api/ipc-renderer/
  - /docs/v0.33.4/api/ipc-renderer/
  - /docs/v0.33.3/api/ipc-renderer/
  - /docs/v0.33.2/api/ipc-renderer/
  - /docs/v0.33.1/api/ipc-renderer/
  - /docs/v0.33.0/api/ipc-renderer/
  - /docs/v0.32.3/api/ipc-renderer/
  - /docs/v0.32.2/api/ipc-renderer/
  - /docs/v0.31.2/api/ipc-renderer/
  - /docs/v0.31.0/api/ipc-renderer/
  - /docs/v0.30.4/api/ipc-renderer/
  - /docs/v0.29.2/api/ipc-renderer/
  - /docs/v0.29.1/api/ipc-renderer/
  - /docs/v0.28.3/api/ipc-renderer/
  - /docs/v0.28.2/api/ipc-renderer/
  - /docs/v0.28.1/api/ipc-renderer/
  - /docs/v0.28.0/api/ipc-renderer/
  - /docs/v0.27.3/api/ipc-renderer/
  - /docs/v0.27.2/api/ipc-renderer/
  - /docs/v0.27.1/api/ipc-renderer/
  - /docs/v0.27.0/api/ipc-renderer/
  - /docs/v0.26.1/api/ipc-renderer/
  - /docs/v0.26.0/api/ipc-renderer/
  - /docs/v0.25.3/api/ipc-renderer/
  - /docs/v0.25.2/api/ipc-renderer/
  - /docs/v0.25.1/api/ipc-renderer/
  - /docs/v0.25.0/api/ipc-renderer/
  - /docs/v0.24.0/api/ipc-renderer/
  - /docs/v0.23.0/api/ipc-renderer/
  - /docs/v0.22.3/api/ipc-renderer/
  - /docs/v0.22.2/api/ipc-renderer/
  - /docs/v0.22.1/api/ipc-renderer/
  - /docs/v0.21.3/api/ipc-renderer/
  - /docs/v0.21.2/api/ipc-renderer/
  - /docs/v0.21.1/api/ipc-renderer/
  - /docs/v0.21.0/api/ipc-renderer/
  - /docs/v0.20.8/api/ipc-renderer/
  - /docs/v0.20.7/api/ipc-renderer/
  - /docs/v0.20.6/api/ipc-renderer/
  - /docs/v0.20.5/api/ipc-renderer/
  - /docs/v0.20.4/api/ipc-renderer/
  - /docs/v0.20.3/api/ipc-renderer/
  - /docs/v0.20.2/api/ipc-renderer/
  - /docs/v0.20.1/api/ipc-renderer/
  - /docs/v0.20.0/api/ipc-renderer/
  - /docs/latest/api/ipc-renderer/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/ipc-renderer.md'
title: ipcRenderer
excerpt: Communicate asynchronously from a renderer process to the main process.
sort_title: ipc-renderer
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

    https://github.com/electron/electron/blob/master/docs/api/ipc-renderer.md

    Thanks!

-->
# ipcRenderer

> Communicate asynchronously from a renderer process to the main process.

Process: [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The `ipcRenderer` module is an instance of the [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) class. It provides a few methods so you can send synchronous and asynchronous messages from the render process (web page) to the main process. You can also receive replies from the main process.

See [ipcMain]({{site.baseurl}}/docs/api/ipc-main) for code examples.

## Methods

The `ipcRenderer` module has the following method to listen for events and send messages:

### `ipcRenderer.on(channel, listener)`

*   `channel` String
*   `listener` Function

Listens to `channel`, when a new message arrives `listener` would be called with `listener(event, args...)`.

### `ipcRenderer.once(channel, listener)`

*   `channel` String
*   `listener` Function

Adds a one time `listener` function for the event. This `listener` is invoked only the next time a message is sent to `channel`, after which it is removed.

### `ipcRenderer.removeListener(channel, listener)`

*   `channel` String
*   `listener` Function

Removes the specified `listener` from the listener array for the specified `channel`.

### `ipcRenderer.removeAllListeners([channel])`

*   `channel` String (optional)

Removes all listeners, or those of the specified `channel`.

### `ipcRenderer.send(channel[, arg1][, arg2][, ...])`

*   `channel` String
*   `...args` any[]

Send a message to the main process asynchronously via `channel`, you can also send arbitrary arguments. Arguments will be serialized in JSON internally and hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain` module.

### `ipcRenderer.sendSync(channel[, arg1][, arg2][, ...])`

*   `channel` String
*   `...args` any[]

Returns `any` - The value sent back by the [`ipcMain`]({{site.baseurl}}/docs/api/ipc-main) handler.

Send a message to the main process synchronously via `channel`, you can also send arbitrary arguments. Arguments will be serialized in JSON internally and hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain` module, and replies by setting `event.returnValue`.

**Note:** Sending a synchronous message will block the whole renderer process, unless you know what you are doing you should never use it.

### `ipcRenderer.sendToHost(channel[, arg1][, arg2][, ...])`

*   `channel` String
*   `...args` any[]

Like `ipcRenderer.send` but the event will be sent to the `<webview>` element in the host page instead of the main process.
