---
version: v1.7.9
permalink: /docs/api/clipboard/
category: API
redirect_from:
  - /docs/v0.37.8/api/clipboard/
  - /docs/v0.37.7/api/clipboard/
  - /docs/v0.37.6/api/clipboard/
  - /docs/v0.37.5/api/clipboard/
  - /docs/v0.37.4/api/clipboard/
  - /docs/v0.37.3/api/clipboard/
  - /docs/v0.37.1/api/clipboard/
  - /docs/v0.37.0/api/clipboard/
  - /docs/v0.36.12/api/clipboard/
  - /docs/v0.36.11/api/clipboard/
  - /docs/v0.36.10/api/clipboard/
  - /docs/v0.36.9/api/clipboard/
  - /docs/v0.36.8/api/clipboard/
  - /docs/v0.36.7/api/clipboard/
  - /docs/v0.36.6/api/clipboard/
  - /docs/v0.36.5/api/clipboard/
  - /docs/v0.36.4/api/clipboard/
  - /docs/v0.36.3/api/clipboard/
  - /docs/v0.36.2/api/clipboard/
  - /docs/v0.36.0/api/clipboard/
  - /docs/v0.35.5/api/clipboard/
  - /docs/v0.35.4/api/clipboard/
  - /docs/v0.35.3/api/clipboard/
  - /docs/v0.35.2/api/clipboard/
  - /docs/v0.35.1/api/clipboard/
  - /docs/v0.34.4/api/clipboard/
  - /docs/v0.34.3/api/clipboard/
  - /docs/v0.34.2/api/clipboard/
  - /docs/v0.34.1/api/clipboard/
  - /docs/v0.34.0/api/clipboard/
  - /docs/v0.33.9/api/clipboard/
  - /docs/v0.33.8/api/clipboard/
  - /docs/v0.33.7/api/clipboard/
  - /docs/v0.33.6/api/clipboard/
  - /docs/v0.33.4/api/clipboard/
  - /docs/v0.33.3/api/clipboard/
  - /docs/v0.33.2/api/clipboard/
  - /docs/v0.33.1/api/clipboard/
  - /docs/v0.33.0/api/clipboard/
  - /docs/v0.32.3/api/clipboard/
  - /docs/v0.32.2/api/clipboard/
  - /docs/v0.31.2/api/clipboard/
  - /docs/v0.31.0/api/clipboard/
  - /docs/v0.30.4/api/clipboard/
  - /docs/v0.29.2/api/clipboard/
  - /docs/v0.29.1/api/clipboard/
  - /docs/v0.28.3/api/clipboard/
  - /docs/v0.28.2/api/clipboard/
  - /docs/v0.28.1/api/clipboard/
  - /docs/v0.28.0/api/clipboard/
  - /docs/v0.27.3/api/clipboard/
  - /docs/v0.27.2/api/clipboard/
  - /docs/v0.27.1/api/clipboard/
  - /docs/v0.27.0/api/clipboard/
  - /docs/v0.26.1/api/clipboard/
  - /docs/v0.26.0/api/clipboard/
  - /docs/v0.25.3/api/clipboard/
  - /docs/v0.25.2/api/clipboard/
  - /docs/v0.25.1/api/clipboard/
  - /docs/v0.25.0/api/clipboard/
  - /docs/v0.24.0/api/clipboard/
  - /docs/v0.23.0/api/clipboard/
  - /docs/v0.22.3/api/clipboard/
  - /docs/v0.22.2/api/clipboard/
  - /docs/v0.22.1/api/clipboard/
  - /docs/v0.21.3/api/clipboard/
  - /docs/v0.21.2/api/clipboard/
  - /docs/v0.21.1/api/clipboard/
  - /docs/v0.21.0/api/clipboard/
  - /docs/v0.20.8/api/clipboard/
  - /docs/v0.20.7/api/clipboard/
  - /docs/v0.20.6/api/clipboard/
  - /docs/v0.20.5/api/clipboard/
  - /docs/v0.20.4/api/clipboard/
  - /docs/v0.20.3/api/clipboard/
  - /docs/v0.20.2/api/clipboard/
  - /docs/v0.20.1/api/clipboard/
  - /docs/v0.20.0/api/clipboard/
  - /docs/latest/api/clipboard/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/clipboard.md'
title: clipboard
excerpt: Perform copy and paste operations on the system clipboard.
sort_title: clipboard
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

    https://github.com/electron/electron/blob/master/docs/api/clipboard.md

    Thanks!

-->
# clipboard

> Perform copy and paste operations on the system clipboard.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process), [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The following example shows how to write a string to the clipboard:

```javascript
const {clipboard} = require('electron')
clipboard.writeText('Example String')
```

On X Window systems, there is also a selection clipboard. To manipulate it you need to pass `selection` to each method:

```javascript
const {clipboard} = require('electron')
clipboard.writeText('Example String', 'selection')
console.log(clipboard.readText('selection'))
```

## Methods

The `clipboard` module has the following methods:

**Note:** Experimental APIs are marked as such and could be removed in future.

### `clipboard.readText([type])`

*   `type` String (optional)

Returns `String` - The content in the clipboard as plain text.

### `clipboard.writeText(text[, type])`

*   `text` String
*   `type` String (optional)

Writes the `text` into the clipboard as plain text.

### `clipboard.readHTML([type])`

*   `type` String (optional)

Returns `String` - The content in the clipboard as markup.

### `clipboard.writeHTML(markup[, type])`

*   `markup` String
*   `type` String (optional)

Writes `markup` to the clipboard.

### `clipboard.readImage([type])`

*   `type` String (optional)

Returns [`NativeImage`]({{site.baseurl}}/docs/api/native-image) - The image content in the clipboard.

### `clipboard.writeImage(image[, type])`

*   `image` [NativeImage]({{site.baseurl}}/docs/api/native-image)
*   `type` String (optional)

Writes `image` to the clipboard.

### `clipboard.readRTF([type])`

*   `type` String (optional)

Returns `String` - The content in the clipboard as RTF.

### `clipboard.writeRTF(text[, type])`

*   `text` String
*   `type` String (optional)

Writes the `text` into the clipboard in RTF.

### `clipboard.readBookmark()` _macOS_ _Windows_

Returns `Object`:

*   `title` String
*   `url` String

Returns an Object containing `title` and `url` keys representing the bookmark in the clipboard. The `title` and `url` values will be empty strings when the bookmark is unavailable.

### `clipboard.writeBookmark(title, url[, type])` _macOS_ _Windows_

*   `title` String
*   `url` String
*   `type` String (optional)

Writes the `title` and `url` into the clipboard as a bookmark.

**Note:** Most apps on Windows don't support pasting bookmarks into them so you can use `clipboard.write` to write both a bookmark and fallback text to the clipboard.

```js
clipboard.write({
  text: 'https://electron.atom.io',
  bookmark: 'Electron Homepage'
})
```

### `clipboard.readFindText()` _macOS_

Returns `String` - The text on the find pasteboard. This method uses synchronous IPC when called from the renderer process. The cached value is reread from the find pasteboard whenever the application is activated.

### `clipboard.writeFindText(text)` _macOS_

*   `text` String

Writes the `text` into the find pasteboard as plain text. This method uses synchronous IPC when called from the renderer process.

### `clipboard.clear([type])`

*   `type` String (optional)

Clears the clipboard content.

### `clipboard.availableFormats([type])`

*   `type` String (optional)

Returns `String[]` - An array of supported formats for the clipboard `type`.

### `clipboard.has(format[, type])` _Experimental_

*   `format` String
*   `type` String (optional)

Returns `Boolean` - Whether the clipboard supports the specified `format`.

```javascript
const {clipboard} = require('electron')
console.log(clipboard.has('<p>selection</p>'))
```

### `clipboard.read(format)` _Experimental_

*   `format` String

Returns `String` - Reads `format` type from the clipboard.

### `clipboard.readBuffer(format)` _Experimental_

*   `format` String

Returns `Buffer` - Reads `format` type from the clipboard.

### `clipboard.writeBuffer(format, buffer[, type])` _Experimental_

*   `format` String
*   `buffer` Buffer
*   `type` String (optional)

Writes the `buffer` into the clipboard as `format`.

### `clipboard.write(data[, type])`

*   `data` Object
    *   `text` String (optional)
    *   `html` String (optional)
    *   `image` [NativeImage]({{site.baseurl}}/docs/api/native-image) (optional)
    *   `rtf` String (optional)
    *   `bookmark` String (optional) - The title of the url at `text`.
*   `type` String (optional)

```javascript
const {clipboard} = require('electron')
clipboard.write({text: 'test', html: '<b>test</b>'})
```

Writes `data` to the clipboard.
