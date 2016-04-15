---
layout: page
title: Electron Blog
permalink: blog/
---

<section class='blog-header'>
  <div class='container'>
    <div class='row'>
      <div class='ten columns offset-by-one'>
        <h1><img class="electron-icon" src='{{ site.baseurl }}/images/electron-icon.svg'>Electron Blog</h1>
      </div>
    </div>
  </div>
</section>

<section class='blog blog-index'>
  <div class='container'>
    <div class='row'>
      <div class='ten columns offset-by-one'>
        <ul class="blog-index-list">
          {% for post in site.posts %}
            <li>
              <h2>
                <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a>
                <time>{{ post.date | date: '%B %d, %Y' }}</time>
              </h2>
              <p>{{ post.excerpt}}</p>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
