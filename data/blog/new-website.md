---
title: "Electron's New Internationalized Website"
author: zeke
date: '2017-11-13'
---

Electron has a new website and a new domain: [electronjs.org].  We've replaced 
the static Jekyll website with a new Node.js server. The new site is 
internationalized, allowing for the docs to be translated into multiple languages
and paving the way for a global audience of developers to start learning 
Electron and developing new apps. 

With this change we've also rolled out some improvements to the apps pages.

The new site also features some improvements
to the app gallery.

The static 
Jekyll site has been replaced with a Node.js server; The site is now 
internationalized and we've built a pipeline to enable crowdsourced translation 
of the docs into any language; We've also made a few cosmetic improvements 
too, like categories and colorful standalone pages for Electron apps.

## 🌍 Translations

Traduções! 翻译! Bản dịch! 翻訳! Übersetzungen!

The new website is internationalized, making Electron app development accessible 
to a global audience of developers. We're using a platform called [Crowdin] 
that integrates with GitHub, opening pull requests automatically as content
is translated into various languages.

Crowdin has some impressive capabilities like machine translation using Google, 
Microsoft, or Yandex. Translation Memories, voting, etc.

<figure>
  <a href="/languages">
    <img src="https://user-images.githubusercontent.com/2289/32803530-a35ff774-c938-11e7-9b98-5c0cfb679d84.png" alt="Electron Nav in Simplified Chinese">
    <figcaption>Electron Nav in Simplified Chinese</figcaption>
  </a>
</figure>

<figure>
  <a href="https://crowdin.com/project/electron">
    <img src="https://user-images.githubusercontent.com/2289/32754734-e8e43c04-c886-11e7-9f34-f2da2bb4357b.png" alt="Current target languages on Crowdin">
    <figcaption>Current target languages on Crowdin</figcaption>
  </a>
</figure>

There are currently 21 languages enabled for the Electron project on Crowdin, 
and adding support for more languages is trivial. If you are interested in 
helping translate but you don't see your language on the list, 
[let us know](https://github.com/electron/electron.atom.io/issues/new) and
we'll enable it.

<figure>
  <img src="https://user-images.githubusercontent.com/2289/32755713-7040641c-c88b-11e7-88e0-c99360a2f166.png" alt="Crowdin's Translation UI">
  <figcaption>Crowdin's Translation UI</figcaption>
</figure>

Though we've hardly mentioned this new localized setup to the public, 
nearly 50 open-source community members have already discovered the project 
organically and joined in the translation effort. We are seeing daily 
contributions from people all over the world, with translations from 
languages like French, Vietnamese, Indonesian, and Chinese leading the way.

<figure>
  <img src="https://user-images.githubusercontent.com/2289/32755352-b0a35372-c889-11e7-9b24-ad31a2492ff3.png" alt="Tracking Translation Progress">
  <figcaption>Tracking Translation Progress</figcaption>
</figure>

If you're multilingual and interested in helping translate Electron's docs
and website, visit the [electron/electron-i18n] repo, or jump right into 
translating at.

## App Pages

For Electron apps that have public GitHub repositories, we've begun collecting
metadata like releases and readmes.

The [Homebrew] package manager for macOS has a subcommand called [cask]
that makes it easy to install desktop apps using a single command in your
terminal, like `brew cask install atom`.

We've begun collecting Homebrew cask names for popular Electron apps and are now
displaying the installation command (for macOS visitors) on every app page 
that has a cask:

<figure>
  <a href="https://electronjs.org/apps/dat">
   <img src="https://user-images.githubusercontent.com/2289/32817881-100e9f74-c975-11e7-805b-2548ba686940.png">
   <figcaption>OS-specific installation options</figcaption>
  </a>
</figure>

To view all the apps that have cask names, visit 
[electronjs.org/apps?q=homebrew](https://electronjs.org/apps?q=homebrew)

If you've got an Electron app that you'd like featured on the site, open a 
pull request on the [electron/electron-apps] repository.

## 💻 Apps Directory

The apps listing has gotten a few updates that should make it a bit easier to
find interesting apps like [GraphQL GUIs](https://electronjs.org/apps?q=graphql)
or [p2p apps](https://electronjs.org/apps?q=graphql).

<figure>
  <img src="https://user-images.githubusercontent.com/2289/32755954-8e908df6-c88c-11e7-9327-9504b8527ae0.png" alt="Every app has its own URL">
  <figcaption>Every app has its own URL</figcaption>
</figure>

## 🌐 A New Domain

We've moved the site from electron.atom.io to a new domain: [electronjs.org].

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

## 🐢🚀 Node.js Everywhere

The previous Electron website was built with Jekyll, the popular Ruby-based 
static site generator. Jekyll is a great tool for building static websites, but 
the Electron website had started to outgrow its capabilities. We wanted more 
dynamic capabilities like proper redirects and locale-based content rendering., 
so a Node.js server was the obvious choice.

The new website is written entirely in JavaScript. It's a Node.js app with an
Express server running on Heroku.

## ⚡️ Easier to Contribute

The Electron ecosystem includes projects written in many different programming 
languages, from Python to C++ to Bash. But JavaScript is fundamental to 
Electron, and nearly every project we work on uses npm and Node.js.

By rewriting the website in Node.js, we hope to lower the barrier to entry 
for folks interested in participating.


```sh
git clone https://github.com/electron/electronjs.org
cd electronjs.org
npm install
npm run dev
```

The new website is hosted on Heroku. We use deployment pipelines and the
[Review Apps](https://devcenter.heroku.com/articles/github-integration-review-apps)
feature, which automatically creates a running copy of the app for every pull 
request. This makes it easy for reviewers to view the actual effects of a 
change on a live version of the site.

## 🤖 Automated Deployment

greenkeeper and semantic-release ftw

[Crowdin]: https://crowdin.com/project/electron
[crowdin.com/project/electron]: https://crowdin.com/project/electron
[electron/electron-apps]: https://github.com/electron/electron-apps
[electron/electron-i18n]: https://github.com/electron/electron-i18n#readme
[electronjs.org]: https://electronjs.org
[Atom]: https://atom.io
[Destop]: https://desktop.github.com
[Homebrew]: https://brew.sh
[cask]: https://caskroom.github.io