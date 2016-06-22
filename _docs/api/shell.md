---
version: v1.2.4
category: API
redirect_from:
    - /docs/v0.24.0/api/shell/
    - /docs/v0.25.0/api/shell/
    - /docs/v0.26.0/api/shell/
    - /docs/v0.27.0/api/shell/
    - /docs/v0.28.0/api/shell/
    - /docs/v0.29.0/api/shell/
    - /docs/v0.30.0/api/shell/
    - /docs/v0.31.0/api/shell/
    - /docs/v0.32.0/api/shell/
    - /docs/v0.33.0/api/shell/
    - /docs/v0.34.0/api/shell/
    - /docs/v0.35.0/api/shell/
    - /docs/v0.36.0/api/shell/
    - /docs/v0.36.3/api/shell/
    - /docs/v0.36.4/api/shell/
    - /docs/v0.36.5/api/shell/
    - /docs/v0.36.6/api/shell/
    - /docs/v0.36.7/api/shell/
    - /docs/v0.36.8/api/shell/
    - /docs/v0.36.9/api/shell/
    - /docs/v0.36.10/api/shell/
    - /docs/v0.36.11/api/shell/
    - /docs/v0.37.0/api/shell/
    - /docs/v0.37.1/api/shell/
    - /docs/v0.37.2/api/shell/
    - /docs/v0.37.3/api/shell/
    - /docs/v0.37.4/api/shell/
    - /docs/v0.37.5/api/shell/
    - /docs/v0.37.6/api/shell/
    - /docs/v0.37.7/api/shell/
    - /docs/v0.37.8/api/shell/
    - /docs/latest/api/shell/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/shell.md'
excerpt: "Manage files and URLs using their default applications."
title: "shell"
sort_title: "shell"
---

# shell

> Manage files and URLs using their default applications.

The `shell` module provides functions related to desktop integration.

An example of opening a URL in the user's default browser:

```javascript
const {shell} = require('electron');

shell.openExternal('https://github.com');
```

## Methods

The `shell` module has the following methods:

### `shell.showItemInFolder(fullPath)`

* `fullPath` String

Show the given file in a file manager. If possible, select the file.

### `shell.openItem(fullPath)`

* `fullPath` String

Open the given file in the desktop's default manner.

### `shell.openExternal(url[, options])`

* `url` String
* `options` Object (optional) _macOS_
  * `activate` Boolean - `true` to bring the opened application to the
    foreground. The default is `true`.

Open the given external protocol URL in the desktop's default manner. (For
example, mailto: URLs in the user's default mail agent.) Returns true if an
application was available to open the URL, false otherwise.

### `shell.moveItemToTrash(fullPath)`

* `fullPath` String

Move the given file to trash and returns a boolean status for the operation.

### `shell.beep()`

Play the beep sound.
