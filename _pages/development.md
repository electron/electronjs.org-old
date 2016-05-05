---
title: Electron Development
permalink: /docs/development/
layout: docs
category: ignore
---

<h2 class="docs-heading pb-3 mb-3"><span class="mega-octicon octicon-tools pr-3"></span>Developing Electron</a></h2>

<ul class="docs-list">
{% for doc in site.docs %}
  {% if doc.category == 'Development' %}
    <li>
      <a href="{{ site.baseurl }}{{ doc.url}}">{{ doc.title }}</a>
      <!-- <span class="excerpt">{{ doc.content | strip_html | truncatewords: 50 }}</span> -->
    </li>
  {% endif %}
{% endfor %}
</ul>
