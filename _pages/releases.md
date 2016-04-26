---
title: Electron Releases
permalink: /releases/
redirect_from: /releases.html
layout: releases
---

{% for release in site.data.releases %}

### [{{ release.tag_name }}]({{ release.html_url }}) _{{ release.created_at | date: '%B %d, %Y' }}_

{{ release.body }}

<hr>

{% endfor releases %}
