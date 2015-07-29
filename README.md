# electron.atom.io

The [website](http://electron.atom.io) for [Electron](https://github.com/atom/electron) (formerly known as Atom-Shell).

### Build

This is a [Jekyll](http://jekyllrb.com) site hosted on [GitHub Pages](http://pages.github.com). To build a Jekyll site you'll need a few things on your system so double check the [Jekyll requirements](http://jekyllrb.com/docs/installation/#requirements).

Follow these steps to copy this repository to your computer and build the site:

```bash
$ git clone https://github.com/atom/electron.atom.io.git
$ cd electron.atom.io
$ script/bootstrap
$ script/server
```

#### Documentation

Documentation is added to the site directly from the `atom/electron` repository's `docs` directory. This is done with [Node.js](http://www.nodejs.org/download) so you'll need that on your system and to install the dependencies used here.

```bash
$ cd electron.atom.io
$ npm install
```


**CLI**

To fetch documentation at a specific version:

```bash
$ script/docs <version> [options]
# Example:
$ script/docs v0.26.0 --latest
```
Options:

`--latest` Set this version as the latest version of documentation

**Testing**

To test the documentation script:

```bash
$ npm test
```

#### Release Notes

The most recent release notes from the `atom/electron` repository are made available on the site and can be updated by running:

```bash
$ script/releases
```

### Contributing

Thanks for contributing to the site! Checkout the [contributing documentation](CONTRIBUTING.md) for guidelines on pull requests.

### License

[MIT](license.md)
