---
title:  SQLite Vulnerability Fix
author: ckerr
date: '2018-12-18'
---

A remote code execution vulnerability, "[Magellan](https://blade.tencent.com/magellan/index_en.html)," has been discovered affecting software based on SQLite or Chromium, including all versions of Electron.

---

## Scope

Electron applications using Web SQL are impacted.


## Mitigation

Affected apps should stop using Web SQL or upgrade to a patched version of Electron.

We've published new versions of Electron which include fixes for this vulnerability:
  * [4.0.0-beta.11](https://github.com/electron/electron/releases/tag/v4.0.0-beta.11)
  * [3.1.0-beta.4](https://github.com/electron/electron/releases/tag/v3.1.0-beta.4)
  * [3.0.13](https://github.com/electron/electron/releases/tag/v3.0.13)
  * [2.0.16](https://github.com/electron/electron/releases/tag/v2.0.16)

There are no reports of this in the wild; however, affected applications are urged to mitigate.

## Further Information

This vulnerability was discovered by the Tencent Blade team, who have published [a blog post that discusses the vulnerability](https://blade.tencent.com/magellan/index_en.html).

To learn more about best practices for keeping your Electron apps secure, see our [security tutorial].

If you wish to report a vulnerability in Electron, email security@electronjs.org.

[security tutorial]: https://electronjs.org/docs/tutorial/security
