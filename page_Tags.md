---
layout: page
title: Tags
permalink: /tags/
head: false
---

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
{% assign category_title = category[0] | capitalize %}

<details><summary>{{category_title}}</summary>
  <ul>
    {% for post in sorted_posts %}
    <li>
      <span class="post-date" display="inline">({{ post.date | date_to_string }}) </span>
      <a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{  post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</details>
{% endfor %}