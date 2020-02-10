---
layout: page
title: Readme
excerpt: The readme for the site kostyapro.com
permalink: /readme
---

# kproskuryakov.github.io
An aggregation of interesting sites and random content hosted on kostyapro.com

## Environment Setup
My primary programming environment is a Windows computer with [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10). I use [Visual Studio Code](https://code.visualstudio.com/) with the [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) plugin.

Follow [this link](https://github.com/nodesource/distributions/blob/master/README.md) to get sorted with having Node.js installed on Ubuntu/WSL.

With Node.js installed, you can then run the following commands in the root of the project directory to set everything up.

```
npm install -d
npm audit fix
npm update --save
```

Follow [this guide](https://jekyllrb.com/docs/installation/ubuntu/) to install Jekyll on Ubuntu/WSL. Then run the following commands to set up the Jekyll side of this project.

```
bundle install
bundle update
```

Then simply `npm start` and it should be serving the actual site on a default port.

https://pages.github.com/versions/
