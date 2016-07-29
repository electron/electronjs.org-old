---
title: npm install electron
author: zeke
---

With help from the community, we have taken over the `electron` package
name on npm. As of Electron version 1.3.1, you can
`npm install electron --save-dev` to install the latest precompiled version
of Electron in your app.

---

![npm install electron](https://cloud.githubusercontent.com/assets/378023/17259327/3e3196be-55cb-11e6-8156-525e9c45e66e.png)

## The History of Electron Prebuilt

If you've ever worked on an Electron app before, you've likely come across the
`electron-prebuilt` npm package. This package is an indispensable part of nearly
every Electron project. When installed, it detects your operating system
and downloads a prebuilt binary that is compiled to work on your system's
architecture.

## The Name

The Electron installation process was often a stumbling block for new users.
Many brave people tried to get started without reading the documentation, and
would often run `npm install electron` instead of `npm install electron-prebuilt`,
only to discover (often after much confusion) that it was not the `electron`
they were looking for.

The reason for this is that there was an existing `electron` project on npm,
created before GitHub's Electron project even existed. To help make Electron
development easier and more intuitive for new users, we reached out to the
owner of the existing `electron` package to ask if he'd be willing to let us use
the name. Luckily he was a fan of our project, and agreed to help us repurpose
the name.

## Prebuilt Lives On

As of version `1.3.1`, we have begun publishing `electron` and `electron-prebuilt`
to npm in tandem. The two packages are identical. We chose to continue publishing
the package under both names for a while so as not to inconvenience the
thousands of developers who are currently using `electron-prebuilt` in their projects.
We recommend updating your package.json files to use the  new `electron` dependency,
but we will continue releasing new versions of `electron-prebuilt` until the
end of 2016.

The [electron-userland/electron-prebuilt](https://github.com/electron-userland/electron-prebuilt)
repository will remain the canonical home of `electron-prebuilt`.

## Thanks

Special thanks to [@mafintosh](https://github.com/mafintosh) and
[@maxogden](https://github.com/maxogden) for creating `electron-prebuilt`, and
for their tireless service to the JavaScript, Node.js, and Electron communities.

And thanks to [@logicalparadox](https://github.com/logicalparadox) for allowing
us to take over the `electron` package on npm.

## Questions

If you encounter any problems installing this new package, please let us know by
opening an issue on the
[electron-userland/electron-prebuilt](https://github.com/electron-userland/electron-prebuilt/issues)
repository. For any other issues with Electron,
please use the [electron/electron](https://github.com/electron/electron/issues)
repository.
