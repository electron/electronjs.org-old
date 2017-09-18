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

## The Server

TODO

## Express/Connect Middleware

TODO

## Templates

TODO

### Styles

The styles are based on [Primer](https://github.com/primer/primer-css), the CSS toolkit that powers GitHub's front-end design.  It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely GitHubby. It's built with SCSS and available via NPM, so it's easy to include all or part of it within your own project.

## Frontend JavaScript

TODO

## Developing the Site Locally

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electron.atom.io
cd electron.atom.io
npm install
npm run dev
```