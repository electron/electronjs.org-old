# Contributing to electronjs.org

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the Electron website
on GitHub. These are just guidelines, not rules, so use your best judgment and 
feel free to propose changes to this document in a pull request.

## Table of Contents

- [Issues and Pull Requests](#issues-and-pull-requests)
- [Heroku Review Apps](#heroku-review-apps)
- [Running the Site](#running-the-site)
- [Editing Content](#editing-content)
  - [Documentation](#documentation)
  - [Apps](#apps)
  - [Blog](#blog)
  - [Localized Strings](#localized-strings)
  - [Translations](#translations)
- [Routes](#routes)
- [Middleware](#middleware)
- [Views](#views)
- [Context](#context)
- [Styles](#styles)
- [Frontend JavaScript](#frontend-javascript)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)

## Issues and Pull Requests

* If you're not sure about adding something, [open an issue](https://github.com/electron/electronjs.org/issues/new) to discuss it.
* Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
* Include screenshots and animated gifs of your changes whenever possible.

## Heroku Review Apps

[Heroku Review Apps](https://devcenter.heroku.com/articles/github-integration-review-apps)
make it easier for reviewers to see the effects of a proposed change. Whenever 
a pull request is opened on the website repo, the branch is autodeployed 
to Heroku with a unique URL like `electron-website-pr-787.herokuapp.com`. 
You'll see a notification on GitHub after the branch has been deployed.
When pull request is closed or merged, the ephemeral app is destroyed.

![review app notification](https://user-images.githubusercontent.com/2289/31911130-8a0f91da-b7f4-11e7-9784-9ad609321c18.png)

## Running the Site

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electronjs.org
cd electronjs.org
npm install
npm run dev
```

You should now have an Express server running at 
[localhost:5000](http://localhost:5000) :tada:

Read on for more info about the structure of the site.

## Editing Content

The content on [electronjs.org] comes from a number of sources.

### Documentation

Electron's English API docs and tutorials live in the [electron/electron] repo 
in the `docs` directory. Contributions to the documentation should be made there: [electron/electron].

After being [translated](#translations) on Crowdin, all the docs are automatically
updated on the [electron/electron-i18n] repo and auto-published to npm as the
`electron-i18n` package. That package is in turn used by this website repo
as the source of all documentation. See [electron/electron-i18n#usage](https://github.com/electron/electron-i18n#usage) for an explanation of the
documentation data's structure.

### Apps

The website has a page at [electronjs.org/apps](https://electronjs.org/apps) that features applications built on Electron. If you want to add an app to the site, see the
[electron-apps](https://github.com/electron/electron-apps#adding-your-app) repo.

### Blog

Blog posts live in this repo, in [/data/blog](/data/blog).

Blogs are written in "Jekyll style", with YML frontmatter at the top for
metadata. The `title`, `author`, and `date` properties should be set
on all posts:

```
---
title: 'I am a blog post'
author: zeke
date: '2017-03-14'
---

A thing happened, and this is some intro content about it.

---

I am the rest of the post. Those three dashes above me designate
the cutoff point for the post summary that's displayed on the
/blog index page
```

A few guidelines to keep in mind when publishing a blog post:

* Posts should normally be published on Tuesday mornings (Pacific time) for maximum social reach.
* Make sure the date in the filename is today's date
* Tweet about it once the post is live!

### Localized Strings

The [/data/locale.yml](/data/locale.yml) file contains English strings that 
are used throughout the site. This file is synced with Crowdin as part of 
the [translation](#translations) pipeline. These strings are displayed on the 
site in the visitor's target language if available, with a 
[fallback to the English value](https://github.com/electron/electronjs.org/blob/ec9d8a55420d33a7a4145ae9c7b08da559de839d/lib/i18n.js#L10-L19) 
if no translation exists yet.

To use localized strings in views, use the `localized` object, which is generated
automatically by the [context middleware](#context):

```html
<p>{{{localized.web_technologies.description}}}</p>
```

Content for page titles and other metadata like Facebook OpenGraph and Twitter 
Cards meta tags is also defined in the [/data/locale.yml](/data/locale.yml) 
file, e.g. `pages['/apps'].title` and `pages['/apps'].description`. 
If a localized title and/or description are present for a given route, they 
will be added to the `<head>` of the rendered page automatically.

### Translations

Electron's API documentation, tutorials, and website content are translated
into other languages on a third-party site called Crowdin. Crowdin is a 
free and open tool, and  anyone is welcome to join in the translation process. 
You can create an account easily and quickly by logging in with your GitHub 
account.

See 
[electron/electron-i18n](https://github.com/electron/electron-i18n) for info 
on how to get started, or jump right into translating at 
[crowdin.com/project/electron](https://crowdin.com/project/electron).

#### Crowdin Proxy

To allow open source community members to develop electronjs.org and 
electron-i18n, we've added a feature to the Electron website that allows 
Crowdin API requests to be made without an API key. The following routes are 
supported:

Electron URL | Crowdin Docs
--- | ----
[GET /crowdin/status](https://electronjs.org/crowdin/status) | [status](https://support.crowdin.com/api/status)
[GET /crowdin/language-status](https://electronjs.org/crowdin/language-status) | [language-status](https://support.crowdin.com/api/language-status)
[GET /crowdin/info](https://electronjs.org/crowdin/info) | [info](https://support.crowdin.com/api/info)
[GET /crowdin/download-glossary](https://electronjs.org/crowdin/download-glossary) | [download-glossary](https://support.crowdin.com/api/download-glossary)
[GET /crowdin/export-file](https://electronjs.org/crowdin/export-file) | [export-file](https://support.crowdin.com/api/export-file)

#### Sharing Localized URLs

If you wish to share a URL linking to a translated page of the Electron website,
add a `lang` param to the URL. This will override the visitor's existing 
language preferences and display the given page in the specified language:

Example: 
[/docs/api/browser-window?lang=fr-FR](https://electronjs.org/docs/api/browser-window?lang=fr-FR)

## Routes

Website routes are defined in [server.js](server.js).

Here's an example of a basic route:

```js
app.get('/docs', routes.docs.index)
```

In the snippet above, `GET` requests to the `/docs` path on the site will be sent to the `routes.docs.index` function (called a _route
handler_) that accepts the incoming request and renders the docs index page.

Route handlers live in [/routes](/routes) and follow a Ruby-on-Rails-inspired naming convention:

```
routes
├── apps
│   ├── index.js
│   └── show.js
├── community.js
├── contact.js
├── docs
│   ├── category.js
│   ├── index.js
│   └── show.js
├── home.js
├── index.js
├── languages
│   └── index.js
├── releases.js
└── userland
    ├── index.js
    └── show.js
```

## Middleware

This site makes extensive use of Connect (Express) middleware. Some examples:

- Compile Sass to CSS
- Compile futuristic JavaScript to ES5
- Redirect old unsupported URLs
- Redirect to remove trailing slashes from URLs
- Prevent XSS attacks
- Parse `Accept-Language` header to choose site locale.

Some of the middleware exists as npm packages, and some is custom to our project.
See [/middleware](/middleware) for the custom stuff, and [server.js](server.js)
for the rest.

## Views

Views live in the [/views](/views) directory, and are written 
in [Handlebars](https://handlebarsjs.com).

Handlebars provides a very small set of 
[built-in helpers](http://handlebarsjs.com/builtin_helpers.html) like 
`if/else`, `unless`, `each`, `with`, and a few others for use in your templates.

We extend the default set of helpers using [lobars](http://ghub.io/lobars),
a package that exports lodash functions as Handlebars helpers.

The [`express-hbs`](http://ghub.io/express-hbs) module adds support for things 
like nested layouts and partials.

- Views live in `/views`
- Layouts wrap views, and can be nested. They live in `/views/layouts`
- Partials are reusable templates. They live in /views/partials`

## Context

Every [view](#views) can be passed a `context`, an object prepared by the 
server that contains data to be used in the Handlebars templates. We use a 
custom middleware to assemble a default context object with data that is 
common to every view. See [middleware/context-builder.js](middleware/context-builder.js).

The context builder middleware is executed before the views, so every route
handler has a `req.context` object that can be modified if needed. 

Here's an example of a route handler that doesn't change anything:

```js
module.exports = (req, res) => {
  res.render('somepage', req.context)
}
```

Here's an example where the handlers makes some changes to
the context object:

```js
module.exports = (req, res) => {  
  const context = Object.assign(req.context, {
    custom: 'stuff'
  })

  res.render('somepage', context)
}
```

## Styles

Stylesheets are written in Sass SCSS format, and they all live in the `/styles`
directory. The server doesn't write any compiled CSS to disk: A GET request
to `/styles/index.css` compiles and serves up the `/styles/index.scss` file
automatically.

The styles are based on [Primer](https://github.com/primer/primer-css), the CSS toolkit that powers GitHub's front-end design.  It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely GitHubby. It's built with SCSS and available via NPM.

## Frontend JavaScript

Frontend code lives in the [/scripts](/scripts) directory, (not to be confused 
with  [/script](#scripts)). The [/scripts/index.js](/scripts/index.js) file 
requires and bundles all the other files in the directory using Babel and 
Browserify. This means you can write any kind of futuristic JavaScript you want, 
and also use node-style require statements to bring in any 
(browserify-compatible/bundleable) dependencies.

Most of the individual files export a module that expects to have access to
the DOM, so they should be executed in a `DOMContentLoaded` event handler:

```js
document.addEventListener('DOMContentLoaded', () => {
  require('./create-filter-list')()
  require('./fix-platform-labels')()
  require('./update-demo-app-download-link')()
  require('./update-app-download-links')()
  require('./apply-active-class-to-active-links')()
  require('./remove-scheme-from-link-text')()
  require('browser-date-formatter')()
})
```

Like the [Sass middleware](#styles), no compiled JavaScript code is written to 
disk. When a GET request is made to `/scripts/index.js`, the server dynamically 
compiles the `scripts/index.js` file to browser-compatible ES5.

## Scripts

This repo follows the [Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all)
methodology popularized by GitHub. The idea is that every project, regardless 
of the programming languages used within it, should have a `/script` directory
containing all the necessary executable files required to set up and use
the project, like `/script/bootstrap` and `/script/start`

In keeping with Node.js and npm conventions, all the scripts in this project are 
also defined in the `scripts` stanza in the [`package.json`](package.json) 
file. To list all available commands, type `npm run`.

## Environment Variables

- `NODE_ENV` is set to `production` on the server. This has a number of effects:
  - Express caches routes in memory
  - Sass middleware serves minified CSS and caches it
  - Browserify middleware serves minified JavaScript and caches it

[electronjs.org]: https://electronjs.org
[electron/electron]: https://github.com/electron/electron
[electron/electron-i18n]: https://github.com/electron/electron-i18n

## Need Help?

If any of this information confusing, incorrect, or incomplete, feel free to 
[open an issue](https://github.com/electron/electronjs.org/issues/new)
for help.
