---
version: v1.7.9
permalink: /docs/api/process/
category: API
redirect_from:
  - /docs/v0.37.8/api/process/
  - /docs/v0.37.7/api/process/
  - /docs/v0.37.6/api/process/
  - /docs/v0.37.5/api/process/
  - /docs/v0.37.4/api/process/
  - /docs/v0.37.3/api/process/
  - /docs/v0.37.1/api/process/
  - /docs/v0.37.0/api/process/
  - /docs/v0.36.12/api/process/
  - /docs/v0.36.11/api/process/
  - /docs/v0.36.10/api/process/
  - /docs/v0.36.9/api/process/
  - /docs/v0.36.8/api/process/
  - /docs/v0.36.7/api/process/
  - /docs/v0.36.6/api/process/
  - /docs/v0.36.5/api/process/
  - /docs/v0.36.4/api/process/
  - /docs/v0.36.3/api/process/
  - /docs/v0.36.2/api/process/
  - /docs/v0.36.0/api/process/
  - /docs/v0.35.5/api/process/
  - /docs/v0.35.4/api/process/
  - /docs/v0.35.3/api/process/
  - /docs/v0.35.2/api/process/
  - /docs/v0.35.1/api/process/
  - /docs/v0.34.4/api/process/
  - /docs/v0.34.3/api/process/
  - /docs/v0.34.2/api/process/
  - /docs/v0.34.1/api/process/
  - /docs/v0.34.0/api/process/
  - /docs/v0.33.9/api/process/
  - /docs/v0.33.8/api/process/
  - /docs/v0.33.7/api/process/
  - /docs/v0.33.6/api/process/
  - /docs/v0.33.4/api/process/
  - /docs/v0.33.3/api/process/
  - /docs/v0.33.2/api/process/
  - /docs/v0.33.1/api/process/
  - /docs/v0.33.0/api/process/
  - /docs/v0.32.3/api/process/
  - /docs/v0.32.2/api/process/
  - /docs/v0.31.2/api/process/
  - /docs/v0.31.0/api/process/
  - /docs/v0.30.4/api/process/
  - /docs/v0.29.2/api/process/
  - /docs/v0.29.1/api/process/
  - /docs/v0.28.3/api/process/
  - /docs/v0.28.2/api/process/
  - /docs/v0.28.1/api/process/
  - /docs/v0.28.0/api/process/
  - /docs/v0.27.3/api/process/
  - /docs/v0.27.2/api/process/
  - /docs/v0.27.1/api/process/
  - /docs/v0.27.0/api/process/
  - /docs/v0.26.1/api/process/
  - /docs/v0.26.0/api/process/
  - /docs/v0.25.3/api/process/
  - /docs/v0.25.2/api/process/
  - /docs/v0.25.1/api/process/
  - /docs/v0.25.0/api/process/
  - /docs/v0.24.0/api/process/
  - /docs/v0.23.0/api/process/
  - /docs/v0.22.3/api/process/
  - /docs/v0.22.2/api/process/
  - /docs/v0.22.1/api/process/
  - /docs/v0.21.3/api/process/
  - /docs/v0.21.2/api/process/
  - /docs/v0.21.1/api/process/
  - /docs/v0.21.0/api/process/
  - /docs/v0.20.8/api/process/
  - /docs/v0.20.7/api/process/
  - /docs/v0.20.6/api/process/
  - /docs/v0.20.5/api/process/
  - /docs/v0.20.4/api/process/
  - /docs/v0.20.3/api/process/
  - /docs/v0.20.2/api/process/
  - /docs/v0.20.1/api/process/
  - /docs/v0.20.0/api/process/
  - /docs/latest/api/process/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/process.md'
title: process
excerpt: Extensions to process object.
sort_title: process
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

    https://github.com/electron/electron/blob/master/docs/api/process.md

    Thanks!

-->
# process

> Extensions to process object.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process), [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

Electron's `process` object is extended from the [Node.js `process` object](https://nodejs.org/api/process.html). It adds the following events, properties, and methods:

## Events

### Event: 'loaded'

Emitted when Electron has loaded its internal initialization script and is beginning to load the web page or the main script.

It can be used by the preload script to add removed Node global symbols back to the global scope when node integration is turned off:

```javascript
// preload.js
const _setImmediate = setImmediate
const _clearImmediate = clearImmediate
process.once('loaded', () => {
  global.setImmediate = _setImmediate
  global.clearImmediate = _clearImmediate
})
```

## Properties

### `process.defaultApp`

A `Boolean`. When app is started by being passed as parameter to the default app, this property is `true` in the main process, otherwise it is `undefined`.

### `process.mas`

A `Boolean`. For Mac App Store build, this property is `true`, for other builds it is `undefined`.

### `process.noAsar`

A `Boolean` that controls ASAR support inside your application. Setting this to `true` will disable the support for `asar` archives in Node's built-in modules.

### `process.noDeprecation`

A `Boolean` that controls whether or not deprecation warnings are printed to `stderr`.
Setting this to `true` will silence deprecation warnings. This property is used instead of the `--no-deprecation` command line flag.

### `process.resourcesPath`

A `String` representing the path to the resources directory.

### `process.throwDeprecation`

A `Boolean` that controls whether or not deprecation warnings will be thrown as exceptions. Setting this to `true` will throw errors for deprecations. This property is used instead of the `--throw-deprecation` command line flag.

### `process.traceDeprecation`

A `Boolean` that controls whether or not deprecations printed to `stderr` include their stack trace. Setting this to `true` will print stack traces for deprecations. This property is instead of the `--trace-deprecation` command line flag.

### `process.traceProcessWarnings`

A `Boolean` that controls whether or not process warnings printed to `stderr` include their stack trace. Setting this to `true` will print stack traces for process warnings (including deprecations). This property is instead of the `--trace-warnings` command line flag.

### `process.type`

A `String` representing the current process's type, can be `"browser"` (i.e. main process) or `"renderer"`.

### `process.versions.chrome`

A `String` representing Chrome's version string.

### `process.versions.electron`

A `String` representing Electron's version string.

### `process.windowsStore`

A `Boolean`. If the app is running as a Windows Store app (appx), this property is `true`, for otherwise it is `undefined`.

## Methods

The `process` object has the following methods:

### `process.crash()`

Causes the main thread of the current process crash.

### `process.getCPUUsage()`

Returns [`CPUUsage`]({{site.baseurl}}/docs/api/structures/cpu-usage)

### `process.getIOCounters()` _Windows_ _Linux_

Returns [`IOCounters`]({{site.baseurl}}/docs/api/structures/io-counters)

### `process.getProcessMemoryInfo()`

Returns `Object`:

*   `workingSetSize` Integer - The amount of memory currently pinned to actual physical RAM.
*   `peakWorkingSetSize` Integer - The maximum amount of memory that has ever been pinned to actual physical RAM.
*   `privateBytes` Integer - The amount of memory not shared by other processes, such as JS heap or HTML content.
*   `sharedBytes` Integer - The amount of memory shared between processes, typically memory consumed by the Electron code itself

Returns an object giving memory usage statistics about the current process. Note that all statistics are reported in Kilobytes.

### `process.getSystemMemoryInfo()`

Returns `Object`:

*   `total` Integer - The total amount of physical memory in Kilobytes available to the system.
*   `free` Integer - The total amount of memory not being used by applications or disk cache.
*   `swapTotal` Integer - The total amount of swap memory in Kilobytes available to the system. _Windows_ _Linux_
*   `swapFree` Integer - The free amount of swap memory in Kilobytes available to the system. _Windows_ _Linux_

Returns an object giving memory usage statistics about the entire system. Note that all statistics are reported in Kilobytes.

### `process.hang()`

Causes the main thread of the current process hang.

### `process.setFdLimit(maxDescriptors)` _macOS_ _Linux_

*   `maxDescriptors` Integer

Sets the file descriptor soft limit to `maxDescriptors` or the OS hard limit, whichever is lower for the current process.
