---
version: v1.7.9
permalink: /docs/tutorial/repl/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/repl/
  - /docs/v0.37.7/tutorial/repl/
  - /docs/v0.37.6/tutorial/repl/
  - /docs/v0.37.5/tutorial/repl/
  - /docs/v0.37.4/tutorial/repl/
  - /docs/v0.37.3/tutorial/repl/
  - /docs/v0.37.1/tutorial/repl/
  - /docs/v0.37.0/tutorial/repl/
  - /docs/v0.36.12/tutorial/repl/
  - /docs/v0.36.11/tutorial/repl/
  - /docs/v0.36.10/tutorial/repl/
  - /docs/v0.36.9/tutorial/repl/
  - /docs/v0.36.8/tutorial/repl/
  - /docs/v0.36.7/tutorial/repl/
  - /docs/v0.36.6/tutorial/repl/
  - /docs/v0.36.5/tutorial/repl/
  - /docs/v0.36.4/tutorial/repl/
  - /docs/v0.36.3/tutorial/repl/
  - /docs/v0.36.2/tutorial/repl/
  - /docs/v0.36.0/tutorial/repl/
  - /docs/v0.35.5/tutorial/repl/
  - /docs/v0.35.4/tutorial/repl/
  - /docs/v0.35.3/tutorial/repl/
  - /docs/v0.35.2/tutorial/repl/
  - /docs/v0.35.1/tutorial/repl/
  - /docs/v0.34.4/tutorial/repl/
  - /docs/v0.34.3/tutorial/repl/
  - /docs/v0.34.2/tutorial/repl/
  - /docs/v0.34.1/tutorial/repl/
  - /docs/v0.34.0/tutorial/repl/
  - /docs/v0.33.9/tutorial/repl/
  - /docs/v0.33.8/tutorial/repl/
  - /docs/v0.33.7/tutorial/repl/
  - /docs/v0.33.6/tutorial/repl/
  - /docs/v0.33.4/tutorial/repl/
  - /docs/v0.33.3/tutorial/repl/
  - /docs/v0.33.2/tutorial/repl/
  - /docs/v0.33.1/tutorial/repl/
  - /docs/v0.33.0/tutorial/repl/
  - /docs/v0.32.3/tutorial/repl/
  - /docs/v0.32.2/tutorial/repl/
  - /docs/v0.31.2/tutorial/repl/
  - /docs/v0.31.0/tutorial/repl/
  - /docs/v0.30.4/tutorial/repl/
  - /docs/v0.29.2/tutorial/repl/
  - /docs/v0.29.1/tutorial/repl/
  - /docs/v0.28.3/tutorial/repl/
  - /docs/v0.28.2/tutorial/repl/
  - /docs/v0.28.1/tutorial/repl/
  - /docs/v0.28.0/tutorial/repl/
  - /docs/v0.27.3/tutorial/repl/
  - /docs/v0.27.2/tutorial/repl/
  - /docs/v0.27.1/tutorial/repl/
  - /docs/v0.27.0/tutorial/repl/
  - /docs/v0.26.1/tutorial/repl/
  - /docs/v0.26.0/tutorial/repl/
  - /docs/v0.25.3/tutorial/repl/
  - /docs/v0.25.2/tutorial/repl/
  - /docs/v0.25.1/tutorial/repl/
  - /docs/v0.25.0/tutorial/repl/
  - /docs/v0.24.0/tutorial/repl/
  - /docs/v0.23.0/tutorial/repl/
  - /docs/v0.22.3/tutorial/repl/
  - /docs/v0.22.2/tutorial/repl/
  - /docs/v0.22.1/tutorial/repl/
  - /docs/v0.21.3/tutorial/repl/
  - /docs/v0.21.2/tutorial/repl/
  - /docs/v0.21.1/tutorial/repl/
  - /docs/v0.21.0/tutorial/repl/
  - /docs/v0.20.8/tutorial/repl/
  - /docs/v0.20.7/tutorial/repl/
  - /docs/v0.20.6/tutorial/repl/
  - /docs/v0.20.5/tutorial/repl/
  - /docs/v0.20.4/tutorial/repl/
  - /docs/v0.20.3/tutorial/repl/
  - /docs/v0.20.2/tutorial/repl/
  - /docs/v0.20.1/tutorial/repl/
  - /docs/v0.20.0/tutorial/repl/
  - /docs/latest/tutorial/repl/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/repl.md'
title: REPL
excerpt: ''
sort_title: repl
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

    https://github.com/electron/electron/blob/master/docs/tutorial/repl.md

    Thanks!

-->
# REPL

Read-Eval-Print-Loop (REPL) is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user.

The `repl` module provides a REPL implementation that can be accessed using:

*   Assuming you have `electron` or `electron-prebuilt` installed as a local project dependency:

    ```sh
    ./node_modules/.bin/electron --interactive
    ```

*   Assuming you have `electron` or `electron-prebuilt` installed globally:

    ```sh
    electron --interactive
    ```

This only creates a REPL for the main process. You can use the Console tab of the Dev Tools to get a REPL for the renderer processes.

**Note:** `electron --interactive` is not available on Windows.

More information can be found in the [Node.js REPL docs](https://nodejs.org/dist/latest/docs/api/repl.html).
