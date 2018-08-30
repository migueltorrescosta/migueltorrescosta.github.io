---
layout: page
title: Tags
permalink: /tags/
head: false
---

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
## {{category[0] | capitalize}}
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