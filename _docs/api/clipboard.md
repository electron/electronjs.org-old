---
version: v0.37.5
category: API
title: Clipboard
redirect-from:
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
    - /docs/v0.37.5/api/clipboard/
    - /docs/latest/api/clipboard/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/clipboard.md'
---

# clipboard

The `clipboard` module provides methods to perform copy and paste operations.
The following example shows how to write a string to the clipboard:

```javascript
const clipboard = require('electron').clipboard;
clipboard.writeText('Example String');
```

On X Window systems, there is also a selection clipboard. To manipulate it
you need to pass `selection` to each method:

```javascript
clipboard.writeText('Example String', 'selection');
console.log(clipboard.readText('selection'));
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

### `clipboard.readHtml([type])`

* `type` String (optional)

Returns the content in the clipboard as markup.

### `clipboard.writeHtml(markup[, type])`

* `markup` String
* `type` String (optional)

Writes `markup` to the clipboard.

### `clipboard.readImage([type])`

* `type` String (optional)

Returns the content in the clipboard as a [NativeImage](http://electron.atom.io/docs/v0.37.5/api/native-image).

### `clipboard.writeImage(image[, type])`

* `image` [NativeImage](http://electron.atom.io/docs/v0.37.5/api/native-image)
* `type` String (optional)

Writes `image` to the clipboard.

### `clipboard.readRtf([type])`

* `type` String (optional)

Returns the content in the clipboard as RTF.

### `clipboard.writeRtf(text[, type])`

* `text` String
* `type` String (optional)

Writes the `text` into the clipboard in RTF.

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
console.log(clipboard.has('<p>selection</p>'));
```

### `clipboard.read(data[, type])` _Experimental_

* `data` String
* `type` String (optional)

Reads `data` from the clipboard.

### `clipboard.write(data[, type])`

* `data` Object
  * `text` String
  * `html` String
  * `image` [NativeImage](http://electron.atom.io/docs/v0.37.5/api/native-image)
* `type` String (optional)

```javascript
clipboard.write({text: 'test', html: "<b>test</b>"});
```
Writes `data` to the clipboard.
