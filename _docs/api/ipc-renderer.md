---
version: v1.1.3
category: API
redirect_from:
    - /docs/v0.24.0/api/ipc-renderer/
    - /docs/v0.25.0/api/ipc-renderer/
    - /docs/v0.26.0/api/ipc-renderer/
    - /docs/v0.27.0/api/ipc-renderer/
    - /docs/v0.28.0/api/ipc-renderer/
    - /docs/v0.29.0/api/ipc-renderer/
    - /docs/v0.30.0/api/ipc-renderer/
    - /docs/v0.31.0/api/ipc-renderer/
    - /docs/v0.32.0/api/ipc-renderer/
    - /docs/v0.33.0/api/ipc-renderer/
    - /docs/v0.34.0/api/ipc-renderer/
    - /docs/v0.35.0/api/ipc-renderer/
    - /docs/v0.36.0/api/ipc-renderer/
    - /docs/v0.36.3/api/ipc-renderer/
    - /docs/v0.36.4/api/ipc-renderer/
    - /docs/v0.36.5/api/ipc-renderer/
    - /docs/v0.36.6/api/ipc-renderer/
    - /docs/v0.36.7/api/ipc-renderer/
    - /docs/v0.36.8/api/ipc-renderer/
    - /docs/v0.36.9/api/ipc-renderer/
    - /docs/v0.36.10/api/ipc-renderer/
    - /docs/v0.36.11/api/ipc-renderer/
    - /docs/v0.37.0/api/ipc-renderer/
    - /docs/v0.37.1/api/ipc-renderer/
    - /docs/v0.37.2/api/ipc-renderer/
    - /docs/v0.37.3/api/ipc-renderer/
    - /docs/v0.37.4/api/ipc-renderer/
    - /docs/v0.37.5/api/ipc-renderer/
    - /docs/v0.37.6/api/ipc-renderer/
    - /docs/v0.37.7/api/ipc-renderer/
    - /docs/v0.37.8/api/ipc-renderer/
    - /docs/latest/api/ipc-renderer/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/ipc-renderer.md'
excerpt: "Communicate asynchronously from a renderer process to the main process."
title: "ipcRenderer"
sort_title: "ipcrenderer"
---

# ipcRenderer

> Communicate asynchronously from a renderer process to the main process.

The `ipcRenderer` module is an instance of the
[EventEmitter](https://nodejs.org/api/events.html) class. It provides a few
methods so you can send synchronous and asynchronous messages from the render
process (web page) to the main process.  You can also receive replies from the
main process.

See [ipcMain](http://electron.atom.io/docs/api/ipc-main) for code examples.

## Listening for Messages

The `ipcRenderer` module has the following method to listen for events:

### `ipcRenderer.on(channel, listener)`

* `channel` String
* `listener` Function

Listens to `channel`, when a new message arrives `listener` would be called with
`listener(event, args...)`.

### `ipcRenderer.once(channel, listener)`

* `channel` String
* `listener` Function

Adds a one time `listener` function for the event. This `listener` is invoked
only the next time a message is sent to `channel`, after which it is removed.

### `ipcRenderer.removeListener(channel, listener)`

* `channel` String
* `listener` Function

Removes the specified `listener` from the listener array for the specified
`channel`.

### `ipcRenderer.removeAllListeners([channel])`

* `channel` String (optional)

Removes all listeners, or those of the specified `channel`.

## Sending Messages

The `ipcRenderer` module has the following methods for sending messages:

### `ipcRenderer.send(channel[, arg1][, arg2][, ...])`

* `channel` String
* `arg` (optional)

Send a message to the main process asynchronously via `channel`, you can also
send arbitrary arguments. Arguments will be serialized in JSON internally and
hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain` module.

### `ipcRenderer.sendSync(channel[, arg1][, arg2][, ...])`

* `channel` String
* `arg` (optional)

Send a message to the main process synchronously via `channel`, you can also
send arbitrary arguments. Arguments will be serialized in JSON internally and
hence no functions or prototype chain will be included.

The main process handles it by listening for `channel` with `ipcMain` module,
and replies by setting `event.returnValue`.

**Note:** Sending a synchronous message will block the whole renderer process,
unless you know what you are doing you should never use it.

### `ipcRenderer.sendToHost(channel[, arg1][, arg2][, ...])`

* `channel` String
* `arg` (optional)

Like `ipcRenderer.send` but the event will be sent to the `<webview>` element in
the host page instead of the main process.
