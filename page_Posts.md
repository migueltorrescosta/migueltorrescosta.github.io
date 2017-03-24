---
layout: default
title: Posts
permalink: /posts/
published: true
---



<div class="posts">
  {% for post in site.posts %}    
    <h1>{{ post.title }}</h1>
    <span class="post-date" display="inline">{{ post.date | date_to_string }}</span>
    {{ post.excerpt }}
    <a href="{{ site.baseurl }}{{ post.url }}"> Read more... (
    {% assign words = post.content | number_of_words %}
      {% if words < 360 %}
        1 min
      {% else %}
        {{ words | divided_by:220 }} mins
      {% endif %} )
    </a>
    <hr>
  {% endfor %}
</div>

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