---
version: v1.4.12
category: API
redirect_from:
    - /docs/v0.24.0/api/structures/jump-list-category/
    - /docs/v0.25.0/api/structures/jump-list-category/
    - /docs/v0.26.0/api/structures/jump-list-category/
    - /docs/v0.27.0/api/structures/jump-list-category/
    - /docs/v0.28.0/api/structures/jump-list-category/
    - /docs/v0.29.0/api/structures/jump-list-category/
    - /docs/v0.30.0/api/structures/jump-list-category/
    - /docs/v0.31.0/api/structures/jump-list-category/
    - /docs/v0.32.0/api/structures/jump-list-category/
    - /docs/v0.33.0/api/structures/jump-list-category/
    - /docs/v0.34.0/api/structures/jump-list-category/
    - /docs/v0.35.0/api/structures/jump-list-category/
    - /docs/v0.36.0/api/structures/jump-list-category/
    - /docs/v0.36.3/api/structures/jump-list-category/
    - /docs/v0.36.4/api/structures/jump-list-category/
    - /docs/v0.36.5/api/structures/jump-list-category/
    - /docs/v0.36.6/api/structures/jump-list-category/
    - /docs/v0.36.7/api/structures/jump-list-category/
    - /docs/v0.36.8/api/structures/jump-list-category/
    - /docs/v0.36.9/api/structures/jump-list-category/
    - /docs/v0.36.10/api/structures/jump-list-category/
    - /docs/v0.36.11/api/structures/jump-list-category/
    - /docs/v0.37.0/api/structures/jump-list-category/
    - /docs/v0.37.1/api/structures/jump-list-category/
    - /docs/v0.37.2/api/structures/jump-list-category/
    - /docs/v0.37.3/api/structures/jump-list-category/
    - /docs/v0.37.4/api/structures/jump-list-category/
    - /docs/v0.37.5/api/structures/jump-list-category/
    - /docs/v0.37.6/api/structures/jump-list-category/
    - /docs/v0.37.7/api/structures/jump-list-category/
    - /docs/v0.37.8/api/structures/jump-list-category/
    - /docs/latest/api/structures/jump-list-category/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/jump-list-category.md'
title: "JumpListCategory Object"
sort_title: "jumplistcategory object"
---

# JumpListCategory Object

* `type` String - One of the following:
  * `tasks` - Items in this category will be placed into the standard `Tasks`
    category. There can be only one such category, and it will always be
    displayed at the bottom of the Jump List.
  * `frequent` - Displays a list of files frequently opened by the app, the
    name of the category and its items are set by Windows.
  * `recent` - Displays a list of files recently opened by the app, the name
    of the category and its items are set by Windows. Items may be added to
    this category indirectly using `app.addRecentDocument(path)`.
  * `custom` - Displays tasks or file links, `name` must be set by the app.
* `name` String - (optional) Must be set if `type` is `custom`, otherwise it should be
  omitted.
* `items` JumpListItem[] - (optional) Array of [`JumpListItem`](http://electron.atom.io/docs/structures/jump-list-item) objects if `type` is `tasks` or
  `custom`, otherwise it should be omitted.

**Note:** If a `JumpListCategory` object has neither the `type` nor the `name`
property set then its `type` is assumed to be `tasks`. If the `name` property
is set but the `type` property is omitted then the `type` is assumed to be
`custom`.
