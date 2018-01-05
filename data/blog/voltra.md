---
title: 'Project of the Week: Voltra'
author: 
  - '0x00A'
  - aprileelcich
  - zeke
date: '2017-03-07'
---

This week we met with [Aprile Elcich](https://twitter.com/aprileelcich) and
[Paolo Fragomeni](https://twitter.com/0x00A) to talk about Voltra, an
Electron-powered music player.

---

## What is Voltra?

[Voltra](https://voltra.co/) is a music player for people who want to own their music. It’s also a store where you can discover and buy new music based on what you already own. It’s ad-free, cross-platform for desktop and mobile. It also doesn’t spy on you.

[![voltra-artistview](https://cloud.githubusercontent.com/assets/2289/23670061/4db0323c-031b-11e7-81fd-128e714e911c.jpg)](https://voltra.co/)

## Who is Voltra for?

Anyone who listens to music.

## What motivated you to create Voltra?

Radio has has always had a big share of listeners. It’s moving off the airwaves and onto the Internet. Now you can rent music on demand — it’s a radio revival! A lot of new products and services have emerged because of this, but streaming radio still leaves someone else in control of your music and how you experience it.

We wanted a product that was entirely focused on music you own. Something that made it easy to discover and buy new music directly from artists or labels.

## Is there a free version?

The desktop player is completely free. [Selling your music is also free!](https://voltra.co/artists) We are not ad-supported.

Since the app is free, we may open source it later on. Right now we don’t have the bandwidth to manage that. We also have very specific ideas for features and the direction we want to take things. We have an active beta community and we take our feedback to heart.

## How do you make money?

We have premium features!

Our [Voltra Audio Archive](https://voltra.co/premium/) is a cloud-backup service designed specifically for music. We don’t compress or share data blocks. Your music collection is physically backed up for you.

For artists and labels, our [Pro Membership](https://voltra.co/artists/pro) offers tools to help them reach more relevant audiences, such as analytics and professional artist webpages.

## What makes Voltra different?

Design and usability are incredibly important to us. We want to give listeners a distraction-free listening experience! There are a some interesting music players and stores out there. But many of them are more advanced and harder to use than their creators realize. We want to make Voltra accessible to as many people as possible.

We also don't take a cut from the artist or the label. That’s a key differentiator for us. It’s really important because it lowers the barrier for artists to get their music to market.

## What are some design & technical decisions you made?

While designing Voltra, we considered UI conventions from native apps and the web, we also thought a lot about what we could remove. We have an active private beta group who have given us critical feedback over the last few months.

We found that album art and photography are really important to people. Many players are just lists of files. One of the cool things about owning physical albums is the album art, and we wanted to put emphasis on this in the Voltra desktop app.

[![voltra-albumview](https://cloud.githubusercontent.com/assets/2289/23670056/4b0c18d4-031b-11e7-89e1-539e927a380d.jpg)](https://voltra.co/)

We also made sure not to mess with people's files. We use file watching so you can put your files wherever you want, and we don't rename them or move them for you. We have an embedded database to track the state of the watched directories so that we can track what's new, even when the process isn't running.

## What are some challenges you've faced while building Voltra?

We spend a lot of time focused on performance. We started with frameworks but moved to vanilla Javascript. In our experience, the generalized abstractions they provide outweigh the performance penalties and ceremony that they introduce.

We handle very large collections pretty well at this point. Large collections means possibly tens of thousands of images! Having Node.js’ file system module directly available from the render process made it really easy to lazy load and unload lots of images super quickly based on DOM events.

In general *[setImmediate]* and *[requestIdleCallback]* have been super important tools for performing lots of processing while keeping the UI responsive. More specifically, distributing CPU-bound tasks into separate processes really helps to keep the user interface responsive. For example, we moved the actual audio context into a separate process, communicating with it over [IPC] to avoid potential interruptions from a busy UI.

## Why did you choose to build Voltra on Electron?

The browser’s sandbox is too restricted for our app. But we are also developing a web player. So it’s a huge win that we can share almost 100% of the code between the two implementations.

We actually started by building a native app with Swift. The main problem we found was that we were reinventing a lot of things. The web has the world’s largest open source eco-system. So we pretty quickly switched to Electron.

Also, and most importantly, with Electron you develop once and it should Just Work™ on all the major platforms. It’s not guaranteed, but the cost of coding natively for each platform definitely outweighs any other costs that electron introduces.

## What are your favorite things about Electron?

**GTD!**: Having Node.js’ networking stack and Chromium’s presentation layer packaged together is a recipe for getting things done.

**Competency**: It’s just the web stack, so literally our whole team is involved in actually building the product.

**Community**:  There is a highly organized community that knows how to communicate really well! We feel pretty great about developing with support like that.

## In what areas could Electron be improved?

We would like to see Electron endorse a single packager. The packager is as important to Electron what the package manager is to Node. There are multiple packagers in user-land, each with interesting features but each with bugs. Consensus by the community would help to direct the energy being spent by contributors.

## What's coming next?

We‘re currently developing a mobile app, and working with artists and labels to add their music to the Voltra shop. Hey! If you’re an artist or label, [sign up now](https://admin.voltra.co/signup)! We plan on opening up the shop when we reach our goal of 10 million tracks.

[setImmediate]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
[requestIdleCallback]: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
[IPC]: https://electronjs.org/docs/glossary/#ipc

