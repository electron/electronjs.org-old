---
title: Electron API Reference
permalink: /docs/api/
layout: docs
category: ignore
breadcrumb: API
---

<table class="table table-ruled table-full-width table-with-spacious-first-column">

{% for doc in site.docs %}
  {% if doc.category == 'API' %}
    <tr>
      <td><a href="{{ site.baseurl }}{{ doc.url }}">{{ doc.title }}</a></td>
      <td>{{ doc.excerpt }}</td>
    </tr>
  {% endif %}
{% endfor %}
</table>
