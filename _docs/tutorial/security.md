---
version: v1.7.9
permalink: /docs/tutorial/security/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/security/
  - /docs/v0.37.7/tutorial/security/
  - /docs/v0.37.6/tutorial/security/
  - /docs/v0.37.5/tutorial/security/
  - /docs/v0.37.4/tutorial/security/
  - /docs/v0.37.3/tutorial/security/
  - /docs/v0.37.1/tutorial/security/
  - /docs/v0.37.0/tutorial/security/
  - /docs/v0.36.12/tutorial/security/
  - /docs/v0.36.11/tutorial/security/
  - /docs/v0.36.10/tutorial/security/
  - /docs/v0.36.9/tutorial/security/
  - /docs/v0.36.8/tutorial/security/
  - /docs/v0.36.7/tutorial/security/
  - /docs/v0.36.6/tutorial/security/
  - /docs/v0.36.5/tutorial/security/
  - /docs/v0.36.4/tutorial/security/
  - /docs/v0.36.3/tutorial/security/
  - /docs/v0.36.2/tutorial/security/
  - /docs/v0.36.0/tutorial/security/
  - /docs/v0.35.5/tutorial/security/
  - /docs/v0.35.4/tutorial/security/
  - /docs/v0.35.3/tutorial/security/
  - /docs/v0.35.2/tutorial/security/
  - /docs/v0.35.1/tutorial/security/
  - /docs/v0.34.4/tutorial/security/
  - /docs/v0.34.3/tutorial/security/
  - /docs/v0.34.2/tutorial/security/
  - /docs/v0.34.1/tutorial/security/
  - /docs/v0.34.0/tutorial/security/
  - /docs/v0.33.9/tutorial/security/
  - /docs/v0.33.8/tutorial/security/
  - /docs/v0.33.7/tutorial/security/
  - /docs/v0.33.6/tutorial/security/
  - /docs/v0.33.4/tutorial/security/
  - /docs/v0.33.3/tutorial/security/
  - /docs/v0.33.2/tutorial/security/
  - /docs/v0.33.1/tutorial/security/
  - /docs/v0.33.0/tutorial/security/
  - /docs/v0.32.3/tutorial/security/
  - /docs/v0.32.2/tutorial/security/
  - /docs/v0.31.2/tutorial/security/
  - /docs/v0.31.0/tutorial/security/
  - /docs/v0.30.4/tutorial/security/
  - /docs/v0.29.2/tutorial/security/
  - /docs/v0.29.1/tutorial/security/
  - /docs/v0.28.3/tutorial/security/
  - /docs/v0.28.2/tutorial/security/
  - /docs/v0.28.1/tutorial/security/
  - /docs/v0.28.0/tutorial/security/
  - /docs/v0.27.3/tutorial/security/
  - /docs/v0.27.2/tutorial/security/
  - /docs/v0.27.1/tutorial/security/
  - /docs/v0.27.0/tutorial/security/
  - /docs/v0.26.1/tutorial/security/
  - /docs/v0.26.0/tutorial/security/
  - /docs/v0.25.3/tutorial/security/
  - /docs/v0.25.2/tutorial/security/
  - /docs/v0.25.1/tutorial/security/
  - /docs/v0.25.0/tutorial/security/
  - /docs/v0.24.0/tutorial/security/
  - /docs/v0.23.0/tutorial/security/
  - /docs/v0.22.3/tutorial/security/
  - /docs/v0.22.2/tutorial/security/
  - /docs/v0.22.1/tutorial/security/
  - /docs/v0.21.3/tutorial/security/
  - /docs/v0.21.2/tutorial/security/
  - /docs/v0.21.1/tutorial/security/
  - /docs/v0.21.0/tutorial/security/
  - /docs/v0.20.8/tutorial/security/
  - /docs/v0.20.7/tutorial/security/
  - /docs/v0.20.6/tutorial/security/
  - /docs/v0.20.5/tutorial/security/
  - /docs/v0.20.4/tutorial/security/
  - /docs/v0.20.3/tutorial/security/
  - /docs/v0.20.2/tutorial/security/
  - /docs/v0.20.1/tutorial/security/
  - /docs/v0.20.0/tutorial/security/
  - /docs/latest/tutorial/security/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/security.md'
title: 'Security, Native Capabilities, and Your Responsibility'
excerpt: |-
  :warning: Under no circumstances should you load and execute remote code with
      Node integration enabled. Instead, use only local files (packaged together with
      your application) to execute Node code. To display remote content, use the
      <code>webview</code> tag and make sure to disable the <code>nodeIntegration</code>.
sort_title: security
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

    https://github.com/electron/electron/blob/master/docs/tutorial/security.md

    Thanks!

-->
# Security, Native Capabilities, and Your Responsibility

As web developers, we usually enjoy the strong security net of the browser - the risks associated with the code we write are relatively small. Our websites are granted limited powers in a sandbox, and we trust that our users enjoy a browser built by a large team of engineers that is able to quickly respond to newly discovered security threats.

When working with Electron, it is important to understand that Electron is not a web browser. It allows you to build feature-rich desktop applications with familiar web technologies, but your code wields much greater power. JavaScript can access the filesystem, user shell, and more. This allows you to build high quality native applications, but the inherent security risks scale with the additional powers granted to your code.

With that in mind, be aware that displaying arbitrary content from untrusted sources poses a severe security risk that Electron is not intended to handle. In fact, the most popular Electron apps (Atom, Slack, Visual Studio Code, etc) display primarily local content (or trusted, secure remote content without Node integration) – if your application executes code from an online source, it is your responsibility to ensure that the code is not malicious.

## Reporting Security Issues

For information on how to properly disclose an Electron vulnerability, see [SECURITY.md](https://github.com/electron/electron/tree/master/SECURITY.md)

## Chromium Security Issues and Upgrades

While Electron strives to support new versions of Chromium as soon as possible, developers should be aware that upgrading is a serious undertaking - involving hand-editing dozens or even hundreds of files. Given the resources and contributions available today, Electron will often not be on the very latest version of Chromium, lagging behind by either days or weeks.

We feel that our current system of updating the Chromium component strikes an appropriate balance between the resources we have available and the needs of the majority of applications built on top of the framework. We definitely are interested in hearing more about specific use cases from the people that build things on top of Electron. Pull requests and contributions supporting this effort are always very welcome.

## Ignoring Above Advice

A security issue exists whenever you receive code from a remote destination and execute it locally. As an example, consider a remote website being displayed inside a browser window. If an attacker somehow manages to change said content (either by attacking the source directly, or by sitting between your app and the actual destination), they will be able to execute native code on the user's machine.

> :warning: Under no circumstances should you load and execute remote code with Node integration enabled. Instead, use only local files (packaged together with your application) to execute Node code. To display remote content, use the `webview` tag and make sure to disable the `nodeIntegration`.

#### Checklist

This is not bulletproof, but at the least, you should attempt the following:

*   Only display secure (https) content
*   Disable the Node integration in all renderers that display remote content (setting `nodeIntegration` to `false` in `webPreferences`)
*   Enable context isolation in all renderers that display remote content (setting `contextIsolation` to `true` in `webPreferences`)
*   Use `ses.setPermissionRequestHandler()` in all sessions that load remote content
*   Do not disable `webSecurity`. Disabling it will disable the same-origin policy.
*   Define a [`Content-Security-Policy`](http://www.html5rocks.com/en/tutorials/security/content-security-policy/) , and use restrictive rules (i.e. `script-src 'self'`)
*   [Override and disable `eval`](https://github.com/nylas/N1/blob/0abc5d5defcdb057120d726b271933425b75b415/static/index.js#L6-L8) , which allows strings to be executed as code.
*   Do not set `allowRunningInsecureContent` to true.
*   Do not enable `experimentalFeatures` or `experimentalCanvasFeatures` unless you know what you're doing.
*   Do not use `blinkFeatures` unless you know what you're doing.
*   WebViews: Do not add the `nodeintegration` attribute.
*   WebViews: Do not use `disablewebsecurity`
*   WebViews: Do not use `allowpopups`
*   WebViews: Do not use `insertCSS` or `executeJavaScript` with remote CSS/JS.
*   WebViews: Verify the options and params of all `<webview>` tags before they get attached using the `will-attach-webview` event:

```js
app.on('web-contents-created', (event, contents) => {
  contents.on('will-attach-webview', (event, webPreferences, params) => {
    // Strip away preload scripts if unused or verify their location is legitimate
    delete webPreferences.preload
    delete webPreferences.preloadURL

    // Disable node integration
    webPreferences.nodeIntegration = false

    // Verify URL being loaded
    if (!params.src.startsWith('https://yourapp.com/')) {
      event.preventDefault()
    }
  })
})
```

Again, this list merely minimizes the risk, it does not remove it. If your goal is to display a website, a browser will be a more secure option.
