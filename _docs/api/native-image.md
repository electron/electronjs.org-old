---
version: v1.7.9
permalink: /docs/api/native-image/
category: API
redirect_from:
  - /docs/v0.37.8/api/native-image/
  - /docs/v0.37.7/api/native-image/
  - /docs/v0.37.6/api/native-image/
  - /docs/v0.37.5/api/native-image/
  - /docs/v0.37.4/api/native-image/
  - /docs/v0.37.3/api/native-image/
  - /docs/v0.37.1/api/native-image/
  - /docs/v0.37.0/api/native-image/
  - /docs/v0.36.12/api/native-image/
  - /docs/v0.36.11/api/native-image/
  - /docs/v0.36.10/api/native-image/
  - /docs/v0.36.9/api/native-image/
  - /docs/v0.36.8/api/native-image/
  - /docs/v0.36.7/api/native-image/
  - /docs/v0.36.6/api/native-image/
  - /docs/v0.36.5/api/native-image/
  - /docs/v0.36.4/api/native-image/
  - /docs/v0.36.3/api/native-image/
  - /docs/v0.36.2/api/native-image/
  - /docs/v0.36.0/api/native-image/
  - /docs/v0.35.5/api/native-image/
  - /docs/v0.35.4/api/native-image/
  - /docs/v0.35.3/api/native-image/
  - /docs/v0.35.2/api/native-image/
  - /docs/v0.35.1/api/native-image/
  - /docs/v0.34.4/api/native-image/
  - /docs/v0.34.3/api/native-image/
  - /docs/v0.34.2/api/native-image/
  - /docs/v0.34.1/api/native-image/
  - /docs/v0.34.0/api/native-image/
  - /docs/v0.33.9/api/native-image/
  - /docs/v0.33.8/api/native-image/
  - /docs/v0.33.7/api/native-image/
  - /docs/v0.33.6/api/native-image/
  - /docs/v0.33.4/api/native-image/
  - /docs/v0.33.3/api/native-image/
  - /docs/v0.33.2/api/native-image/
  - /docs/v0.33.1/api/native-image/
  - /docs/v0.33.0/api/native-image/
  - /docs/v0.32.3/api/native-image/
  - /docs/v0.32.2/api/native-image/
  - /docs/v0.31.2/api/native-image/
  - /docs/v0.31.0/api/native-image/
  - /docs/v0.30.4/api/native-image/
  - /docs/v0.29.2/api/native-image/
  - /docs/v0.29.1/api/native-image/
  - /docs/v0.28.3/api/native-image/
  - /docs/v0.28.2/api/native-image/
  - /docs/v0.28.1/api/native-image/
  - /docs/v0.28.0/api/native-image/
  - /docs/v0.27.3/api/native-image/
  - /docs/v0.27.2/api/native-image/
  - /docs/v0.27.1/api/native-image/
  - /docs/v0.27.0/api/native-image/
  - /docs/v0.26.1/api/native-image/
  - /docs/v0.26.0/api/native-image/
  - /docs/v0.25.3/api/native-image/
  - /docs/v0.25.2/api/native-image/
  - /docs/v0.25.1/api/native-image/
  - /docs/v0.25.0/api/native-image/
  - /docs/v0.24.0/api/native-image/
  - /docs/v0.23.0/api/native-image/
  - /docs/v0.22.3/api/native-image/
  - /docs/v0.22.2/api/native-image/
  - /docs/v0.22.1/api/native-image/
  - /docs/v0.21.3/api/native-image/
  - /docs/v0.21.2/api/native-image/
  - /docs/v0.21.1/api/native-image/
  - /docs/v0.21.0/api/native-image/
  - /docs/v0.20.8/api/native-image/
  - /docs/v0.20.7/api/native-image/
  - /docs/v0.20.6/api/native-image/
  - /docs/v0.20.5/api/native-image/
  - /docs/v0.20.4/api/native-image/
  - /docs/v0.20.3/api/native-image/
  - /docs/v0.20.2/api/native-image/
  - /docs/v0.20.1/api/native-image/
  - /docs/v0.20.0/api/native-image/
  - /docs/latest/api/native-image/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/native-image.md'
title: nativeImage
excerpt: 'Create tray, dock, and application icons using PNG or JPG files.'
sort_title: native-image
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

    https://github.com/electron/electron/blob/master/docs/api/native-image.md

    Thanks!

-->
# nativeImage

> Create tray, dock, and application icons using PNG or JPG files.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process), [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

In Electron, for the APIs that take images, you can pass either file paths or `NativeImage` instances. An empty image will be used when `null` is passed.

For example, when creating a tray or setting a window's icon, you can pass an image file path as a `String`:

```javascript
const {BrowserWindow, Tray} = require('electron')

const appIcon = new Tray('/Users/somebody/images/icon.png')
let win = new BrowserWindow({icon: '/Users/somebody/images/window.png'})
console.log(appIcon, win)
```

Or read the image from the clipboard which returns a `NativeImage`:

```javascript
const {clipboard, Tray} = require('electron')
const image = clipboard.readImage()
const appIcon = new Tray(image)
console.log(appIcon)
```

## Supported Formats

Currently `PNG` and `JPEG` image formats are supported. `PNG` is recommended because of its support for transparency and lossless compression.

On Windows, you can also load `ICO` icons from file paths. For best visual quality it is recommended to include at least the following sizes in the:

*   Small icon
*   16x16 (100% DPI scale)
*   20x20 (125% DPI scale)
*   24x24 (150% DPI scale)
*   32x32 (200% DPI scale)
*   Large icon
*   32x32 (100% DPI scale)
*   40x40 (125% DPI scale)
*   48x48 (150% DPI scale)
*   64x64 (200% DPI scale)
*   256x256

Check the _Size requirements_ section in [this article](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742485(v=vs.85).aspx).

## High Resolution Image

On platforms that have high-DPI support such as Apple Retina displays, you can append `@2x` after image's base filename to mark it as a high resolution image.

For example if `icon.png` is a normal image that has standard resolution, then `icon@2x.png` will be treated as a high resolution image that has double DPI density.

If you want to support displays with different DPI densities at the same time, you can put images with different sizes in the same folder and use the filename without DPI suffixes. For example:

```text
images/
├── icon.png
├── icon@2x.png
└── icon@3x.png
```

```javascript
const {Tray} = require('electron')
let appIcon = new Tray('/Users/somebody/images/icon.png')
console.log(appIcon)
```

Following suffixes for DPI are also supported:

*   `@1x`
*   `@1.25x`
*   `@1.33x`
*   `@1.4x`
*   `@1.5x`
*   `@1.8x`
*   `@2x`
*   `@2.5x`
*   `@3x`
*   `@4x`
*   `@5x`

## Template Image

Template images consist of black and clear colors (and an alpha channel). Template images are not intended to be used as standalone images and are usually mixed with other content to create the desired final appearance.

The most common case is to use template images for a menu bar icon so it can adapt to both light and dark menu bars.

**Note:** Template image is only supported on macOS.

To mark an image as a template image, its filename should end with the word `Template`. For example:

*   `xxxTemplate.png`
*   `xxxTemplate@2x.png`

## Methods

The `nativeImage` module has the following methods, all of which return an instance of the `NativeImage` class:

### `nativeImage.createEmpty()`

Returns `NativeImage`

Creates an empty `NativeImage` instance.

### `nativeImage.createFromPath(path)`

*   `path` String

Returns `NativeImage`

Creates a new `NativeImage` instance from a file located at `path`. This method returns an empty image if the `path` does not exist, cannot be read, or is not a valid image.

```javascript
const nativeImage = require('electron').nativeImage

let image = nativeImage.createFromPath('/Users/somebody/images/icon.png')
console.log(image)
```

### `nativeImage.createFromBuffer(buffer[, options])`

*   `buffer` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer)
*   `options` Object (optional)
    *   `width` Integer (optional) - Required for bitmap buffers.
    *   `height` Integer (optional) - Required for bitmap buffers.
    *   `scaleFactor` Double (optional) - Defaults to 1.0.

Returns `NativeImage`

Creates a new `NativeImage` instance from `buffer`.

### `nativeImage.createFromDataURL(dataURL)`

*   `dataURL` String

Returns `NativeImage`

Creates a new `NativeImage` instance from `dataURL`.

## Class: NativeImage

> Natively wrap images such as tray, dock, and application icons.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process), [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

### Instance Methods

The following methods are available on instances of the `NativeImage` class:

#### `image.toPNG([options])`

*   `options` Object (optional)
    *   `scaleFactor` Double (optional) - Defaults to 1.0.

Returns `Buffer` - A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that contains the image's `PNG` encoded data.

#### `image.toJPEG(quality)`

*   `quality` Integer (**required**) - Between 0 - 100.

Returns `Buffer` - A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that contains the image's `JPEG` encoded data.

#### `image.toBitmap([options])`

*   `options` Object (optional)
    *   `scaleFactor` Double (optional) - Defaults to 1.0.

Returns `Buffer` - A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that contains a copy of the image's raw bitmap pixel data.

#### `image.toDataURL([options])`

*   `options` Object (optional)
    *   `scaleFactor` Double (optional) - Defaults to 1.0.

Returns `String` - The data URL of the image.

#### `image.getBitmap([options])`

*   `options` Object (optional)
    *   `scaleFactor` Double (optional) - Defaults to 1.0.

Returns `Buffer` - A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that contains the image's raw bitmap pixel data.

The difference between `getBitmap()` and `toBitmap()` is, `getBitmap()` does not copy the bitmap data, so you have to use the returned Buffer immediately in current event loop tick, otherwise the data might be changed or destroyed.

#### `image.getNativeHandle()` _macOS_

Returns `Buffer` - A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) that stores C pointer to underlying native handle of the image. On macOS, a pointer to `NSImage` instance would be returned.

Notice that the returned pointer is a weak pointer to the underlying native image instead of a copy, so you _must_ ensure that the associated `nativeImage` instance is kept around.

#### `image.isEmpty()`

Returns `Boolean` - Whether the image is empty.

#### `image.getSize()`

Returns [`Size`]({{site.baseurl}}/docs/api/structures/size)

#### `image.setTemplateImage(option)`

*   `option` Boolean

Marks the image as a template image.

#### `image.isTemplateImage()`

Returns `Boolean` - Whether the image is a template image.

#### `image.crop(rect)`

*   `rect` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle) - The area of the image to crop

Returns `NativeImage` - The cropped image.

#### `image.resize(options)`

*   `options` Object
    *   `width` Integer (optional) - Defaults to the image's width.
    *   `height` Integer (optional) - Defaults to the image's height
    *   `quality` String (optional) - The desired quality of the resize image. Possible values are `good`, `better` or `best`. The default is `best`. These values express a desired quality/speed tradeoff. They are translated into an algorithm-specific method that depends on the capabilities (CPU, GPU) of the underlying platform. It is possible for all three methods to be mapped to the same algorithm on a given platform.

Returns `NativeImage` - The resized image.

If only the `height` or the `width` are specified then the current aspect ratio will be preserved in the resized image.

#### `image.getAspectRatio()`

Returns `Float` - The image's aspect ratio.

#### `image.addRepresentation(options)`

*   `options` Object
    *   `scaleFactor` Double - The scale factor to add the image representation for.
    *   `width` Integer (optional) - Defaults to 0\. Required if a bitmap buffer is specified as `buffer`.
    *   `height` Integer (optional) - Defaults to 0\. Required if a bitmap buffer is specified as `buffer`.
    *   `buffer` Buffer (optional) - The buffer containing the raw image data.
    *   `dataURL` String (optional) - The data URL containing either a base 64 encoded PNG or JPEG image.

Add an image representation for a specific scale factor. This can be used to explicitly add different scale factor representations to an image. This can be called on empty images.
