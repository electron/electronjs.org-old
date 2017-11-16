---
title: Electron Documentation
author: jlord
date: '2015-06-04'
---

This week we've given Electron's documentation a home on [electronjs.org](https://electronjs.org). You can visit [/docs/latest](https://electronjs.org/docs/latest) for the latest set of docs. We'll keep versions of older docs, too, so you're able to visit [/docs/vX.XX.X](https://electronjs.org/docs/v0.26.0) for the docs that correlate to the version you're using.

---

You can visit [/docs](https://electronjs.org/docs) to see what versions are available or [/docs/all](https://electronjs.org/docs/all) to see the latest version of docs all on one page (nice for `cmd` + `f` searches).

If you'd like to contribute to the docs content, you can do so in the [Electron repository](https://github.com/electron/electron/tree/master/docs), where the docs are fetched from. We fetch them for each minor release and add them to the [Electron site repository](http://github.com/electron/electronjs.org), which is made with [Jekyll](http://jekyllrb.com).

If you're interested in learning more about how we pull the docs from one repository to another continue reading below. Otherwise, enjoy the [docs](https://electronjs.org/latest)!

## The Technical Bits

We're preserving the documentation within the Electron core repository as is. This means that [electron/electron](http://github.com/electron/electron) will always have the latest version of the docs. When new versions of Electron are released, we duplicate them over on the Electron website repository, [electron/electronjs.org](http://github.com/electron/electronjs.org).

### script/docs

To fetch the docs we run a [script](https://github.com/electron/electronjs.org/blob/0205b5ab26c96a95121bc564c5824f92108677e0/script/docs) with a command line interface of `script/docs vX.XX.X` with or without the `--latest` option (depending on if the version you're importing is the latest version). Our [script for fetching docs](https://github.com/electron/electronjs.org/blob/0205b5ab26c96a95121bc564c5824f92108677e0/lib/fetch-docs.js) uses a few interesting Node modules:

- [`nugget`](http://npmjs.com/nugget) for [getting the release tarball](https://github.com/electron/electronjs.org/blob/0205b5ab26c96a95121bc564c5824f92108677e0/lib/fetch-docs.js#L40-L43) and saving it to a temporay directory.
- [`gunzip-maybe`](http://npmsjs.com/gunzip-maybe) to [unzip the tarball](https://github.com/electron/electronjs.org/blob/0205b5ab26c96a95121bc564c5824f92108677e0/lib/fetch-docs.js#L95).
- [`tar-fs`](http://npmjs.com/tar-fs) for [streaming just the `/docs` directory](https://github.com/electron/electronjs.org/blob/0205b5ab26c96a95121bc564c5824f92108677e0/lib/fetch-docs.js#L63-L65) from the tarball and [filtering and processing the files](https://github.com/electron/electronjs.org/blob/0205b5ab26c96a95121bc564c5824f92108677e0/lib/fetch-docs.js#L68-L78) (with the help of [`through2`](http://npmjs.com/through2)) so that they work nicely with our Jekyll site (more on that below).

[Tests](https://github.com/electron/electronjs.org/tree/gh-pages/spec) help us know that all the bits and pieces landed as expected.

### Jekyll

The Electron website is a Jekyll site and we make use of the [Collections](http://jekyllrb.com/docs/collections/) feature for the docs with a structure like this:

```bash
electron.atom.io
└── _docs
    ├── latest
    ├── v0.27.0
    ├── v0.26.0
    ├── so on
    └── so forth
```

#### Front matter

For Jekyll to render each page it needs at least empty front matter. We're going to make use of front matter on all of our pages so while we're streaming out the `/docs` directory we check to see if a file is the `README.md` file (in which case it receives one front matter configuration) or if it is any other file with a markdown extension (in which case it receives slightly different front matter).

Each page receives this set of front matter variables:

```yaml
---
version: v0.27.0
category: Tutorial
title: 'Quick Start'
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md'
---
```

The `README.md` gets an additional `permalink` so that has a URL has a common root of `index.html` rather than an awkward `/readme/`.

```yaml
permalink: /docs/v0.27.0/index.html
```

#### Config and Redirects

In the site's `_config.yml` file a variable `latest_version` is set every time the `--latest` flag is used when fetching docs. We also add a list of all the versions that have been added to the site as well as the permalink we'd like for the entire docs collection.

```yaml
latest_version: v0.27.0
available_versions:
    - v0.27.0
collections:
    docs: {output: true, permalink: '/docs/:path/'}
```

The file `latest.md` in our site root is empty except for this front matter which allows users to see the index (aka `README`) of the latest version of docs by visiting this URL, [electron.atom.io/docs/latest](https://electronjs.org/docs/latest), rather than using the latest version number specifically (though you can do that, too).

```yaml
---
permalink: /docs/latest/
redirect_to: /docs/{{ site.data.releases[0].version }}
---
```

#### Layouts

In the `docs.html` layout template we use conditionals to either show or hide information in the header and breadcrumb.

```html
{% raw %}
{% if page.category != 'ignore' %}
<h6 class='docs-breadcrumb'>{{ page.version }} / {{ page.category }}
  {% if page.title != 'README' %} / {{ page.title }} {% endif %}</h6>
{% endif %}
{% endraw %}
```

To create a page showing the versions that are available we just loop through the list in our config on a file, `versions.md`, in the site's root. Also we give this page a permalink: `/docs/`

```html
{% raw %}
{% for version in site.available_versions %}
- [{{ version }}](/docs/{{ version }})
{% endfor %}
{% endraw %}
```

Hope you enjoyed these technical bits! If you're interested in more information on using Jekyll for documentation sites, checkout how GitHub's docs team publishes [GitHub's docs on Jekyll](https://github.com/blog/1939-how-github-uses-github-to-document-github).

