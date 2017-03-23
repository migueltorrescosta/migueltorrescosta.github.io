---
layout: default
title: Categories
permalink: /categories/
---

* language
{:toc}


{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
<h2 id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}</h2>
<ul>
  {% for post in sorted_posts %}
  <li>
    <span class="post-date" display="inline">{{ post.date | date_to_string }}</span>
      -
    <span class="post-date" display="inline">
      {% assign words = post.content | number_of_words %}
        {% if words < 360 %}
          1 min
        {% else %}
          {{ words | divided_by:220 }} mins
        {% endif %}
    </span>
    <a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{  post.title }}</a>

  </li>
  {% endfor %}
</ul>
{% endfor %}