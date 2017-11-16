---
title: Electron 1.0
author: jlord
date: '2016-05-11'
---

For the last two years, Electron has helped developers build cross platform
desktop apps using HTML, CSS, and JavaScript. Now we're excited to share a major
milestone for our framework and for the community that created it. The release
of Electron 1.0 is now available from [electronjs.org][electronjs.org].

---

![Electron 1.0](https://cloud.githubusercontent.com/assets/378023/15007352/315f5eea-1213-11e6-984e-21f5dab31267.png)

Electron 1.0 represents a major milestone in API stability and maturity. This
release allows you to build apps that act and feel truly native on Windows,
Mac, and Linux. Building Electron apps is easier than ever with new docs,
new tools, and a new app to walk you through the Electron APIs.

If you're ready to build your very first Electron app, here's a [quick start guide][quick-start]
to help you get started.

We are excited to see what you build next with Electron.

## Electron's Path

We released Electron when we launched [Atom][atom] a little over two years ago.
Electron, then known as Atom Shell, was the framework we'd built Atom on top of.
In those days, Atom was the driving force behind the features and functionalities
that Electron provided as we pushed to get the initial Atom release out.

Now driving Electron is a growing community of developers and companies building
everything from [email][nylas], [chat][slack], and [Git apps][gitkraken] to
[SQL analytics tools][wagon], [torrent clients][webtorrent], and [robots][jibo].

In these last two years we've seen both companies and open source projects
choose Electron as the foundation for their apps. Just in the past year, Electron
has been downloaded over 1.2 million times. [Take a tour][apps] of some
of the amazing Electron apps and add your own if it isn't already there.

![Electron downloads](https://cloud.githubusercontent.com/assets/378023/15037731/af7e87e0-12d8-11e6-94e2-117c360d0ac9.png)

## Electron API Demos

Along with the 1.0 release, we're releasing a new app to help you explore the
Electron APIs and learn more about how to make your Electron app feel native.
The [Electron API Demos][electron-api-demos] app contains code snippets to help
you get your app started and tips on effectively using the Electron APIs.

[![Electron API Demos](https://cloud.githubusercontent.com/assets/378023/15138216/590acba4-16c9-11e6-863c-bdb0d3ef3eaa.png)][electron-api-demos]

## Devtron

We've also added a new extension to help you debug your Electron
apps. [Devtron][devtron] is an open-source extension to the [Chrome Developer Tools][devtools]
designed to help you inspect, debug, and troubleshoot your Electron app.

[![Devtron](https://cloud.githubusercontent.com/assets/378023/15138217/590c8b06-16c9-11e6-8af6-ef96299e85bc.png)][devtron]

### Features

  * **Require graph** that helps you visualize your app's internal and external
    library dependencies in both the main and renderer processes
  * **IPC monitor** that tracks and displays the messages sent and received
    between the processes in your app
  * **Event inspector** that shows you the events and listeners that are registered
    in your app on the core Electron APIs such as the window, app, and processes
  * **App Linter** that checks your apps for common mistakes and missing
    functionality

## Spectron

Finally, we're releasing a new version of [Spectron][spectron], the integration
testing framework for Electron apps.

[![Spectron](https://cloud.githubusercontent.com/assets/378023/15138218/590d50c2-16c9-11e6-9b54-2d73729fe189.png)][spectron]

Spectron 3.0 has comprehensive support for the entire Electron API allowing you
to more quickly write tests that verify your application's behavior in various
scenarios and environments. Spectron is based on [ChromeDriver][chromedriver]
and [WebDriverIO][webdriver] so it also has full APIs for page navigation, user
input, and JavaScript execution.

## Community

Electron 1.0 is the result of a community effort by hundreds of developers.
Outside of the core framework, there have been hundreds of libraries and tools
released to make building, packaging, and deploying Electron apps easier.

There is now a new [community][community] page that lists many of the awesome
Electron tools, apps, libraries, and frameworks being developed. You can also
check out the [Electron][electron-org] and [Electron Userland][electron-userland]
organizations to see some of these fantastic projects.

New to Electron? Watch the Electron 1.0 intro video:

<div class="video"><iframe src="https://www.youtube.com/embed/8YP_nOCO-4Q?rel=0" frameborder="0" allowfullscreen></iframe></div>

[apps]: https://electronjs.org/apps
[atom]: https://atom.io
[chromedriver]: https://sites.google.com/a/chromium.org/chromedriver
[community]: https://electronjs.org/community
[devtools]: https://developer.chrome.com/devtools
[devtron]: https://electronjs.org/devtron
[electronjs.org]: https://electronjs.org
[electron-api-demos]: https://github.com/electron/electron-api-demos
[electron-org]: https://github.com/electron
[electron-userland]: https://github.com/electron-userland
[gitkraken]: https://www.gitkraken.com
[jibo]: https://www.jibo.com
[nylas]: https://nylas.com
[quick-start]: https://electronjs.org/docs/tutorial/quick-start
[slack]: https://slack.com
[spectron]: https://electronjs.org/spectron
[wagon]: https://www.wagonhq.com
[webtorrent]: https://webtorrent.io/desktop
[webdriver]: http://webdriver.io

