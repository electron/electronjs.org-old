---
version: v1.7.9
permalink: /docs/api/protocol/
category: API
redirect_from:
  - /docs/v0.37.8/api/protocol/
  - /docs/v0.37.7/api/protocol/
  - /docs/v0.37.6/api/protocol/
  - /docs/v0.37.5/api/protocol/
  - /docs/v0.37.4/api/protocol/
  - /docs/v0.37.3/api/protocol/
  - /docs/v0.37.1/api/protocol/
  - /docs/v0.37.0/api/protocol/
  - /docs/v0.36.12/api/protocol/
  - /docs/v0.36.11/api/protocol/
  - /docs/v0.36.10/api/protocol/
  - /docs/v0.36.9/api/protocol/
  - /docs/v0.36.8/api/protocol/
  - /docs/v0.36.7/api/protocol/
  - /docs/v0.36.6/api/protocol/
  - /docs/v0.36.5/api/protocol/
  - /docs/v0.36.4/api/protocol/
  - /docs/v0.36.3/api/protocol/
  - /docs/v0.36.2/api/protocol/
  - /docs/v0.36.0/api/protocol/
  - /docs/v0.35.5/api/protocol/
  - /docs/v0.35.4/api/protocol/
  - /docs/v0.35.3/api/protocol/
  - /docs/v0.35.2/api/protocol/
  - /docs/v0.35.1/api/protocol/
  - /docs/v0.34.4/api/protocol/
  - /docs/v0.34.3/api/protocol/
  - /docs/v0.34.2/api/protocol/
  - /docs/v0.34.1/api/protocol/
  - /docs/v0.34.0/api/protocol/
  - /docs/v0.33.9/api/protocol/
  - /docs/v0.33.8/api/protocol/
  - /docs/v0.33.7/api/protocol/
  - /docs/v0.33.6/api/protocol/
  - /docs/v0.33.4/api/protocol/
  - /docs/v0.33.3/api/protocol/
  - /docs/v0.33.2/api/protocol/
  - /docs/v0.33.1/api/protocol/
  - /docs/v0.33.0/api/protocol/
  - /docs/v0.32.3/api/protocol/
  - /docs/v0.32.2/api/protocol/
  - /docs/v0.31.2/api/protocol/
  - /docs/v0.31.0/api/protocol/
  - /docs/v0.30.4/api/protocol/
  - /docs/v0.29.2/api/protocol/
  - /docs/v0.29.1/api/protocol/
  - /docs/v0.28.3/api/protocol/
  - /docs/v0.28.2/api/protocol/
  - /docs/v0.28.1/api/protocol/
  - /docs/v0.28.0/api/protocol/
  - /docs/v0.27.3/api/protocol/
  - /docs/v0.27.2/api/protocol/
  - /docs/v0.27.1/api/protocol/
  - /docs/v0.27.0/api/protocol/
  - /docs/v0.26.1/api/protocol/
  - /docs/v0.26.0/api/protocol/
  - /docs/v0.25.3/api/protocol/
  - /docs/v0.25.2/api/protocol/
  - /docs/v0.25.1/api/protocol/
  - /docs/v0.25.0/api/protocol/
  - /docs/v0.24.0/api/protocol/
  - /docs/v0.23.0/api/protocol/
  - /docs/v0.22.3/api/protocol/
  - /docs/v0.22.2/api/protocol/
  - /docs/v0.22.1/api/protocol/
  - /docs/v0.21.3/api/protocol/
  - /docs/v0.21.2/api/protocol/
  - /docs/v0.21.1/api/protocol/
  - /docs/v0.21.0/api/protocol/
  - /docs/v0.20.8/api/protocol/
  - /docs/v0.20.7/api/protocol/
  - /docs/v0.20.6/api/protocol/
  - /docs/v0.20.5/api/protocol/
  - /docs/v0.20.4/api/protocol/
  - /docs/v0.20.3/api/protocol/
  - /docs/v0.20.2/api/protocol/
  - /docs/v0.20.1/api/protocol/
  - /docs/v0.20.0/api/protocol/
  - /docs/latest/api/protocol/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/protocol.md'
title: protocol
excerpt: Register a custom protocol and intercept existing protocol requests.
sort_title: protocol
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

    https://github.com/electron/electron/blob/master/docs/api/protocol.md

    Thanks!

-->
# protocol

> Register a custom protocol and intercept existing protocol requests.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

An example of implementing a protocol that has the same effect as the `file://` protocol:

```javascript
const {app, protocol} = require('electron')
const path = require('path')

app.on('ready', () => {
  protocol.registerFileProtocol('atom', (request, callback) => {
    const url = request.url.substr(7)
    callback({path: path.normalize(`${__dirname}/${url}`)})
  }, (error) => {
    if (error) console.error('Failed to register protocol')
  })
})
```

**Note:** All methods unless specified can only be used after the `ready` event of the `app` module gets emitted.

## Methods

The `protocol` module has the following methods:

### `protocol.registerStandardSchemes(schemes[, options])`

*   `schemes` String[] - Custom schemes to be registered as standard schemes.
*   `options` Object (optional)
    *   `secure` Boolean (optional) - `true` to register the scheme as secure. Default `false`.

A standard scheme adheres to what RFC 3986 calls [generic URI syntax](https://tools.ietf.org/html/rfc3986#section-3). For example `http` and `https` are standard schemes, while `file` is not.

Registering a scheme as standard, will allow relative and absolute resources to be resolved correctly when served. Otherwise the scheme will behave like the `file` protocol, but without the ability to resolve relative URLs.

For example when you load following page with custom protocol without registering it as standard scheme, the image will not be loaded because non-standard schemes can not recognize relative URLs:

```html
<body>
  <img src='test.png'>
</body>
```

Registering a scheme as standard will allow access to files through the [FileSystem API](https://developer.mozilla.org/en-US/docs/Web/API/LocalFileSystem). Otherwise the renderer will throw a security error for the scheme.

By default web storage apis (localStorage, sessionStorage, webSQL, indexedDB, cookies) are disabled for non standard schemes. So in general if you want to register a custom protocol to replace the `http` protocol, you have to register it as a standard scheme:

```javascript
const {app, protocol} = require('electron')

protocol.registerStandardSchemes(['atom'])
app.on('ready', () => {
  protocol.registerHttpProtocol('atom', '...')
})
```

**Note:** This method can only be used before the `ready` event of the `app` module gets emitted.

### `protocol.registerServiceWorkerSchemes(schemes)`

*   `schemes` String[] - Custom schemes to be registered to handle service workers.

### `protocol.registerFileProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `filePath` String (optional)
*   `completion` Function (optional)
    *   `error` Error

Registers a protocol of `scheme` that will send the file as a response. The `handler` will be called with `handler(request, callback)` when a `request` is going to be created with `scheme`. `completion` will be called with `completion(null)` when `scheme` is successfully registered or `completion(error)` when failed.

To handle the `request`, the `callback` should be called with either the file's path or an object that has a `path` property, e.g. `callback(filePath)` or `callback({path: filePath})`.

When `callback` is called with nothing, a number, or an object that has an `error` property, the `request` will fail with the `error` number you specified. For the available error numbers you can use, please see the [net error list](https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h).

By default the `scheme` is treated like `http:`, which is parsed differently than protocols that follow the "generic URI syntax" like `file:`, so you probably want to call `protocol.registerStandardSchemes` to have your scheme treated as a standard scheme.

### `protocol.registerBufferProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `buffer` (Buffer &#124; [MimeTypedBuffer]({{site.baseurl}}/docs/api/structures/mime-typed-buffer)) (optional)
*   `completion` Function (optional)
    *   `error` Error

Registers a protocol of `scheme` that will send a `Buffer` as a response.

The usage is the same with `registerFileProtocol`, except that the `callback` should be called with either a `Buffer` object or an object that has the `data`, `mimeType`, and `charset` properties.

Example:

```javascript
const {protocol} = require('electron')

protocol.registerBufferProtocol('atom', (request, callback) => {
  callback({mimeType: 'text/html', data: Buffer.from('<h5>Response</h5>')})
}, (error) => {
  if (error) console.error('Failed to register protocol')
})
```

### `protocol.registerStringProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `data` String (optional)
*   `completion` Function (optional)
    *   `error` Error

Registers a protocol of `scheme` that will send a `String` as a response.

The usage is the same with `registerFileProtocol`, except that the `callback` should be called with either a `String` or an object that has the `data`, `mimeType`, and `charset` properties.

### `protocol.registerHttpProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `redirectRequest` Object
            *   `url` String
            *   `method` String
            *   `session` Object (optional)
            *   `uploadData` Object (optional)
                *   `contentType` String - MIME type of the content.
                *   `data` String - Content to be sent.
*   `completion` Function (optional)
    *   `error` Error

Registers a protocol of `scheme` that will send an HTTP request as a response.

The usage is the same with `registerFileProtocol`, except that the `callback` should be called with a `redirectRequest` object that has the `url`, `method`, `referrer`, `uploadData` and `session` properties.

By default the HTTP request will reuse the current session. If you want the request to have a different session you should set `session` to `null`.

For POST requests the `uploadData` object must be provided.

### `protocol.unregisterProtocol(scheme[, completion])`

*   `scheme` String
*   `completion` Function (optional)
    *   `error` Error

Unregisters the custom protocol of `scheme`.

### `protocol.isProtocolHandled(scheme, callback)`

*   `scheme` String
*   `callback` Function
    *   `error` Error

The `callback` will be called with a boolean that indicates whether there is already a handler for `scheme`.

### `protocol.interceptFileProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `filePath` String
*   `completion` Function (optional)
    *   `error` Error

Intercepts `scheme` protocol and uses `handler` as the protocol's new handler which sends a file as a response.

### `protocol.interceptStringProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `data` String (optional)
*   `completion` Function (optional)
    *   `error` Error

Intercepts `scheme` protocol and uses `handler` as the protocol's new handler which sends a `String` as a response.

### `protocol.interceptBufferProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `buffer` Buffer (optional)
*   `completion` Function (optional)
    *   `error` Error

Intercepts `scheme` protocol and uses `handler` as the protocol's new handler which sends a `Buffer` as a response.

### `protocol.interceptHttpProtocol(scheme, handler[, completion])`

*   `scheme` String
*   `handler` Function
    *   `request` Object
        *   `url` String
        *   `referrer` String
        *   `method` String
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `redirectRequest` Object
            *   `url` String
            *   `method` String
            *   `session` Object (optional)
            *   `uploadData` Object (optional)
                *   `contentType` String - MIME type of the content.
                *   `data` String - Content to be sent.
*   `completion` Function (optional)
    *   `error` Error

Intercepts `scheme` protocol and uses `handler` as the protocol's new handler which sends a new HTTP request as a response.

### `protocol.uninterceptProtocol(scheme[, completion])`

*   `scheme` String
*   `completion` Function (optional)
    *   `error` Error

Remove the interceptor installed for `scheme` and restore its original handler.
