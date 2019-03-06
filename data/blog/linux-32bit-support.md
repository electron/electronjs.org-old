---
title: Discontinuing support for 32-bit Linux
author: felixrieseberg
date: '2019-03-04'
---

The Electron team will discontinue support for 32-bit Linux (ia32 / i386) starting with Electron v4.0. The last version of Electron that supports 32-bit based installations of Linux is Electron v3.1, which will receive support releases until Electron v6 is released. Support for 64-bit based Linux and `armv7l` will continue unchanged.

---

## What exactly is Electron no longer supporting?

You may have seen the description "64-bit" and "32-bit" as stickers on your computer or as options for downloading software. The term is used to describe a specific computer architecture. Most computers made in the 1990s and early 2000s were made with CPUs that were based on the 32-bit architecture, while most computers made later were based on the newer and more powerful 64-bit architecture. The Nintendo 64 (get it?) and the PlayStation 2 were the first widely available consumer devices with the new architecture, computers sold after 2010 contained almost exclusively 64-bit processors. As a result, support has been shrinking: Google stopped releasing Chrome for 32-bit Linux in March 2016, Canonical stopped providing 32-bit desktop images in 2017 and dropped support for 32-bit altogether with Ubuntu 18.10. Arch Linux, elementary OS, and other prominent Linux distributions have already dropped support for the aging processor architecture.

Until now, Electron has provided and supported builds that run on the older 32-bit architecture. From release v4.0 onwards, the Electron team will no longer be able to provide binaries or support for 32-bit Linux.

Electron has always been a vibrant open source project and we continue to support and encourage developers interested in building Electron for exotic architectures.

## What does that mean for developers?

If you are not currently providing 32-bit distributions of your app for Linux, no action is required.

Projects which ship 32-bit Linux Electron applications will need to decide how to proceed. 32-bit Linux will be supported on Electron 3 [until](https://electronjs.org/docs/tutorial/support#supported-versions) the release of Electron 6, which gives some time to make decisions and plans.

## What does that mean for users?

If you are a Linux user and not sure whether or not you're running a 64-bit based system, you are likely running on a 64-bit based architecture. To make sure, you can run the `lscpu` or `uname -m` commands in your terminal. Either one will print your current architecture.

If you are using Linux on a 32-bit processor, you have likely already encountered difficulties finding recently released software for your operating system. The Electron team joins other prominent members in the Linux community by recommending that you upgrade to a 64-bit based architecture.
