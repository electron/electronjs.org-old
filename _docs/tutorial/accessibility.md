---
version: v1.7.9
permalink: /docs/tutorial/accessibility/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/accessibility/
  - /docs/v0.37.7/tutorial/accessibility/
  - /docs/v0.37.6/tutorial/accessibility/
  - /docs/v0.37.5/tutorial/accessibility/
  - /docs/v0.37.4/tutorial/accessibility/
  - /docs/v0.37.3/tutorial/accessibility/
  - /docs/v0.37.1/tutorial/accessibility/
  - /docs/v0.37.0/tutorial/accessibility/
  - /docs/v0.36.12/tutorial/accessibility/
  - /docs/v0.36.11/tutorial/accessibility/
  - /docs/v0.36.10/tutorial/accessibility/
  - /docs/v0.36.9/tutorial/accessibility/
  - /docs/v0.36.8/tutorial/accessibility/
  - /docs/v0.36.7/tutorial/accessibility/
  - /docs/v0.36.6/tutorial/accessibility/
  - /docs/v0.36.5/tutorial/accessibility/
  - /docs/v0.36.4/tutorial/accessibility/
  - /docs/v0.36.3/tutorial/accessibility/
  - /docs/v0.36.2/tutorial/accessibility/
  - /docs/v0.36.0/tutorial/accessibility/
  - /docs/v0.35.5/tutorial/accessibility/
  - /docs/v0.35.4/tutorial/accessibility/
  - /docs/v0.35.3/tutorial/accessibility/
  - /docs/v0.35.2/tutorial/accessibility/
  - /docs/v0.35.1/tutorial/accessibility/
  - /docs/v0.34.4/tutorial/accessibility/
  - /docs/v0.34.3/tutorial/accessibility/
  - /docs/v0.34.2/tutorial/accessibility/
  - /docs/v0.34.1/tutorial/accessibility/
  - /docs/v0.34.0/tutorial/accessibility/
  - /docs/v0.33.9/tutorial/accessibility/
  - /docs/v0.33.8/tutorial/accessibility/
  - /docs/v0.33.7/tutorial/accessibility/
  - /docs/v0.33.6/tutorial/accessibility/
  - /docs/v0.33.4/tutorial/accessibility/
  - /docs/v0.33.3/tutorial/accessibility/
  - /docs/v0.33.2/tutorial/accessibility/
  - /docs/v0.33.1/tutorial/accessibility/
  - /docs/v0.33.0/tutorial/accessibility/
  - /docs/v0.32.3/tutorial/accessibility/
  - /docs/v0.32.2/tutorial/accessibility/
  - /docs/v0.31.2/tutorial/accessibility/
  - /docs/v0.31.0/tutorial/accessibility/
  - /docs/v0.30.4/tutorial/accessibility/
  - /docs/v0.29.2/tutorial/accessibility/
  - /docs/v0.29.1/tutorial/accessibility/
  - /docs/v0.28.3/tutorial/accessibility/
  - /docs/v0.28.2/tutorial/accessibility/
  - /docs/v0.28.1/tutorial/accessibility/
  - /docs/v0.28.0/tutorial/accessibility/
  - /docs/v0.27.3/tutorial/accessibility/
  - /docs/v0.27.2/tutorial/accessibility/
  - /docs/v0.27.1/tutorial/accessibility/
  - /docs/v0.27.0/tutorial/accessibility/
  - /docs/v0.26.1/tutorial/accessibility/
  - /docs/v0.26.0/tutorial/accessibility/
  - /docs/v0.25.3/tutorial/accessibility/
  - /docs/v0.25.2/tutorial/accessibility/
  - /docs/v0.25.1/tutorial/accessibility/
  - /docs/v0.25.0/tutorial/accessibility/
  - /docs/v0.24.0/tutorial/accessibility/
  - /docs/v0.23.0/tutorial/accessibility/
  - /docs/v0.22.3/tutorial/accessibility/
  - /docs/v0.22.2/tutorial/accessibility/
  - /docs/v0.22.1/tutorial/accessibility/
  - /docs/v0.21.3/tutorial/accessibility/
  - /docs/v0.21.2/tutorial/accessibility/
  - /docs/v0.21.1/tutorial/accessibility/
  - /docs/v0.21.0/tutorial/accessibility/
  - /docs/v0.20.8/tutorial/accessibility/
  - /docs/v0.20.7/tutorial/accessibility/
  - /docs/v0.20.6/tutorial/accessibility/
  - /docs/v0.20.5/tutorial/accessibility/
  - /docs/v0.20.4/tutorial/accessibility/
  - /docs/v0.20.3/tutorial/accessibility/
  - /docs/v0.20.2/tutorial/accessibility/
  - /docs/v0.20.1/tutorial/accessibility/
  - /docs/v0.20.0/tutorial/accessibility/
  - /docs/latest/tutorial/accessibility/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/accessibility.md
title: Accessibility
excerpt: ''
sort_title: accessibility
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

    https://github.com/electron/electron/blob/master/docs/tutorial/accessibility.md

    Thanks!

-->
# Accessibility

Making accessible applications is important and we're happy to introduce new functionality to [Devtron](https://electron.atom.io/devtron) and [Spectron](https://electron.atom.io/spectron) that gives developers the opportunity to make their apps better for everyone.

* * *

Accessibility concerns in Electron applications are similar to those of websites because they're both ultimately HTML. With Electron apps, however, you can't use the online resources for accessibility audits because your app doesn't have a URL to point the auditor to.

These new features bring those auditing tools to your Electron app. You can choose to add audits to your tests with Spectron or use them within DevTools with Devtron. Read on for a summary of the tools or checkout our [accessibility documentation](https://electron.atom.io/docs/tutorial/accessibility) for more information.

### Spectron

In the testing framework Spectron, you can now audit each window and `<webview>` tag in your application. For example:

```javascript
app.client.auditAccessibility().then(function (audit) {
  if (audit.failed) {
    console.error(audit.message)
  }
})
```

You can read more about this feature in [Spectron's documentation](https://github.com/electron/spectron#accessibility-testing).

### Devtron

In Devtron, there is a new accessibility tab which will allow you to audit a page in your app, sort and filter the results.

![devtron screenshot](https://cloud.githubusercontent.com/assets/1305617/17156618/9f9bcd72-533f-11e6-880d-389115f40a2a.png)

Both of these tools are using the [Accessibility Developer Tools](https://github.com/GoogleChrome/accessibility-developer-tools) library built by Google for Chrome. You can learn more about the accessibility audit rules this library uses on that [repository's wiki](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules).

If you know of other great accessibility tools for Electron, add them to the [accessibility documentation](https://electron.atom.io/docs/tutorial/accessibility) with a pull request.
