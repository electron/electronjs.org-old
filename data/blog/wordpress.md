---
title: 'Project of the Week: WordPress Desktop'
author: 
  - mkaz
  - johngodley
  - zeke
date: '2017-02-28'
---

This week we caught up with folks at [Automattic](https://automattic.com/) to
talk about [WordPress Desktop](https://apps.wordpress.com/desktop/), an
open-source desktop client for managing WordPress content.

---

[![WordPress Apps](https://cloud.githubusercontent.com/assets/2289/23391881/ea54d52e-fd2c-11e6-86ec-98fe466d5c5c.gif)](https://apps.wordpress.com/desktop/)

## Everyone knows about WordPress, but what is WordPress Desktop?

The [WordPress.com Desktop app](https://apps.wordpress.com/desktop/) provides a seamless cross-platform experience that allows you to focus on your content and design with no browser tabs to distract you — or to keep your sites sidelined but accessible. In combination with our browser support and mobile app you can build your site anywhere, in whatever way helps you get your work done.

## Why build a Desktop app for managing WordPress sites? Couldn't it all be web-based?

It's actually using exactly the same technology you get when visiting [WordPress.com](https://wordpress.com) in your browser. However, it's all locally hosted, so it has minimal load times. With the benefit of native features such as being in your dock, notifications, etc., you really can focus on your WordPress sites and blogging.

## Why did you choose to build WordPress Desktop on Electron?

At the end of 2015 we rebuilt much of WordPress.com in the form of [Calypso](https://github.com/automattic/wp-calypso), an open-source modern JavaScript app using React. We started looking at Electron and with some changes to Calypso were able to get it running locally. It was a compelling  experience and we thought there was a lot of value in developing it further.

We had several teams working on Calypso. To make a full multi-platform GUI client that matched this using traditional desktop technologies would have taken more work. By using Electron, a small team of 2-4 of us were able to leverage the other team’s efforts and build the Desktop app in a couple of months.

## What are some challenges you've faced while building WordPress Desktop?

We got an initial version of the app running very quickly, but tuning it to behave optimally as a desktop app took a lot more time. One big challenge with the app is that you're actually running a copy of Calypso on your own machine - it’s purely an API driven UI. There was a lot of bridging work involved in this, and changes were fed back to Calypso itself.

Additionally a lot of effort was spent packaging the app for different platforms - we provide Windows, macOS, and Linux versions - and there are sufficient differences to make this tricky.

At the time Electron was relatively new and we kept running into issues that were shortly fixed (sometimes the same day!)

## In what areas should Electron be improved?

Electron already provides most of what we need for the Desktop app, and it's progressed rapidly since we started using it. That said, there are some areas that are taken for granted in a desktop app, such as spell checking and find/replace, that are harder to replicate with Electron as-is.

We’d also love to see some of the newer Chrome technologies filtering down into Electron too. We’re particularly keen on experimenting with WebVR.

## What are your favorite things about Electron?

The main reason we chose Electron, and it's biggest strength, is the very active and open community. Automattic has always believed in open source. It is one of our core tenets, and the Electron project and community follows a lot of the core beliefs of being very open and positive.

## What's coming next in WordPress Desktop?

The great thing about our model is that the Desktop app benefits from any new Calypso feature - there are constant improvements. We’re hoping we can add additional features to the app such as offline support, which would really take the app into native territory, and better system notifications.

## Are there any teams at Automattic working on other Electron apps?

Yes, after our efforts on the Desktop app, the Simplenote team decided to use Electron to build desktop apps for Windows and Linux (a native Mac client already exists). The [Simplenote Electron app](https://github.com/Automattic/simplenote-electron) is also open source and available on Github.

We've also got an upcoming Raspberry Pi integration that uses Electron.

If any of that sounds interesting then we'd [love to hear from you](https://automattic.com/work-with-us/)!

## Any Electron tips that might be useful to other developers?

The process of shipping signed desktop software is relatively new to us, especially for Windows. we wrote up an article for [Code Signing a Windows App](https://mkaz.blog/code/code-signing-a-windows-application/) which includes the process and a few of the hurdles we went through to do it right.

