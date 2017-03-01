---
version: v1.6.2
permalink: /docs/tutorial/debugging-main-process/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/debugging-main-process/
  - /docs/v0.37.7/tutorial/debugging-main-process/
  - /docs/v0.37.6/tutorial/debugging-main-process/
  - /docs/v0.37.5/tutorial/debugging-main-process/
  - /docs/v0.37.4/tutorial/debugging-main-process/
  - /docs/v0.37.3/tutorial/debugging-main-process/
  - /docs/v0.36.12/tutorial/debugging-main-process/
  - /docs/v0.37.1/tutorial/debugging-main-process/
  - /docs/v0.37.0/tutorial/debugging-main-process/
  - /docs/v0.36.11/tutorial/debugging-main-process/
  - /docs/v0.36.10/tutorial/debugging-main-process/
  - /docs/v0.36.9/tutorial/debugging-main-process/
  - /docs/v0.36.8/tutorial/debugging-main-process/
  - /docs/v0.36.7/tutorial/debugging-main-process/
  - /docs/v0.36.6/tutorial/debugging-main-process/
  - /docs/v0.36.5/tutorial/debugging-main-process/
  - /docs/v0.36.4/tutorial/debugging-main-process/
  - /docs/v0.36.3/tutorial/debugging-main-process/
  - /docs/v0.35.5/tutorial/debugging-main-process/
  - /docs/v0.36.2/tutorial/debugging-main-process/
  - /docs/v0.36.0/tutorial/debugging-main-process/
  - /docs/v0.35.4/tutorial/debugging-main-process/
  - /docs/v0.35.3/tutorial/debugging-main-process/
  - /docs/v0.35.2/tutorial/debugging-main-process/
  - /docs/v0.34.4/tutorial/debugging-main-process/
  - /docs/v0.35.1/tutorial/debugging-main-process/
  - /docs/v0.34.3/tutorial/debugging-main-process/
  - /docs/v0.34.2/tutorial/debugging-main-process/
  - /docs/v0.34.1/tutorial/debugging-main-process/
  - /docs/v0.34.0/tutorial/debugging-main-process/
  - /docs/v0.33.9/tutorial/debugging-main-process/
  - /docs/v0.33.8/tutorial/debugging-main-process/
  - /docs/v0.33.7/tutorial/debugging-main-process/
  - /docs/v0.33.6/tutorial/debugging-main-process/
  - /docs/v0.33.4/tutorial/debugging-main-process/
  - /docs/v0.33.3/tutorial/debugging-main-process/
  - /docs/v0.33.2/tutorial/debugging-main-process/
  - /docs/v0.33.1/tutorial/debugging-main-process/
  - /docs/v0.33.0/tutorial/debugging-main-process/
  - /docs/v0.32.3/tutorial/debugging-main-process/
  - /docs/v0.32.2/tutorial/debugging-main-process/
  - /docs/v0.31.2/tutorial/debugging-main-process/
  - /docs/v0.31.0/tutorial/debugging-main-process/
  - /docs/v0.30.4/tutorial/debugging-main-process/
  - /docs/v0.29.2/tutorial/debugging-main-process/
  - /docs/v0.29.1/tutorial/debugging-main-process/
  - /docs/v0.28.3/tutorial/debugging-main-process/
  - /docs/v0.28.2/tutorial/debugging-main-process/
  - /docs/v0.28.1/tutorial/debugging-main-process/
  - /docs/v0.28.0/tutorial/debugging-main-process/
  - /docs/v0.27.3/tutorial/debugging-main-process/
  - /docs/v0.27.2/tutorial/debugging-main-process/
  - /docs/v0.27.1/tutorial/debugging-main-process/
  - /docs/v0.27.0/tutorial/debugging-main-process/
  - /docs/v0.26.1/tutorial/debugging-main-process/
  - /docs/v0.26.0/tutorial/debugging-main-process/
  - /docs/v0.25.3/tutorial/debugging-main-process/
  - /docs/v0.25.2/tutorial/debugging-main-process/
  - /docs/v0.25.1/tutorial/debugging-main-process/
  - /docs/v0.25.0/tutorial/debugging-main-process/
  - /docs/v0.24.0/tutorial/debugging-main-process/
  - /docs/v0.23.0/tutorial/debugging-main-process/
  - /docs/v0.22.3/tutorial/debugging-main-process/
  - /docs/v0.22.2/tutorial/debugging-main-process/
  - /docs/v0.22.1/tutorial/debugging-main-process/
  - /docs/v0.21.3/tutorial/debugging-main-process/
  - /docs/v0.21.2/tutorial/debugging-main-process/
  - /docs/v0.21.1/tutorial/debugging-main-process/
  - /docs/v0.21.0/tutorial/debugging-main-process/
  - /docs/v0.20.8/tutorial/debugging-main-process/
  - /docs/v0.20.7/tutorial/debugging-main-process/
  - /docs/v0.20.6/tutorial/debugging-main-process/
  - /docs/v0.20.5/tutorial/debugging-main-process/
  - /docs/v0.20.4/tutorial/debugging-main-process/
  - /docs/v0.20.3/tutorial/debugging-main-process/
  - /docs/v0.20.2/tutorial/debugging-main-process/
  - /docs/v0.20.1/tutorial/debugging-main-process/
  - /docs/v0.20.0/tutorial/debugging-main-process/
  - /docs/latest/tutorial/debugging-main-process/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md
title: Debugging the Main Process
excerpt: ''
sort_title: debugging-main-process
---


<--

Greetings, Electron hacker!

This file is generated automatically, so it should not be edited.

To make changes, head over to the electron/electron repository:

https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md

-->

# Debugging the Main Process

The DevTools in an Electron browser window can only debug JavaScript that's executed in that window (i.e. the web pages). To debug JavaScript that's executed in the main process you will need to use an external debugger and launch Electron with the `--debug` or `--debug-brk` switch.

## Command Line Switches

Use one of the following command line switches to enable debugging of the main process:

### `--debug=[port]`

Electron will listen for V8 debugger protocol messages on the specified `port`, an external debugger will need to connect on this port. The default `port` is `5858`.

```shell
electron --debug=5858 your/app
```

### `--debug-brk=[port]`

Like `--debug` but pauses execution on the first line of JavaScript.

## External Debuggers

You will need to use a debugger that supports the V8 debugger protocol, the following guides should help you to get started:

*   [Debugging the Main Process in VSCode]({{site.baseurl}}/docs/tutorial/debugging-main-process-vscode)
*   [Debugging the Main Process in node-inspector]({{site.baseurl}}/docs/tutorial/debugging-main-process-node-inspector)
