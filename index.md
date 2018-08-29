---
layout: default
title: Blog
sidebar: true
head: true
---

<div class="posts">

  <div style="text-align:center">
    <i>It ain't what you don't know that gets you in trouble. It's what you know for sure that just ain't so.</i>
    <br>
    <b>Mark Twain</b>

  </div>

  {% for post in site.posts %}

  <br>
  <br>

  <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
  <span class="post-date" display="inline">{{ post.date | date_to_string }}</span>
  {{ post.excerpt }}
  <div style="text-align: right">
    <b>Read the <a href="{{ site.baseurl }}{{ post.url }}">full text</a> ({% assign words = post.content | number_of_words %}
    {% if words < 180 %}
      1 min
    {% else %}
      {{ words | divided_by:110 }} mins
    {% endif %} ) or see more posts related to:</b>
    <br>
    {% for tag in post.categories %}
      [<a href="{{ site.baseurl }}{% link page_Tags.md %}#{{ tag | downcase | replace: ' ','-'}}">{{ tag }}</a>]
    {% endfor %}
  </div>

  <br>
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