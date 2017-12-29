---
layout: default
title: Blog
sidebar: true
head: true
---

<div class="posts">

  <div style="text-align:center">If you want to be updated about new posts there is a newsletter you can subscribe to. Or just check back here often.</div>
  <br>
  {% include subscribe.html %}

  {% for post in site.posts %}

    <br>
    <br>

    <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
    <span class="post-date" display="inline">{{ post.date | date_to_string }}</span>
    {{ post.excerpt }}
    <div style="text-align: right">
      <b>Read the <a href="{{ site.baseurl }}{{ post.url }}">full text</a> ({% assign words = post.content | number_of_words %}
      {% if words < 360 %}
        1 min
      {% else %}
        {{ words | divided_by:220 }} mins
      {% endif %} ) or see more posts related to:</b>
      <br>
      {% for tag in post.categories %}
        [<a href="{{ site.baseurl }}{% link page_Tags.md %}#{{ tag | downcase | replace: ' ','-'}}">{{ tag }}</a>]
      {% endfor %}
    </div>

    <br>
    <br>

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