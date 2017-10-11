---
version: v1.7.9
permalink: /docs/api/web-request/
category: API
redirect_from:
  - /docs/v0.37.8/api/web-request/
  - /docs/v0.37.7/api/web-request/
  - /docs/v0.37.6/api/web-request/
  - /docs/v0.37.5/api/web-request/
  - /docs/v0.37.4/api/web-request/
  - /docs/v0.37.3/api/web-request/
  - /docs/v0.37.1/api/web-request/
  - /docs/v0.37.0/api/web-request/
  - /docs/v0.36.12/api/web-request/
  - /docs/v0.36.11/api/web-request/
  - /docs/v0.36.10/api/web-request/
  - /docs/v0.36.9/api/web-request/
  - /docs/v0.36.8/api/web-request/
  - /docs/v0.36.7/api/web-request/
  - /docs/v0.36.6/api/web-request/
  - /docs/v0.36.5/api/web-request/
  - /docs/v0.36.4/api/web-request/
  - /docs/v0.36.3/api/web-request/
  - /docs/v0.36.2/api/web-request/
  - /docs/v0.36.0/api/web-request/
  - /docs/v0.35.5/api/web-request/
  - /docs/v0.35.4/api/web-request/
  - /docs/v0.35.3/api/web-request/
  - /docs/v0.35.2/api/web-request/
  - /docs/v0.35.1/api/web-request/
  - /docs/v0.34.4/api/web-request/
  - /docs/v0.34.3/api/web-request/
  - /docs/v0.34.2/api/web-request/
  - /docs/v0.34.1/api/web-request/
  - /docs/v0.34.0/api/web-request/
  - /docs/v0.33.9/api/web-request/
  - /docs/v0.33.8/api/web-request/
  - /docs/v0.33.7/api/web-request/
  - /docs/v0.33.6/api/web-request/
  - /docs/v0.33.4/api/web-request/
  - /docs/v0.33.3/api/web-request/
  - /docs/v0.33.2/api/web-request/
  - /docs/v0.33.1/api/web-request/
  - /docs/v0.33.0/api/web-request/
  - /docs/v0.32.3/api/web-request/
  - /docs/v0.32.2/api/web-request/
  - /docs/v0.31.2/api/web-request/
  - /docs/v0.31.0/api/web-request/
  - /docs/v0.30.4/api/web-request/
  - /docs/v0.29.2/api/web-request/
  - /docs/v0.29.1/api/web-request/
  - /docs/v0.28.3/api/web-request/
  - /docs/v0.28.2/api/web-request/
  - /docs/v0.28.1/api/web-request/
  - /docs/v0.28.0/api/web-request/
  - /docs/v0.27.3/api/web-request/
  - /docs/v0.27.2/api/web-request/
  - /docs/v0.27.1/api/web-request/
  - /docs/v0.27.0/api/web-request/
  - /docs/v0.26.1/api/web-request/
  - /docs/v0.26.0/api/web-request/
  - /docs/v0.25.3/api/web-request/
  - /docs/v0.25.2/api/web-request/
  - /docs/v0.25.1/api/web-request/
  - /docs/v0.25.0/api/web-request/
  - /docs/v0.24.0/api/web-request/
  - /docs/v0.23.0/api/web-request/
  - /docs/v0.22.3/api/web-request/
  - /docs/v0.22.2/api/web-request/
  - /docs/v0.22.1/api/web-request/
  - /docs/v0.21.3/api/web-request/
  - /docs/v0.21.2/api/web-request/
  - /docs/v0.21.1/api/web-request/
  - /docs/v0.21.0/api/web-request/
  - /docs/v0.20.8/api/web-request/
  - /docs/v0.20.7/api/web-request/
  - /docs/v0.20.6/api/web-request/
  - /docs/v0.20.5/api/web-request/
  - /docs/v0.20.4/api/web-request/
  - /docs/v0.20.3/api/web-request/
  - /docs/v0.20.2/api/web-request/
  - /docs/v0.20.1/api/web-request/
  - /docs/v0.20.0/api/web-request/
  - /docs/latest/api/web-request/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/web-request.md'
title: WebRequest
excerpt: >-
  Intercept and modify the contents of a request at various stages of its
  lifetime.
sort_title: web-request
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

    https://github.com/electron/electron/blob/master/docs/api/web-request.md

    Thanks!

-->
## Class: WebRequest

> Intercept and modify the contents of a request at various stages of its lifetime.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

Instances of the `WebRequest` class are accessed by using the `webRequest` property of a `Session`.

The methods of `WebRequest` accept an optional `filter` and a `listener`. The `listener` will be called with `listener(details)` when the API's event has happened. The `details` object describes the request. Passing `null` as `listener` will unsubscribe from the event.

The `filter` object has a `urls` property which is an Array of URL patterns that will be used to filter out the requests that do not match the URL patterns. If the `filter` is omitted then all requests will be matched.

For certain events the `listener` is passed with a `callback`, which should be called with a `response` object when `listener` has done its work.

An example of adding `User-Agent` header for requests:

```javascript
const {session} = require('electron')

// Modify the user agent for all requests to the following urls.
const filter = {
  urls: ['https://*.github.com/*', '*://electron.github.io']
}

session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
  details.requestHeaders['User-Agent'] = 'MyAgent'
  callback({cancel: false, requestHeaders: details.requestHeaders})
})
```

### Instance Methods

The following methods are available on instances of `WebRequest`:

#### `webRequest.onBeforeRequest([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function
    *   `details` Object
        *   `id` Integer
        *   `url` String
        *   `method` String
        *   `resourceType` String
        *   `timestamp` Double
        *   `uploadData` [UploadData[]]({{site.baseurl}}/docs/api/structures/upload-data)
    *   `callback` Function
        *   `response` Object
            *   `cancel` Boolean (optional)
            *   `redirectURL` String (optional) - The original request is prevented from being sent or completed and is instead redirected to the given URL.

The `listener` will be called with `listener(details, callback)` when a request is about to occur.

The `uploadData` is an array of `UploadData` objects.

The `callback` has to be called with an `response` object.

#### `webRequest.onBeforeSendHeaders([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function

The `listener` will be called with `listener(details, callback)` before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any http data is sent.

*   `details` Object
    *   `id` Integer
    *   `url` String
    *   `method` String
    *   `resourceType` String
    *   `timestamp` Double
    *   `requestHeaders` Object
*   `callback` Function
    *   `response` Object
        *   `cancel` Boolean (optional)
        *   `requestHeaders` Object (optional) - When provided, request will be made with these headers.

The `callback` has to be called with an `response` object.

#### `webRequest.onSendHeaders([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function
    *   `details` Object
        *   `id` Integer
        *   `url` String
        *   `method` String
        *   `resourceType` String
        *   `timestamp` Double
        *   `requestHeaders` Object

The `listener` will be called with `listener(details)` just before a request is going to be sent to the server, modifications of previous `onBeforeSendHeaders` response are visible by the time this listener is fired.

#### `webRequest.onHeadersReceived([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function

The `listener` will be called with `listener(details, callback)` when HTTP response headers of a request have been received.

*   `details` Object
    *   `id` String
    *   `url` String
    *   `method` String
    *   `resourceType` String
    *   `timestamp` Double
    *   `statusLine` String
    *   `statusCode` Integer
    *   `responseHeaders` Object
*   `callback` Function
    *   `response` Object
        *   `cancel` Boolean
        *   `responseHeaders` Object (optional) - When provided, the server is assumed to have responded with these headers.
        *   `statusLine` String (optional) - Should be provided when overriding `responseHeaders` to change header status otherwise original response header's status will be used.

The `callback` has to be called with an `response` object.

#### `webRequest.onResponseStarted([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function
    *   `details` Object
        *   `id` Integer
        *   `url` String
        *   `method` String
        *   `resourceType` String
        *   `timestamp` Double
        *   `responseHeaders` Object
        *   `fromCache` Boolean - Indicates whether the response was fetched from disk cache.
        *   `statusCode` Integer
        *   `statusLine` String

The `listener` will be called with `listener(details)` when first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.

#### `webRequest.onBeforeRedirect([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function
    *   `details` Object
        *   `id` String
        *   `url` String
        *   `method` String
        *   `resourceType` String
        *   `timestamp` Double
        *   `redirectURL` String
        *   `statusCode` Integer
        *   `ip` String (optional) - The server IP address that the request was actually sent to.
        *   `fromCache` Boolean
        *   `responseHeaders` Object

The `listener` will be called with `listener(details)` when a server initiated redirect is about to occur.

#### `webRequest.onCompleted([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function
    *   `details` Object
        *   `id` Integer
        *   `url` String
        *   `method` String
        *   `resourceType` String
        *   `timestamp` Double
        *   `responseHeaders` Object
        *   `fromCache` Boolean
        *   `statusCode` Integer
        *   `statusLine` String

The `listener` will be called with `listener(details)` when a request is completed.

#### `webRequest.onErrorOccurred([filter, ]listener)`

*   `filter` Object
    *   `urls` String[] - Array of URL patterns that will be used to filter out the requests that do not match the URL patterns.
*   `listener` Function
    *   `details` Object
        *   `id` Integer
        *   `url` String
        *   `method` String
        *   `resourceType` String
        *   `timestamp` Double
        *   `fromCache` Boolean
        *   `error` String - The error description.

The `listener` will be called with `listener(details)` when an error occurs.
