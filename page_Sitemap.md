---
layout: page
title: Sitemap
permalink: /sitemap/
sidebar: true
head: true
---

- [Blog]({{site.baseurl}}{% link index.md %})
- Posts organised by [Tags]({{site.baseurl}}{% link page_Tags.md %})
- [Author]({{site.baseurl}}{% link page_Author.md %})
- [RSS Feed](/atom.xml)
- [Wishlist]({{site.baseurl}}{% link page_Wishlist.md %})


<h1> For Prospective Employees </h1>

- [CV]({{site.baseurl}}{% link CV.pdf %})
- [Software]({{site.baseurl}}{% link page_Software.md %}) I've played with
- Generic [Cover Letter]({{site.baseurl}}{% link CoverLetter.pdf %})
- [University Tutor](http://porto.universitytutor.com/tutors/944174) page.


<h1> All Posts </h1>

{% for post in site.posts %}   
- {{ post.date | date_to_string }} >> [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) {% endfor %}


<h1> Online Profiles </h1>

- [GitHub](https://github.com/{{ site.author.github}})
- [LinkedIn](https://linkedin.com/in/{{ site.author.linkedin}})
- [Email](mailto:{{ site.author.email}})
- [GoodReads](https://www.goodreads.com/{{ site.author.goodreads }})
- [StackOverflow](http://stackoverflow.com/users/{{ site.author.stackoverflow}})
- [Reddit](https://www.reddit.com/user/{{ site.author.reddit}})
- [Steam](http://steamcommunity.com/id/{{ site.author.steam}})