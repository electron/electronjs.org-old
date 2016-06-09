---
version: v1.2.2
category: API
redirect_from:
    - /docs/v0.24.0/api/download-item/
    - /docs/v0.25.0/api/download-item/
    - /docs/v0.26.0/api/download-item/
    - /docs/v0.27.0/api/download-item/
    - /docs/v0.28.0/api/download-item/
    - /docs/v0.29.0/api/download-item/
    - /docs/v0.30.0/api/download-item/
    - /docs/v0.31.0/api/download-item/
    - /docs/v0.32.0/api/download-item/
    - /docs/v0.33.0/api/download-item/
    - /docs/v0.34.0/api/download-item/
    - /docs/v0.35.0/api/download-item/
    - /docs/v0.36.0/api/download-item/
    - /docs/v0.36.3/api/download-item/
    - /docs/v0.36.4/api/download-item/
    - /docs/v0.36.5/api/download-item/
    - /docs/v0.36.6/api/download-item/
    - /docs/v0.36.7/api/download-item/
    - /docs/v0.36.8/api/download-item/
    - /docs/v0.36.9/api/download-item/
    - /docs/v0.36.10/api/download-item/
    - /docs/v0.36.11/api/download-item/
    - /docs/v0.37.0/api/download-item/
    - /docs/v0.37.1/api/download-item/
    - /docs/v0.37.2/api/download-item/
    - /docs/v0.37.3/api/download-item/
    - /docs/v0.37.4/api/download-item/
    - /docs/v0.37.5/api/download-item/
    - /docs/v0.37.6/api/download-item/
    - /docs/v0.37.7/api/download-item/
    - /docs/v0.37.8/api/download-item/
    - /docs/latest/api/download-item/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/download-item.md'
excerpt: "Control file downloads from remote sources."
title: "DownloadItem"
sort_title: "downloaditem"
---

# DownloadItem

> Control file downloads from remote sources.

`DownloadItem` is an EventEmitter that represents a download item in Electron.
It is used in `will-download` event of `Session` module, and allows users to
control the download item.

```javascript
// In the main process.
win.webContents.session.on('will-download', (event, item, webContents) => {
  // Set the save path, making Electron not to prompt a save dialog.
  item.setSavePath('/tmp/save.pdf');
  console.log(item.getMimeType());
  console.log(item.getFilename());
  console.log(item.getTotalBytes());
  item.on('updated', () => {
    console.log('Received bytes: ' + item.getReceivedBytes());
  });
  item.on('done', (e, state) => {
    if (state === 'completed') {
      console.log('Download successfully');
    } else {
      console.log('Download is cancelled or interrupted that can\'t be resumed');
    }
  });
});
```

## Events

### Event: 'updated'

Emits when the `downloadItem` gets updated.

### Event: 'done'

* `event` Event
* `state` String
  * `completed` - The download completed successfully.
  * `cancelled` - The download has been cancelled.
  * `interrupted` - An error broke the connection with the file server.

Emits when the download is in a terminal state. This includes a completed
download, a cancelled download(via `downloadItem.cancel()`), and interrupted
download that can't be resumed.

## Methods

The `downloadItem` object has the following methods:

### `downloadItem.setSavePath(path)`

* `path` String - Set the save file path of the download item.

The API is only available in session's `will-download` callback function.
If user doesn't set the save path via the API, Electron will use the original
routine to determine the save path(Usually prompts a save dialog).

### `downloadItem.pause()`

Pauses the download.

### `downloadItem.resume()`

Resumes the download that has been paused.

### `downloadItem.cancel()`

Cancels the download operation.

### `downloadItem.getURL()`

Returns a `String` represents the origin url where the item is downloaded from.

### `downloadItem.getMimeType()`

Returns a `String` represents the mime type.

### `downloadItem.hasUserGesture()`

Returns a `Boolean` indicates whether the download has user gesture.

### `downloadItem.getFilename()`

Returns a `String` represents the file name of the download item.

**Note:** The file name is not always the same as the actual one saved in local
disk. If user changes the file name in a prompted download saving dialog, the
actual name of saved file will be different.

### `downloadItem.getTotalBytes()`

Returns a `Integer` represents the total size in bytes of the download item.
If the size is unknown, it returns 0.

### `downloadItem.getReceivedBytes()`

Returns a `Integer` represents the received bytes of the download item.

### `downloadItem.getContentDisposition()`

Returns a `String` represents the Content-Disposition field from the response
header.
