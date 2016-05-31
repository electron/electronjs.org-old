---
title: Guides
permalink: /docs/guides/
redirect_from:
  - /tutorial/
  - /docs/tutorial/
layout: docs
category: ignore
breadcrumb: Guides
---

<h2 class="docs-heading pb-3 mb-3"><span class="mega-octicon octicon-book pr-3"></span>Guides</h2>

<ul class="docs-list">
{% assign docs = site.docs | sort: 'sort_title' %}
{% for doc in docs %}
  {% if doc.category == 'Tutorial' %}
    <li>
      <a href="{{ site.baseurl }}{{ doc.url }}">{{ doc.title }}</a>
      <!-- <span class="excerpt">{{ doc.content | strip_html | truncatewords: 50 }}</span> -->
    </li>
  {% endif %}
{% endfor %}
</ul>
