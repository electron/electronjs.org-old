# Contributing to electron.atom.io

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to electron.atom.io on GitHub. These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

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

You should have a server running at [localhost:5000](http://localhost:5000).
Read on for more info about the structure of the site.

## Content

The content on [electronjs.org] comes from a number of sources.

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

### Blog Posts

Blog posts live in this repo, in `/data/blog`.

A few guidelines to keep in mind when publishing a blog post:

* Posts should normally be published on Tuesday mornings (Pacific time) for maximum social reach.
* Make sure the date in the filename is today's date
* Tweet about it once the post is live!

## How the Site is Built

### The Server

The Electron website runs an Express server. See [server.js](server.js).

### Express/Connect Middleware


## Context

Every template is passed a "context object". This is an object prepared by
the server that contains data to be used in the Handlebars templates.

See [lib/context-builder.js](lib/context-builder.js).

## Templates

Templates are written in [Handlebars](handlebarsjs.com).

The [`express-hbs`](http://ghub.io/express-hbs) module adds support for things
like nested layouts and partials.

- Views live in `/views`
- Layouts wrap views, and can be nested. They live in `/views/layouts`
- Partials are reusable templates. They live in /views/partials`

## Environment Variables

- `NODE_ENV` is set to `production` on the server. This has a number of effects:
  - Express caches routes in memory
  - Sass middleware serves minified CSS and caches it
  - Browserify middleware serves minified JavaScript and caches it

### Styles

Stylesheets are written in Sass SCSS format, and they all live in the `/styles`
directory. The server doesn't write any transpiled CSS to disk: A GET request
to `/styles/index.css` transpiles and serves up the `/styles/index.scss` file
automatically.

The styles are based on [Primer](https://github.com/primer/primer-css), the CSS toolkit that powers GitHub's front-end design.  It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely GitHubby. It's built with SCSS and available via NPM.

## Frontend JavaScript

Frontend code lives in the `/scripts` directory, (not to be confused with 
[`/script`](#scripts)). The `/script/index.js` file requires and bundles all 
the other files in the directory using Babel and Browserify. This means you 
can write any kind of futuristic JavaScript you want, and also use node-style 
require statements to bring in any (browserify-compatible/bundleable) 
dependencies.

Most of the individual files export a module that expects to have access to
the DOM, so they should be executed after the `DOMContentLoaded` event has 
fired:

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

Like the Sass middleware, no transpiled JS code is written to disk. When a 
GET request is made to `/scripts/index.js`, the server dynamically transpiles
the `scripts/index.js` file to browser-compatible ES5.

## Scripts

This repo follows the [Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all)
methodology popularized by GitHub. The idea is that every project, regardless 
of the programming languages used within it, should have a `/script` directory
containing all the necessary executable files required to set up and use
the project, like `/script/bootstrap` and `/script/start`

In keeping with Node.js and npm conventions, all the scripts in this project are 
also defined in the `scripts` stanza in the [`package.json`](package.json) 
file. To list all available commands, type `npm run`.

[electronjs.org]: https://electronjs.org
[electron/electron]: https://github.com/electron/electron
[electron/electron-i18n]: https://github.com/electron/electron-i18n