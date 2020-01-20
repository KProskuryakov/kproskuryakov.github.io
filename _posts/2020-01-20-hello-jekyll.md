---
layout: post
title: Hello, Jekyll!
excerpt: A dramatic retelling of my journey to utilize Jekyll's features to make maintaining my website a lot simpler.
categories: [code, jekyll]
---

## The Original Site

My personal website had quite a journey over the years. I hadn't really worked on it too often until now, though. I'd forget about it and then come back to it about once a year and mess around with it. I should definitely be grateful for it though. Its existence helped me get the job that I have now.

The very original version was built on [Node.js](https://nodejs.org/en/) and used [Pug (Jade)](https://pugjs.org/) templates with a [PostgreSQL](https://www.postgresql.org/) database for a very basic login system. There really wasn't anything on there until I converted the [Laser Puzzle]({% link pages/lasergame.md %}) from [LÖVE](https://love2d.org/) to javascript and then tried to integrate it with the login system and level history. I got the game to work and hosted the thing on [Heroku](https://www.heroku.com/) using their free tier. I didn't even own the domain name at the time, opting to use a subdomain of heroku.

Sometime around then I heard about [Visual Studio Code](https://code.visualstudio.com/) and really got absorbed into learning [Typescript](https://www.typescriptlang.org/), so I ended up rewriting the Laser Puzzle again. I picked up [Webpack](https://webpack.js.org/) to do it and now have a pretty solid Typescript workflow. The benefits of a type system and a compiler just seem to outweigh everything else for me. Makes sense given how Java was my first language. It's also why I have trouble working with Python. Just like Javascript, Python is perfectly fine for small scripts. I haven't yet found [Python3's Typing](https://docs.python.org/3/library/typing.html) module to have good enough integration with VSCode for it to be comfortable to work with in a larger project.

When applying to my current position, I was tasked with making a chrome extension with a few features. The task was on the easy side for me so I used what I had and hooked it up to my server, adding an endpoint to send data to and little page to show the data. They seemed rather impressed and I got the job. Going above and beyond worked in my favor but results may vary.

## Github Pages

At some point I realized that I didn't need a backend server. Heroku's free tier (at the time, not sure if it still does this) would take about 5-10 seconds to spin up your server if it hadn't had a request in 30 minutes. It was just enough time for me to explain why it wouldn't load when I would try to show it to people. I also didn't want to manage my own account system. It was a nice excerice to have made one in the first place but I didn't want to open my website and 'users' data to being hacked because I was sure my naive implementation would easily crumble if someone wanted to break it. Whenever I brought up someone making an account on my site, they would frown and shake their head.

I'd seen sites hosted using [Github Pages](https://pages.github.com/) before and decided to try it out for myself. After converting a few of the server-side features to client-side only features, I made the plunge by hosting the straight html, css and js bundles in the repository. I didn't know what [Jekyll](https://jekyllrb.com/) was or that Github Pages used it at the time. I didn't really have much content to utilize it either. Blogging or whatever never even came to mind.

My job really picked up around this time so once I had something workable up, I didn't find myself wanting to work on it anymore. I didn't do much programming outside of work in general because I felt I was picking up enough new things at work and was exhausted when I would come home.

## Jekyll

It was only a couple weekends ago that I really took a hard look at my site. A fairly random [video about a neumorphism](https://youtu.be/KlSLdEB3lzg) spurred me on to do a quick css update. I was already using [css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) at a basic level and decided to recolor it to be more of a dark theme rather than my ugly old burgandy to black gradient. It also spurred me to take a hard look at what my site was at the moment. Even with the recolor, it wasn't going to do me any favors.

At some point over the several years since the last update I'd found out about Jekyll's existence and the part it played in Github Pages. Having never worked with Ruby before, I was suddenly thrust into an installation process that was foreign to me. As most of the actual Ruby code is abstracted away behind the configurations, my only concern was now having to juggle another few pieces of software on my computer to make everything run nicely. Having interfaced with similar things before, getting everything up and running (twice) was not terribly difficult. It was a short leap for me to associate [Ruby's Bundler](https://bundler.io/) with [Python's Pipenv](https://pipenv.kennethreitz.org/en/latest/) and [Node's node_modules](https://docs.npmjs.com/files/folders.html).

I found the documentation for both Jekyll and Github Pages to be a little sparse. I wasn't looking to use a pre-built theme because I already had a look that I was going for but I had to look at how the existing themes were structured to convert my own work into the format that Jekyll would like. It took me some time to figure out the directory structure that Jekyll uses and which folders to gitignore. Check out [my repo](https://github.com/KProskuryakov/kproskuryakov.github.io) for how it all fits together.

I converted all of my previous pages into the markdown format. The [kramdown documentation](https://kramdown.gettalong.org/quickref.html) was rather handy here. I wish it was more convenient to make basic div tags with it though.

Another massively helpful page is [this one](https://pages.github.com/versions/) noting the versions of all of the Ruby libraries that GitHub Pages uses. It's a good idea to run down all of the plugins that are available right out of the box for use. Their library was also handy in setting up my very simple [Gemfile](https://github.com/KProskuryakov/kproskuryakov.github.io/blob/master/Gemfile) for local testing.

## Next Steps

I'm currently wrestling with some issues where it seems like my js bundles aren't being updated when I change things. Not sure if it has to do with jekyll and webpack fighting or something.

Next up is implementing a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers) for full offline functionality. A [PWA](https://developers.google.com/web/progressive-web-apps) seems to be like the right direction for me to go.