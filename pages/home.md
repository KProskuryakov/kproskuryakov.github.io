---
layout: page
title: Kostyapro
excerpt: This is just a little spot for me to test out and showcase various projects or skills I'm working on.
permalink: /
---

<div>

## About

I like code, books, games and cats.

- [Technical Skills]({% link pages/skills.md %})
- [Site Readme]({% link README.md %})

</div>


<div>

## Posts

The 5 latest posts are shown here. Go to the [posts index]({% link pages/posts.md %}) for all posts.

Total Post Count: {{ site.posts | size }}

<ul>
{% for post in site.posts limit:5 %}
<li>
{{ post.date | date: "%Y %b %d"}} - <a href="{{ post.url }}">{{ post.title }}</a><br/><em>{{ post.excerpt }}</em>
</li>
{% endfor %}
</ul>
</div>


<div>

## Games
- [Laser Puzzle]({% link pages/lasergame.md %})
- [TSiege (In Progress)]({% link pages/tsiege.md %})

</div>


<div>

## Webgl
- [The first one]({% link pages/webgl.md %})

</div>
