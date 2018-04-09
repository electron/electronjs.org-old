---
title: Website Hiccups
author: zeke
date: '2018-02-12'
---

Last week the [electronjs.org](https://electronjs.org) site had a few minutes
of downtime. If you were affected by these brief outages, we're sorry
for the inconvenience. After a bit of investigation today, we've diagnosed
the root cause and have deployed a [fix](https://github.com/electron/electronjs.org/pull/1076).

---

To prevent this kind of downtime in the future, we've enabled 
[Heroku threshold alerts](https://devcenter.heroku.com/articles/metrics#threshold-alerting)
on our app. Any time our web server accumulates failed requests or slow responses beyond a certain threshold, our team will be notified so we can 
address the problem quickly.

## Offline Docs in Every Language

The next time you're developing an Electron app on a plane or in a subterranean
coffee shop, you might want to have a copy of the docs for offline reference. 
Fortunately, Electron's docs are available as Markdown files in over 20 
languages.

```sh
git clone https://github.com/electron/electron-i18n
ls electron-i18n/content
```

## Offline Docs with a GUI

[devdocs.io/electron](https://devdocs.io/electron/) is a handy website that
stores docs for offline use, not just for Electron but many other projects like
JavaScript, TypeScript, Node.js, React, Angular, and many others. And of course 
there's an Electron app for that, too. 
Check out [devdocs-app](https://electronjs.org/apps/devdocs-app) 
on the Electron site.

[![](https://user-images.githubusercontent.com/8784712/27121730-11676ba8-511b-11e7-8c01-00444ee8501a.png)](https://electronjs.org/apps/devdocs-app)

If you like to install apps without using your mouse or trackpad, give 
[Electron Forge](https://electronforge.io/)'s `install` command a try:

```sh
npx electron-forge install egoist/devdocs-app
```