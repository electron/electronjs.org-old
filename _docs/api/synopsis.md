---
version: v1.2.8
category: API
redirect_from:
    - /docs/v0.24.0/api/synopsis/
    - /docs/v0.25.0/api/synopsis/
    - /docs/v0.26.0/api/synopsis/
    - /docs/v0.27.0/api/synopsis/
    - /docs/v0.28.0/api/synopsis/
    - /docs/v0.29.0/api/synopsis/
    - /docs/v0.30.0/api/synopsis/
    - /docs/v0.31.0/api/synopsis/
    - /docs/v0.32.0/api/synopsis/
    - /docs/v0.33.0/api/synopsis/
    - /docs/v0.34.0/api/synopsis/
    - /docs/v0.35.0/api/synopsis/
    - /docs/v0.36.0/api/synopsis/
    - /docs/v0.36.3/api/synopsis/
    - /docs/v0.36.4/api/synopsis/
    - /docs/v0.36.5/api/synopsis/
    - /docs/v0.36.6/api/synopsis/
    - /docs/v0.36.7/api/synopsis/
    - /docs/v0.36.8/api/synopsis/
    - /docs/v0.36.9/api/synopsis/
    - /docs/v0.36.10/api/synopsis/
    - /docs/v0.36.11/api/synopsis/
    - /docs/v0.37.0/api/synopsis/
    - /docs/v0.37.1/api/synopsis/
    - /docs/v0.37.2/api/synopsis/
    - /docs/v0.37.3/api/synopsis/
    - /docs/v0.37.4/api/synopsis/
    - /docs/v0.37.5/api/synopsis/
    - /docs/v0.37.6/api/synopsis/
    - /docs/v0.37.7/api/synopsis/
    - /docs/v0.37.8/api/synopsis/
    - /docs/latest/api/synopsis/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/synopsis.md'
excerpt: "How to use Node.js and Electron APIs."
title: "Synopsis"
sort_title: "synopsis"
---

# Synopsis

> How to use Node.js and Electron APIs.

All of [Node.js's built-in modules](http://nodejs.org/api/) are available in
Electron and third-party node modules also fully supported as well (including
the [native modules](http://electron.atom.io/docs/tutorial/using-native-node-modules)).

Electron also provides some extra built-in modules for developing native
desktop applications. Some modules are only available in the main process, some
are only available in the renderer process (web page), and some can be used in
both processes.

The basic rule is: if a module is [GUI][gui] or low-level system related, then
it should be only available in the main process. You need to be familiar with
the concept of [main process vs. renderer process](http://electron.atom.io/docs/tutorial/quick-start#the-main-process)
scripts to be able to use those modules.

The main process script is just like a normal Node.js script:

```javascript
const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', () => {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL('https://github.com');
});
```

The renderer process is no different than a normal web page, except for the
extra ability to use node modules:

```html
<!DOCTYPE html>
<html>
<body>
<script>
  const {app} = require('electron').remote;
  console.log(app.getVersion());
</script>
</body>
</html>
```

To run your app, read [Run your app](http://electron.atom.io/docs/tutorial/quick-start#run-your-app).

## Destructuring assignment

As of 0.37, you can use
[destructuring assignment][destructuring-assignment] to make it easier to use
built-in modules.

```javascript
const {app, BrowserWindow} = require('electron');
```

If you need the entire `electron` module, you can require it and then using
destructuring to access the individual modules from `electron`.

```javascript
const electron = require('electron');
const {app, BrowserWindow} = electron;
```

This is equivalent to the following code:

```javascript
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
```

[gui]: https://en.wikipedia.org/wiki/Graphical_user_interface
[destructuring-assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
