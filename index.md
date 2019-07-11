---
layout: default
title: Blog
sidebar: true
head: true
---

# Posts

{% include archive.html %}

# Quotes

{% include quotes.md %}

<!--
<div class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date_to_string }}</span>
      <a href="{{ site.baseurl }}{{ post.url }}">
          {{ post.title }}
      </a>
    </li>
  {% endfor %}
</div>
-->