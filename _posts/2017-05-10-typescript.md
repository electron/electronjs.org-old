---
title: "Announcing TypeScript support in Electron"
author: zeke
---

The `electron` npm package now includes a [TypeScript definition file](http://definitelytyped.org/) that
describes all of the [Electron API](https://electron.atom.io/docs/api/).

---

TypeScript is an open-source programming language created by Microsoft. It's
a superset of JavaScript that extends the language by adding support for
**types**. Declaring the datatypes expected by your program can have a
number of benefits, including
[fewer bugs](https://slack.engineering/typescript-at-slack-a81307fa288d),
[backwards compatibility](http://www.developerhandbook.com/typescript/typescript-beginners-guide/),
[better editor integration](https://code.visualstudio.com/docs/editor/intellisense),
and most importantly,
[developer happiness](https://stackoverflow.com/insights/survey/2017#technology-most-loved-dreaded-and-wanted-languages).

## What TypeScript Is

Modern JavaScript is valid TypeScript, meaning that one can use TypeScript
without changing a single line of code.

> The most obvious solution to that problem is to phase features in slowly — you can simply enable TypeScript without changing any code, add some simple type declarations, and save more complex concepts like inheritance, generics, and advanced types (intersection types, mapped types) for either specific modules or a later stage. In the end, our experience is that one can reap a lot of benefits with the most basic use of TypeScript


http://video.ch9.ms/ch9/4ae3/062c336d-9cf0-498f-ae9a-582b87954ae3/B881_mid.mp4

## Type Definitions

As of Electron v1.6.9, when you `npm install electron --save-dev`
(or `yarn add --dev electron`) you'll get Electron's new TypeScript definition
file bundled with the installed package.

If you're using Visual Studio Code, you've already got TypeScript support built in.
There are also community-maintained plugins for
[Atom](https://atom.io/packages/atom-typescript,
[Sublime](https://github.com/Microsoft/TypeScript-Sublime-Plugin),
and
[others](https://www.typescriptlang.org/index.html#download-links).

Once your editor is configured for TypeScript, you'll start to see more
context-aware behavior like autocomplete suggestions for method names,
arguments, object properties, etc.

## Using TypeScript with Electron

TypeScript is compatible with JavaScript, so your existing



https://github.com/electron/electron-compile/issues/95

typed programming matters. https://staltz.com/all-js-libraries-should-be-authored-in-typescript.html


You need to install `electron-prebuilt-compile` as a dependency, and use that instead of the `electron` binary. electron-prebuilt-compile wraps Electron with electron-compile, which is what lets you use TypeScript out of the box.



http://javascriptweekly.us1.list-manage1.com/track/click?u=0618f6a79d6bb9675f313ceb2&id=f7af8280b0&e=58e1a7171d

## Why Use TypeScript?

André Staltz argues that [all JavaScript libraries should be authored in TypeScript](https://staltz.com/all-js-libraries-should-be-authored-in-typescript.html)
because it clarifies the constraints and preconditions of your API:

> Often in JS libraries, the types are vaguely defined as an afterthought when writing docs. Each function is described as “we expect the argument to be X” but this is not always thoroughly thought, and sometimes leaves holes. Either the function can accept more types than what was documented or the function has invisible constraints that were not communicated in the docs, which leads to runtime errors.
