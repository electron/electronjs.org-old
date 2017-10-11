---
version: v1.7.9
permalink: /docs/api/crash-reporter/
category: API
redirect_from:
  - /docs/v0.37.8/api/crash-reporter/
  - /docs/v0.37.7/api/crash-reporter/
  - /docs/v0.37.6/api/crash-reporter/
  - /docs/v0.37.5/api/crash-reporter/
  - /docs/v0.37.4/api/crash-reporter/
  - /docs/v0.37.3/api/crash-reporter/
  - /docs/v0.37.1/api/crash-reporter/
  - /docs/v0.37.0/api/crash-reporter/
  - /docs/v0.36.12/api/crash-reporter/
  - /docs/v0.36.11/api/crash-reporter/
  - /docs/v0.36.10/api/crash-reporter/
  - /docs/v0.36.9/api/crash-reporter/
  - /docs/v0.36.8/api/crash-reporter/
  - /docs/v0.36.7/api/crash-reporter/
  - /docs/v0.36.6/api/crash-reporter/
  - /docs/v0.36.5/api/crash-reporter/
  - /docs/v0.36.4/api/crash-reporter/
  - /docs/v0.36.3/api/crash-reporter/
  - /docs/v0.36.2/api/crash-reporter/
  - /docs/v0.36.0/api/crash-reporter/
  - /docs/v0.35.5/api/crash-reporter/
  - /docs/v0.35.4/api/crash-reporter/
  - /docs/v0.35.3/api/crash-reporter/
  - /docs/v0.35.2/api/crash-reporter/
  - /docs/v0.35.1/api/crash-reporter/
  - /docs/v0.34.4/api/crash-reporter/
  - /docs/v0.34.3/api/crash-reporter/
  - /docs/v0.34.2/api/crash-reporter/
  - /docs/v0.34.1/api/crash-reporter/
  - /docs/v0.34.0/api/crash-reporter/
  - /docs/v0.33.9/api/crash-reporter/
  - /docs/v0.33.8/api/crash-reporter/
  - /docs/v0.33.7/api/crash-reporter/
  - /docs/v0.33.6/api/crash-reporter/
  - /docs/v0.33.4/api/crash-reporter/
  - /docs/v0.33.3/api/crash-reporter/
  - /docs/v0.33.2/api/crash-reporter/
  - /docs/v0.33.1/api/crash-reporter/
  - /docs/v0.33.0/api/crash-reporter/
  - /docs/v0.32.3/api/crash-reporter/
  - /docs/v0.32.2/api/crash-reporter/
  - /docs/v0.31.2/api/crash-reporter/
  - /docs/v0.31.0/api/crash-reporter/
  - /docs/v0.30.4/api/crash-reporter/
  - /docs/v0.29.2/api/crash-reporter/
  - /docs/v0.29.1/api/crash-reporter/
  - /docs/v0.28.3/api/crash-reporter/
  - /docs/v0.28.2/api/crash-reporter/
  - /docs/v0.28.1/api/crash-reporter/
  - /docs/v0.28.0/api/crash-reporter/
  - /docs/v0.27.3/api/crash-reporter/
  - /docs/v0.27.2/api/crash-reporter/
  - /docs/v0.27.1/api/crash-reporter/
  - /docs/v0.27.0/api/crash-reporter/
  - /docs/v0.26.1/api/crash-reporter/
  - /docs/v0.26.0/api/crash-reporter/
  - /docs/v0.25.3/api/crash-reporter/
  - /docs/v0.25.2/api/crash-reporter/
  - /docs/v0.25.1/api/crash-reporter/
  - /docs/v0.25.0/api/crash-reporter/
  - /docs/v0.24.0/api/crash-reporter/
  - /docs/v0.23.0/api/crash-reporter/
  - /docs/v0.22.3/api/crash-reporter/
  - /docs/v0.22.2/api/crash-reporter/
  - /docs/v0.22.1/api/crash-reporter/
  - /docs/v0.21.3/api/crash-reporter/
  - /docs/v0.21.2/api/crash-reporter/
  - /docs/v0.21.1/api/crash-reporter/
  - /docs/v0.21.0/api/crash-reporter/
  - /docs/v0.20.8/api/crash-reporter/
  - /docs/v0.20.7/api/crash-reporter/
  - /docs/v0.20.6/api/crash-reporter/
  - /docs/v0.20.5/api/crash-reporter/
  - /docs/v0.20.4/api/crash-reporter/
  - /docs/v0.20.3/api/crash-reporter/
  - /docs/v0.20.2/api/crash-reporter/
  - /docs/v0.20.1/api/crash-reporter/
  - /docs/v0.20.0/api/crash-reporter/
  - /docs/latest/api/crash-reporter/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/crash-reporter.md'
title: crashReporter
excerpt: Submit crash reports to a remote server.
sort_title: crash-reporter
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

    https://github.com/electron/electron/blob/master/docs/api/crash-reporter.md

    Thanks!

-->
# crashReporter

> Submit crash reports to a remote server.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process), [Renderer]({{site.baseurl}}/docs/glossary#renderer-process)

The following is an example of automatically submitting a crash report to a remote server:

```javascript
const {crashReporter} = require('electron')

crashReporter.start({
  productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: true
})
```

For setting up a server to accept and process crash reports, you can use following projects:

*   [socorro](https://github.com/mozilla/socorro)
*   [mini-breakpad-server](https://github.com/electron/mini-breakpad-server)

Crash reports are saved locally in an application-specific temp directory folder. For a `productName` of `YourName`, crash reports will be stored in a folder named `YourName Crashes` inside the temp directory. You can customize this temp directory location for your app by calling the `app.setPath('temp', '/my/custom/temp')` API before starting the crash reporter.

## Methods

The `crashReporter` module has the following methods:

### `crashReporter.start(options)`

*   `options` Object
    *   `companyName` String (optional)
    *   `submitURL` String - URL that crash reports will be sent to as POST.
    *   `productName` String (optional) - Defaults to `app.getName()`.
    *   `uploadToServer` Boolean (optional) - Whether crash reports should be sent to the server Default is `true`.
    *   `ignoreSystemCrashHandler` Boolean (optional) - Default is `false`.
    *   `extra` Object (optional) - An object you can define that will be sent along with the report. Only string properties are sent correctly. Nested objects are not supported and the property names and values must be less than 64 characters long.

You are required to call this method before using any other `crashReporter` APIs and in each process (main/renderer) from which you want to collect crash reports. You can pass different options to `crashReporter.start` when calling from different processes.

**Note** Child processes created via the `child_process` module will not have access to the Electron modules. Therefore, to collect crash reports from them, use `process.crashReporter.start` instead. Pass the same options as above along with an additional one called `crashesDirectory` that should point to a directory to store the crash reports temporarily. You can test this out by calling `process.crash()` to crash the child process.

**Note:** To collect crash reports from child process in Windows, you need to add this extra code as well. This will start the process that will monitor and send the crash reports. Replace `submitURL`, `productName` and `crashesDirectory` with appropriate values.

**Note:** If you need send additional/updated `extra` parameters after your first call `start` you can call `setExtraParameter` on macOS or call `start` again with the new/updated `extra` parameters on Linux and Windows.

```js
const args = [
   `--reporter-url=${submitURL}`,
   `--application-name=${productName}`,
   `--crashes-directory=${crashesDirectory}`
 ]
 const env = {
   ELECTRON_INTERNAL_CRASH_SERVICE: 1
 }
 spawn(process.execPath, args, {
   env: env,
   detached: true
 })
```

**Note:** On macOS, Electron uses a new `crashpad` client for crash collection and reporting. If you want to enable crash reporting, initializing `crashpad` from the main process using `crashReporter.start` is required regardless of which process you want to collect crashes from. Once initialized this way, the crashpad handler collects crashes from all processes. You still have to call `crashReporter.start` from the renderer or child process, otherwise crashes from them will get reported without `companyName`, `productName` or any of the `extra` information.

### `crashReporter.getLastCrashReport()`

Returns [`CrashReport`]({{site.baseurl}}/docs/api/structures/crash-report):

Returns the date and ID of the last crash report. If no crash reports have been sent or the crash reporter has not been started, `null` is returned.

### `crashReporter.getUploadedReports()`

Returns [`CrashReport[]`]({{site.baseurl}}/docs/api/structures/crash-report):

Returns all uploaded crash reports. Each report contains the date and uploaded ID.

### `crashReporter.getUploadToServer()` _Linux_ _macOS_

Returns `Boolean` - Whether reports should be submitted to the server. Set through the `start` method or `setUploadToServer`.

**Note:** This API can only be called from the main process.

### `crashReporter.setUploadToServer(uploadToServer)` _Linux_ _macOS_

*   `uploadToServer` Boolean _macOS_ - Whether reports should be submitted to the server

This would normally be controlled by user preferences. This has no effect if called before `start` is called.

**Note:** This API can only be called from the main process.

### `crashReporter.setExtraParameter(key, value)` _macOS_

*   `key` String - Parameter key, must be less than 64 characters long.
*   `value` String - Parameter value, must be less than 64 characters long. Specifying `null` or `undefined` will remove the key from the extra parameters.

Set an extra parameter to be sent with the crash report. The values specified here will be sent in addition to any values set via the `extra` option when `start` was called. This API is only available on macOS, if you need to add/update extra parameters on Linux and Windows after your first call to `start` you can call `start` again with the updated `extra` options.

## Crash Report Payload

The crash reporter will send the following data to the `submitURL` as a `multipart/form-data` `POST`:

*   `ver` String - The version of Electron.
*   `platform` String - e.g. 'win32'.
*   `process_type` String - e.g. 'renderer'.
*   `guid` String - e.g. '5e1286fc-da97-479e-918b-6bfb0c3d1c72'
*   `_version` String - The version in `package.json`.
*   `_productName` String - The product name in the `crashReporter` `options` object.
*   `prod` String - Name of the underlying product. In this case Electron.
*   `_companyName` String - The company name in the `crashReporter` `options` object.
*   `upload_file_minidump` File - The crash report in the format of `minidump`.
*   All level one properties of the `extra` object in the `crashReporter` `options` object.
