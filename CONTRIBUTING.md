# Contributing to electron.atom.io

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the Electron website
on GitHub. These are just guidelines, not rules, so use your best judgment and 
feel free to propose changes to this document in a pull request.

## Issues & Pull Requests

* If you're not sure about adding something, [open an issue](https://github.com/electron/electron.atom.io/issues/new) to discuss it.
* Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
* Include screenshots and animated gifs of your changes whenever possible.

## Development

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electron.atom.io
cd electron.atom.io
npm install
npm run dev
```

You should now have an Express server running at 
[localhost:5000](http://localhost:5000) :tada:

Read on for more info about the structure of the site.

- [Content](#content)
  - [Documentation](#documentation)
  - [Apps](#apps)
  - [Blog](#blog)
  - [Translations](#translations)
- [Routes](#routes)
- [Middlware](#middleware)
- [Views](#views)
- [Context](#context)
- [Styles](#styles)
- [Fontend JavaScript](#frontend-javascript)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)

## Content

The content on [electronjs.org] comes from a number of sources.

### Documentation

Electron's English API docs and tutorials live in the [electron/electron] repo 
in the `docs` directory. Contributions to the documentation should be made there: [electron/electron].

After being [translated](#translations) on Crowdin, all the docs are automatically
updated on the [electron/electron-i18n] repo and auto-published to npm as the
`electron-i18n` package. That package is in turne used by this website repo
as the source of all documentation. See [electron/electron-i18n#usage](https://github.com/electron/electron-i18n#usage) for an explanation of the
documentation data's structure.

### Apps

Want to add your app to the site? There's a repo for that. 
See [electron/electron-apps](https://github.com/electron/electron-apps#adding-your-app).

### Blog

Blog posts live in this repo, in `/data/blog`.

Blogs are written in "Jekyll style", with YML frontmatter at the top for
metadata. The `title`, `author`, and `date` properties should be set
on all posts:

```
---
title: 'Project of the Week: WebTorrent'
author: zeke
date: '2017-03-14'
---
```

A few guidelines to keep in mind when publishing a blog post:

* Posts should normally be published on Tuesday mornings (Pacific time) for maximum social reach.
* Make sure the date in the filename is today's date
* Tweet about it once the post is live!

### Translations

Electron's API documentation, tutorials, and website content are translated
into other Languages on a third-party site called Crowdin. Crowdin is a 
free and open tool, and  anyone is welcome to join in the translation process. 
You can create an account easily and quickly by logging in with your GitHub 
account.

See 
[electron/electron-i18n](https://github.com/electron/electron-i18n) for info 
on how to get started, or jump right into translating at 
[crowdin.com/project/electron](https://crowdin.com/project/electron).

## Routes

Routes are defined in [server.js](server.js).

Route handlers live in [/routes](/routes) and follow a Ruby-on-Rails-inspired
naming convention:

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
in [Handlebars](handlebarsjs.com).

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
common to every view. See [lib/context-builder.js](lib/context-builder.js).

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
[open an issue](https://github.com/electron/electron.atom.io/issues/new)
for help.