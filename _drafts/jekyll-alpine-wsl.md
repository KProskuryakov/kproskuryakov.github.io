---
layout: post
title: Jekyll on Alpine WSL
excerpt: A quick guide to set up a development environment like mine on windows using WSL.
categories: [code, jekyll]
tags: jekyll alpine wsl wsl2 windows subsystem linux apk ruby vscode visual studio code
---

## Jekyll with Alpine WSL2 and Visual Studio Code

I've been bouncing randomly between development environments to figure out what
I actually like the most and find the easiest to work with. For all I know, I'll
jump to a new one again soon but before I do that I'll drop a little guide to
set up a development environment like mine.

Why Windows and WSL? Honestly, the convenience. I'm tired of dual-booting and
partitioning my hard drives. I'll keep Windows on my desktop regardless because
of the sheer selection of games available. With WSL, I have a familiar linux-based
coding environment.


`"terminal.integrated.shellArgs.linux": ["-l"]`


ruby-full alpine-sdk zlib-dev