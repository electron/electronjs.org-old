---
version: v1.4.11
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.25.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.26.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.27.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.28.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.29.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.30.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.31.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.32.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.33.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.34.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.35.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.3/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.4/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.5/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.6/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.7/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.8/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.9/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.10/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.36.11/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.0/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.1/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.2/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.3/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.4/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.5/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.6/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.7/tutorial/debugging-main-process-node-inspector/
    - /docs/v0.37.8/tutorial/debugging-main-process-node-inspector/
    - /docs/latest/tutorial/debugging-main-process-node-inspector/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process-node-inspector.md'
title: "Debugging the Main Process in node-inspector"
sort_title: "debugging the main process in node-inspector"
---

# Debugging the Main Process in node-inspector

[`node-inspector`][node-inspector] provides a familiar DevTools GUI that can
be used in Chrome to debug Electron's main process, however, because
`node-inspector` relies on some native Node modules they must be rebuilt to
target the version of Electron you wish to debug. You can either rebuild
the `node-inspector` dependencies yourself, or let
[`electron-inspector`][electron-inspector] do it for you, both approaches are
covered in this document.

**Note**: At the time of writing the latest release of `node-inspector`
(0.12.8) can't be rebuilt to target Electron 1.3.0 or later without patching
one of its dependencies. If you use `electron-inspector` it will take care of
this for you.


## Use `electron-inspector` for Debugging

### 1. Install the [node-gyp required tools][node-gyp-required-tools]

### 2. Install [`electron-rebuild`][electron-rebuild], if you haven't done so already.

```shell
npm install electron-rebuild --save-dev
```

### 3. Install [`electron-inspector`][electron-inspector]

```shell
npm install electron-inspector --save-dev
```

### 4. Start Electron

Launch Electron with the `--debug` switch:

```shell
electron --debug=5858 your/app
```

or, to pause execution on the first line of JavaScript:

```shell
electron --debug-brk=5858 your/app
```

### 5. Start electron-inspector

On macOS / Linux:

```shell
node_modules/.bin/electron-inspector
```

On Windows:

```shell
node_modules\\.bin\\electron-inspector
```

`electron-inspector` will need to rebuild `node-inspector` dependencies on the
first run, and any time you change your Electron version. The rebuild process
may require an internet connection to download Node headers and libs, and may
take a few minutes.

### 6. Load the debugger UI

Open http://127.0.0.1:8080/debug?ws=127.0.0.1:8080&port=5858 in the Chrome
browser. You may have to click pause if starting with `--debug-brk` to force
the UI to update.


## Use `node-inspector` for Debugging

### 1. Install the [node-gyp required tools][node-gyp-required-tools]

### 2. Install [`node-inspector`][node-inspector]

```bash
$ npm install node-inspector
```

### 3. Install [`node-pre-gyp`][node-pre-gyp]

```bash
$ npm install node-pre-gyp
```

### 4. Recompile the `node-inspector` `v8` modules for Electron

**Note:** Update the target argument to be your Electron version number

```bash
$ node_modules/.bin/node-pre-gyp --target=1.2.5 --runtime=electron --fallback-to-build --directory node_modules/v8-debug/ --dist-url=https://atom.io/download/atom-shell reinstall
$ node_modules/.bin/node-pre-gyp --target=1.2.5 --runtime=electron --fallback-to-build --directory node_modules/v8-profiler/ --dist-url=https://atom.io/download/atom-shell reinstall
```

See also [How to install native modules][how-to-install-native-modules].

### 5. Enable debug mode for Electron

You can either start Electron with a debug flag like:

```bash
$ electron --debug=5858 your/app
```

or, to pause your script on the first line:

```bash
$ electron --debug-brk=5858 your/app
```

### 6. Start the [`node-inspector`][node-inspector] server using Electron

```bash
$ ELECTRON_RUN_AS_NODE=true path/to/electron.exe node_modules/node-inspector/bin/inspector.js
```

### 7. Load the debugger UI

Open http://127.0.0.1:8080/debug?ws=127.0.0.1:8080&port=5858 in the Chrome
browser. You may have to click pause if starting with `--debug-brk` to see the
entry line.

[electron-inspector]: https://github.com/enlight/electron-inspector
[electron-rebuild]: https://github.com/electron/electron-rebuild
[node-inspector]: https://github.com/node-inspector/node-inspector
[node-pre-gyp]: https://github.com/mapbox/node-pre-gyp
[node-gyp-required-tools]: https://github.com/nodejs/node-gyp#installation
[how-to-install-native-modules]: http://electron.atom.io/docs/tutorial/using-native-node-modules#how-to-install-native-modules
