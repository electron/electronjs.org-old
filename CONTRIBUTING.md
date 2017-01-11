# Contributing to electron.atom.io

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to electron.atom.io on GitHub. These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

## Issues & Pull Requests

* If you're not sure about adding something, [open an issue](https://github.com/electron/electron.atom.io/issues/new) to discuss it.
* Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
* Include screenshots and animated gifs of your changes whenever possible.

## Adding or Editing Site Content

### Apps

See [github.com/electron/electron-apps#adding-your-app](https://github.com/electron/electron-apps#adding-your-app).

### Meetups

If you want to add a meetup to the community site please open a pull request.

Add the meetup to the **bottom** of the list by editing [_data/meetups.yml](/_data/meetups.yml).

```yml
-
  name: Name of Group
  location: City, State (if applicable)
  country: Country
  href: Link to meetup's site
```

### Documentation

The documentation on this site is pulled directly from the `electron/electron` repository's `docs` directory. Contributions to the documentation should be made there: [electron/electron](https://github.com/electron/electron/tree/master/docs).

### Blog Posts

A few guidelines to keep in mind when publishing a blog post:

* Posts should normally be published on Tuesday mornings (Pacific time) for maximum social reach.
* Make sure the date in the filename is today's date
* Tweet about it once the post is live!

## How the Site is Built

### Metadata

Much of the data for this website lives in the [_data](_data) directory. Jekyll loads data from YAML, JSON, and CSV files located in this directory and makes them available to all the templates.

Metadata can also be added on a per-page basis using Jekyll's [YAML Frontmatter](https://jekyllrb.com/docs/frontmatter/) feature.

### Templates

Jekyll uses the [Liquid templating language](https://wiki.github.com/shopify/liquid/liquid-for-designers).
This allows templates to be written in HTML or Markdown, and all templates have access to a `site`
object containing all the content from the `_data` directory.

### Frontend JavaScript

There's not a lot of JavaScript on the site, so we currently just use
[vendored](js/vendor) third-party scripts in script tags, most of which are
browserify-friendly modules downloaded from the [wzrd.in](https://wzrd.in/) web service.

### Styles

The styles are based on [Primer](https://github.com/primer/primer-css), the CSS toolkit that powers GitHub's front-end design.  It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely GitHubby. It's built with SCSS and available via NPM, so it's easy to include all or part of it within your own project.

## Developing the Site Locally

To build a Jekyll site you'll need a few things on your system (like Ruby) so double check the [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements).

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electron.atom.io.git
cd electron.atom.io
npm run bootstrap
npm start
```

## Updating Docs, Apps, Releases, Userland, etc

This site contains data gathered from various sources, and there's a build script for each:

- `npm run build-releases` fetches release data from the GitHub API
- `npm run build-docs` fetches version list from S3, fetches docs for the highest release version number, fixes their links, and adds YML frontmatter for Jekyll to use.
- `npm run build-awesome` copies [awesome-electron](https://github.com/sindresorhus/awesome-electron/blob/npm-module/contributing.md#building-and-publishing-the-npm-package) data into the `_data` directory
- `npm run build-userland` copies [electron-userland-reports](https://github.com/electron/electron-userland-reports) data into the `_data` directory
- `npm run build-apps` copies [electron-apps](https://github.com/electron/electron-apps) data into the `_data` directory

To run all of the build scripts serially:

```sh
npm run build
npm test
```

To verify all the links in the site:

```sh
cd electron.atom.io
npm start
```

Wait for the app to start, then in another shell:

```sh
cd electron.atom.io
npm run link-checker
```
