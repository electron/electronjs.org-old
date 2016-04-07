---
layout: page
title: Electron Blog
permalink: blog/
---

<ul>
  {% for post in site.posts %}
    <li>
      <h2>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <time>{{ post.date | date: '%B %d, %Y' }}</time>
      </h2>
      <p>{{ post.excerpt}}</p>
    </li>
  {% endfor %}
</ul>
