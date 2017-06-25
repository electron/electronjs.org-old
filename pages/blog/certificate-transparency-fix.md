---
title: Certificate Transparency Fix
author: kevinsawicki
date: '2016-12-09'
---

Electron [1.4.12] contains an important patch that fixes an upstream Chrome
issue where some Symantec, GeoTrust, and Thawte SSL/TLS certificates
are incorrectly rejected 10 weeks from the build time of [libchromiumcontent],
Electron's underlying Chrome library. There are no issues with the certificates
used on the affected sites and replacing these certificates will not help.

---

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

<table class="table table-ruled table-full-width">
    <thead>
        <tr class="text-left">
            <th>Electron Version</th>
            <th>Impact Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.3.x</td>
            <td>Unaffected</td>
        </tr>
        <tr>
            <td>1.4.0</td>
            <td>Already failing</td>
        </tr>
        <tr>
            <td>1.4.1</td>
            <td>Already failing</td>
        </tr>
        <tr>
            <td>1.4.2</td>
            <td>Already failing</td>
        </tr>
        <tr>
            <td>1.4.3</td>
            <td>December 10th, 2016 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.4</td>
            <td>December 10th, 2016 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.5</td>
            <td>December 10th, 2016 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.6</td>
            <td>January 14th, 2017 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.7</td>
            <td>January 14th, 2017 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.8</td>
            <td>January 14th, 2017 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.9</td>
            <td>January 14th, 2017 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.10</td>
            <td>January 14th, 2017 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.11</td>
            <td>February 11th, 2017 9:00 PM PST</td>
        </tr>
        <tr>
            <td>1.4.12</td>
            <td>Unaffected</td>
        </tr>
    </tbody>
</table>



You can verify your app's impact date by setting your computer's clock ahead
and then check to see if [https://symbeta.symantec.com/welcome/](https://symbeta.symantec.com/welcome/)
successfully loads from it.

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

