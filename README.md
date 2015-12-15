# electron.atom.io

The [website](http://electron.atom.io) for [Electron](https://github.com/atom/electron) (formerly known as Atom-Shell).

### Build

This is a [Jekyll](http://jekyllrb.com) site hosted on [GitHub Pages](http://pages.github.com). To build a Jekyll site you'll need a few things on your system so double check the [Jekyll requirements](http://jekyllrb.com/docs/installation/#requirements). In addition to those, you'll need these Ruby gems:

```bash
$ gem install jekyll
$ gem install bundler
```
Follow these steps to copy this repository to your computer and build the site:

```bash
$ git clone https://github.com/atom/electron.atom.io.git
$ cd electron.atom.io
$ script/bootstrap
$ script/server
```

### CLI for Docs, Releases & Version Information

This site has versioned documentation, recent release change logs and the current versions of Node.js, Chromium and V8 that are used in Electron.

Each of these are updated upon a **minor** release of Electron. They're done so with the command line interface detailed below.

 You'll need [Node.js](http://www.nodejs.org/download) installed on your system in order to use the CLI. Then you can install the dependencies:

```bash
$ cd electron.atom.io
$ npm install
```

#### Versioned Documentation

Versions of Electron documentation are fetched from the `atom/electron` repository's `docs` directory. To fetch documentation at a specific version:

```bash
$ script/docs <version> [options]
# Example:
$ script/docs v0.26.0 --latest
```
Options:

`--latest` Set this version as the latest version of documentation

#### Release Notes

The most recent release notes from the `atom/electron` repository are made available on the site and can be updated by running:

```bash
$ script/releases
```

#### Updating Node.js, Chromium and V8 Versions in use in Electron

To update the `_config.yml` in this site with the versions of Node.js, Chromium and V8 that the latest [minor release] of Electron is using run:

```bash
$ script/versions
```

#### Update all the Things at Once

The scripts above do each task separately but to run all the things at once:

```bash
$ npm run latest -- <version>
# Example:
$ npm run latest -- v0.36.0
```

_Note_ This assumes version is the latest and sets it as such by default.

**Testing**

To test the documentation script:

```bash
$ npm test
```

### Contributing

Thanks for contributing to the site! Checkout the [contributing documentation](CONTRIBUTING.md) for guidelines on pull requests.

### License

[MIT](license.md)
