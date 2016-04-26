---
permalink: /development/
redirect_from: /docs/development/
layout: docs
title: Electron Development
category: ignore
---

## Developing Electron

<ul>
{% for doc in site.docs %}
  {% if doc.category == 'Development' %}
    <li>
      <a href="{{ site.baseurl }}{{ doc.url}}">{{ doc.title }}</a>
      <!-- <span class="excerpt">{{ doc.content | strip_html | truncatewords: 50 }}</span> -->
    </li>
  {% endif %}
{% endfor %}
</ul>
