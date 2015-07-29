---
version: v0.30.0
category: API
title: Synopsis
source_url: 'https://github.com/atom/electron/blob/master/docs/api/synopsis.md'
---

# Synopsis

All of [node.js's built-in modules](http://nodejs.org/api/) are available in
Electron, and third-party node modules are fully supported too (including the
[native modules](http://electron.atom.io/docs/v0.30.0/tutorial/using-native-node-modules)).

Electron also provides some extra built-in modules for developing native
desktop applications. Some modules are only available on the main process, some
are only available on the renderer process, and some can be used on both processes.
The basic rule is: if a module is GUI or low-level system related, then it should
be only available on the main process. You need to be familiar with the concept of
[main process vs. renderer process](http://electron.atom.io/docs/v0.30.0/tutorial/quick-start#the-main-process)
scripts to be able to use those modules.

The main process script is just like a normal `node.js` script:

```javascript
var app = require('app');
var BrowserWindow = require('browser-window');

var window = null;

app.on('ready', function() {
  window = new BrowserWindow({width: 800, height: 600});
  window.loadUrl('https://github.com');
});
```

The web page is no different than a normal web page, except for the extra
ability to use node modules:

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      var remote = require('remote');
      console.log(remote.require('app').getVersion());
    </script>
  </body>
</html>
```

To run your app, read [Run your app](http://electron.atom.io/docs/v0.30.0/tutorial/quick-start#run-your-app).
