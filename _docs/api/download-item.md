---
version: v1.7.9
permalink: /docs/api/download-item/
category: API
redirect_from:
  - /docs/v0.37.8/api/download-item/
  - /docs/v0.37.7/api/download-item/
  - /docs/v0.37.6/api/download-item/
  - /docs/v0.37.5/api/download-item/
  - /docs/v0.37.4/api/download-item/
  - /docs/v0.37.3/api/download-item/
  - /docs/v0.37.1/api/download-item/
  - /docs/v0.37.0/api/download-item/
  - /docs/v0.36.12/api/download-item/
  - /docs/v0.36.11/api/download-item/
  - /docs/v0.36.10/api/download-item/
  - /docs/v0.36.9/api/download-item/
  - /docs/v0.36.8/api/download-item/
  - /docs/v0.36.7/api/download-item/
  - /docs/v0.36.6/api/download-item/
  - /docs/v0.36.5/api/download-item/
  - /docs/v0.36.4/api/download-item/
  - /docs/v0.36.3/api/download-item/
  - /docs/v0.36.2/api/download-item/
  - /docs/v0.36.0/api/download-item/
  - /docs/v0.35.5/api/download-item/
  - /docs/v0.35.4/api/download-item/
  - /docs/v0.35.3/api/download-item/
  - /docs/v0.35.2/api/download-item/
  - /docs/v0.35.1/api/download-item/
  - /docs/v0.34.4/api/download-item/
  - /docs/v0.34.3/api/download-item/
  - /docs/v0.34.2/api/download-item/
  - /docs/v0.34.1/api/download-item/
  - /docs/v0.34.0/api/download-item/
  - /docs/v0.33.9/api/download-item/
  - /docs/v0.33.8/api/download-item/
  - /docs/v0.33.7/api/download-item/
  - /docs/v0.33.6/api/download-item/
  - /docs/v0.33.4/api/download-item/
  - /docs/v0.33.3/api/download-item/
  - /docs/v0.33.2/api/download-item/
  - /docs/v0.33.1/api/download-item/
  - /docs/v0.33.0/api/download-item/
  - /docs/v0.32.3/api/download-item/
  - /docs/v0.32.2/api/download-item/
  - /docs/v0.31.2/api/download-item/
  - /docs/v0.31.0/api/download-item/
  - /docs/v0.30.4/api/download-item/
  - /docs/v0.29.2/api/download-item/
  - /docs/v0.29.1/api/download-item/
  - /docs/v0.28.3/api/download-item/
  - /docs/v0.28.2/api/download-item/
  - /docs/v0.28.1/api/download-item/
  - /docs/v0.28.0/api/download-item/
  - /docs/v0.27.3/api/download-item/
  - /docs/v0.27.2/api/download-item/
  - /docs/v0.27.1/api/download-item/
  - /docs/v0.27.0/api/download-item/
  - /docs/v0.26.1/api/download-item/
  - /docs/v0.26.0/api/download-item/
  - /docs/v0.25.3/api/download-item/
  - /docs/v0.25.2/api/download-item/
  - /docs/v0.25.1/api/download-item/
  - /docs/v0.25.0/api/download-item/
  - /docs/v0.24.0/api/download-item/
  - /docs/v0.23.0/api/download-item/
  - /docs/v0.22.3/api/download-item/
  - /docs/v0.22.2/api/download-item/
  - /docs/v0.22.1/api/download-item/
  - /docs/v0.21.3/api/download-item/
  - /docs/v0.21.2/api/download-item/
  - /docs/v0.21.1/api/download-item/
  - /docs/v0.21.0/api/download-item/
  - /docs/v0.20.8/api/download-item/
  - /docs/v0.20.7/api/download-item/
  - /docs/v0.20.6/api/download-item/
  - /docs/v0.20.5/api/download-item/
  - /docs/v0.20.4/api/download-item/
  - /docs/v0.20.3/api/download-item/
  - /docs/v0.20.2/api/download-item/
  - /docs/v0.20.1/api/download-item/
  - /docs/v0.20.0/api/download-item/
  - /docs/latest/api/download-item/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/download-item.md'
title: DownloadItem
excerpt: Control file downloads from remote sources.
sort_title: download-item
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

    https://github.com/electron/electron/blob/master/docs/api/download-item.md

    Thanks!

-->
## Class: DownloadItem

> Control file downloads from remote sources.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

`DownloadItem` is an `EventEmitter` that represents a download item in Electron. It is used in `will-download` event of `Session` class, and allows users to control the download item.

```javascript
// In the main process.
const {BrowserWindow} = require('electron')
let win = new BrowserWindow()
win.webContents.session.on('will-download', (event, item, webContents) => {
  // Set the save path, making Electron not to prompt a save dialog.
  item.setSavePath('/tmp/save.pdf')

  item.on('updated', (event, state) => {
    if (state === 'interrupted') {
      console.log('Download is interrupted but can be resumed')
    } else if (state === 'progressing') {
      if (item.isPaused()) {
        console.log('Download is paused')
      } else {
        console.log(`Received bytes: ${item.getReceivedBytes()}`)
      }
    }
  })
  item.once('done', (event, state) => {
    if (state === 'completed') {
      console.log('Download successfully')
    } else {
      console.log(`Download failed: ${state}`)
    }
  })
})
```

### Instance Events

#### Event: 'updated'

Returns:

*   `event` Event
*   `state` String

Emitted when the download has been updated and is not done.

The `state` can be one of following:

*   `progressing` - The download is in-progress.
*   `interrupted` - The download has interrupted and can be resumed.

#### Event: 'done'

Returns:

*   `event` Event
*   `state` String

Emitted when the download is in a terminal state. This includes a completed download, a cancelled download (via `downloadItem.cancel()`), and interrupted download that can't be resumed.

The `state` can be one of following:

*   `completed` - The download completed successfully.
*   `cancelled` - The download has been cancelled.
*   `interrupted` - The download has interrupted and can not resume.

### Instance Methods

The `downloadItem` object has the following methods:

#### `downloadItem.setSavePath(path)`

*   `path` String - Set the save file path of the download item.

The API is only available in session's `will-download` callback function. If user doesn't set the save path via the API, Electron will use the original routine to determine the save path(Usually prompts a save dialog).

#### `downloadItem.getSavePath()`

Returns `String` - The save path of the download item. This will be either the path set via `downloadItem.setSavePath(path)` or the path selected from the shown save dialog.

#### `downloadItem.pause()`

Pauses the download.

#### `downloadItem.isPaused()`

Returns `Boolean` - Whether the download is paused.

#### `downloadItem.resume()`

Resumes the download that has been paused.

**Note:** To enable resumable downloads the server you are downloading from must support range requests and provide both `Last-Modified` and `ETag` header values. Otherwise `resume()` will dismiss previously received bytes and restart the download from the beginning.

#### `downloadItem.canResume()`

Resumes `Boolean` - Whether the download can resume.

#### `downloadItem.cancel()`

Cancels the download operation.

#### `downloadItem.getURL()`

Returns `String` - The origin url where the item is downloaded from.

#### `downloadItem.getMimeType()`

Returns `String` - The files mime type.

#### `downloadItem.hasUserGesture()`

Returns `Boolean` - Whether the download has user gesture.

#### `downloadItem.getFilename()`

Returns `String` - The file name of the download item.

**Note:** The file name is not always the same as the actual one saved in local disk. If user changes the file name in a prompted download saving dialog, the actual name of saved file will be different.

#### `downloadItem.getTotalBytes()`

Returns `Integer` - The total size in bytes of the download item.

If the size is unknown, it returns 0.

#### `downloadItem.getReceivedBytes()`

Returns `Integer` - The received bytes of the download item.

#### `downloadItem.getContentDisposition()`

Returns `String` - The Content-Disposition field from the response header.

#### `downloadItem.getState()`

Returns `String` - The current state. Can be `progressing`, `completed`, `cancelled` or `interrupted`.

**Note:** The following methods are useful specifically to resume a `cancelled` item when session is restarted.

#### `downloadItem.getURLChain()`

Returns `String[]` - The complete url chain of the item including any redirects.

#### `downloadItem.getLastModifiedTime()`

Returns `String` - Last-Modified header value.

#### `downloadItem.getETag()`

Returns `String` - ETag header value.

#### `downloadItem.getStartTime()`

Returns `Double` - Number of seconds since the UNIX epoch when the download was started.
