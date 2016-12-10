---
title: Certificate Transparency Fix
author: kevinsawicki
---

Electron [1.4.12] contains an important patch that fixes an upstream Chrome
issue where some Symantec, GeoTrust, and Thawte SSL/TLS certificates
are incorrectly rejected 10 weeks from the build time of [libchromiumcontent],
Electron's underlying Chrome library. There are no issues with the certificates
used on the affected sites and replacing these certificates will not help.

In Electron 1.4.0 &mdash; 1.4.11 HTTPS requests to sites using these affected
certificates will fail with network errors after a certain date.
This affects HTTPS requests made using Chrome's underlying networking APIs
such as `window.fetch`, Ajax requests, Electron's `net` API,
`BrowserWindow.loadURL`, `webContents.loadURL`, the `src` attribute on a
`<webview>` tag, and others.

Upgrading your applications to 1.4.12 will prevent these request failures from
occurring.

**Note:** This issue was introduced in Chrome 53 so Electron versions earlier
than 1.4.0 are not affected.

### Impact Dates

Below is a table of each Electron 1.4 version and the date when
requests to sites using these affected certificates will start to fail.

| Electron Version | Impact Date                     |
| :--------------: | :-----------------------------: |
| 1.3.x            | Unaffected                      |
| 1.4.0            | Already failing                 |
| 1.4.1            | Already failing                 |
| 1.4.2            | Already failing                 |
| 1.4.3            | December 10th, 2016 9:00 PM PST |
| 1.4.4            | December 10th, 2016 9:00 PM PST |
| 1.4.5            | December 10th, 2016 9:00 PM PST |
| 1.4.6            | January 14th, 2017  9:00 PM PST |
| 1.4.7            | January 14th, 2017  9:00 PM PST |
| 1.4.8            | January 14th, 2017  9:00 PM PST |
| 1.4.9            | January 14th, 2017  9:00 PM PST |
| 1.4.10           | January 14th, 2017  9:00 PM PST |
| 1.4.11           | February 11th, 2017 9:00 PM PST |
| 1.4.12           | Unaffected                      |

You can verify your app's impact date by setting your computer's clock ahead
and then check to see if https://symbeta.symantec.com/welcome/ successfully
loads from it.

## More Information

You can read more about this topic, the original issue, and the fix at the
following places:

- [What is Certificate Transparency?](https://www.certificate-transparency.org/what-is-ct)
- [Symtantec knowledge base article](https://knowledge.symantec.com/support/ssl-certificates-support/index?page=content&id=ALERT2160)
- [Chrome issue 664177](https://bugs.chromium.org/p/chromium/issues/detail?id=664177)
- [Chrome fix for issue 664177](https://codereview.chromium.org/2495583002)
- [libchromiumcontent patch for issue 664177](https://github.com/electron/libchromiumcontent/pull/248)

[libchromiumcontent]: https://github.com/electron/libchromiumcontent
[1.4.12]: https://github.com/electron/electron/releases/tag/v1.4.12
