---
title: Electron's API Docs as Structured Data
author: zeke
date: '2016-09-27'
---

Today we're announcing some improvements to Electron's documentation. Every new
release now includes a
[JSON file](https://github.com/electron/electron/releases/download/v1.4.1/electron-api.json)
that describes all of Electron's public APIs in detail. We created this file to
enable developers to use Electron's API documentation in interesting new ways.

---

## Schema overview

Each API is an object with properties like name, description, type, etc.
Classes such as `BrowserWindow` and `Menu` have additional properties describing
their instance methods, instance properties, instance events, etc.

Here's an excerpt from the schema that describes the `BrowserWindow` class:

```js
{
  name: 'BrowserWindow',
  description: 'Create and control browser windows.',
  process: {
    main: true,
    renderer: false
  },
  type: 'Class',
  instanceName: 'win',
  slug: 'browser-window',
  websiteUrl: 'https://electronjs.org/docs/api/browser-window',
  repoUrl: 'https://github.com/electron/electron/blob/v1.4.0/docs/api/browser-window.md',
  staticMethods: [...],
  instanceMethods: [...],
  instanceProperties: [...],
  instanceEvents: [...]
}
```

And here's an example of a method description, in this case the
`apis.BrowserWindow.instanceMethods.setMaximumSize` instance method:

```js
{
  name: 'setMaximumSize',
  signature: '(width, height)',
  description: 'Sets the maximum size of window to width and height.',
  parameters: [{
    name: 'width',
    type: 'Integer'
  }, {
    name: 'height',
    type: 'Integer'
  }]
}
```

## Using the new data

To make it easy for developers to use this structured data in their projects,
we've created [electron-docs-api](https://www.npmjs.com/package/electron-api-docs), a small
npm package that is published automatically whenever there's a new Electron
release.

```sh
npm install electron-api-docs --save
```

For instant gratification, try out the module in your Node.js REPL:

```sh
npm i -g trymodule && trymodule electron-api-docs=apis
```

## How the data is collected

Electron's API documentation adheres to
[Electron Coding Style](https://github.com/electron/electron/blob/master/docs/development/coding-style.md)
and the
[Electron Styleguide](https://github.com/electron/electron/blob/master/docs/styleguide.md#readme),
so its content can be programmatically parsed.

The [electron-docs-linter](https://github.com/electron/electron-docs-linter)
is a new development dependency of the `electron/electron` repository.
It is a command-line tool that lints all the markdown files and enforces the
rules of the styleguide. If errors are found, they are listed and the release
process is halted. If the API docs are valid, the `electron-json.api` file
is created and
[uploaded to GitHub](https://github.com/electron/electron/releases/tag/v1.4.1)
as part of the Electron release.

## Standard Javascript and Standard Markdown

Earlier this year, Electron's codebase was updated to use the
[`standard`](http://standardjs.com/) linter for all JavaScript. Standard's
README sums up the reasoning behind this choice:

> Adopting standard style means ranking the importance of code clarity and community conventions higher than personal style. This might not make sense for 100% of projects and development cultures, however open source can be a hostile place for newbies. Setting up clear, automated contributor expectations makes a project healthier.

We also recently created
[standard-markdown](https://github.com/zeke/standard-markdown) to verify that
all the JavaScript code snippets in our documentation are valid and consistent
with the style in the codebase itself.

Together these tools help us use continuous integration (CI) to automatically
find errors in pull requests. This reduces the burden placed on humans doing code
review, and gives us more confidence about the accuracy of our documentation.

### A community effort

Electron's documentation is constantly improving, and we have our awesome
open-source community to thank for it. As of this writing, nearly 300 people
have contributed to the docs.

We're excited to see what people do with this new structured data. Possible uses
include:

- Improvements to [https://electronjs.org/docs/](https://electronjs.org/docs/)
- A [TypeScript definition file](https://github.com/electron/electron-docs-linter/blob/master/README.md#typescript-definitions) for more streamlined Electron development in projects using TypeScript.
- Searchable offline documentation for tools like [Dash.app](https://kapeli.com/dash) and [devdocs.io](http://devdocs.io/)

