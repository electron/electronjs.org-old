---
version: v1.4.6
category: API
redirect_from:
    - /docs/v0.24.0/api/environment-variables/
    - /docs/v0.25.0/api/environment-variables/
    - /docs/v0.26.0/api/environment-variables/
    - /docs/v0.27.0/api/environment-variables/
    - /docs/v0.28.0/api/environment-variables/
    - /docs/v0.29.0/api/environment-variables/
    - /docs/v0.30.0/api/environment-variables/
    - /docs/v0.31.0/api/environment-variables/
    - /docs/v0.32.0/api/environment-variables/
    - /docs/v0.33.0/api/environment-variables/
    - /docs/v0.34.0/api/environment-variables/
    - /docs/v0.35.0/api/environment-variables/
    - /docs/v0.36.0/api/environment-variables/
    - /docs/v0.36.3/api/environment-variables/
    - /docs/v0.36.4/api/environment-variables/
    - /docs/v0.36.5/api/environment-variables/
    - /docs/v0.36.6/api/environment-variables/
    - /docs/v0.36.7/api/environment-variables/
    - /docs/v0.36.8/api/environment-variables/
    - /docs/v0.36.9/api/environment-variables/
    - /docs/v0.36.10/api/environment-variables/
    - /docs/v0.36.11/api/environment-variables/
    - /docs/v0.37.0/api/environment-variables/
    - /docs/v0.37.1/api/environment-variables/
    - /docs/v0.37.2/api/environment-variables/
    - /docs/v0.37.3/api/environment-variables/
    - /docs/v0.37.4/api/environment-variables/
    - /docs/v0.37.5/api/environment-variables/
    - /docs/v0.37.6/api/environment-variables/
    - /docs/v0.37.7/api/environment-variables/
    - /docs/v0.37.8/api/environment-variables/
    - /docs/latest/api/environment-variables/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/environment-variables.md'
excerpt: "Control application configuration and behavior without changing code."
title: "Environment Variables"
sort_title: "environment variables"
---

# Environment Variables

> Control application configuration and behavior without changing code.

Certain Electron behaviors are controlled by environment variables because they
are initialized earlier than the command line flags and the app's code.

POSIX shell example:

```bash
$ export ELECTRON_ENABLE_LOGGING=true
$ electron
```

Windows console example:

```powershell
> set ELECTRON_ENABLE_LOGGING=true
> electron
```

## Production Variables

The following environment variables are intended primarily for use at runtime
in packaged Electron applications.

### `GOOGLE_API_KEY`

Electron includes a hardcoded API key for making requests to Google's geocoding
webservice. Because this API key is included in every version of Electron, it
often exceeds its usage quota. To work around this, you can supply your own
Google API key in the environment. Place the following code in your main process
file, before opening any browser windows that will make geocoding requests:

```javascript
process.env.GOOGLE_API_KEY = 'YOUR_KEY_HERE'
```

For instructions on how to acquire a Google API key, visit [this page](https://www.chromium.org/developers/how-tos/api-keys).

By default, a newly generated Google API key may not be allowed to make
geocoding requests. To enable geocoding requests, visit [this page](https://console.developers.google.com/apis/api/geolocation/overview).

### `ELECTRON_NO_ASAR`

Disables ASAR support. This variable is only supported in forked child processes
and spawned child processes that set `ELECTRON_RUN_AS_NODE`.

## Development Variables

The following environment variables are intended primarily for development and
debugging purposes.

### `ELECTRON_RUN_AS_NODE`

Starts the process as a normal Node.js process.

### `ELECTRON_ENABLE_LOGGING`

Prints Chrome's internal logging to the console.

### `ELECTRON_LOG_ASAR_READS`

When Electron reads from an ASAR file, log the read offset and file path to
the system `tmpdir`. The resulting file can be provided to the ASAR module
to optimize file ordering.

### `ELECTRON_ENABLE_STACK_DUMPING`

Prints the stack trace to the console when Electron crashes.

This environment variable will not work if the `crashReporter` is started.

### `ELECTRON_DEFAULT_ERROR_MODE` _Windows_

Shows the Windows's crash dialog when Electron crashes.

This environment variable will not work if the `crashReporter` is started.

### `ELECTRON_NO_ATTACH_CONSOLE` _Windows_

Don't attach to the current console session.

### `ELECTRON_FORCE_WINDOW_MENU_BAR` _Linux_

Don't use the global menu bar on Linux.
