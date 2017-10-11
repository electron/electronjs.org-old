---
version: v1.7.9
permalink: /docs/development/debugging-instructions-macos/
category: Development
redirect_from:
  - /docs/v0.37.8/development/debugging-instructions-macos/
  - /docs/v0.37.7/development/debugging-instructions-macos/
  - /docs/v0.37.6/development/debugging-instructions-macos/
  - /docs/v0.37.5/development/debugging-instructions-macos/
  - /docs/v0.37.4/development/debugging-instructions-macos/
  - /docs/v0.37.3/development/debugging-instructions-macos/
  - /docs/v0.37.1/development/debugging-instructions-macos/
  - /docs/v0.37.0/development/debugging-instructions-macos/
  - /docs/v0.36.12/development/debugging-instructions-macos/
  - /docs/v0.36.11/development/debugging-instructions-macos/
  - /docs/v0.36.10/development/debugging-instructions-macos/
  - /docs/v0.36.9/development/debugging-instructions-macos/
  - /docs/v0.36.8/development/debugging-instructions-macos/
  - /docs/v0.36.7/development/debugging-instructions-macos/
  - /docs/v0.36.6/development/debugging-instructions-macos/
  - /docs/v0.36.5/development/debugging-instructions-macos/
  - /docs/v0.36.4/development/debugging-instructions-macos/
  - /docs/v0.36.3/development/debugging-instructions-macos/
  - /docs/v0.36.2/development/debugging-instructions-macos/
  - /docs/v0.36.0/development/debugging-instructions-macos/
  - /docs/v0.35.5/development/debugging-instructions-macos/
  - /docs/v0.35.4/development/debugging-instructions-macos/
  - /docs/v0.35.3/development/debugging-instructions-macos/
  - /docs/v0.35.2/development/debugging-instructions-macos/
  - /docs/v0.35.1/development/debugging-instructions-macos/
  - /docs/v0.34.4/development/debugging-instructions-macos/
  - /docs/v0.34.3/development/debugging-instructions-macos/
  - /docs/v0.34.2/development/debugging-instructions-macos/
  - /docs/v0.34.1/development/debugging-instructions-macos/
  - /docs/v0.34.0/development/debugging-instructions-macos/
  - /docs/v0.33.9/development/debugging-instructions-macos/
  - /docs/v0.33.8/development/debugging-instructions-macos/
  - /docs/v0.33.7/development/debugging-instructions-macos/
  - /docs/v0.33.6/development/debugging-instructions-macos/
  - /docs/v0.33.4/development/debugging-instructions-macos/
  - /docs/v0.33.3/development/debugging-instructions-macos/
  - /docs/v0.33.2/development/debugging-instructions-macos/
  - /docs/v0.33.1/development/debugging-instructions-macos/
  - /docs/v0.33.0/development/debugging-instructions-macos/
  - /docs/v0.32.3/development/debugging-instructions-macos/
  - /docs/v0.32.2/development/debugging-instructions-macos/
  - /docs/v0.31.2/development/debugging-instructions-macos/
  - /docs/v0.31.0/development/debugging-instructions-macos/
  - /docs/v0.30.4/development/debugging-instructions-macos/
  - /docs/v0.29.2/development/debugging-instructions-macos/
  - /docs/v0.29.1/development/debugging-instructions-macos/
  - /docs/v0.28.3/development/debugging-instructions-macos/
  - /docs/v0.28.2/development/debugging-instructions-macos/
  - /docs/v0.28.1/development/debugging-instructions-macos/
  - /docs/v0.28.0/development/debugging-instructions-macos/
  - /docs/v0.27.3/development/debugging-instructions-macos/
  - /docs/v0.27.2/development/debugging-instructions-macos/
  - /docs/v0.27.1/development/debugging-instructions-macos/
  - /docs/v0.27.0/development/debugging-instructions-macos/
  - /docs/v0.26.1/development/debugging-instructions-macos/
  - /docs/v0.26.0/development/debugging-instructions-macos/
  - /docs/v0.25.3/development/debugging-instructions-macos/
  - /docs/v0.25.2/development/debugging-instructions-macos/
  - /docs/v0.25.1/development/debugging-instructions-macos/
  - /docs/v0.25.0/development/debugging-instructions-macos/
  - /docs/v0.24.0/development/debugging-instructions-macos/
  - /docs/v0.23.0/development/debugging-instructions-macos/
  - /docs/v0.22.3/development/debugging-instructions-macos/
  - /docs/v0.22.2/development/debugging-instructions-macos/
  - /docs/v0.22.1/development/debugging-instructions-macos/
  - /docs/v0.21.3/development/debugging-instructions-macos/
  - /docs/v0.21.2/development/debugging-instructions-macos/
  - /docs/v0.21.1/development/debugging-instructions-macos/
  - /docs/v0.21.0/development/debugging-instructions-macos/
  - /docs/v0.20.8/development/debugging-instructions-macos/
  - /docs/v0.20.7/development/debugging-instructions-macos/
  - /docs/v0.20.6/development/debugging-instructions-macos/
  - /docs/v0.20.5/development/debugging-instructions-macos/
  - /docs/v0.20.4/development/debugging-instructions-macos/
  - /docs/v0.20.3/development/debugging-instructions-macos/
  - /docs/v0.20.2/development/debugging-instructions-macos/
  - /docs/v0.20.1/development/debugging-instructions-macos/
  - /docs/v0.20.0/development/debugging-instructions-macos/
  - /docs/latest/development/debugging-instructions-macos/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/debugging-instructions-macos.md
title: Debugging on macOS
excerpt: ''
sort_title: debugging-instructions-macos
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

    https://github.com/electron/electron/blob/master/docs/development/debugging-instructions-macos.md

    Thanks!

-->
# Debugging on macOS

If you experience crashes or issues in Electron that you believe are not caused by your JavaScript application, but instead by Electron itself, debugging can be a little bit tricky, especially for developers not used to native/C++ debugging. However, using lldb, and the Electron source code, it is fairly easy to enable step-through debugging with breakpoints inside Electron's source code.

## Requirements

*   **A debug build of Electron**: The easiest way is usually building it yourself, using the tools and prerequisites listed in the [build instructions for macOS]({{site.baseurl}}/docs/development/build-instructions-osx). While you can easily attach to and debug Electron as you can download it directly, you will find that it is heavily optimized, making debugging substantially more difficult: The debugger will not be able to show you the content of all variables and the execution path can seem strange because of inlining, tail calls, and other compiler optimizations.

*   **Xcode**: In addition to Xcode, also install the Xcode command line tools. They include LLDB, the default debugger in Xcode on Mac OS X. It supports debugging C, Objective-C and C++ on the desktop and iOS devices and simulator.

## Attaching to and Debugging Electron

To start a debugging session, open up Terminal and start `lldb`, passing a debug build of Electron as a parameter.

```bash
$ lldb ./out/D/Electron.app
(lldb) target create "./out/D/Electron.app"
Current executable set to './out/D/Electron.app' (x86_64).
```

### Setting Breakpoints

LLDB is a powerful tool and supports multiple strategies for code inspection. For this basic introduction, let's assume that you're calling a command from JavaScript that isn't behaving correctly - so you'd like to break on that command's C++ counterpart inside the Electron source.

Relevant code files can be found in `./atom/` as well as in Brightray, found in `./brightray/browser` and `./brightray/common`. If you're hardcore, you can also debug Chromium directly, which is obviously found in `chromium_src`.

Let's assume that you want to debug `app.setName()`, which is defined in `browser.cc` as `Browser::SetName()`. Set the breakpoint using the `breakpoint` command, specifying file and line to break on:

```bash
(lldb) breakpoint set --file browser.cc --line 117
Breakpoint 1: where = Electron Framework`atom::Browser::SetName(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&) + 20 at browser.cc:118, address = 0x000000000015fdb4
```

Then, start Electron:

```bash
(lldb) run
```

The app will immediately be paused, since Electron sets the app's name on launch:

```bash
(lldb) run
Process 25244 launched: '/Users/fr/Code/electron/out/D/Electron.app/Contents/MacOS/Electron' (x86_64)
Process 25244 stopped
* thread #1: tid = 0x839a4c, 0x0000000100162db4 Electron Framework`atom::Browser::SetName(this=0x0000000108b14f20, name="Electron") + 20 at browser.cc:118, queue = 'com.apple.main-thread', stop reason = breakpoint 1.1
    frame #0: 0x0000000100162db4 Electron Framework`atom::Browser::SetName(this=0x0000000108b14f20, name="Electron") + 20 at browser.cc:118
   115 	}
   116
   117 	void Browser::SetName(const std::string& name) {
-> 118 	  name_override_ = name;
   119 	}
   120
   121 	int Browser::GetBadgeCount() {
(lldb)
```

To show the arguments and local variables for the current frame, run `frame variable` (or `fr v`), which will show you that the app is currently setting the name to "Electron".

```bash
(lldb) frame variable
(atom::Browser *) this = 0x0000000108b14f20
(const string &) name = "Electron": {
    [...]
}
```

To do a source level single step in the currently selected thread, execute `step` (or `s`). This would take you into `name_override_.empty()`. To proceed and do a step over, run `next` (or `n`).

```bash
(lldb) step
Process 25244 stopped
* thread #1: tid = 0x839a4c, 0x0000000100162dcc Electron Framework`atom::Browser::SetName(this=0x0000000108b14f20, name="Electron") + 44 at browser.cc:119, queue = 'com.apple.main-thread', stop reason = step in
    frame #0: 0x0000000100162dcc Electron Framework`atom::Browser::SetName(this=0x0000000108b14f20, name="Electron") + 44 at browser.cc:119
   116
   117 	void Browser::SetName(const std::string& name) {
   118 	  name_override_ = name;
-> 119 	}
   120
   121 	int Browser::GetBadgeCount() {
   122 	  return badge_count_;
```

To finish debugging at this point, run `process continue`. You can also continue until a certain line is hit in this thread (`thread until 100`). This command will run the thread in the current frame till it reaches line 100 in this frame or stops if it leaves the current frame.

Now, if you open up Electron's developer tools and call `setName`, you will once again hit the breakpoint.

### Further Reading

LLDB is a powerful tool with a great documentation. To learn more about it, consider Apple's debugging documentation, for instance the [LLDB Command Structure Reference](https://developer.apple.com/library/mac/documentation/IDEs/Conceptual/gdb_to_lldb_transition_guide/document/lldb-basics.html#//apple_ref/doc/uid/TP40012917-CH2-SW2) or the introduction to [Using LLDB as a Standalone Debugger](https://developer.apple.com/library/mac/documentation/IDEs/Conceptual/gdb_to_lldb_transition_guide/document/lldb-terminal-workflow-tutorial.html).

You can also check out LLDB's fantastic [manual and tutorial](http://lldb.llvm.org/tutorial.html), which will explain more complex debugging scenarios.
