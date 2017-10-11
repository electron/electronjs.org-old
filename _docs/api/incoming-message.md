---
version: v1.7.9
permalink: /docs/api/incoming-message/
category: API
redirect_from:
  - /docs/v0.37.8/api/incoming-message/
  - /docs/v0.37.7/api/incoming-message/
  - /docs/v0.37.6/api/incoming-message/
  - /docs/v0.37.5/api/incoming-message/
  - /docs/v0.37.4/api/incoming-message/
  - /docs/v0.37.3/api/incoming-message/
  - /docs/v0.37.1/api/incoming-message/
  - /docs/v0.37.0/api/incoming-message/
  - /docs/v0.36.12/api/incoming-message/
  - /docs/v0.36.11/api/incoming-message/
  - /docs/v0.36.10/api/incoming-message/
  - /docs/v0.36.9/api/incoming-message/
  - /docs/v0.36.8/api/incoming-message/
  - /docs/v0.36.7/api/incoming-message/
  - /docs/v0.36.6/api/incoming-message/
  - /docs/v0.36.5/api/incoming-message/
  - /docs/v0.36.4/api/incoming-message/
  - /docs/v0.36.3/api/incoming-message/
  - /docs/v0.36.2/api/incoming-message/
  - /docs/v0.36.0/api/incoming-message/
  - /docs/v0.35.5/api/incoming-message/
  - /docs/v0.35.4/api/incoming-message/
  - /docs/v0.35.3/api/incoming-message/
  - /docs/v0.35.2/api/incoming-message/
  - /docs/v0.35.1/api/incoming-message/
  - /docs/v0.34.4/api/incoming-message/
  - /docs/v0.34.3/api/incoming-message/
  - /docs/v0.34.2/api/incoming-message/
  - /docs/v0.34.1/api/incoming-message/
  - /docs/v0.34.0/api/incoming-message/
  - /docs/v0.33.9/api/incoming-message/
  - /docs/v0.33.8/api/incoming-message/
  - /docs/v0.33.7/api/incoming-message/
  - /docs/v0.33.6/api/incoming-message/
  - /docs/v0.33.4/api/incoming-message/
  - /docs/v0.33.3/api/incoming-message/
  - /docs/v0.33.2/api/incoming-message/
  - /docs/v0.33.1/api/incoming-message/
  - /docs/v0.33.0/api/incoming-message/
  - /docs/v0.32.3/api/incoming-message/
  - /docs/v0.32.2/api/incoming-message/
  - /docs/v0.31.2/api/incoming-message/
  - /docs/v0.31.0/api/incoming-message/
  - /docs/v0.30.4/api/incoming-message/
  - /docs/v0.29.2/api/incoming-message/
  - /docs/v0.29.1/api/incoming-message/
  - /docs/v0.28.3/api/incoming-message/
  - /docs/v0.28.2/api/incoming-message/
  - /docs/v0.28.1/api/incoming-message/
  - /docs/v0.28.0/api/incoming-message/
  - /docs/v0.27.3/api/incoming-message/
  - /docs/v0.27.2/api/incoming-message/
  - /docs/v0.27.1/api/incoming-message/
  - /docs/v0.27.0/api/incoming-message/
  - /docs/v0.26.1/api/incoming-message/
  - /docs/v0.26.0/api/incoming-message/
  - /docs/v0.25.3/api/incoming-message/
  - /docs/v0.25.2/api/incoming-message/
  - /docs/v0.25.1/api/incoming-message/
  - /docs/v0.25.0/api/incoming-message/
  - /docs/v0.24.0/api/incoming-message/
  - /docs/v0.23.0/api/incoming-message/
  - /docs/v0.22.3/api/incoming-message/
  - /docs/v0.22.2/api/incoming-message/
  - /docs/v0.22.1/api/incoming-message/
  - /docs/v0.21.3/api/incoming-message/
  - /docs/v0.21.2/api/incoming-message/
  - /docs/v0.21.1/api/incoming-message/
  - /docs/v0.21.0/api/incoming-message/
  - /docs/v0.20.8/api/incoming-message/
  - /docs/v0.20.7/api/incoming-message/
  - /docs/v0.20.6/api/incoming-message/
  - /docs/v0.20.5/api/incoming-message/
  - /docs/v0.20.4/api/incoming-message/
  - /docs/v0.20.3/api/incoming-message/
  - /docs/v0.20.2/api/incoming-message/
  - /docs/v0.20.1/api/incoming-message/
  - /docs/v0.20.0/api/incoming-message/
  - /docs/latest/api/incoming-message/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/incoming-message.md'
title: IncomingMessage
excerpt: Handle responses to HTTP/HTTPS requests.
sort_title: incoming-message
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

    https://github.com/electron/electron/blob/master/docs/api/incoming-message.md

    Thanks!

-->
## Class: IncomingMessage

> Handle responses to HTTP/HTTPS requests.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

`IncomingMessage` implements the [Readable Stream](https://nodejs.org/api/stream.html#stream_readable_streams) interface and is therefore an [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter).

### Instance Events

#### Event: 'data'

Returns:

*   `chunk` Buffer - A chunk of response body's data.

The `data` event is the usual method of transferring response data into applicative code.

#### Event: 'end'

Indicates that response body has ended.

#### Event: 'aborted'

Emitted when a request has been canceled during an ongoing HTTP transaction.

#### Event: 'error'

Returns:

`error` Error - Typically holds an error string identifying failure root cause.

Emitted when an error was encountered while streaming response data events. For instance, if the server closes the underlying while the response is still streaming, an `error` event will be emitted on the response object and a `close` event will subsequently follow on the request object.

### Instance Properties

An `IncomingMessage` instance has the following readable properties:

#### `response.statusCode`

An `Integer` indicating the HTTP response status code.

#### `response.statusMessage`

A `String` representing the HTTP status message.

#### `response.headers`

An `Object` representing the response HTTP headers. The `headers` object is formatted as follows:

*   All header names are lowercased.
*   Each header name produces an array-valued property on the headers object.
*   Each header value is pushed into the array associated with its header name.

#### `response.httpVersion`

A `String` indicating the HTTP protocol version number. Typical values are '1.0' or '1.1'. Additionally `httpVersionMajor` and `httpVersionMinor` are two Integer-valued readable properties that return respectively the HTTP major and minor version numbers.

#### `response.httpVersionMajor`

An `Integer` indicating the HTTP protocol major version number.

#### `response.httpVersionMinor`

An `Integer` indicating the HTTP protocol minor version number.
