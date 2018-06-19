---
title: Search
author: 
  - echjordan
  - zeke
date: '2018-06-21'
---

The Electron website has a new search engine powered by Algolia.com

---

Learning a new technology or framework like Electron can be daunting. Once you 
get past the quick-start phase of Electron app development, it can be cumbersome
to find the right APIs, techniques, or tools to build the app of your dreams. As 
app developers, we often find ourselves turning to sites like Google and Stack 
Overflow for answers. This works, but we can do better.

Today we're rolling out a new search feature on the Electron website with the
goal of making it easier for Electron app developers to find the resources
they need to build apps faster and more easily.

## Algolia

[Algolia] is a hosted search service that has quickly become the
de facto search engine of choice among projects in the tech community. It's used to
power search for projects like React, Vue, Bootstrap, Yarn, and [many others](https://community.algolia.com/docsearch/).

- Results as you type
- Typo tolerance
- Advanced query syntax
- Nice API
- Free for open source
- Analytics

## Search With Your Keyboard

Developers love keyboard shortcuts! The new search can be used without taking
your fingers off the keyboard:

Key | Action
--- | ------
<kbd>/</kbd> | Focus the search input
<kbd>esc</kbd> | Focus the search input and clear it
<kbd>down</kbd> | Move to the next result
<kbd>up</kbd> | Move to the previous result, or the search input
<kbd>enter</kbd> | Open a result

We also open-sourced the [module](https://github.com/electron/search-with-your-keyboard/)
that enables this keyboard interaction. It's designed for use with Algolia InstantSearch, 
but is generalized to enable compatibility with different search implementations.

## API Docs

Sometimes you know *what* you want to accomplish, but you don't know exactly 
*how* to do it. Electron has over 750 API methods, events, and properties. 
No human can easily remember all of them, but computers are good at this stuff. 
Using Electron's [JSON API docs](https://electronjs.org/blog/api-docs-json-schema),
we were able to index all of this data in Algolia, and now you can easily find
the exact API you're looking for.

Trying to resize a window? Search for [`resize`].

## Tutorials

Electron has an ever-growing collection of tutorials that complement the API
documentation. Now you can more easily find all tutorials on a given topic,
right alongside related API documentation.

Want to better introspect your app? Search for [`debug`].

## npm Packages

The npm registry is huge! There are now over 700,000 packages, and it's not
always easy to find the right ones for your app. To help make it easier to discover
the best modules for use in Electron apps, we've created [`electron-npm-packages`], 
a collection of every module in the registry that is built specifically for 
use with Electron.

The team at [libraries.io](https://libraries.io/) has created [SourceRank],
an algorithm scores software projects based on a combination of metrics like
code, community, documentation, and usage. We created a [`sourceranks`]
module that includes the score of every module in the npm registry, and we
use these scores to sort the package results.

Want alternatives to Electron's built-in IPC modules? Search for [`is:package ipc`].

## Electron Apps

TODO

## Open Source

TODO

https://github.com/electron/apps
https://github.com/electron/packages
https://github.com/nice-registry/sourceranks
https://github.com/electron/electronjs.org
https://github.com/electron/algolia-indices
https://github.com/electron/search-with-your-keyboard

[`resize`]: https://electron-website-pr-1248.herokuapp.com/?query=resize
[`debug`]: https://electron-website-pr-1248.herokuapp.com/?query=debug
[`electron-npm-packages`]: https://ghub.io/electron-npm-packages
[SourceRank]: https://docs.libraries.io/overview.html#sourcerank
[`sourceranks`]: https://github.com/nice-registry/sourceranks
[`is:package ipc`]: https://electron-website-pr-1248.herokuapp.com/?query=is%3Apackage%20ipc