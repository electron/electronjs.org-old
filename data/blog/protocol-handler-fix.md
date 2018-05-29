---
title: Protocol Handler Vulnerability Fix
author: zeke
date: '2018-01-22'
---

A remote code execution vulnerability has been discovered affecting 
Electron apps that use custom protocol handlers. This vulnerability has been 
assigned the CVE identifier [CVE-2018-1000006].

---

## Affected Platforms

Electron apps designed to run on Windows that register themselves as the default 
handler for a protocol, like `myapp://`, are vulnerable.

Such apps can be affected regardless of how the protocol is registered, e.g.
using native code, the Windows registry, or Electron's 
[app.setAsDefaultProtocolClient] API.

macOS and Linux are **not vulnerable** to this issue.

## Mitigation

We've published new versions of Electron which include fixes for 
this vulnerability: 
[`1.8.2-beta.5`](https://github.com/electron/electron/releases/tag/v1.8.2-beta.5),
[`1.7.12`](https://github.com/electron/electron/releases/tag/v1.7.12),
and [`1.6.17`](https://github.com/electron/electron/releases/tag/v2.6.17).
We urge all Electron developers to update their apps to the latest stable 
version immediately.

If for some reason you are unable to upgrade your Electron version,
you can append `--` as the last argument when calling [app.setAsDefaultProtocolClient],
which prevents Chromium from parsing further options.
The double dash `--` signifies the end of command options,
after which only positional parameters are accepted.

```js
app.setAsDefaultProtocolClient(protocol, process.execPath, [
  '--your-switches-here',
  '--'
])
```

See the [app.setAsDefaultProtocolClient] API for more details.

To learn more about best practices for keeping your Electron apps secure,
see our [security tutorial].

If you wish to report a vulnerability in Electron, email 
security@electronjs.org.

[security tutorial]: https://electronjs.org/docs/tutorial/security
[app.setAsDefaultProtocolClient]: https://electronjs.org/docs/api/app#appsetasdefaultprotocolclientprotocol-path-args-macos-windows
[CVE-2018-1000006]: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000006
