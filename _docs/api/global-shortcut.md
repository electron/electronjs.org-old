---
version: v0.37.5
category: API
title: 'Global Shortcut'
redirect_from:
    - /docs/v0.24.0/api/global-shortcut/
    - /docs/v0.25.0/api/global-shortcut/
    - /docs/v0.26.0/api/global-shortcut/
    - /docs/v0.27.0/api/global-shortcut/
    - /docs/v0.28.0/api/global-shortcut/
    - /docs/v0.29.0/api/global-shortcut/
    - /docs/v0.30.0/api/global-shortcut/
    - /docs/v0.31.0/api/global-shortcut/
    - /docs/v0.32.0/api/global-shortcut/
    - /docs/v0.33.0/api/global-shortcut/
    - /docs/v0.34.0/api/global-shortcut/
    - /docs/v0.35.0/api/global-shortcut/
    - /docs/v0.36.0/api/global-shortcut/
    - /docs/v0.36.3/api/global-shortcut/
    - /docs/v0.36.4/api/global-shortcut/
    - /docs/v0.36.5/api/global-shortcut/
    - /docs/v0.36.6/api/global-shortcut/
    - /docs/v0.36.7/api/global-shortcut/
    - /docs/v0.36.8/api/global-shortcut/
    - /docs/v0.36.9/api/global-shortcut/
    - /docs/v0.36.10/api/global-shortcut/
    - /docs/v0.36.11/api/global-shortcut/
    - /docs/v0.37.0/api/global-shortcut/
    - /docs/v0.37.1/api/global-shortcut/
    - /docs/v0.37.2/api/global-shortcut/
    - /docs/v0.37.3/api/global-shortcut/
    - /docs/v0.37.4/api/global-shortcut/
    - /docs/v0.37.5/api/global-shortcut/
    - /docs/latest/api/global-shortcut/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/global-shortcut.md'
---

# globalShortcut

The `globalShortcut` module can register/unregister a global keyboard shortcut
with the operating system so that you can customize the operations for various
shortcuts.

**Note:** The shortcut is global; it will work even if the app does
not have the keyboard focus. You should not use this module until the `ready`
event of the app module is emitted.

```javascript
const electron = require('electron');
const app = electron.app;
const globalShortcut = electron.globalShortcut;

app.on('ready', function() {
  // Register a 'CommandOrControl+X' shortcut listener.
  var ret = globalShortcut.register('CommandOrControl+X', function() {
    console.log('CommandOrControl+X is pressed');
  });

  if (!ret) {
    console.log('registration failed');
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+X'));
});

app.on('will-quit', function() {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+X');

  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});
```

## Methods

The `globalShortcut` module has the following methods:

### `globalShortcut.register(accelerator, callback)`

* `accelerator` [Accelerator](http://electron.atom.io/docs/v0.37.5/api/accelerator)
* `callback` Function

Registers a global shortcut of `accelerator`. The `callback` is called when
the registered shortcut is pressed by the user.

When the accelerator is already taken by other applications, this call will
silently fail. This behavior is intended by operating systems, since they don't
want applications to fight for global shortcuts.

### `globalShortcut.isRegistered(accelerator)`

* `accelerator` [Accelerator](http://electron.atom.io/docs/v0.37.5/api/accelerator)

Returns whether this application has registered `accelerator`.

When the accelerator is already taken by other applications, this call will
still return `false`. This behavior is intended by operating systems, since they
don't want applications to fight for global shortcuts.

### `globalShortcut.unregister(accelerator)`

* `accelerator` [Accelerator](http://electron.atom.io/docs/v0.37.5/api/accelerator)

Unregisters the global shortcut of `accelerator`.

### `globalShortcut.unregisterAll()`

Unregisters all of the global shortcuts.
