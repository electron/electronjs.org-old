---
version: v0.25.0
category: API
title: Process
source_url: 'https://github.com/atom/electron/blob/master/docs/api/process.md'
---

# Process object

The `process` object in Electron has following differences between the one in
upstream node:

* `process.type` String - Process's type, can be `browser` (i.e. main process) or `renderer`.
* `process.versions['electron']` String - Version of Electron.
* `process.versions['chrome']` String - Version of Chromium.
* `process.resourcesPath` String - Path to JavaScript source code.
