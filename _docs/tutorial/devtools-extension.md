---
version: v1.7.9
permalink: /docs/tutorial/devtools-extension/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/devtools-extension/
  - /docs/v0.37.7/tutorial/devtools-extension/
  - /docs/v0.37.6/tutorial/devtools-extension/
  - /docs/v0.37.5/tutorial/devtools-extension/
  - /docs/v0.37.4/tutorial/devtools-extension/
  - /docs/v0.37.3/tutorial/devtools-extension/
  - /docs/v0.37.1/tutorial/devtools-extension/
  - /docs/v0.37.0/tutorial/devtools-extension/
  - /docs/v0.36.12/tutorial/devtools-extension/
  - /docs/v0.36.11/tutorial/devtools-extension/
  - /docs/v0.36.10/tutorial/devtools-extension/
  - /docs/v0.36.9/tutorial/devtools-extension/
  - /docs/v0.36.8/tutorial/devtools-extension/
  - /docs/v0.36.7/tutorial/devtools-extension/
  - /docs/v0.36.6/tutorial/devtools-extension/
  - /docs/v0.36.5/tutorial/devtools-extension/
  - /docs/v0.36.4/tutorial/devtools-extension/
  - /docs/v0.36.3/tutorial/devtools-extension/
  - /docs/v0.36.2/tutorial/devtools-extension/
  - /docs/v0.36.0/tutorial/devtools-extension/
  - /docs/v0.35.5/tutorial/devtools-extension/
  - /docs/v0.35.4/tutorial/devtools-extension/
  - /docs/v0.35.3/tutorial/devtools-extension/
  - /docs/v0.35.2/tutorial/devtools-extension/
  - /docs/v0.35.1/tutorial/devtools-extension/
  - /docs/v0.34.4/tutorial/devtools-extension/
  - /docs/v0.34.3/tutorial/devtools-extension/
  - /docs/v0.34.2/tutorial/devtools-extension/
  - /docs/v0.34.1/tutorial/devtools-extension/
  - /docs/v0.34.0/tutorial/devtools-extension/
  - /docs/v0.33.9/tutorial/devtools-extension/
  - /docs/v0.33.8/tutorial/devtools-extension/
  - /docs/v0.33.7/tutorial/devtools-extension/
  - /docs/v0.33.6/tutorial/devtools-extension/
  - /docs/v0.33.4/tutorial/devtools-extension/
  - /docs/v0.33.3/tutorial/devtools-extension/
  - /docs/v0.33.2/tutorial/devtools-extension/
  - /docs/v0.33.1/tutorial/devtools-extension/
  - /docs/v0.33.0/tutorial/devtools-extension/
  - /docs/v0.32.3/tutorial/devtools-extension/
  - /docs/v0.32.2/tutorial/devtools-extension/
  - /docs/v0.31.2/tutorial/devtools-extension/
  - /docs/v0.31.0/tutorial/devtools-extension/
  - /docs/v0.30.4/tutorial/devtools-extension/
  - /docs/v0.29.2/tutorial/devtools-extension/
  - /docs/v0.29.1/tutorial/devtools-extension/
  - /docs/v0.28.3/tutorial/devtools-extension/
  - /docs/v0.28.2/tutorial/devtools-extension/
  - /docs/v0.28.1/tutorial/devtools-extension/
  - /docs/v0.28.0/tutorial/devtools-extension/
  - /docs/v0.27.3/tutorial/devtools-extension/
  - /docs/v0.27.2/tutorial/devtools-extension/
  - /docs/v0.27.1/tutorial/devtools-extension/
  - /docs/v0.27.0/tutorial/devtools-extension/
  - /docs/v0.26.1/tutorial/devtools-extension/
  - /docs/v0.26.0/tutorial/devtools-extension/
  - /docs/v0.25.3/tutorial/devtools-extension/
  - /docs/v0.25.2/tutorial/devtools-extension/
  - /docs/v0.25.1/tutorial/devtools-extension/
  - /docs/v0.25.0/tutorial/devtools-extension/
  - /docs/v0.24.0/tutorial/devtools-extension/
  - /docs/v0.23.0/tutorial/devtools-extension/
  - /docs/v0.22.3/tutorial/devtools-extension/
  - /docs/v0.22.2/tutorial/devtools-extension/
  - /docs/v0.22.1/tutorial/devtools-extension/
  - /docs/v0.21.3/tutorial/devtools-extension/
  - /docs/v0.21.2/tutorial/devtools-extension/
  - /docs/v0.21.1/tutorial/devtools-extension/
  - /docs/v0.21.0/tutorial/devtools-extension/
  - /docs/v0.20.8/tutorial/devtools-extension/
  - /docs/v0.20.7/tutorial/devtools-extension/
  - /docs/v0.20.6/tutorial/devtools-extension/
  - /docs/v0.20.5/tutorial/devtools-extension/
  - /docs/v0.20.4/tutorial/devtools-extension/
  - /docs/v0.20.3/tutorial/devtools-extension/
  - /docs/v0.20.2/tutorial/devtools-extension/
  - /docs/v0.20.1/tutorial/devtools-extension/
  - /docs/v0.20.0/tutorial/devtools-extension/
  - /docs/latest/tutorial/devtools-extension/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md
title: DevTools Extension
excerpt: ''
sort_title: devtools-extension
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

    https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md

    Thanks!

-->
# DevTools Extension

Electron supports the [Chrome DevTools Extension](https://developer.chrome.com/extensions/devtools), which can be used to extend the ability of devtools for debugging popular web frameworks.

## How to load a DevTools Extension

This document outlines the process for manually loading an extension. You may also try [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer), a third-party tool that downloads extensions directly from the Chrome WebStore.

To load an extension in Electron, you need to download it in Chrome browser, locate its filesystem path, and then load it by calling the `BrowserWindow.addDevToolsExtension(extension)` API.

Using the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) as example:

1.  Install it in Chrome browser.
2.  Navigate to `chrome://extensions`, and find its extension ID, which is a hash string like `fmkadmapgofadopljbjfkapdkoienihi`.
3.  Find out filesystem location used by Chrome for storing extensions:
    *   on Windows it is `%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions`;
    *   on Linux it could be:
        *   `~/.config/google-chrome/Default/Extensions/`
        *   `~/.config/google-chrome-beta/Default/Extensions/`
        *   `~/.config/google-chrome-canary/Default/Extensions/`
        *   `~/.config/chromium/Default/Extensions/`
    *   on macOS it is `~/Library/Application Support/Google/Chrome/Default/Extensions`.
4.  Pass the location of the extension to `BrowserWindow.addDevToolsExtension` API, for the React Developer Tools, it is something like: `~/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0`

**Note:** The `BrowserWindow.addDevToolsExtension` API cannot be called before the ready event of the app module is emitted.

The name of the extension is returned by `BrowserWindow.addDevToolsExtension`, and you can pass the name of the extension to the `BrowserWindow.removeDevToolsExtension` API to unload it.

## Supported DevTools Extensions

Electron only supports a limited set of `chrome.*` APIs, so some extensions using unsupported `chrome.*` APIs for chrome extension features may not work. Following Devtools Extensions are tested and guaranteed to work in Electron:

*   [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
*   [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
*   [Backbone Debugger](https://chrome.google.com/webstore/detail/backbone-debugger/bhljhndlimiafopmmhjlgfpnnchjjbhd)
*   [jQuery Debugger](https://chrome.google.com/webstore/detail/jquery-debugger/dbhhnnnpaeobfddmlalhnehgclcmjimi)
*   [AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk)
*   [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
*   [Cerebral Debugger](http://www.cerebraljs.com/documentation/the_debugger)
*   [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### What should I do if a DevTools Extension is not working?

First please make sure the extension is still being maintained, some extensions can not even work for recent versions of Chrome browser, and we are not able to do anything for them.

Then file a bug at Electron's issues list, and describe which part of the extension is not working as expected.
