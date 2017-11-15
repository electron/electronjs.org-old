---
title: "Electron's New Internationalized Website"
author: zeke
date: '2017-11-13'
---

Electron has a new website at [electronjs.org]!  We've replaced 
our static Jekyll site with a Node.js webserver, giving us more flexibility to
internationalize the site and paving the way for us to build more exciting 
new features.

## 🌍 Translations

We've begun the process of internationalizing the Electron website, with the 
goal of making Electron app development accessible to a global audience of 
developers. We're using a localization platform called [Crowdin] that integrates 
with  GitHub, opening pull requests automatically as content is translated into 
different languages.

Though we've been working quietly on this effort so far, 
over 75 Electron community members have already discovered the project 
organically and joined in the effort to internationalize the website and 
translate Electron's docs into over 20 languages. We are seeing [daily 
contributions](https://github.com/electron/electron-i18n/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aglotbot%20) from people all over the world, with translations for 
languages like French, Vietnamese, Indonesian, and Chinese leading the way.

<figure>
  <a href="https://electronjs.org/languages">
    <img src="https://user-images.githubusercontent.com/2289/32803530-a35ff774-c938-11e7-9b98-5c0cfb679d84.png" alt="Electron Nav in Simplified Chinese">
    <figcaption>Electron's Nav in Simplified Chinese</figcaption>
  </a>
</figure>

<figure>
  <a href="https://crowdin.com/project/electron">
    <img class="screenshot"  src="https://user-images.githubusercontent.com/2289/32754734-e8e43c04-c886-11e7-9f34-f2da2bb4357b.png" alt="Current target languages on Crowdin">
    <figcaption>Translation in progress on Crowdin</figcaption>
  </a>
</figure>

<figure>
  <a href="https://crowdin.com/project/electron">
    <img class="screenshot" src="https://user-images.githubusercontent.com/2289/32755713-7040641c-c88b-11e7-88e0-c99360a2f166.png" alt="Crowdin's Translation UI">
    <figcaption>Crowdin's Translation UI</figcaption>
  </a>
</figure>

<figure>
  <img class="screenshot"  src="https://user-images.githubusercontent.com/2289/32755352-b0a35372-c889-11e7-9b24-ad31a2492ff3.png" alt="Tracking Translation Progress">
  <figcaption>Tracking Translation Progress</figcaption>
</figure>

If you're multilingual and interested in helping translate Electron's docs
and website, visit the [electron/electron-i18n] repo, or jump right into 
translating at.

There are currently 21 languages enabled for the Electron project on Crowdin, 
and adding support for more languages is easy. If you're interested in 
helping translate but you don't see your language on the list, 
[let us know](https://github.com/electron/electron.atom.io/issues/new) and
we'll enable it.

## App Pages

We've begun collecting metadata like Releases and READMEs for apps in our 
registry that have public GitHub repositories. Having this data means we're 
able to display things like download links, release notes, and more right on
the site.

Every Electron app in our registry now has a unique URL:

<figure>
  <a href="https://electronjs.org/apps/github-desktop">
    <img src="https://user-images.githubusercontent.com/2289/32755954-8e908df6-c88c-11e7-9327-9504b8527ae0.png" alt="Every app has its own URL">
    <figcaption>A page for every Electron app</figcaption>
  </a>
</figure>

The [apps index](https://electronjs.org/apps) has also gotten a few updates 
such as categories that make it a bit easier to find interesting apps 
like [GraphQL GUIs](https://electronjs.org/apps?q=graphql)
or [p2p tools](https://electronjs.org/apps?q=graphql).

## Quick App Installs with Homebrew

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