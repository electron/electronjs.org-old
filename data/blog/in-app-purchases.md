---
title: "New in Electron 2: In-App Purchases"
author: zeke
date: '2018-04-04'
---
  
The new Electron 2.0 release line is [packed](https://github.com/electron/electron/releases/tag/v2.0.0-beta.1) with new features and fixes. One of the highlights from this new major version is a new
[`inAppPurchase` API](https://github.com/electron/electron/blob/master/docs/api/in-app-purchase.md)
for Apple's [Mac App Store](https://support.apple.com/en-us/HT202023).

---

In-app purchases enable content or subscriptions to be purchased directly 
from within apps. This gives developers an easy way to embrace the
[freemium business model](https://developer.apple.com/app-store/freemium-business-model/), 
wherein users pay nothing to download an app and are offered optional 
in-app purchases for premium features, additional content, or subscriptions.
  
The new API was added to Electron by community contributor
[Adrien Fery](https://github.com/AdrienFery) to enable in-app purchases in 
[Amanote](https://amanote.com/), a note-taking Electron app for lectures and 
conferences. Amanote is free to download and allows clear and structured notes 
to be added to PDFs, with features like mathematical formulae, drawings, audio 
recording, and more.

Since adding in-app purchase support to the Mac version of Amanote, Adrien 
has noted a **40% increase in sales**!

## Getting Started

The new [`inAppPurchase`](https://github.com/electron/electron/blob/master/docs/api/in-app-purchase.md) API has already landed in the latest Electron beta:

```sh
npm i -D electron@beta
```

The docs for the API can be [found on GitHub](https://github.com/electron/electron/blob/master/docs/api/in-app-purchase.md),
and Adrien has been kind enough to write a tutorial on how to use the API. To
get started adding in-app purchases to your app, [see the tutorial](https://github.com/AdrienFery/electron/blob/a69bbe882aed1a5aee2b7910afe09900275b2bf6/docs/tutorial/in-app-purchases.md).

More [improvements to the API](https://github.com/electron/electron/pull/12464)
are in the works, and will soon be landing in an upcoming Electron beta release.

## Windows Could Be Next

Up next, Adrien is hoping to open a new revenue channel for Amanote by adding 
support for Microsoft Store in-app purchases in Electron. Stay tuned for 
developments on that!