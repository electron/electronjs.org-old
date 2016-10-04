---
version: v1.4.2
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.25.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.26.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.27.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.28.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.29.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.30.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.31.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.32.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.33.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.34.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.35.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.3/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.4/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.5/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.6/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.7/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.8/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.9/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.10/tutorial/debugging-main-process-vscode/
    - /docs/v0.36.11/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.0/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.1/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.2/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.3/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.4/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.5/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.6/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.7/tutorial/debugging-main-process-vscode/
    - /docs/v0.37.8/tutorial/debugging-main-process-vscode/
    - /docs/latest/tutorial/debugging-main-process-vscode/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process-vscode.md'
title: "Debugging the Main Process in VSCode"
sort_title: "debugging the main process in vscode"
---

# Debugging the Main Process in VSCode

### 1. Open an Electron project in VSCode.

```bash
$ git clone git@github.com:electron/electron-quick-start.git
$ code electron-quick-start
```

### 2. Add a file `.vscode/launch.json` with the following configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceRoot}",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
      "program": "${workspaceRoot}/main.js"
    }
  ]
}
```

**Note:** For Windows, use `"${workspaceRoot}/node_modules/.bin/electron.cmd"` for `runtimeExecutable`.

### 3. Debugging

Set some breakpoints in `main.js`, and start debugging in the [Debug View](https://code.visualstudio.com/docs/editor/debugging). You should be able to hit the breakpoints.

Here is a pre-configured project that you can download and directly debug in VSCode: https://github.com/octref/vscode-electron-debug/tree/master/electron-quick-start
