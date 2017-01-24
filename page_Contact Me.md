---
layout: page
title: Contact
permalink: /contact/
comments: false
published: false
---

<form action="https://formspree.io/{{site.author.email}}"
      method="POST">
     <br>Subject <br>
     <input type="text" name="_subject">
     <br> Message <br>
     <textarea name="message" rows="10" cols="25">
     </textarea>
     <br> Your Name <br>
     <input type="text" name="name">
     <br> Email <br>
     <input type="email" name="_replyto">
     <br>
     <input type="submit" value="Send">
     <input type="hidden" name="_next" value="{{site.baseurl}}/thanks" />
     <input type="text" name="_gotcha" style="display:none" />
</form>