---
permalink: /api/
redirect_from: /docs/api/
layout: docs
title: Electron API Reference
---

<ul>
{% for doc in site.docs %}
  {% if doc.category == 'API' %}
    <li>
      <a href="{{ doc.url}}">{{ doc.title }}</a>
      <!-- <span class="excerpt">{{ doc.content | strip_html | truncatewords: 50 }}</span> -->
    </li>
  {% endif %}
{% endfor %}
</ul>
