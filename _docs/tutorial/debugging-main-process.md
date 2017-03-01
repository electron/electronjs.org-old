---
version: v1.6.2
permalink: /docs/tutorial/debugging-main-process/
category: Tutorial
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md
title: Debugging the Main Process
excerpt: ''
sort_title: debugging-main-process
---
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
