---
version: v1.7.9
permalink: /docs/tutorial/application-packaging/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/application-packaging/
  - /docs/v0.37.7/tutorial/application-packaging/
  - /docs/v0.37.6/tutorial/application-packaging/
  - /docs/v0.37.5/tutorial/application-packaging/
  - /docs/v0.37.4/tutorial/application-packaging/
  - /docs/v0.37.3/tutorial/application-packaging/
  - /docs/v0.37.1/tutorial/application-packaging/
  - /docs/v0.37.0/tutorial/application-packaging/
  - /docs/v0.36.12/tutorial/application-packaging/
  - /docs/v0.36.11/tutorial/application-packaging/
  - /docs/v0.36.10/tutorial/application-packaging/
  - /docs/v0.36.9/tutorial/application-packaging/
  - /docs/v0.36.8/tutorial/application-packaging/
  - /docs/v0.36.7/tutorial/application-packaging/
  - /docs/v0.36.6/tutorial/application-packaging/
  - /docs/v0.36.5/tutorial/application-packaging/
  - /docs/v0.36.4/tutorial/application-packaging/
  - /docs/v0.36.3/tutorial/application-packaging/
  - /docs/v0.36.2/tutorial/application-packaging/
  - /docs/v0.36.0/tutorial/application-packaging/
  - /docs/v0.35.5/tutorial/application-packaging/
  - /docs/v0.35.4/tutorial/application-packaging/
  - /docs/v0.35.3/tutorial/application-packaging/
  - /docs/v0.35.2/tutorial/application-packaging/
  - /docs/v0.35.1/tutorial/application-packaging/
  - /docs/v0.34.4/tutorial/application-packaging/
  - /docs/v0.34.3/tutorial/application-packaging/
  - /docs/v0.34.2/tutorial/application-packaging/
  - /docs/v0.34.1/tutorial/application-packaging/
  - /docs/v0.34.0/tutorial/application-packaging/
  - /docs/v0.33.9/tutorial/application-packaging/
  - /docs/v0.33.8/tutorial/application-packaging/
  - /docs/v0.33.7/tutorial/application-packaging/
  - /docs/v0.33.6/tutorial/application-packaging/
  - /docs/v0.33.4/tutorial/application-packaging/
  - /docs/v0.33.3/tutorial/application-packaging/
  - /docs/v0.33.2/tutorial/application-packaging/
  - /docs/v0.33.1/tutorial/application-packaging/
  - /docs/v0.33.0/tutorial/application-packaging/
  - /docs/v0.32.3/tutorial/application-packaging/
  - /docs/v0.32.2/tutorial/application-packaging/
  - /docs/v0.31.2/tutorial/application-packaging/
  - /docs/v0.31.0/tutorial/application-packaging/
  - /docs/v0.30.4/tutorial/application-packaging/
  - /docs/v0.29.2/tutorial/application-packaging/
  - /docs/v0.29.1/tutorial/application-packaging/
  - /docs/v0.28.3/tutorial/application-packaging/
  - /docs/v0.28.2/tutorial/application-packaging/
  - /docs/v0.28.1/tutorial/application-packaging/
  - /docs/v0.28.0/tutorial/application-packaging/
  - /docs/v0.27.3/tutorial/application-packaging/
  - /docs/v0.27.2/tutorial/application-packaging/
  - /docs/v0.27.1/tutorial/application-packaging/
  - /docs/v0.27.0/tutorial/application-packaging/
  - /docs/v0.26.1/tutorial/application-packaging/
  - /docs/v0.26.0/tutorial/application-packaging/
  - /docs/v0.25.3/tutorial/application-packaging/
  - /docs/v0.25.2/tutorial/application-packaging/
  - /docs/v0.25.1/tutorial/application-packaging/
  - /docs/v0.25.0/tutorial/application-packaging/
  - /docs/v0.24.0/tutorial/application-packaging/
  - /docs/v0.23.0/tutorial/application-packaging/
  - /docs/v0.22.3/tutorial/application-packaging/
  - /docs/v0.22.2/tutorial/application-packaging/
  - /docs/v0.22.1/tutorial/application-packaging/
  - /docs/v0.21.3/tutorial/application-packaging/
  - /docs/v0.21.2/tutorial/application-packaging/
  - /docs/v0.21.1/tutorial/application-packaging/
  - /docs/v0.21.0/tutorial/application-packaging/
  - /docs/v0.20.8/tutorial/application-packaging/
  - /docs/v0.20.7/tutorial/application-packaging/
  - /docs/v0.20.6/tutorial/application-packaging/
  - /docs/v0.20.5/tutorial/application-packaging/
  - /docs/v0.20.4/tutorial/application-packaging/
  - /docs/v0.20.3/tutorial/application-packaging/
  - /docs/v0.20.2/tutorial/application-packaging/
  - /docs/v0.20.1/tutorial/application-packaging/
  - /docs/v0.20.0/tutorial/application-packaging/
  - /docs/latest/tutorial/application-packaging/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/application-packaging.md
title: Application Packaging
excerpt: ''
sort_title: application-packaging
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

    https://github.com/electron/electron/blob/master/docs/tutorial/application-packaging.md

    Thanks!

-->
# Application Packaging

To mitigate [issues](https://github.com/joyent/node/issues/6960) around long path names on Windows, slightly speed up `require` and conceal your source code from cursory inspection, you can choose to package your app into an [asar](https://github.com/electron/asar) archive with little changes to your source code.

## Generating `asar` Archive

An [asar](https://github.com/electron/asar) archive is a simple tar-like format that concatenates files into a single file. Electron can read arbitrary files from it without unpacking the whole file.

Steps to package your app into an `asar` archive:

### 1\. Install the asar Utility

```bash
$ npm install -g asar
```

### 2\. Package with `asar pack`

```bash
$ asar pack your-app app.asar
```

## Using `asar` Archives

In Electron there are two sets of APIs: Node APIs provided by Node.js and Web APIs provided by Chromium. Both APIs support reading files from `asar` archives.

### Node API

With special patches in Electron, Node APIs like `fs.readFile` and `require` treat `asar` archives as virtual directories, and the files in it as normal files in the filesystem.

For example, suppose we have an `example.asar` archive under `/path/to`:

```bash
$ asar list /path/to/example.asar
/app.js
/file.txt
/dir/module.js
/static/index.html
/static/main.css
/static/jquery.min.js
```

Read a file in the `asar` archive:

```javascript
const fs = require('fs')
fs.readFileSync('/path/to/example.asar/file.txt')
```

List all files under the root of the archive:

```javascript
const fs = require('fs')
fs.readdirSync('/path/to/example.asar')
```

Use a module from the archive:

```javascript
require('/path/to/example.asar/dir/module.js')
```

You can also display a web page in an `asar` archive with `BrowserWindow`:

```javascript
const {BrowserWindow} = require('electron')
let win = new BrowserWindow({width: 800, height: 600})
win.loadURL('file:///path/to/example.asar/static/index.html')
```

### Web API

In a web page, files in an archive can be requested with the `file:` protocol. Like the Node API, `asar` archives are treated as directories.

For example, to get a file with `$.get`:

```html
<script>
let $ = require('./jquery.min.js')
$.get('file:///path/to/example.asar/file.txt', (data) => {
  console.log(data)
})
</script>
```

### Treating an `asar` Archive as a Normal File

For some cases like verifying the `asar` archive's checksum, we need to read the content of an `asar` archive as a file. For this purpose you can use the built-in `original-fs` module which provides original `fs` APIs without `asar` support:

```javascript
const originalFs = require('original-fs')
originalFs.readFileSync('/path/to/example.asar')
```

You can also set `process.noAsar` to `true` to disable the support for `asar` in the `fs` module:

```javascript
const fs = require('fs')
process.noAsar = true
fs.readFileSync('/path/to/example.asar')
```

## Limitations of the Node API

Even though we tried hard to make `asar` archives in the Node API work like directories as much as possible, there are still limitations due to the low-level nature of the Node API.

### Archives Are Read-only

The archives can not be modified so all Node APIs that can modify files will not work with `asar` archives.

### Working Directory Can Not Be Set to Directories in Archive

Though `asar` archives are treated as directories, there are no actual directories in the filesystem, so you can never set the working directory to directories in `asar` archives. Passing them as the `cwd` option of some APIs will also cause errors.

### Extra Unpacking on Some APIs

Most `fs` APIs can read a file or get a file's information from `asar` archives without unpacking, but for some APIs that rely on passing the real file path to underlying system calls, Electron will extract the needed file into a temporary file and pass the path of the temporary file to the APIs to make them work. This adds a little overhead for those APIs.

APIs that requires extra unpacking are:

*   `child_process.execFile`
*   `child_process.execFileSync`
*   `fs.open`
*   `fs.openSync`
*   `process.dlopen` - Used by `require` on native modules

### Fake Stat Information of `fs.stat`

The `Stats` object returned by `fs.stat` and its friends on files in `asar` archives is generated by guessing, because those files do not exist on the filesystem. So you should not trust the `Stats` object except for getting file size and checking file type.

### Executing Binaries Inside `asar` Archive

There are Node APIs that can execute binaries like `child_process.exec`, `child_process.spawn` and `child_process.execFile`, but only `execFile` is supported to execute binaries inside `asar` archive.

This is because `exec` and `spawn` accept `command` instead of `file` as input, and `command`s are executed under shell. There is no reliable way to determine whether a command uses a file in asar archive, and even if we do, we can not be sure whether we can replace the path in command without side effects.

## Adding Unpacked Files in `asar` Archive

As stated above, some Node APIs will unpack the file to filesystem when calling, apart from the performance issues, it could also lead to false alerts of virus scanners.

To work around this, you can unpack some files creating archives by using the `--unpack` option, an example of excluding shared libraries of native modules is:

```bash
$ asar pack app app.asar --unpack *.node
```

After running the command, apart from the `app.asar`, there is also an `app.asar.unpacked` folder generated which contains the unpacked files, you should copy it together with `app.asar` when shipping it to users.
