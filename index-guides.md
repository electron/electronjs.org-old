---
permalink: /guides/
redirect_from:
  - /docs/guides/
  - /tutorial/
  - /docs/tutorial/
layout: docs
title: Electron Guides
category: ignore
---

## Guides

<ul>
{% for doc in site.docs %}
  {% if doc.category == 'Development' or doc.category == 'Tutorial' %}
    <li>
      <a href="{{ site.baseurl }}{{ doc.url }}">{{ doc.title }}</a>
      <!-- <span class="excerpt">{{ doc.content | strip_html | truncatewords: 50 }}</span> -->
    </li>
  {% endif %}
{% endfor %}
</ul>
