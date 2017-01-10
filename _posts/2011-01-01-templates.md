---
layout: post
title: Templates
---


<div class="message">
  The only reason I keep this page is to have samples of things I might want to add to the website.
</div>

> For example this cool bit of text for quotations

{% highlight js %}
// Or showing off code snippets as a pro

// E.g. Awesome addition function. (Not really, this a very dumb function to write. It will do as an example)
var Fib = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8

// Magic
{% endhighlight %}

## Inline HTML elements

It's always good to know the basics of HTML. Valid in markdown too.

- **To bold text**, use `<strong>`.
- *To italicize text*, use `<em>`.
- Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use `<abbr>`, with an optional `title` attribute for the full phrase.
- Citations, like <cite>&mdash; Miguel Costa</cite>, should use `<cite>`.
- <del>Deleted</del> text should use `<del>` and <ins>inserted</ins> text should use `<ins>`.
- Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`.



Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.

## Lists

* Trivial
* List

1. Numbered
2. List
3. Cool trick. They just put "number + dot + space + text" so that it looks like a list xD


<dl>
  <dt>HyperText Markup Language (HTML)</dt>
  <dd>The language used to describe and define the content of a Web page</dd>

  <dt>Cascading Style Sheets (CSS)</dt>
  <dd>Used to describe the appearance of Web content</dd>

  <dt>JavaScript (JS)</dt>
  <dd>The programming language used to build advanced Web sites and applications</dd>

  <dt>My comment</dt>
  <dd>I have no idea why they added this bit of text, but I might as well keep the template</dd>
</dl>

## Tables

<table>
  <thead>
    <tr>
      <th>The</th>
      <th>Amazing</th>
      <th>Header</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>An</td>
      <td>Incredible</td>
      <td>Footer</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>The</td>
      <td>not</td>
      <td>so</td>
    </tr>
    <tr>
      <td>great</td>
      <td>but</td>
      <td>irreplaceable</td>
    </tr>
    <tr>
      <td>middle</td>
      <td>text</td>
      <td>END</td>
    </tr>
  </tbody>
</table>

Want to see something else added? <a href="https://github.com/poole/poole/issues/new">Open an issue.</a>
