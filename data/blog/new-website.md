---
title: 'A New Website'
author: zeke
date: '2017-11-13'
---

Electron has a new website and a new domain: [electronjs.org]. If you're a 
regular visitor to the site, you may not notice many differences, but under
the surface we've made some big changes: The static Jekyll site has been 
replaced with a Node.js server; The site is now internationalized and we've 
built a pipeline to enable crowdsourced translation of the Electron 
documentation into any language; We've also made a few cosmetic improvements 
too, like categories and standalone pages for the Electron apps in our registry.

## The New Domain

We've moved from [electron.atom.io] to [electronjs.org].

The Electron project was born inside [Atom], GitHub's open-source text editor 
built on web technologies. Electron was originally called `atom-shell` and Atom 
was the first app to use it, but it didn't take long for folks to realize that 
this magical Chromium + Node runtime could be used for all kinds of different 
applications. When companies like Microsoft and Slack started to make use of
`atom-shell`, it became clear that the project needed a new name.

And so "Electron" was born. In early 2016, GitHub assembled a new team to focus
specifically on Electron development and maintenance, apart from Atom. In the 
time since, Electron has been adopted by thousands of app developers, and is now
depenended on by many large companies. Supporting GitHub's Electron projects 
like Atom and [Desktop] is still a priority for our team, but by moving to a new
domain we hope to help clarify the technical distinction between Atom and 
Electron.

## 🌍 Translations

Traduções! 翻译!  Bản dịch!  Übersetzungen!

The 
automated flow in and out of Crowdin means docs in any language!

To the 100+ people who have already helped translate Electron's 
docs, thank you!


Though we've hardly mentioned our work in progress to the public, nearly 50 open source community members have already discovered the project organically and joined in the translation effort. We are seeing daily contributions from people all over the world, with translations from languages like French, Vietnamese, Indonesian, and Chinese leading the way.


## 📖 Updated Documentation

always fresh from the master branch.

## 💻 Apps

now categorized and each app has its own URL.

https://electronjs.org/apps?q=graphql





## 🔧 Consistent Tooling


jekyll is approachable... but.
goodbye ruby; node is everywhere.

Every PR has an ephemeral app!

```sh
git clone https://github.com/electron/electronjs.org
cd electronjs.org
npm install
npm run dev
```
## 🛰 Dynamism

Running a webserver gives us dynamic routes, forms that users can fill out, etc.

## 🤖 Automated Deployment

greenkeeper and semantic-release ftw

[electronjs.org]: https://electronjs.org
[Atom]: https://atom.io
[Destop]: https://desktop.github.com