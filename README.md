# electron.atom.io

The [website](http://electron.atom.io) for [Electron](https://github.com/electron/electron): [electron.atom.io](http://electron.atom.io).

- **[Add a project to electron.atom.io/apps](CONTRIBUTING.md#adding-an-app-or-project-to-the-site)**
- **[Add a meetup to electron.atom.io/community](CONTRIBUTING.md#adding-a-meetup-to-the-site)**

### Running the Site

This is a [Jekyll](https://jekyllrb.com) site hosted on [GitHub Pages](https://pages.github.com). To build a Jekyll site you'll need a few things on your system so double check the [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements).

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electron.atom.io.git
cd electron.atom.io
npm run bootstrap
npm start
```

### Updating Docs, Apps, Releases, etc

This site contains data gathered from various sources, and there's a build script for each:

- Electron docs
- ``

the latest version of Electron docs, recent release change logs and the current version numbers of Node.js, Chromium and V8 that are used in Electron.

```bash
npm run build
npm test
```

### Contributing

Thanks for contributing to the site! Checkout the [contributing documentation](CONTRIBUTING.md) for guidelines on pull requests.

### License

[MIT](LICENSE.md)
