---
layout: page
title: Posts
excerpt: Ordered by date and questionably categorized.
permalink: /posts
---

<div>

## All by Date

<ul>
{% for post in site.posts %}
<li>
{{ post.date | date: "%Y %b %d"}} - <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
</div>
