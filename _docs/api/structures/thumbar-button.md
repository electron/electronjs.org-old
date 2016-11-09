---
version: v1.4.6
category: API
redirect_from:
    - /docs/v0.24.0/api/structures/thumbar-button/
    - /docs/v0.25.0/api/structures/thumbar-button/
    - /docs/v0.26.0/api/structures/thumbar-button/
    - /docs/v0.27.0/api/structures/thumbar-button/
    - /docs/v0.28.0/api/structures/thumbar-button/
    - /docs/v0.29.0/api/structures/thumbar-button/
    - /docs/v0.30.0/api/structures/thumbar-button/
    - /docs/v0.31.0/api/structures/thumbar-button/
    - /docs/v0.32.0/api/structures/thumbar-button/
    - /docs/v0.33.0/api/structures/thumbar-button/
    - /docs/v0.34.0/api/structures/thumbar-button/
    - /docs/v0.35.0/api/structures/thumbar-button/
    - /docs/v0.36.0/api/structures/thumbar-button/
    - /docs/v0.36.3/api/structures/thumbar-button/
    - /docs/v0.36.4/api/structures/thumbar-button/
    - /docs/v0.36.5/api/structures/thumbar-button/
    - /docs/v0.36.6/api/structures/thumbar-button/
    - /docs/v0.36.7/api/structures/thumbar-button/
    - /docs/v0.36.8/api/structures/thumbar-button/
    - /docs/v0.36.9/api/structures/thumbar-button/
    - /docs/v0.36.10/api/structures/thumbar-button/
    - /docs/v0.36.11/api/structures/thumbar-button/
    - /docs/v0.37.0/api/structures/thumbar-button/
    - /docs/v0.37.1/api/structures/thumbar-button/
    - /docs/v0.37.2/api/structures/thumbar-button/
    - /docs/v0.37.3/api/structures/thumbar-button/
    - /docs/v0.37.4/api/structures/thumbar-button/
    - /docs/v0.37.5/api/structures/thumbar-button/
    - /docs/v0.37.6/api/structures/thumbar-button/
    - /docs/v0.37.7/api/structures/thumbar-button/
    - /docs/v0.37.8/api/structures/thumbar-button/
    - /docs/latest/api/structures/thumbar-button/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/thumbar-button.md'
title: "ThumbarButton Object"
sort_title: "thumbarbutton object"
---

# ThumbarButton Object

* `icon` [NativeImage](http://electron.atom.io/docs/native-image) - The icon showing in thumbnail
  toolbar.
* `click` Function
* `tooltip` String (optional) - The text of the button's tooltip.
* `flags` String[] (optional) - Control specific states and behaviors of the
  button. By default, it is `['enabled']`.

The `flags` is an array that can include following `String`s:

* `enabled` - The button is active and available to the user.
* `disabled` - The button is disabled. It is present, but has a visual state
  indicating it will not respond to user action.
* `dismissonclick` - When the button is clicked, the thumbnail window closes
  immediately.
* `nobackground` - Do not draw a button border, use only the image.
* `hidden` - The button is not shown to the user.
* `noninteractive` - The button is enabled but not interactive; no pressed
  button state is drawn. This value is intended for instances where the button
  is used in a notification.
