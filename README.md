# electron.atom.io

The [website](http://electron.atom.io) for [Electron](https://github.com/electron/electron): [electron.atom.io](http://electron.atom.io).

- **[Add a project to electron.atom.io/apps](CONTRIBUTING.md#adding-an-app-or-project-to-the-site)**
- **[Add a meetup to electron.atom.io/community](CONTRIBUTING.md#adding-a-meetup-to-the-site)**

### Build

This is a [Jekyll](https://jekyllrb.com) site hosted on [GitHub Pages](https://pages.github.com). To build a Jekyll site you'll need a few things on your system so double check the [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements).

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electron.atom.io.git
cd electron.atom.io
npm run bootstrap
npm start
```

### CLI for Docs, Releases & Version Information

This site contains the latest version of Electron docs, recent release change logs and the current versions of Node.js, Chromium and V8 that are used in Electron.

Each of these are updated here when a new Electron is released. They're done so with the command line interface detailed below.

 You'll need [Node.js](https://www.nodejs.org) installed on your system in order to use the CLI. Then you can install the dependencies:

```bash
$ cd electron.atom.io
$ npm install
```

#### Documentation

Versions of Electron documentation are fetched from the `electron/electron` repository's `docs` directory. The site contains the latest version of docs and links to older versions of the docs in the repository.

To fetch documentation for a specific version:

```bash
$ script/docs <version> [options]
# Example:
$ script/docs v0.26.0 --latest
```
Options:

`--latest` Set this version as the latest version of Electron in `_config.yml` and replace the existing documentation.

#### Release Notes

The most recent release notes from the `electron/electron` repository are made available on the site and can be updated by running:

```bash
$ script/releases
```

#### Updating Node.js, Chromium and V8 Versions in use in Electron

To update the `_config.yml` in this site with the versions of Node.js, Chromium and V8 that the latest release of Electron is using run:

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

[MIT](LICENSE.md)
