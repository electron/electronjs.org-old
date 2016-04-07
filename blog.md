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
      </h2>
      <p>{{ post.excerpt}}</p>
    </li>
  {% endfor %}
</ul>
