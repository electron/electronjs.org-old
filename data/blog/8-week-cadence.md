---
title: New Electron Release Cadence
author: VerteDinde
date: '2021-07-14'
---

Beginning in September 2021, Electron will release a new major stable version every 8 weeks.

---

In 2019, Electron [moved to a 12 week release cycle](https://www.electronjs.org/blog/12-week-cadence) to match Chromium's 6 week release cycle. Recently, both Chrome and Microsoft announced changes that made us reconsider Electron's current release cadence:

1. Chromium plans to [release a new milestone every **4 weeks**, starting with Chrome 94 on September 21st, 2021.](https://blog.chromium.org/2021/03/speeding-up-release-cycle.html) This release cadence also adds a new Extended Stable option every 8 weeks, which will contain all updated security fixes.

2. The Microsoft Store will [require Chromium-based apps to be no older than within 2 major versions](https://docs.microsoft.com/en-us/windows/uwp/publish/store-policies#102-security). As an example, if the latest released major version of Chromium is 85, any browser based on Chromium must be on at least Chromium version 83 or higher. **This rule includes Electron apps.**

**Beginning in September 2021, Electron will release a new major stable version every 8 weeks**, to match Chromium's 8 week Extended Stable releases.

Our first release with Chromium Extended Stable will be **Electron 15** on **September 21st, 2021**.

Knowing that a release cadence change will impact other downstream applications, we wanted to let our developer community know as soon as possible. Read on for more details about our 2021 release schedule.

## Electron 15: Temporary Alpha

Given that our original Electron 15 release targeted a non-Extended Stable version (Chromium's Extended Stable versions are based on their even-numbered versions), we needed to change our original target release date. However, an Electron app must use the most recent 2 major versions of Chromium to be accepted to the Microsoft Store, which made waiting for two Chromium versions untenable.

With these two requirements, our team faced a timing dilemma. Moving Electron 15 to include Chromium M94 would allow app developers to get on the very first Extended Stable version of Chromium; however, it would also shorten the beta-to-stable cycle to only 3 weeks.

To help with this switchover, Electron will offer a temporary **alpha build**, only for the Electron 15 release. This alpha build will allow developers more time to test and plan for an Electron 15 release, with a more stable build than our current nightlies.

The alpha channel build will ship for **Electron 15** on **July 20th, 2021**. It will transition to a beta release on **September 1st, 2021**  with a stable release target of **September 21st, 2021**. Subsequent Electron releases will not have alpha releases.

## 2021 Plan for Releases

Below is our current release schedule for 2021:

| Electron | Chrome | Alpha Release | Beta Release | Stable Release | Stable Cycle (Weeks) |
| -------- | ------ | ----- | ---- | ------ | -------- |
| E13 | M91 | -          | 2021-Mar-05 | 2021-May-25 | 12 |
| E14 | M93 | -          | 2021-May-26 | 2021-Aug-31 | 14 |
| E15 | M94 | 2021-Jul-20 | 2021-Sep-01 | 2021-Sep-21 | 9 (includes alpha) |
| E16 | M96 |  - | 2021-Sep-22 | 2021-Nov-16 | 8 |
| E17 | M98 |  - | 2021-Nov-17 | 2022-Feb-01 | 11 |

Adding the alpha channel extends the development time before Electron 15's launch from 3 weeks to 9 weeks - closer to our new 8 week cycle, while still meeting the requirements for Windows Store submission.

To further help app developers, **for the remainder of 2021 until May 2022, we will also be extending our supported versions policy from the latest 3 versions to the latest 4 versions of Electron.** That means that even if you can't immediately alter your upgrade schedule, older versions of Electron will still receive security updates and fixes.

## Addressing Concerns 

There's a reason we're publishing this post well before this release cycle change is scheduled. We know that a faster release cycle will have a real impact on Electron apps - some of which may already find our major release cadence aggressive.

We've tried to address common concerns below:

#### ❓ Why even make this change? Why not keep the 12 week release cadence?

To deliver the most up-to-date versions of Chromium in Electron, our schedule needs to track theirs. More information around Chromium's release cycle can be found [here](https://chromium.googlesource.com/chromium/src/+/master/docs/process/release_cycle.md).

Additionally, the current 12 week release cadence would be untenable with the Microsoft Store's new submission requirements. Even apps on the latest stable version of Electron would experience a roughly two week period where their app may be rejected under the new security requirements.

Every new Chromium release contains new features, bug fixes / security fixes, and V8 improvements. We want you, as app developers, to have these changes in a timely manner, so our stable release dates will continue to match every other Chromium stable release. As an app developer, you'll have access to new Chromium and V8 features and fixes sooner than before.

#### ❓ The existing 12 week release schedule already moves quickly. What steps are the team taking to make upgrading easier?

One advantage of more frequent releases is having _smaller_ releases. We understand that upgrading Electron's major versions can be difficult. We hope that smaller releases will introduce fewer major Chromium and Node changes, as well as fewer breaking changes, per release.

#### ❓ Will there been an alpha release available for future Electron versions?

There are no plans to support a permanent alpha release at this time. This alpha is only intended for Electron 15, as a way to help developers upgrade more easily in the shortened release period.

#### ❓ Will Electron extend the number of supported versions?

We will be extending our supported version policy from the latest three versions to the latest four versions of Electron until May 2022, with the release of Electron 19. After Electron 19 is released, we'll return to [supporting the latest three major versions](https://www.electronjs.org/docs/tutorial/support#supported-versions), as well as the beta and nightly releases.

| E13 (May'21) | E14 (Aug'21) | E15 (Sep'21) | E16 (Nov'21) | E17 (Feb'22) | E18 (Mar'22) | E19 (May'22) |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 13.x.y | 14.x.y | 15.x.y | 16.x.y | 17.x.y | 18.x.y | 19.x.y |
| 12.x.y | 13.x.y | 14.x.y | 15.x.y | 16.x.y | 17.x.y | 18.x.y |
| 11.x.y | 12.x.y | 13.x.y | 14.x.y | 15.x.y | 16.x.y | 17.x.y |
| --     | --     | 12.x.y | 13.x.y | 14.x.y | 15.x.y |  -- |


## Questions?

📨 If you have questions or concerns, please mail us at [info@electronjs.org](mailto:info@electronjs.org) or [join our Discord](https://discord.com/invite/electron). We know this is a change that will impact many apps and developers, and your feedback is very important to us. We want to hear from you!
