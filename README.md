# kproskuryakov.github.io
An aggregation of interesting sites and random content hosted on kostyapro.com

## Managing the project
It's been a little while since I've done javascript/typescript related things. Probably should document how to have this stuff updated.

I ran several things to bring dependencies up to date. Had to install fresh nodejs.

```
npm install -d
npm audit fix
npm update --save

npm start
```

## Jekyll
Github pages looks like it uses jekyll as part of the build process for the static sites. I'm guessing that if it doesn't find anything that needs jekyll, it doesn't even run it.

This quick guide to install it: https://jekyllrb.com/docs/installation/ubuntu/

```
bundle install
bundle update


bundle exec jekyll serve
```