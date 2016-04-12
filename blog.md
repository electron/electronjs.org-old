---
layout: page
title: Electron Blog
permalink: blog/
---

<section class='blog-header'>
  <div class='container'>
    <h1><img class="electron-icon" src='/images/electron-icon.svg'>Electron Blog</h1>
  </div>
</section>

<section class='blog blog-index'>
  <div class='container'>
    <ul class="blog-index-list">
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
  </div>
</section>
