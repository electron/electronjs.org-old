---
version: v1.3.1
category: API
redirect_from:
    - /docs/v0.24.0/api/clipboard/
    - /docs/v0.25.0/api/clipboard/
    - /docs/v0.26.0/api/clipboard/
    - /docs/v0.27.0/api/clipboard/
    - /docs/v0.28.0/api/clipboard/
    - /docs/v0.29.0/api/clipboard/
    - /docs/v0.30.0/api/clipboard/
    - /docs/v0.31.0/api/clipboard/
    - /docs/v0.32.0/api/clipboard/
    - /docs/v0.33.0/api/clipboard/
    - /docs/v0.34.0/api/clipboard/
    - /docs/v0.35.0/api/clipboard/
    - /docs/v0.36.0/api/clipboard/
    - /docs/v0.36.3/api/clipboard/
    - /docs/v0.36.4/api/clipboard/
    - /docs/v0.36.5/api/clipboard/
    - /docs/v0.36.6/api/clipboard/
    - /docs/v0.36.7/api/clipboard/
    - /docs/v0.36.8/api/clipboard/
    - /docs/v0.36.9/api/clipboard/
    - /docs/v0.36.10/api/clipboard/
    - /docs/v0.36.11/api/clipboard/
    - /docs/v0.37.0/api/clipboard/
    - /docs/v0.37.1/api/clipboard/
    - /docs/v0.37.2/api/clipboard/
    - /docs/v0.37.3/api/clipboard/
    - /docs/v0.37.4/api/clipboard/
    - /docs/v0.37.5/api/clipboard/
    - /docs/v0.37.6/api/clipboard/
    - /docs/v0.37.7/api/clipboard/
    - /docs/v0.37.8/api/clipboard/
    - /docs/latest/api/clipboard/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/clipboard.md'
excerpt: "Perform copy and paste operations on the system clipboard."
title: "clipboard"
sort_title: "clipboard"
---

# clipboard

> Perform copy and paste operations on the system clipboard.

The following example shows how to write a string to the clipboard:

```javascript
const {clipboard} = require('electron')
clipboard.writeText('Example String')
```

On X Window systems, there is also a selection clipboard. To manipulate it
you need to pass `selection` to each method:

```javascript
const {clipboard} = require('electron')
clipboard.writeText('Example String', 'selection')
console.log(clipboard.readText('selection'))
```

## Methods

The `clipboard` module has the following methods:

**Note:** Experimental APIs are marked as such and could be removed in future.

### `clipboard.readText([type])`

* `type` String (optional)

Returns the content in the clipboard as plain text.

### `clipboard.writeText(text[, type])`

* `text` String
* `type` String (optional)

Writes the `text` into the clipboard as plain text.

### `clipboard.readHTML([type])`

* `type` String (optional)

Returns the content in the clipboard as markup.

### `clipboard.writeHTML(markup[, type])`

* `markup` String
* `type` String (optional)

Writes `markup` to the clipboard.

### `clipboard.readImage([type])`

* `type` String (optional)

Returns the content in the clipboard as a [NativeImage](http://electron.atom.io/docs/api/native-image).

### `clipboard.writeImage(image[, type])`

* `image` [NativeImage](http://electron.atom.io/docs/api/native-image)
* `type` String (optional)

Writes `image` to the clipboard.

### `clipboard.readRTF([type])`

* `type` String (optional)

Returns the content in the clipboard as RTF.

### `clipboard.writeRTF(text[, type])`

* `text` String
* `type` String (optional)

Writes the `text` into the clipboard in RTF.

### `clipboard.readBookmark()` _macOS_ _Windows_

Returns an Object containing `title` and `url` keys representing the bookmark in
the clipboard. The `title` and `url` values will be empty strings when the
bookmark is unavailable.

### `clipboard.writeBookmark(title, url[, type])` _macOS_ _Windows_

* `title` String
* `url` String
* `type` String (optional)

Writes the `title` and `url` into the clipboard as a bookmark.

### `clipboard.clear([type])`

* `type` String (optional)

Clears the clipboard content.

### `clipboard.availableFormats([type])`

* `type` String (optional)

Returns an array of supported formats for the clipboard `type`.

### `clipboard.has(data[, type])` _Experimental_

* `data` String
* `type` String (optional)

Returns whether the clipboard supports the format of specified `data`.

```javascript
const {clipboard} = require('electron')
console.log(clipboard.has('<p>selection</p>'))
```

### `clipboard.read(data[, type])` _Experimental_

* `data` String
* `type` String (optional)

Reads `data` from the clipboard.

### `clipboard.write(data[, type])`

* `data` Object
  * `text` String
  * `html` String
  * `image` [NativeImage](http://electron.atom.io/docs/api/native-image)
  * `rtf` String
  * `bookmark` String - The title of the url at `text`.
* `type` String (optional)

```javascript
const {clipboard} = require('electron')
clipboard.write({text: 'test', html: '<b>test</b>'})
```
Writes `data` to the clipboard.
