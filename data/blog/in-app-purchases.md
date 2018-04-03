---
title: "New in Electron 2: In-App Purchases"
author: zeke
date: '2018-04-04'
---
  
The new Electron 2.0 release line is [packed](https://github.com/electron/electron/releases/tag/v2.0.0-beta.1) with new features and fixes. One of the highlights from this new major version is a new
[in-app purchases API](https://github.com/electron/electron/blob/master/docs/api/in-app-purchase.md)
for Apple's [Mac App Store](https://support.apple.com/en-us/HT202023).

---

In-app purchases enable extra content or subscriptions to be purchased directly 
from within apps. This gives developers an easy way to embrace the
[freemium business model](https://developer.apple.com/app-store/freemium-business-model/), 
wherein users pay nothing to download an app and are offered optional 
in-app purchases for premium features, additional content, or subscriptions.
  
The new API was added to Electron by community contributor
[Adrien Fery](https://github.com/AdrienFery) to enable in-app purchases in 
[Amanote](https://amanote.com/), a note-taking 
Electron app built for students. Amanote is free to download, and includes 
features like mathematical formulae, LaTeX, synchronizing audio to slides, and
more.

Since adding in-app purchase support to the Mac version of Amanote, Adrien 
has noted a **40% increase in sales**!

## Considerations

If you're developing an Electron app and considering distributing it in app 
stores, here are a few points to keep in mind:

- Some Mac users only download from the Mac App Store, because they don't trust third-party applications.
- Apple doesn't allow the use of external checkout systems.
- Apple takes a [30% cut](https://developer.apple.com/in-app-purchase/) of your sales
- The Microsoft Store also takes a [30% cut](https://docs.microsoft.com/en-us/windows/uwp/publish/getting-paid-apps)
  
## Windows Could Be Next

Up next, Adrien is hoping to open a new revenue channel for Amanote by adding 
support for Microsoft Store in-app purchases in Electron. Stay tuned for 
developments on that!