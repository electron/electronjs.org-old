---
version: v1.4.9
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

Process: [Main](http://electron.atom.io/docs/tutorial/quick-start#main-process), [Renderer](http://electron.atom.io/docs/tutorial/quick-start#renderer-process)

The `shell` module provides functions related to desktop integration.

An example of opening a URL in the user's default browser:

```javascript
const {shell} = require('electron')

shell.openExternal('https://github.com')
```

## Methods

The `shell` module has the following methods:

### `shell.showItemInFolder(fullPath)`

* `fullPath` String

Returns `Boolean` - Whether the item was successfully shown

Show the given file in a file manager. If possible, select the file.

### `shell.openItem(fullPath)`

* `fullPath` String

Returns `Boolean` - Whether the item was successfully opened.

Open the given file in the desktop's default manner.

### `shell.openExternal(url[, options, callback])`

* `url` String
* `options` Object (optional) _macOS_
  * `activate` Boolean - `true` to bring the opened application to the
    foreground. The default is `true`.
* `callback` Function (optional) - If specified will perform the open asynchronously. _macOS_
  * `error` Error

Returns `Boolean` - Whether an application was available to open the URL.
If callback is specified, always returns true.

Open the given external protocol URL in the desktop's default manner. (For
example, mailto: URLs in the user's default mail agent).

### `shell.moveItemToTrash(fullPath)`

* `fullPath` String

Returns `Boolean` - Whether the item was successfully moved to the trash

Move the given file to trash and returns a boolean status for the operation.

### `shell.beep()`

Play the beep sound.

### `shell.writeShortcutLink(shortcutPath[, operation], options)` _Windows_

* `shortcutPath` String
* `operation` String (optional) - Default is `create`, can be one of following:
  * `create` - Creates a new shortcut, overwriting if necessary.
  * `update` - Updates specified properties only on an existing shortcut.
  * `replace` - Overwrites an existing shortcut, fails if the shortcut doesn't
    exist.
* `options` [ShortcutDetails](http://electron.atom.io/docs/api/structures/shortcut-details)

Returns `Boolean` - Whether the shortcut was created successfully

Creates or updates a shortcut link at `shortcutPath`.

### `shell.readShortcutLink(shortcutPath)` _Windows_

* `shortcutPath` String

Returns [`ShortcutDetails`](http://electron.atom.io/docs/api/structures/shortcut-details)

Resolves the shortcut link at `shortcutPath`.

An exception will be thrown when any error happens.
