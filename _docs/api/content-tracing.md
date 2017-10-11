---
version: v1.7.9
permalink: /docs/api/content-tracing/
category: API
redirect_from:
  - /docs/v0.37.8/api/content-tracing/
  - /docs/v0.37.7/api/content-tracing/
  - /docs/v0.37.6/api/content-tracing/
  - /docs/v0.37.5/api/content-tracing/
  - /docs/v0.37.4/api/content-tracing/
  - /docs/v0.37.3/api/content-tracing/
  - /docs/v0.37.1/api/content-tracing/
  - /docs/v0.37.0/api/content-tracing/
  - /docs/v0.36.12/api/content-tracing/
  - /docs/v0.36.11/api/content-tracing/
  - /docs/v0.36.10/api/content-tracing/
  - /docs/v0.36.9/api/content-tracing/
  - /docs/v0.36.8/api/content-tracing/
  - /docs/v0.36.7/api/content-tracing/
  - /docs/v0.36.6/api/content-tracing/
  - /docs/v0.36.5/api/content-tracing/
  - /docs/v0.36.4/api/content-tracing/
  - /docs/v0.36.3/api/content-tracing/
  - /docs/v0.36.2/api/content-tracing/
  - /docs/v0.36.0/api/content-tracing/
  - /docs/v0.35.5/api/content-tracing/
  - /docs/v0.35.4/api/content-tracing/
  - /docs/v0.35.3/api/content-tracing/
  - /docs/v0.35.2/api/content-tracing/
  - /docs/v0.35.1/api/content-tracing/
  - /docs/v0.34.4/api/content-tracing/
  - /docs/v0.34.3/api/content-tracing/
  - /docs/v0.34.2/api/content-tracing/
  - /docs/v0.34.1/api/content-tracing/
  - /docs/v0.34.0/api/content-tracing/
  - /docs/v0.33.9/api/content-tracing/
  - /docs/v0.33.8/api/content-tracing/
  - /docs/v0.33.7/api/content-tracing/
  - /docs/v0.33.6/api/content-tracing/
  - /docs/v0.33.4/api/content-tracing/
  - /docs/v0.33.3/api/content-tracing/
  - /docs/v0.33.2/api/content-tracing/
  - /docs/v0.33.1/api/content-tracing/
  - /docs/v0.33.0/api/content-tracing/
  - /docs/v0.32.3/api/content-tracing/
  - /docs/v0.32.2/api/content-tracing/
  - /docs/v0.31.2/api/content-tracing/
  - /docs/v0.31.0/api/content-tracing/
  - /docs/v0.30.4/api/content-tracing/
  - /docs/v0.29.2/api/content-tracing/
  - /docs/v0.29.1/api/content-tracing/
  - /docs/v0.28.3/api/content-tracing/
  - /docs/v0.28.2/api/content-tracing/
  - /docs/v0.28.1/api/content-tracing/
  - /docs/v0.28.0/api/content-tracing/
  - /docs/v0.27.3/api/content-tracing/
  - /docs/v0.27.2/api/content-tracing/
  - /docs/v0.27.1/api/content-tracing/
  - /docs/v0.27.0/api/content-tracing/
  - /docs/v0.26.1/api/content-tracing/
  - /docs/v0.26.0/api/content-tracing/
  - /docs/v0.25.3/api/content-tracing/
  - /docs/v0.25.2/api/content-tracing/
  - /docs/v0.25.1/api/content-tracing/
  - /docs/v0.25.0/api/content-tracing/
  - /docs/v0.24.0/api/content-tracing/
  - /docs/v0.23.0/api/content-tracing/
  - /docs/v0.22.3/api/content-tracing/
  - /docs/v0.22.2/api/content-tracing/
  - /docs/v0.22.1/api/content-tracing/
  - /docs/v0.21.3/api/content-tracing/
  - /docs/v0.21.2/api/content-tracing/
  - /docs/v0.21.1/api/content-tracing/
  - /docs/v0.21.0/api/content-tracing/
  - /docs/v0.20.8/api/content-tracing/
  - /docs/v0.20.7/api/content-tracing/
  - /docs/v0.20.6/api/content-tracing/
  - /docs/v0.20.5/api/content-tracing/
  - /docs/v0.20.4/api/content-tracing/
  - /docs/v0.20.3/api/content-tracing/
  - /docs/v0.20.2/api/content-tracing/
  - /docs/v0.20.1/api/content-tracing/
  - /docs/v0.20.0/api/content-tracing/
  - /docs/latest/api/content-tracing/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/content-tracing.md'
title: contentTracing
excerpt: >-
  Collect tracing data from Chromium&apos;s content module for finding
  performance
      bottlenecks and slow operations.
sort_title: content-tracing
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

    https://github.com/electron/electron/blob/master/docs/api/content-tracing.md

    Thanks!

-->
# contentTracing

> Collect tracing data from Chromium's content module for finding performance bottlenecks and slow operations.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

This module does not include a web interface so you need to open `chrome://tracing/` in a Chrome browser and load the generated file to view the result.

**Note:** You should not use this module until the `ready` event of the app module is emitted.

```javascript
const {app, contentTracing} = require('electron')

app.on('ready', () => {
  const options = {
    categoryFilter: '*',
    traceOptions: 'record-until-full,enable-sampling'
  }

  contentTracing.startRecording(options, () => {
    console.log('Tracing started')

    setTimeout(() => {
      contentTracing.stopRecording('', (path) => {
        console.log('Tracing data recorded to ' + path)
      })
    }, 5000)
  })
})
```

## Methods

The `contentTracing` module has the following methods:

### `contentTracing.getCategories(callback)`

*   `callback` Function
    *   `categories` String[]

Get a set of category groups. The category groups can change as new code paths are reached.

Once all child processes have acknowledged the `getCategories` request the `callback` is invoked with an array of category groups.

### `contentTracing.startRecording(options, callback)`

*   `options` Object
    *   `categoryFilter` String
    *   `traceOptions` String
*   `callback` Function

Start recording on all processes.

Recording begins immediately locally and asynchronously on child processes as soon as they receive the EnableRecording request. The `callback` will be called once all child processes have acknowledged the `startRecording` request.

`categoryFilter` is a filter to control what category groups should be traced. A filter can have an optional `-` prefix to exclude category groups that contain a matching category. Having both included and excluded category patterns in the same list is not supported.

Examples:

*   `test_MyTest*`,
*   `test_MyTest*,test_OtherStuff`,
*   `"-excluded_category1,-excluded_category2`

`traceOptions` controls what kind of tracing is enabled, it is a comma-delimited list. Possible options are:

*   `record-until-full`
*   `record-continuously`
*   `trace-to-console`
*   `enable-sampling`
*   `enable-systrace`

The first 3 options are trace recording modes and hence mutually exclusive. If more than one trace recording modes appear in the `traceOptions` string, the last one takes precedence. If none of the trace recording modes are specified, recording mode is `record-until-full`.

The trace option will first be reset to the default option (`record_mode` set to `record-until-full`, `enable_sampling` and `enable_systrace` set to `false`) before options parsed from `traceOptions` are applied on it.

### `contentTracing.stopRecording(resultFilePath, callback)`

*   `resultFilePath` String
*   `callback` Function
    *   `resultFilePath` String

Stop recording on all processes.

Child processes typically cache trace data and only rarely flush and send trace data back to the main process. This helps to minimize the runtime overhead of tracing since sending trace data over IPC can be an expensive operation. So, to end tracing, we must asynchronously ask all child processes to flush any pending trace data.

Once all child processes have acknowledged the `stopRecording` request, `callback` will be called with a file that contains the traced data.

Trace data will be written into `resultFilePath` if it is not empty or into a temporary file. The actual file path will be passed to `callback` if it's not `null`.

### `contentTracing.startMonitoring(options, callback)`

*   `options` Object
    *   `categoryFilter` String
    *   `traceOptions` String
*   `callback` Function

Start monitoring on all processes.

Monitoring begins immediately locally and asynchronously on child processes as soon as they receive the `startMonitoring` request.

Once all child processes have acknowledged the `startMonitoring` request the `callback` will be called.

### `contentTracing.stopMonitoring(callback)`

*   `callback` Function

Stop monitoring on all processes.

Once all child processes have acknowledged the `stopMonitoring` request the `callback` is called.

### `contentTracing.captureMonitoringSnapshot(resultFilePath, callback)`

*   `resultFilePath` String
*   `callback` Function
    *   `resultFilePath` String

Get the current monitoring traced data.

Child processes typically cache trace data and only rarely flush and send trace data back to the main process. This is because it may be an expensive operation to send the trace data over IPC and we would like to avoid unneeded runtime overhead from tracing. So, to end tracing, we must asynchronously ask all child processes to flush any pending trace data.

Once all child processes have acknowledged the `captureMonitoringSnapshot` request the `callback` will be called with a file that contains the traced data.

### `contentTracing.getTraceBufferUsage(callback)`

*   `callback` Function
    *   `value` Number
    *   `percentage` Number

Get the maximum usage across processes of trace buffer as a percentage of the full state. When the TraceBufferUsage value is determined the `callback` is called.
