---
title: Electron Userland
author: zeke
date: '2016-12-20'
---

We've added a new [userland](https://electronjs.org/userland) section to
the Electron website to help users discover the people, packages, and apps that make
up our flourishing open-source ecosystem.

---

[![github-contributors](https://cloud.githubusercontent.com/assets/2289/21205352/a873f86c-c210-11e6-9a92-1ef37dfc986b.png)](https://electronjs.org/userland)

## Origins of Userland

Userland is where people in software communities come together to share tools and ideas.
The term originated in the Unix community, where it referred to
any program that ran outside of the kernel, but today it means something more.
When people in today's Javascript community refer to userland, they're usually
talking about the [npm package registry](http://npm.im). This is where the majority of experimentation and
innovation happens, while Node and the JavaScript language (like the Unix kernel) retain
a relatively small and stable set of core features.

## Node and Electron

Like Node, Electron has a small set of core APIs. These provide
the basic features needed for developing multi-platform desktop applications.
This design philosophy allows Electron to remain a flexible tool without being
overly prescriptive about how it should be used.

Userland is the counterpart to "core", enabling users to
create and share tools that extend Electron's functionality.

## Collecting data

To better understand the trends in our ecosystem, we
analyzed metadata from 15,000 public GitHub repositories
that depend on `electron` or `electron-prebuilt`

We used the
[GitHub API](https://developer.github.com/v3/),
the
[libraries.io API](https://libraries.io/api),
and the npm registry to gather info about dependencies,
development dependencies, dependents, package authors,
repo contributors, download counts, fork counts, stargazer
counts, etc.

We then used this data to generate the following reports:

- [App Development Dependencies](https://electronjs.org/userland/dev_dependencies): Packages most often listed as `devDependencies` in Electron apps.
- [GitHub Contributors](https://electronjs.org/userland/github_contributors): GitHub users who have contributed to numerous Electron-related GitHub repositories.
- [Package Dependencies](https://electronjs.org/userland/package_dependencies): Electron-related npm packages that are frequently depended on by other npm packages.
- [Starred Apps](https://electronjs.org/userland/starred_apps): Electron apps (that are not npm packages) with numerous stargazers.
- [Most Downloaded Packages](https://electronjs.org/userland/most_downloaded_packages): Electron-related npm packages that are downloaded a lot.
- [App Dependencies](https://electronjs.org/userland/dependencies): Packages most often listed as `dependencies` in Electron apps.
- [Package Authors](https://electronjs.org/userland/package_authors): The most prolific authors of Electron-related npm packages.

## Filtering Results

Reports like
[app dependencies](https://electronjs.org/userland/dependencies) and
[starred apps](https://electronjs.org/userland/starred_apps)
which list packages, apps, and repos have a text input that can be used to
filter the results.

As you type into this input, the URL of the page is updated dynamically. This
allows you to copy a URL representing a particular slice of userland data,
then share it with others.

[![babel](https://cloud.githubusercontent.com/assets/2289/21328807/7bfa75e4-c5ea-11e6-8212-0e7988b367fd.png)
](https://electronjs.org/userland/dev_dependencies?q=babel%20preset)

## More to come

This first set of reports is just the beginning. We will continue to collect
data about how the community is building Electron, and will be adding
new reports to the website.

All of the tools used to collect and display this data are open-source:

- [electron/electronjs.org](https://github.com/electron/electron.atom): The Electron website.
- [electron/electron-userland-reports](https://github.com/electron/electron-userland-reports): Slices of data about packages, repos, and users in Electron userland.
- [electron/repos-using-electron](https://github.com/electron/repos-using-electron): All public repositories on GitHub that depend on `electron` or `electron-prebuilt`
- [electron/electron-npm-packages](https://github.com/zeke/electron-npm-packages): All npm packages that mention `electron` in their `package.json` file.

If you have ideas about how to improve these reports, please let us know
[opening an issue on the website repository](https://github.com/electron/electronjs.org/issues/new)
or any of the above-mentioned repos.

Thanks to you, the Electron community, for making userland what it is today!

