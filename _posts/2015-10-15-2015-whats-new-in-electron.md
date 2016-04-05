---
layout: post
title: What's New in Electron
author: jlord
---

There have been some interesting updates and talks given on Electron recently, here's a roundup.

## Source

Electron is now up to date with Chrome 45 as of `v0.32.0`. Other updates include...

### Better Documentation

![new docs](https://cloud.githubusercontent.com/assets/1305617/10520600/d9dc0ae8-731f-11e5-9bd7-c1651639eb2a.png)

We have restructured and standardized the documentation to look better and read better. There are also community-contributed translations of the documentation, like Japanese and Korean.

Related pull requests:
[atom/electron#2028](https://github.com/atom/electron/pull/2028),
[atom/electron#2533](https://github.com/atom/electron/pull/2533),
[atom/electron#2557](https://github.com/atom/electron/pull/2557),
[atom/electron#2709](https://github.com/atom/electron/pull/2709),
[atom/electron#2725](https://github.com/atom/electron/pull/2725),
[atom/electron#2698](https://github.com/atom/electron/pull/2698),
[atom/electron#2649](https://github.com/atom/electron/pull/2649).

### Node.js 4.1.0

Since `v0.33.0` Electron ships with Node.js 4.1.0.

Related pull request:
[atom/electron#2817](https://github.com/atom/electron/pull/2817).

### node-pre-gyp

Modules relying on `node-pre-gyp` can now be compiled against Electron when building from source.

Related pull request:
[mapbox/node-pre-gyp#175](https://github.com/mapbox/node-pre-gyp/pull/175).

### ARM Support

Electron now provides builds for Linux on ARMv7. It runs on popular platforms like Chromebook and Raspberry Pi 2.

Related issues:
[atom/libchromiumcontent#138](https://github.com/atom/libchromiumcontent/pull/138),
[atom/electron#2094](https://github.com/atom/electron/pull/2094),
[atom/electron#366](https://github.com/atom/electron/issues/366).

### Yosemite-style Frameless Window

![frameless window](https://cloud.githubusercontent.com/assets/184253/9849445/7397d308-5aeb-11e5-896f-08ac7693c8c0.png)

A patch by [@jaanus](https://github.com/jaanus) has been merged that, like the other built-in OS X apps, allows creating frameless windows with system traffic lights integrated on OS X Yosemite and later.

Related pull request:
[atom/electron#2776](https://github.com/atom/electron/pull/2776).

### Google Summer of Code Printing Support

After the Google Summer of Code we have merged patches by [@hokein](https://github.com/hokein) to improve printing support, and add the ability to print the page into PDF files.

Related issues:
[atom/electron#2677](https://github.com/atom/electron/pull/2677),
[atom/electron#1935](https://github.com/atom/electron/pull/1935),
[atom/electron#1532](https://github.com/atom/electron/pull/1532),
[atom/electron#805](https://github.com/atom/electron/issues/805),
[atom/electron#1669](https://github.com/atom/electron/pull/1669),
[atom/electron#1835](https://github.com/atom/electron/pull/1835).

## Atom

Atom has now upgraded to Electron `v0.30.6` running Chrome 44. An upgrade to `v0.33.0` is in progress on [atom/atom#8779](https://github.com/atom/atom/pull/8779).

## Talks

GitHubber [Amy Palamountain](https://github.com/ammeep) gave a great introduction to Electron in a talk at [Nordic.js](https://nordicjs2015.confetti.events). She also created the [electron-accelerator](https://github.com/ammeep/electron-accelerator) library.

#### Building native applications with Electron by Amy Palomountain
<iframe width="560" height="315" src="https://www.youtube.com/embed/OHOPSvTltPI" frameborder="0" allowfullscreen></iframe>

[Ben Ogle](https://github.com/benogle), also on the Atom team, gave an Electron talk at [YAPC Asia](http://yapcasia.org/2015/):

#### Building Desktop Apps with Web Technologies by Ben Ogle
<iframe width="560" height="315" src="https://www.youtube.com/embed/WChjh5zaUdw" frameborder="0" allowfullscreen></iframe>

Atom team member [Kevin Sawicki](https://github.com/kevinsawicki) and others gave talks on Electron at the [Bay Are Electron User Group](http://www.meetup.com/Bay-Area-Electron-User-Group/) meetup recently. The [videos](http://www.wagonhq.com/blog/electron-meetup) have been posted, here are a couple:

#### The History of Electron by Kevin Sawicki
<iframe width="560" height="315" src="https://www.youtube.com/embed/tP8Yp1boQ9c" frameborder="0" allowfullscreen></iframe>

#### Making a web app feel native by Ben Gotow
<iframe width="560" height="315" src="https://www.youtube.com/embed/JIRXVGVPzn8" frameborder="0" allowfullscreen></iframe>
