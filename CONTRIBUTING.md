# Contributing to electron.atom.io

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to electron.atom.io on GitHub. These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

## Issues & Pull Requests

* If you're not sure about adding something, open an issue to discuss it.
* Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
* Include screenshots and animated gifs of your changes whenever possible.
* End files with a newline.


## Adding an app or project to the site

If you have an Electron application or project you'd like to see added, please open a pull request!

Add your app to the list by editing [_data/apps.yml](/_data/apps.yml). **Please add your app at the bottom of the list**.  The only required fields are `name`, `website`, and `icon`. Everything else is optional, but recommended. If your app doesn't have a website, you can specify a `repository` URL instead.

```yml
-
  name: "Your App"
  description: "A few words about your app"
  website: "https://yourapp.com"
  repository: "https://github.com/your/app"
  keywords:
    - "friends"
    - "music"
  license: "MIT"
  icon: "lowercase-and-url-friendly.png"
```

## Documentation

The documentation on this site is pulled directly from the `atom/electron` repository's `docs` directory. Contributions to the documentation should be made there: [atom/electron](https://github.com/atom/electron/tree/master/docs).
