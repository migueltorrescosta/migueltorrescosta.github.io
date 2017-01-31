---
layout: page
title: All Posts
permalink: /all_posts/
published: true
---

<div id="contact-list" style="text-align: left" display="inline">  
  <a href="/atom.xml">
    Subscribe (RSS)
  </a>    
</div>

<p>

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