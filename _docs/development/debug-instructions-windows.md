---
version: v1.7.9
permalink: /docs/development/debug-instructions-windows/
category: Development
redirect_from:
  - /docs/v0.37.8/development/debug-instructions-windows/
  - /docs/v0.37.7/development/debug-instructions-windows/
  - /docs/v0.37.6/development/debug-instructions-windows/
  - /docs/v0.37.5/development/debug-instructions-windows/
  - /docs/v0.37.4/development/debug-instructions-windows/
  - /docs/v0.37.3/development/debug-instructions-windows/
  - /docs/v0.37.1/development/debug-instructions-windows/
  - /docs/v0.37.0/development/debug-instructions-windows/
  - /docs/v0.36.12/development/debug-instructions-windows/
  - /docs/v0.36.11/development/debug-instructions-windows/
  - /docs/v0.36.10/development/debug-instructions-windows/
  - /docs/v0.36.9/development/debug-instructions-windows/
  - /docs/v0.36.8/development/debug-instructions-windows/
  - /docs/v0.36.7/development/debug-instructions-windows/
  - /docs/v0.36.6/development/debug-instructions-windows/
  - /docs/v0.36.5/development/debug-instructions-windows/
  - /docs/v0.36.4/development/debug-instructions-windows/
  - /docs/v0.36.3/development/debug-instructions-windows/
  - /docs/v0.36.2/development/debug-instructions-windows/
  - /docs/v0.36.0/development/debug-instructions-windows/
  - /docs/v0.35.5/development/debug-instructions-windows/
  - /docs/v0.35.4/development/debug-instructions-windows/
  - /docs/v0.35.3/development/debug-instructions-windows/
  - /docs/v0.35.2/development/debug-instructions-windows/
  - /docs/v0.35.1/development/debug-instructions-windows/
  - /docs/v0.34.4/development/debug-instructions-windows/
  - /docs/v0.34.3/development/debug-instructions-windows/
  - /docs/v0.34.2/development/debug-instructions-windows/
  - /docs/v0.34.1/development/debug-instructions-windows/
  - /docs/v0.34.0/development/debug-instructions-windows/
  - /docs/v0.33.9/development/debug-instructions-windows/
  - /docs/v0.33.8/development/debug-instructions-windows/
  - /docs/v0.33.7/development/debug-instructions-windows/
  - /docs/v0.33.6/development/debug-instructions-windows/
  - /docs/v0.33.4/development/debug-instructions-windows/
  - /docs/v0.33.3/development/debug-instructions-windows/
  - /docs/v0.33.2/development/debug-instructions-windows/
  - /docs/v0.33.1/development/debug-instructions-windows/
  - /docs/v0.33.0/development/debug-instructions-windows/
  - /docs/v0.32.3/development/debug-instructions-windows/
  - /docs/v0.32.2/development/debug-instructions-windows/
  - /docs/v0.31.2/development/debug-instructions-windows/
  - /docs/v0.31.0/development/debug-instructions-windows/
  - /docs/v0.30.4/development/debug-instructions-windows/
  - /docs/v0.29.2/development/debug-instructions-windows/
  - /docs/v0.29.1/development/debug-instructions-windows/
  - /docs/v0.28.3/development/debug-instructions-windows/
  - /docs/v0.28.2/development/debug-instructions-windows/
  - /docs/v0.28.1/development/debug-instructions-windows/
  - /docs/v0.28.0/development/debug-instructions-windows/
  - /docs/v0.27.3/development/debug-instructions-windows/
  - /docs/v0.27.2/development/debug-instructions-windows/
  - /docs/v0.27.1/development/debug-instructions-windows/
  - /docs/v0.27.0/development/debug-instructions-windows/
  - /docs/v0.26.1/development/debug-instructions-windows/
  - /docs/v0.26.0/development/debug-instructions-windows/
  - /docs/v0.25.3/development/debug-instructions-windows/
  - /docs/v0.25.2/development/debug-instructions-windows/
  - /docs/v0.25.1/development/debug-instructions-windows/
  - /docs/v0.25.0/development/debug-instructions-windows/
  - /docs/v0.24.0/development/debug-instructions-windows/
  - /docs/v0.23.0/development/debug-instructions-windows/
  - /docs/v0.22.3/development/debug-instructions-windows/
  - /docs/v0.22.2/development/debug-instructions-windows/
  - /docs/v0.22.1/development/debug-instructions-windows/
  - /docs/v0.21.3/development/debug-instructions-windows/
  - /docs/v0.21.2/development/debug-instructions-windows/
  - /docs/v0.21.1/development/debug-instructions-windows/
  - /docs/v0.21.0/development/debug-instructions-windows/
  - /docs/v0.20.8/development/debug-instructions-windows/
  - /docs/v0.20.7/development/debug-instructions-windows/
  - /docs/v0.20.6/development/debug-instructions-windows/
  - /docs/v0.20.5/development/debug-instructions-windows/
  - /docs/v0.20.4/development/debug-instructions-windows/
  - /docs/v0.20.3/development/debug-instructions-windows/
  - /docs/v0.20.2/development/debug-instructions-windows/
  - /docs/v0.20.1/development/debug-instructions-windows/
  - /docs/v0.20.0/development/debug-instructions-windows/
  - /docs/latest/development/debug-instructions-windows/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/debug-instructions-windows.md
title: Debugging on Windows
excerpt: ''
sort_title: debug-instructions-windows
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

    https://github.com/electron/electron/blob/master/docs/development/debug-instructions-windows.md

    Thanks!

-->
# Debugging on Windows

If you experience crashes or issues in Electron that you believe are not caused by your JavaScript application, but instead by Electron itself, debugging can be a little bit tricky, especially for developers not used to native/C++ debugging. However, using Visual Studio, GitHub's hosted Electron Symbol Server, and the Electron source code, it is fairly easy to enable step-through debugging with breakpoints inside Electron's source code.

## Requirements

*   **A debug build of Electron**: The easiest way is usually building it yourself, using the tools and prerequisites listed in the [build instructions for Windows]({{site.baseurl}}/docs/development/build-instructions-windows). While you can easily attach to and debug Electron as you can download it directly, you will find that it is heavily optimized, making debugging substantially more difficult: The debugger will not be able to show you the content of all variables and the execution path can seem strange because of inlining, tail calls, and other compiler optimizations.

*   **Visual Studio with C++ Tools**: The free community editions of Visual Studio 2013 and Visual Studio 2015 both work. Once installed, [configure Visual Studio to use GitHub's Electron Symbol server]({{site.baseurl}}/docs/development/setting-up-symbol-server). It will enable Visual Studio to gain a better understanding of what happens inside Electron, making it easier to present variables in a human-readable format.

*   **ProcMon**: The [free SysInternals tool](https://technet.microsoft.com/en-us/sysinternals/processmonitor.aspx) allows you to inspect a processes parameters, file handles, and registry operations.

## Attaching to and Debugging Electron

To start a debugging session, open up PowerShell/CMD and execute your debug build of Electron, using the application to open as a parameter.

```powershell
$ ./out/D/electron.exe ~/my-electron-app/
```

### Setting Breakpoints

Then, open up Visual Studio. Electron is not built with Visual Studio and hence does not contain a project file - you can however open up the source code files "As File", meaning that Visual Studio will open them up by themselves. You can still set breakpoints - Visual Studio will automatically figure out that the source code matches the code running in the attached process and break accordingly.

Relevant code files can be found in `./atom/` as well as in Brightray, found in `./brightray/browser` and `./brightray/common`. If you're hardcore, you can also debug Chromium directly, which is obviously found in `chromium_src`.

### Attaching

You can attach the Visual Studio debugger to a running process on a local or remote computer. After the process is running, click Debug / Attach to Process (or press `CTRL+ALT+P`) to open the "Attach to Process" dialog box. You can use this capability to debug apps that are running on a local or remote computer, debug multiple processes simultaneously.

If Electron is running under a different user account, select the `Show processes from all users` check box. Notice that depending on how many BrowserWindows your app opened, you will see multiple processes. A typical one-window app will result in Visual Studio presenting you with two `Electron.exe` entries - one for the main process and one for the renderer process. Since the list only gives you names, there's currently no reliable way of figuring out which is which.

### Which Process Should I Attach to?

Code executed within the main process (that is, code found in or eventually run by your main JavaScript file) as well as code called using the remote (`require('electron').remote`) will run inside the main process, while other code will execute inside its respective renderer process.

You can be attached to multiple programs when you are debugging, but only one program is active in the debugger at any time. You can set the active program in the `Debug Location` toolbar or the `Processes window`.

## Using ProcMon to Observe a Process

While Visual Studio is fantastic for inspecting specific code paths, ProcMon's strength is really in observing everything your application is doing with the operating system - it captures File, Registry, Network, Process, and Profiling details of processes. It attempts to log **all** events occurring and can be quite overwhelming, but if you seek to understand what and how your application is doing to the operating system, it can be a valuable resource.

For an introduction to ProcMon's basic and advanced debugging features, go check out [this video tutorial](https://channel9.msdn.com/shows/defrag-tools/defrag-tools-4-process-monitor) provided by Microsoft.
