---
version: v1.6.2
permalink: /docs/api/structures/display/
category: API
source_url: >-
  https://github.com/electron/electron/blob/master/docs/api/structures/display.md
title: Display Object
excerpt: ''
sort_title: display
---
# Display Object

*   `id` Number - Unique identifier associated with the display.
*   `rotation` Number - Can be 0, 90, 180, 270, represents screen rotation in clock-wise degrees.
*   `scaleFactor` Number - Output device's pixel scale factor.
*   `touchSupport` String - Can be `available`, `unavailable`, `unknown`.
*   `bounds` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle)
*   `size` Object
    *   `height` Number
    *   `width` Number
*   `workArea` [Rectangle]({{site.baseurl}}/docs/api/structures/rectangle)
*   `workAreaSize` Object
    *   `height` Number
    *   `width` Number

The `Display` object represents a physical display connected to the system. A fake `Display` may exist on a headless system, or a `Display` may correspond to a remote, virtual display.
