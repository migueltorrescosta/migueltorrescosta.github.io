---
layout: default
title: Blog
sidebar: true
head: true
---

# Posts preview

{% include archive.html %}

# Quote selection

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