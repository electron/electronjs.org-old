# electron.atom.io

The [website](http://electron.atom.io) for [Electron](https://github.com/electron/electron): [electron.atom.io](http://electron.atom.io).

- **[Add a project to electron.atom.io/apps](CONTRIBUTING.md#adding-an-app-or-project-to-the-site)**
- **[Add a meetup to electron.atom.io/community](CONTRIBUTING.md#adding-a-meetup-to-the-site)**

### Running the site

This is a [Jekyll](https://jekyllrb.com) site hosted on [GitHub Pages](https://pages.github.com). To build a Jekyll site you'll need a few things on your system so double check the [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements).

Follow these steps to copy this repository to your computer and build the site:

```bash
git clone https://github.com/electron/electron.atom.io.git
cd electron.atom.io
npm run bootstrap
npm start
```

### Updating Docs, Apps, Releases, Userland, etc

This site contains data gathered from various sources, and there's a build script for each:

- `npm run build-releases` fetches release data from the GitHub API
- `npm run build-versions` fetches other release data from S3
- `npm run build-docs` fetches docs for the highest release version number, fixes their links, and adds YML frontmatter for Jekyll to use.
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

### Contributing

Thanks for contributing to the site! Checkout the [contributing documentation](CONTRIBUTING.md) for guidelines on pull requests.

### License

[MIT](LICENSE.md)
