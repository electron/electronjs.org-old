---
version: v1.7.9
permalink: /docs/api/net/
category: API
redirect_from:
  - /docs/v0.37.8/api/net/
  - /docs/v0.37.7/api/net/
  - /docs/v0.37.6/api/net/
  - /docs/v0.37.5/api/net/
  - /docs/v0.37.4/api/net/
  - /docs/v0.37.3/api/net/
  - /docs/v0.37.1/api/net/
  - /docs/v0.37.0/api/net/
  - /docs/v0.36.12/api/net/
  - /docs/v0.36.11/api/net/
  - /docs/v0.36.10/api/net/
  - /docs/v0.36.9/api/net/
  - /docs/v0.36.8/api/net/
  - /docs/v0.36.7/api/net/
  - /docs/v0.36.6/api/net/
  - /docs/v0.36.5/api/net/
  - /docs/v0.36.4/api/net/
  - /docs/v0.36.3/api/net/
  - /docs/v0.36.2/api/net/
  - /docs/v0.36.0/api/net/
  - /docs/v0.35.5/api/net/
  - /docs/v0.35.4/api/net/
  - /docs/v0.35.3/api/net/
  - /docs/v0.35.2/api/net/
  - /docs/v0.35.1/api/net/
  - /docs/v0.34.4/api/net/
  - /docs/v0.34.3/api/net/
  - /docs/v0.34.2/api/net/
  - /docs/v0.34.1/api/net/
  - /docs/v0.34.0/api/net/
  - /docs/v0.33.9/api/net/
  - /docs/v0.33.8/api/net/
  - /docs/v0.33.7/api/net/
  - /docs/v0.33.6/api/net/
  - /docs/v0.33.4/api/net/
  - /docs/v0.33.3/api/net/
  - /docs/v0.33.2/api/net/
  - /docs/v0.33.1/api/net/
  - /docs/v0.33.0/api/net/
  - /docs/v0.32.3/api/net/
  - /docs/v0.32.2/api/net/
  - /docs/v0.31.2/api/net/
  - /docs/v0.31.0/api/net/
  - /docs/v0.30.4/api/net/
  - /docs/v0.29.2/api/net/
  - /docs/v0.29.1/api/net/
  - /docs/v0.28.3/api/net/
  - /docs/v0.28.2/api/net/
  - /docs/v0.28.1/api/net/
  - /docs/v0.28.0/api/net/
  - /docs/v0.27.3/api/net/
  - /docs/v0.27.2/api/net/
  - /docs/v0.27.1/api/net/
  - /docs/v0.27.0/api/net/
  - /docs/v0.26.1/api/net/
  - /docs/v0.26.0/api/net/
  - /docs/v0.25.3/api/net/
  - /docs/v0.25.2/api/net/
  - /docs/v0.25.1/api/net/
  - /docs/v0.25.0/api/net/
  - /docs/v0.24.0/api/net/
  - /docs/v0.23.0/api/net/
  - /docs/v0.22.3/api/net/
  - /docs/v0.22.2/api/net/
  - /docs/v0.22.1/api/net/
  - /docs/v0.21.3/api/net/
  - /docs/v0.21.2/api/net/
  - /docs/v0.21.1/api/net/
  - /docs/v0.21.0/api/net/
  - /docs/v0.20.8/api/net/
  - /docs/v0.20.7/api/net/
  - /docs/v0.20.6/api/net/
  - /docs/v0.20.5/api/net/
  - /docs/v0.20.4/api/net/
  - /docs/v0.20.3/api/net/
  - /docs/v0.20.2/api/net/
  - /docs/v0.20.1/api/net/
  - /docs/v0.20.0/api/net/
  - /docs/latest/api/net/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/net.md'
title: net
excerpt: Issue HTTP/HTTPS requests using Chromium&apos;s native networking library
sort_title: net
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

    https://github.com/electron/electron/blob/master/docs/api/net.md

    Thanks!

-->
# net

> Issue HTTP/HTTPS requests using Chromium's native networking library

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

The `net` module is a client-side API for issuing HTTP(S) requests. It is similar to the [HTTP](https://nodejs.org/api/http.html) and [HTTPS](https://nodejs.org/api/https.html) modules of Node.js but uses Chromium's native networking library instead of the Node.js implementation, offering better support for web proxies.

The following is a non-exhaustive list of why you may consider using the `net` module instead of the native Node.js modules:

*   Automatic management of system proxy configuration, support of the wpad protocol and proxy pac configuration files.
*   Automatic tunneling of HTTPS requests.
*   Support for authenticating proxies using basic, digest, NTLM, Kerberos or negotiate authentication schemes.
*   Support for traffic monitoring proxies: Fiddler-like proxies used for access control and monitoring.

The `net` module API has been specifically designed to mimic, as closely as possible, the familiar Node.js API. The API components including classes, methods, properties and event names are similar to those commonly used in Node.js.

For instance, the following example quickly shows how the `net` API might be used:

```javascript
const {app} = require('electron')
app.on('ready', () => {
  const {net} = require('electron')
  const request = net.request('https://github.com')
  request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    response.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`)
    })
    response.on('end', () => {
      console.log('No more data in response.')
    })
  })
  request.end()
})
```

By the way, it is almost identical to how you would normally use the [HTTP](https://nodejs.org/api/http.html)/[HTTPS](https://nodejs.org/api/https.html) modules of Node.js

The `net` API can be used only after the application emits the `ready` event. Trying to use the module before the `ready` event will throw an error.

## Methods

The `net` module has the following methods:

### `net.request(options)`

*   `options` (Object &#124; String) - The `ClientRequest` constructor options.

Returns [`ClientRequest`]({{site.baseurl}}/docs/api/client-request)

Creates a [`ClientRequest`]({{site.baseurl}}/docs/api/client-request) instance using the provided `options` which are directly forwarded to the `ClientRequest` constructor. The `net.request` method would be used to issue both secure and insecure HTTP requests according to the specified protocol scheme in the `options` object.
