---
version: v0.32.0
category: API
title: 'Menu Item'
source_url: 'https://github.com/atom/electron/blob/master/docs/api/menu-item.md'
---

# MenuItem

The `menu-item` module allows you to add items to an application or content
[`menu`](http://electron.atom.io/docs/v0.32.0/api/menu).

See [`menu`](http://electron.atom.io/docs/v0.32.0/api/menu) for examples.

## Class: MenuItem

Create a new `MenuItem` with the following method:

### new MenuItem(options)

* `options` Object
  * `click` Function - Will be called with `click(menuItem, browserWindow)` when
     the menu item is clicked
  * `role` String - Define the action of the menu item, when specified the
     `click` property will be ignored
  * `type` String - Can be `normal`, `separator`, `submenu`, `checkbox` or
     `radio`
  * `label` String
  * `sublabel` String
  * `accelerator` [Accelerator](http://electron.atom.io/docs/v0.32.0/api/accelerator)
  * `icon` [NativeImage](http://electron.atom.io/docs/v0.32.0/api/native-image)
  * `enabled` Boolean
  * `visible` Boolean
  * `checked` Boolean
  * `submenu` Menu - Should be specified for `submenu` type menu item, when
     it's specified the `type: 'submenu'` can be omitted for the menu item
  * `id` String - Unique within a single menu. If defined then it can be used
     as a reference to this item by the position attribute.
  * `position` String - This field allows fine-grained definition of the
     specific location within a given menu.

When creating menu items, it is recommended to specify `role` instead of
manually implementing the behavior if there is matching action, so menu can have
best native experience.

The `role` property can have following values:

* `undo`
* `redo`
* `cut`
* `copy`
* `paste`
* `selectall`
* `minimize` - Minimize current window
* `close` - Close current window

On OS X `role` can also have following additional values:

* `about` - Map to the `orderFrontStandardAboutPanel` action
* `hide` - Map to the `hide` action
* `hideothers` - Map to the `hideOtherApplications` action
* `unhide` - Map to the `unhideAllApplications` action
* `front` - Map to the `arrangeInFront` action
* `window` - The submenu is a "Window" menu
* `help` - The submenu is a "Help" menu
* `services` - The submenu is a "Services" menu
