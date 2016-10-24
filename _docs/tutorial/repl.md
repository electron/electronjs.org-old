---
version: v1.4.4
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/repl/
    - /docs/v0.25.0/tutorial/repl/
    - /docs/v0.26.0/tutorial/repl/
    - /docs/v0.27.0/tutorial/repl/
    - /docs/v0.28.0/tutorial/repl/
    - /docs/v0.29.0/tutorial/repl/
    - /docs/v0.30.0/tutorial/repl/
    - /docs/v0.31.0/tutorial/repl/
    - /docs/v0.32.0/tutorial/repl/
    - /docs/v0.33.0/tutorial/repl/
    - /docs/v0.34.0/tutorial/repl/
    - /docs/v0.35.0/tutorial/repl/
    - /docs/v0.36.0/tutorial/repl/
    - /docs/v0.36.3/tutorial/repl/
    - /docs/v0.36.4/tutorial/repl/
    - /docs/v0.36.5/tutorial/repl/
    - /docs/v0.36.6/tutorial/repl/
    - /docs/v0.36.7/tutorial/repl/
    - /docs/v0.36.8/tutorial/repl/
    - /docs/v0.36.9/tutorial/repl/
    - /docs/v0.36.10/tutorial/repl/
    - /docs/v0.36.11/tutorial/repl/
    - /docs/v0.37.0/tutorial/repl/
    - /docs/v0.37.1/tutorial/repl/
    - /docs/v0.37.2/tutorial/repl/
    - /docs/v0.37.3/tutorial/repl/
    - /docs/v0.37.4/tutorial/repl/
    - /docs/v0.37.5/tutorial/repl/
    - /docs/v0.37.6/tutorial/repl/
    - /docs/v0.37.7/tutorial/repl/
    - /docs/v0.37.8/tutorial/repl/
    - /docs/latest/tutorial/repl/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/repl.md'
title: "REPL"
sort_title: "repl"
---

# REPL

Read-Eval-Print-Loop (REPL) is a simple, interactive computer programming
environment that takes single user inputs (i.e. single expressions), evaluates
them, and returns the result to the user.

The `repl` module provides a REPL implementation that can be accessed using:

* Assuming you have `electron` or `electron-prebuilt` installed as a local
  project dependency:

  ```sh
  ./node_modules/.bin/electron --interactive
  ```
* Assuming you have `electron` or `electron-prebuilt` installed globally:

  ```sh
  electron --interactive
  ```

This only creates a REPL for the main process. You can use the Console
tab of the Dev Tools to get a REPL for the renderer processes.

**Note:** `electron --interactive` is not available on Windows.

More information can be found in the [Node.js REPL docs](https://nodejs.org/dist/latest/docs/api/repl.html).
