---
title: "Announcing TypeScript support in Electron"
author: zeke
---

The `electron` npm package now includes a
[TypeScript definition file](http://definitelytyped.org/) that describes all of
the [Electron API](https://electron.atom.io/docs/api/) in detail. Just
`npm install electron` to get up-to-date Electron typings in your project.

---

TypeScript is an open-source programming language created by Microsoft. It's
a superset of JavaScript that extends the language by adding support for
static types. The TypeScript community has grown quickly in recent years,
and TypeScript was ranked among the
[most loved programming languages](https://stackoverflow.com/insights/survey/2017#technology-most-loved-dreaded-and-wanted-languages)
in a recent Stack Overflow developer survey.

TypeScript supports many of the newer language features in JavaScript like
classes, object destructuring, and async/await, but its real differentiating
feature is _type annotation_.
Declaring the input and output datatypes expected by your program can
[reduce bugs](https://slack.engineering/typescript-at-slack-a81307fa288d) by
helping you find errors at compile time, and the annotations can also serve
as a formal declaration of [how your program works](https://staltz.com/all-js-libraries-should-be-authored-in-typescript.html).

When libraries are written in vanilla Javascript, the types are often vaguely
defined as an afterthought when writing documentation. Functions can often
accept more types than what was documented, or a function can have invisible
constraints that are not documented, which can lead to runtime errors.

TypeScript solves this problem with **definition files**.
A TypeScript definition file describes all the functions of a library and its
expected input and output types. When library authors bundle a TypeScript
definition file with their published library, consumers of that library can
[explore its API right inside their editor](https://code.visualstudio.com/docs/editor/intellisense)
and start using it right away, often without needing to consult the library's
documentation.

Many popular projects like
[Angular](https://angularjs.org/),
[Vue.js](http://vuejs.org/),
[node-github](https://github.com/mikedeboer/node-github)
(and now Electron!) compile their own definition file and bundle it with their
published npm package. For projects that don't bundle their own definition file,
there is a
[third-party ecosystem](https://github.com/DefinitelyTyped/DefinitelyTyped)
of community-maintained definition files.

## Installation

Starting at version 1.6.10, every release of Electron includes its own
TypeScript definition file. When you install the `electron` package from npm,
the `electron.d.ts` file is bundled automatically with the
installed package.

The [safest way]((https://electron.atom.io/docs/tutorial/electron-versioning/)) to install Electron is using an exact version number:

```
npm install electron --save-dev --save-exact
```

Or if you're using [yarn](https://yarnpkg.com/lang/en/docs/migrating-from-npm/#toc-cli-commands-comparison):

```
yarn add electron --dev --exact
```

If you were already using third-party definitions like `@types/electron`
and `@types/node` in your projects, you should remove them to prevent
any collisions.

The definition file is derived from our
[structured API documentation](https://electron.atom.io/blog/2016/09/27/api-docs-json-schema),
so it will always be consistent with [Electron's API documentation](https://electron.atom.io/docs/api/).
Just install `electron` and you'll always get TypeScript definitions that are
up to date with the version of Electron you're using.

## Usage

If you're using [Visual Studio Code](https://code.visualstudio.com/), you've
already got TypeScript support built in. There are also community-maintained
plugins for
[Atom](https://atom.io/packages/atom-typescript),
[Sublime](https://github.com/Microsoft/TypeScript-Sublime-Plugin),
[vim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim),
and
[others](https://www.typescriptlang.org/index.html#download-links).

Once your editor is configured for TypeScript, you'll start to see more
context-aware behavior like autocomplete suggestions for method names,
arguments, object properties, etc.

## Getting started with TypeScript

If you're new to TypeScript and want to learn more, this
[introductory video from Microsoft](http://video.ch9.ms/ch9/4ae3/062c336d-9cf0-498f-ae9a-582b87954ae3/B881_mid.mp4)
provides a thorough overview of why the language was created, how it works,
and how to use it.

There's also a
[handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
and a
[playground](https://www.typescriptlang.org/play/index.html)
on the official TypeScript website.

Because TypeScript is a superset of JavaScript, your existing JavaScript code is
already valid TypeScript. This means you can gradually transition an existing
JavaScript project to TypeScript, sprinkling in new language features as needed.

## Thanks

This project would not have been possible without the help of Electron's
community of open-source maintainers.

We'd like to give a special thanks to
[@MarshallOfSound](https://github.com/MarshallOfSound),
[@felixrieseberg](https://github.com/felixrieseberg),
[@miniak](https://github.com/miniak), and
[@shiftkey](https://github.com/shiftkey)
for their contributions.

## Support

If you encounter any issues using Electron's new TypeScript definition files,
please file an issue on the
[electron-typescript-definitions](https://github.com/electron/electron-typescript-definitions/issues) repository.

Happy TypeScripting!
