---
layout: default
title: Blog
---

<div class="posts">

  {% assign sorted_cats = site.categories | sort %}
  {% for category in sorted_cats %}
  {% assign sorted_posts = category[1] | reversed %}
  {% assign category_title = category[0] | capitalize %}

  <h1 class="post-title">{{ category[0] }}</h1>
    <table>
      {% for post in sorted_posts %}
        {% assign words = post.content | number_of_words %}
        <tr>
          <th style="text-align:right;width:30%;">{{ post.date | date_to_string }}</th>
          <th>
            <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
            - 
            {% if words < 180 %}
              1 min
            {% else %}
              {{ words | divided_by:110 }} mins
            {% endif %}
          </th>
        </tr>
      {% endfor %}
    </table>
  {% endfor %}
    
</div>