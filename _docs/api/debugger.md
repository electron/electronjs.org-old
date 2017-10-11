---
version: v1.7.9
permalink: /docs/api/debugger/
category: API
redirect_from:
  - /docs/v0.37.8/api/debugger/
  - /docs/v0.37.7/api/debugger/
  - /docs/v0.37.6/api/debugger/
  - /docs/v0.37.5/api/debugger/
  - /docs/v0.37.4/api/debugger/
  - /docs/v0.37.3/api/debugger/
  - /docs/v0.37.1/api/debugger/
  - /docs/v0.37.0/api/debugger/
  - /docs/v0.36.12/api/debugger/
  - /docs/v0.36.11/api/debugger/
  - /docs/v0.36.10/api/debugger/
  - /docs/v0.36.9/api/debugger/
  - /docs/v0.36.8/api/debugger/
  - /docs/v0.36.7/api/debugger/
  - /docs/v0.36.6/api/debugger/
  - /docs/v0.36.5/api/debugger/
  - /docs/v0.36.4/api/debugger/
  - /docs/v0.36.3/api/debugger/
  - /docs/v0.36.2/api/debugger/
  - /docs/v0.36.0/api/debugger/
  - /docs/v0.35.5/api/debugger/
  - /docs/v0.35.4/api/debugger/
  - /docs/v0.35.3/api/debugger/
  - /docs/v0.35.2/api/debugger/
  - /docs/v0.35.1/api/debugger/
  - /docs/v0.34.4/api/debugger/
  - /docs/v0.34.3/api/debugger/
  - /docs/v0.34.2/api/debugger/
  - /docs/v0.34.1/api/debugger/
  - /docs/v0.34.0/api/debugger/
  - /docs/v0.33.9/api/debugger/
  - /docs/v0.33.8/api/debugger/
  - /docs/v0.33.7/api/debugger/
  - /docs/v0.33.6/api/debugger/
  - /docs/v0.33.4/api/debugger/
  - /docs/v0.33.3/api/debugger/
  - /docs/v0.33.2/api/debugger/
  - /docs/v0.33.1/api/debugger/
  - /docs/v0.33.0/api/debugger/
  - /docs/v0.32.3/api/debugger/
  - /docs/v0.32.2/api/debugger/
  - /docs/v0.31.2/api/debugger/
  - /docs/v0.31.0/api/debugger/
  - /docs/v0.30.4/api/debugger/
  - /docs/v0.29.2/api/debugger/
  - /docs/v0.29.1/api/debugger/
  - /docs/v0.28.3/api/debugger/
  - /docs/v0.28.2/api/debugger/
  - /docs/v0.28.1/api/debugger/
  - /docs/v0.28.0/api/debugger/
  - /docs/v0.27.3/api/debugger/
  - /docs/v0.27.2/api/debugger/
  - /docs/v0.27.1/api/debugger/
  - /docs/v0.27.0/api/debugger/
  - /docs/v0.26.1/api/debugger/
  - /docs/v0.26.0/api/debugger/
  - /docs/v0.25.3/api/debugger/
  - /docs/v0.25.2/api/debugger/
  - /docs/v0.25.1/api/debugger/
  - /docs/v0.25.0/api/debugger/
  - /docs/v0.24.0/api/debugger/
  - /docs/v0.23.0/api/debugger/
  - /docs/v0.22.3/api/debugger/
  - /docs/v0.22.2/api/debugger/
  - /docs/v0.22.1/api/debugger/
  - /docs/v0.21.3/api/debugger/
  - /docs/v0.21.2/api/debugger/
  - /docs/v0.21.1/api/debugger/
  - /docs/v0.21.0/api/debugger/
  - /docs/v0.20.8/api/debugger/
  - /docs/v0.20.7/api/debugger/
  - /docs/v0.20.6/api/debugger/
  - /docs/v0.20.5/api/debugger/
  - /docs/v0.20.4/api/debugger/
  - /docs/v0.20.3/api/debugger/
  - /docs/v0.20.2/api/debugger/
  - /docs/v0.20.1/api/debugger/
  - /docs/v0.20.0/api/debugger/
  - /docs/latest/api/debugger/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/debugger.md'
title: Debugger
excerpt: An alternate transport for Chrome&apos;s remote debugging protocol.
sort_title: debugger
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

    https://github.com/electron/electron/blob/master/docs/api/debugger.md

    Thanks!

-->
## Class: Debugger

> An alternate transport for Chrome's remote debugging protocol.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

Chrome Developer Tools has a [special binding](https://developer.chrome.com/devtools/docs/debugger-protocol) available at JavaScript runtime that allows interacting with pages and instrumenting them.

```javascript
const {BrowserWindow} = require('electron')
let win = new BrowserWindow()

try {
  win.webContents.debugger.attach('1.1')
} catch (err) {
  console.log('Debugger attach failed : ', err)
}

win.webContents.debugger.on('detach', (event, reason) => {
  console.log('Debugger detached due to : ', reason)
})

win.webContents.debugger.on('message', (event, method, params) => {
  if (method === 'Network.requestWillBeSent') {
    if (params.request.url === 'https://www.github.com') {
      win.webContents.debugger.detach()
    }
  }
})

win.webContents.debugger.sendCommand('Network.enable')
```

### Instance Methods

#### `debugger.attach([protocolVersion])`

*   `protocolVersion` String (optional) - Requested debugging protocol version.

Attaches the debugger to the `webContents`.

#### `debugger.isAttached()`

Returns `Boolean` - Whether a debugger is attached to the `webContents`.

#### `debugger.detach()`

Detaches the debugger from the `webContents`.

#### `debugger.sendCommand(method[, commandParams, callback])`

*   `method` String - Method name, should be one of the methods defined by the remote debugging protocol.
*   `commandParams` Object (optional) - JSON object with request parameters.
*   `callback` Function (optional) - Response
    *   `error` Object - Error message indicating the failure of the command.
    *   `result` Any - Response defined by the 'returns' attribute of the command description in the remote debugging protocol.

Send given command to the debugging target.

### Instance Events

#### Event: 'detach'

*   `event` Event
*   `reason` String - Reason for detaching debugger.

Emitted when debugging session is terminated. This happens either when `webContents` is closed or devtools is invoked for the attached `webContents`.

#### Event: 'message'

*   `event` Event
*   `method` String - Method name.
*   `params` Object - Event parameters defined by the 'parameters' attribute in the remote debugging protocol.

Emitted whenever debugging target issues instrumentation event.
