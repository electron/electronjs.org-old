---
title: Search
author: 
  - echjordan
  - vanessayuenn
  - zeke
date: '2018-06-21'
---

The Electron website has a new search engine that delivers instant results for
API docs, tutorials, Electron-related npm packages, and more.

![electronjs.org search](https://user-images.githubusercontent.com/2289/41683719-417ca80a-7490-11e8-9a52-fb145f4251ba.png)

---

Learning a new technology or framework like Electron can be intimidating. 
Once you get past the [quick-start] phase, it can 
be difficult to learn best practices, find the right APIs, or discover the tools 
that will help you build the app of your dreams. As app developers, we often find 
ourselves turning to sites like  Google and Stack Overflow for answers. This 
works, but we can do better.

Today we're rolling out a new search feature on the Electron website that will
help developers find the resources they need to build apps faster and more 
easily.

To try it out, visit any page on [electronjs.org](https://electronjs.org)
and you'll find a search input at the top of the page.

## The Search Engine

When we first set about adding search to the website, we rolled our own
search engine using GraphQL as a backend. GraphQL was fun to work with and
the search engine was performant, but we quickly realized that building a search
engine is not a trivial task. Things like multi-word search and typo detection
require a lot of work to get right. Rather than reinventing the wheel, 
we decided to use an existing search solution: [Algolia].

Algolia is a hosted search service that has quickly become the
search engine of choice among popular open source projects like 
React, Vue, Bootstrap, Yarn, and [many others](https://community.algolia.com/docsearch/).

Here are some of the features that made Algolia a good fit for the Electron project:

- [InstantSearch.js](https://community.algolia.com/instantsearch.js) provides results as you type, usually in about 1ms.
- [Typo tolerance](https://www.algolia.com/doc/guides/textual-relevance/typo-tolerance/) means you'll still get results even when you type [`widnow`].
- [Advanced query syntax](https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/) enables `"exact quoted matches"` and `-exclusion`.
- [API clients](https://www.algolia.com/doc/api-client/javascript/getting-started/) are open source and with well-documented.
- [Analytics](https://www.algolia.com/doc/guides/analytics/analytics-overview/) tell us what people are searching for most, as well as what they're searching for but not finding. This will give us valuable insight into how Electron's documentation can be improved.
- Algolia is [free for open source projects](https://www.algolia.com/for-open-source).

## API Docs

Sometimes you know *what* you want to accomplish, but you don't know exactly 
*how* to do it. Electron has over 750 API methods, events, and properties. 
No human can easily remember all of them, but computers are good at this stuff. 
Using Electron's [JSON API docs](https://electronjs.org/blog/api-docs-json-schema),
we indexed all of this data in Algolia, and now you can easily find
the exact API you're looking for.

Trying to resize a window? Search for [`resize`] and jump straight to the method you need.

## Tutorials

Electron has an ever-growing collection of tutorials to complement its API
documentation. Now you can more easily find all tutorials on a given topic,
right alongside related API documentation.

Looking for security best practices? Search for [`security`].

## npm Packages

There are now over 700,000 packages in the npm registry and it's not
always easy to find the one you need. To make it easier to discover these modules, 
we've created [`electron-npm-packages`], a collection of the 3400+ modules in 
the registry that are built specifically for use with Electron.

The folks at [Libraries.io](https://libraries.io/) have created [SourceRank],
a system for scoring software projects based on a combination of metrics like
code, community, documentation, and usage. We created a [`sourceranks`]
module that includes the score of every module in the npm registry, and we
use these scores to sort the package results.

Want alternatives to Electron's built-in IPC modules? Search for [`is:package ipc`].

## Electron Apps

It's [easy to index data with Algolia](https://github.com/electron/algolia-indices), 
so we added the existing apps list from [electron/apps](https://github.com/electron/apps).

Try a search for [`music`] or [`homebrew`].

## Filtering Results

If you've used GitHub's [code search](https://github.com/search) before,
you're probably aware of its colon-separated key-value filters like
`extension:js` or `user:defunkt`. We think this filtering technique is pretty
powerful, so we've added an `is:` keyword to Electron's search that lets you
filter results to only show a single type:

- [`is:api thumbnail`]
- [`is:tutorial security`]
- [`is:package ipc`]
- [`is:app graphql`]

## Keyboard Navigation

Developers love keyboard shortcuts! The new search can be used without taking
your fingers off the keyboard:

- <kbd>/</kbd> focuses the search input
- <kbd>esc</kbd> focuses the search input and clears it
- <kbd>down</kbd> moves to the next result
- <kbd>up</kbd> moves to the previous result, or the search input
- <kbd>enter</kbd> opens a result

We also open-sourced the [module](https://github.com/electron/search-with-your-keyboard/)
that enables this keyboard interaction. It's designed for use with Algolia InstantSearch, 
but is generalized to enable compatibility with different search implementations.

## We want your feedback

If you encounter any issues with the new search tool, we want to hear about it!

Like nearly everything in the Electron community, the new search is built
mostly on open source software. The best way to submit your feedback is by 
filing an issue on GitHub in the appropriate repository:

- [electron/electronjs.org](https://github.com/electron/electronjs.org) is Electron's website. If you don't know where to file an issue, this your best bet.
- [electron/algolia-indices](https://github.com/electron/algolia-indices) is where all the searchable Electron data is compiled. If you find an issue with the actual data, this would be the place to report it.
- [electron/search-with-your-keyboard](https://github.com/electron/search-with-your-keyboard) makes the search interface navigable by keyboard.
- [algolia/instantsearch.js](https://github.com/algolia/instantsearch.js) is the browser-side client for find-as-you-type search experiences.
- [algolia/algoliasearch-client-javascript](https://github.com/algolia/algoliasearch-client-javascript) is the Node.js client for uploading data to Algolia's servers.

## Thanks

Special thanks to [Emily Jordan](https://github.com/echjordan)
and [Vanessa Yuen](https://github.com/vanessayuenn) 
for building these new search capabilities, and to the team at Algolia for 
answering all our questions along the way. 🍹

[Algolia]: https://algolia.com
[`widnow`]: https://electron-website-pr-1248.herokuapp.com/?query=widnow
[`resize`]: https://electron-website-pr-1248.herokuapp.com/?query=resize
[`security`]: https://electron-website-pr-1248.herokuapp.com/?query=security
[`music`]: https://electron-website-pr-1248.herokuapp.com/?query=music
[`homebrew`]: https://electron-website-pr-1248.herokuapp.com/?query=homebrew
[`electron-npm-packages`]: https://ghub.io/electron-npm-packages
[SourceRank]: https://docs.libraries.io/overview.html#sourcerank
[`sourceranks`]: https://github.com/nice-registry/sourceranks
[`is:api thumbnail`]: https://electron-website-pr-1248.herokuapp.com/?query=is%3Aapi%20thumbnail
[`is:tutorial security`]: https://electron-website-pr-1248.herokuapp.com/?query=is%3Atutorial%20security
[`is:package ipc`]: https://electron-website-pr-1248.herokuapp.com/?query=is%3Apackage%20ipc
[`is:app graphql`]: https://electron-website-pr-1248.herokuapp.com/?query=is%3Aapp%20graphql
[quick-start]: https://github.com/electron/electron-quick-start

<!-- TODO: REPLACE electron-website-pr-1248 with electronjs.org -->