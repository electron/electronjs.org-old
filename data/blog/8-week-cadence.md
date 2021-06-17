---
title: New Electron Release Cadence
author: VerteDinde
date: '2021-07-01'
---

Beginning in 2022, Electron will release a new major stable version every 8 weeks.

---

In 2019, Electron moved to a 12 week release cycle to match Chromium's 6 week release cycle. In the spring, Chromium announced that it would further speed up that cycle.

Chrome now plans to release a new milestone every 4 weeks, starting with Chrome 94 in Q3 of 2021. In turn, the Electron team is updating our major release cadence to match. Beginning in 2022, Electron will release a new major stable version every 8 weeks.

## Why Change the Cadence?

Why are we making this change? Simply put, Chromium doesn't stop shipping, and Electron wants to match the pace.

Previously, Chromium releases on a consistent 6-week [schedule](https://chromiumdash.appspot.com/schedule). To deliver the most up-to-date versions of Chromium in Electron, our schedule needs to track theirs. More information around Chromium's release cycle can be found [here](https://chromium.googlesource.com/chromium/src/+/master/docs/process/release_cycle.md).

Every new Chromium release contains new features, bug fixes / security fixes, and V8 improvements. We want you, as app developers, to have these changes in a timely manner, so our stable release dates will continue to match every other Chromium stable release.

As an app developer, you'll have access to new Chromium and V8 features and fixes sooner than before.

## Addressing Concerns 

There's a reason we're publishing this post well before the first 8 week release cycle is scheduled. We know that a faster release cycle will have a real impact on Electron apps - some of which may already find our major release cadence aggressive.

We've tried to address common concerns below:

### ❓ The existing 12 week release schedule already moves quickly. What steps are the team taking to make upgrading easier?

One plus of more frequent releases is having _smaller_ releases. We understand that upgrading Electron's major versions can be difficult; we hope that, by releasing more frequently, we can introduce fewer major Chromium and Node changes, as well as fewer breaking changes, per release.

### ❓ Will Electron extend the number of supported LTS versions?

We'll continue to support the latest three major versions, as well as a beta and nightly release.


## What does this mean for my Electron app?

Below is the planned release cycle for the next four major releases of Electron:

| Electron  | Chromium   | Release     | Weeks Cycle |
| --------- | ---------- | ----------- | ----------- |
| E14       | M93        | 2021-08-31  | 14          |
| E15       | M96        | 2021-11-16  | 11          |
| E16       | M98        | 2022-02-01  | 11          |
| E17       | M100       | 2022-03-29  | 8           |


The Electron team will [continue to support](https://electronjs.org/docs/tutorial/support#supported-versions) the latest three major versions. For example, when [v17.0.0 goes stable on March 29, 2022](https://electronjs.org/docs/tutorial/electron-timelines#600-release-schedule), we will support v17.x, v16.x, and v15.x, while v14.x will reach End-Of-Life.

[is it worth re-opening the App Feedback Program?]


## Questions?

📨 If you have questions or concerns, please mail us at [info@electronjs.org](mailto:info@electronjs.org). Feedback is important to us, and we want to hear from you!
