---
title: Releases
permalink: /releases/
redirect_from: /releases.html
layout: releases
---

{% for release in site.data.releases %}

### [{{ release.version }}]({{ release.html_url }}) _{{ release.created_at | date: '%B %d, %Y' }}_

{{ release.body }}

<hr>

{% endfor releases %}
