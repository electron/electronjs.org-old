---
title: New Electron Release Cadence
author: sofianguy
date: '2019-05-14'
---

🎉 Electron is moving to release a new stable version every 12 weeks! 🎉

---

## ⚡️ Wow that's quick! But why?

Simply put, Chromium doesn't stop shipping so Electron is not going to slow down either.

## 🚀 Why is 12 weeks the chosen cadence?

Right now we are planning to upgrade every other Chromium version. Chromium ships a new stable version at a very quick pace of every 6 weeks. We have adjusted our stable release dates to match every other Chromium stable release. Up first, Electron v6.0.0 will include M76 and is scheduled for stable release on [July 30, 2019](https://electronjs.org/docs/tutorial/electron-timelines#600-release-schedule), the same release day as [Chromium M76](https://www.chromium.org/developers/calendar).

## 🚧 What are the side effects of this new release cadence?

We recommend downstream apps to start being more conscious of Electron upgrades. [Our policy](https://electronjs.org/docs/tutorial/support#supported-versions) to support the latest three major versions will remain unchanged. For example, when [v6.0.0 goes stable on July 30, 2019](https://electronjs.org/docs/tutorial/electron-timelines#600-release-schedule) that means we will support v6.x, v5.x, and v4.x and v3.x will become end-of-life.

## 💬 App Feedback Program

Please consider joining our [App Feedback Program](https://electronjs.org/blog/app-feedback-program) to help us with testing our beta releases and stabilization. Projects who participate in this program test Electron betas on their apps; and in return, the new bugs they find are prioritized for the stable release.

## 📝 A bit of history on Electron releases

The decisions around stable releases before v3.0.0 were unplanned and unpredictable. We set release dates internally for v3.0.0 and v4.0.0. Earlier this year, we decided to publicize our stable release date for the first time for [Electron v5.0.0](https://electronjs.org/blog/electron-5-0-timeline). Announcing our stable release dates was positively received overall and we're excited to continue doing that for future releases.

After we implemented [Electron governance](https://electronjs.org/blog/governance) a few months ago, Electron maintainers have more structure in the day-to-day work. The [Upgrades Working Group](https://github.com/electron/governance/tree/master/wg-upgrades) and [Releases Working Group](https://github.com/electron/governance/tree/master/wg-releases) are working together to get us catching up to Chromium, starting with our 12 week release cadence.

Take a look at the graph below to see where this new cadence will put us in comparison to Chromium's cadence.

<img alt="line graph comparing Electron versus Chromium versions" src="https://user-images.githubusercontent.com/2138661/57543187-86340700-7308-11e9-9745-a9371bb29275.png">

📨 If you have questions, please mail us at [info@electronjs.org](mailto:info@electronjs.org).
