---
layout: page
title: Archives
permalink: /archives/
published: false
---

{% for post in site.posts %}
  {{ post.date | date_to_string }} — <a href="{{ site.baseurl }}{{ post.url }}"> {{ post.title }}  </a>
{% endfor %}
