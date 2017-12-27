---
layout: default
title: Blog
sidebar: true
head: true
---

<div class="posts">
  {% for post in site.posts %} 
    <hr>  
    <h1>{{ post.title }}</h1>
    <span class="post-date" display="inline">{{ post.date | date_to_string }}</span>
    {{ post.excerpt }}
    <div>
      <b>See posts related to:</b>
      
      {% for tag in post.categories %}
        [<a href="{{ site.baseurl }}{% link page_Tags.md %}#{{ tag }}">{{ tag }}</a>]
      {% endfor %}
    </div> 
    <a href="{{ site.baseurl }}{{ post.url }}" style="float: right"> Read more... (
    {% assign words = post.content | number_of_words %}
      {% if words < 360 %}
        1 min
      {% else %}
        {{ words | divided_by:220 }} mins
      {% endif %} )
    </a>
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