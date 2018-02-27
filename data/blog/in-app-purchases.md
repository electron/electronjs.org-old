---
title: "New in Electron 2: In-App Purchases"
author: zeke
date: '2018-02-27'
---
  
Last week we published Electron 2.0.0-beta.1, a beta release packed with new

features and fixes. One of the highlights is

[a new API](https://github.com/electron/electron/blob/master/docs/api/in-app-purchase.md)

for making in-app purchases through Mac App Store.

  
---
  

This new API was added by community contributor

[Adrien Fery](https://github.com/AdrienFery) of

[Amaplex Software](http://www.amaplex.com/). We chatted with

Adrien to learn more about how his motivations for adding this new API,

how he implemented it, and what his company is using

it for.

  
  

The rest

  

https://github.com/electron/electron/pull/11292

  

https://github.com/electron/electron/blob/master/docs/api/in-app-purchase.md

  

https://amanote.com/

  

> Many iPhone, iPad, iPod touch, and Mac apps allow you to make in-app purchases, such as recurring subscriptions, in-game currency, or full game or app unlocks.

  

> In-app purchases are extra content or subscriptions that you can buy in apps on your iOS device or computer.

  
https://support.apple.com/en-us/HT202023
  

+// Copyright (c) 2017 Amaplex Software, Inc.

Amanote was created because there was no note-taking software for students. Add notes to slides, mathematical formula, Latex. Developed to help students take notes.

40,000 users. in four months

published on the mac app store.
first in Belgium and Italy in Education category
Apple doesn't allow the use of external checkout systems.

App is free to download. In the application, user can purchase a subscription to get new features.

Windows app too, but not in the store. They take 30% too.

Published to MAS because we can reach more users by organic search. Trying to get feature by Apple.

Some mac users only download from the app store, because they don't trust third-party applications.

Windows vs Mac: 50/50.

How do they find the Windows application? Website

Partnered with universites, asking to send an email about Amanote in exchange for a free account.

2 big universities, 4 small. 25,000 students.

Facebook ads.

Next step is to get feature or use search ads in app store.

First PR to electron. No problem.

Started in 2015. Got funding. Hiring developers.

40% increase in sales.

Plan to make Amanote compatible with iPad and Android. Going to try Cordova/PhoneGap.