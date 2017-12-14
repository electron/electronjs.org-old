---
title: 'Project of the Week: Beaker Browser'
author: 
  - pfrazee
  - zeke
date: '2017-02-07'
---

This week we caught up with [Paul Frazee](http://pfrazee.github.io/), creator
of [Beaker Browser](https://beakerbrowser.com/). Beaker is an experimental
peer-to-peer web browser that uses the Dat protocol to host sites from users’
devices.

---

<iframe width="100%" height="420" src="https://www.youtube.com/embed/Bem9nRpyPEs" frameborder="0" allowfullscreen></iframe>

## What is Beaker and why did you create it?

Beaker is a participatory browser. It's a browser for indie hackers.

The Web is closed source. If you want to influence how social media works, you have to work at Facebook or Twitter. For search, Google. Control is in the hands of companies, rather than the users themselves.

With Beaker, we have a new Web protocol: the [Decentralized Archive Transport](https://datprotocol.com). "Dat." It creates sites on demand, for free, and then shares them from the device. No servers required. That's our innovation.

![Beakers Protocols](https://cloud.githubusercontent.com/assets/2289/22560648/3defed5c-e92a-11e6-93f8-956cafafe3be.jpg)

When you visit a Dat site in Beaker, you download the files. The site is yours, forever. You can save it, fork it, modify it, and share your new version for free. It's all open-source.

So that's what it's about: We're making a browser for open-source Websites. We want it to be a toolkit for social hacking.

## Who should be using Beaker?

Hackers. Modders. Creative types. People who like to tinker.

## How do I create a new project that uses Dat?

We've got [a command-line tool called bkr](https://github.com/beakerbrowser/bkr) that's kind of like git + npm. Here's creating a site:

```bash
$ cd ~/my-site
$ bkr init
$ echo "Hello, world!" > index.html
$ bkr publish
```

And here's forking a site:

```bash
$ bkr fork dat://0ff7d4c7644d0aa19914247dc5dbf502d6a02ea89a5145e7b178d57db00504cd/ ~/my-fork
$ cd ~/my-fork
$ echo "My fork has no regard for the previous index.html!" > index.html
$ bkr publish
```

Those sites then get hosted out of your browser. It's a little like BitTorrent; you share the sites in a P2P mesh.

If you want a GUI, we have some basic tools built into the browser, but we're pushing those tools into userland. It's all going to be moddable user apps.

## Why did you choose to build Beaker on Electron?

It was obvious for this project. If I forked Chrome myself, I'd be writing C++ right now! Nobody wants to do that. I know the Web stack, and I can work quickly with it. It's a no-brainer.

The truth is, I'm not sure I could do any of this without Electron. It's a great piece of software.

## What are some challenges you've faced while building Beaker?

Half of it is poking at the tools and figuring out how much I can get away with.

Making the browser itself was pretty easy. Electron is practically a toolkit for making browsers. ...Except for the browser tabs; that took me forever to get right. I finally broke down and learned how to do SVGs. It's much better looking, but it took 3 or 4 iterations before I got that right.

## In what areas should Electron be improved?

It'd be really great if I could dock the devtools inside a webview.

## What's coming next in Beaker?

Secure DNS names for Dat sites. A socially configurable URL scheme, called the ["app scheme."](https://github.com/beakerbrowser/beaker/wiki/App-Scheme) More Dat APIs.

## For folks who may be interested in contributing to the project, in what areas does Beaker need help?

We have lots of open issues. Don't be afraid to ping me. #beakerbrowser on freenode. We keep a [page for contributors](https://beakerbrowser.com/docs/team.html) and we'll add you to it. And if you visit Austin, I'll buy you a beer.

## Any Electron tips that might be useful to other developers?

1. Use the build tooling that's out there. You don't want to wrestle with your own solutions, trust me. Use electron-builder. Use a boilerplate repo.
2. If you need to open an issue in the Electron repo, go the extra mile to make it easy to reproduce. You'll get a response much more quickly, and the team will appreciate it. Even better, try fixing it yourself. It's actually pretty interesting to see the innards.
3. Read through all the guides and advanced docs at least once.
4. Don't build a browser, it's a saturated market.

