---
title: Electron API Reference
permalink: /api/
redirect_from: /docs/api/
layout: docs
category: ignore
---

## API Reference

<ul>
{% for doc in site.docs %}
  {% if doc.category == 'API' %}
    <li>
      <a href="{{ site.baseurl }}{{ doc.url }}">{{ doc.title }}</a>
      <!-- <span class="excerpt">{{ doc.content | strip_html | truncatewords: 50 }}</span> -->
    </li>
  {% endif %}
{% endfor %}
</ul>
