---
version: v1.0.1
category: Tutorial
title: 'Using Selenium and Webdriver'
redirect_from:
    - /docs/v0.24.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.25.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.26.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.27.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.28.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.29.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.30.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.31.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.32.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.33.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.34.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.35.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.3/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.4/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.5/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.6/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.7/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.8/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.9/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.10/tutorial/using-selenium-and-webdriver/
    - /docs/v0.36.11/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.0/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.1/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.2/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.3/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.4/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.5/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.6/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.7/tutorial/using-selenium-and-webdriver/
    - /docs/v0.37.8/tutorial/using-selenium-and-webdriver/
    - /docs/v1.0.0/tutorial/using-selenium-and-webdriver/
    - /docs/v1.0.1/tutorial/using-selenium-and-webdriver/
    - /docs/latest/tutorial/using-selenium-and-webdriver/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/using-selenium-and-webdriver.md'
excerpt: "WebDriver is an open source tool for automated testing of web apps across many
browsers. It provides capabilities for navigating to web pages, user input,
JavaScript execution, and more. ChromeDriver is a standalone server which
implements WebDriver&apos;s wire protocol for Chromium. It is being developed by
members of the Chromium and WebDriver teams."
---

# Using Selenium and WebDriver

From [ChromeDriver - WebDriver for Chrome][chrome-driver]:

> WebDriver is an open source tool for automated testing of web apps across many
> browsers. It provides capabilities for navigating to web pages, user input,
> JavaScript execution, and more. ChromeDriver is a standalone server which
> implements WebDriver's wire protocol for Chromium. It is being developed by
> members of the Chromium and WebDriver teams.

In order to use `chromedriver` with Electron you have to tell it where to
find Electron and make it think Electron is the Chrome browser.

## Setting up with WebDriverJs

[WebDriverJs](https://code.google.com/p/selenium/wiki/WebDriverJs) provides
a Node package for testing with web driver, we will use it as an example.

### 1. Start ChromeDriver

First you need to download the `chromedriver` binary, and run it:

```bash
$ ./chromedriver
Starting ChromeDriver (v2.10.291558) on port 9515
Only local connections are allowed.
```

Remember the port number `9515`, which will be used later

### 2. Install WebDriverJS

```bash
$ npm install selenium-webdriver
```

### 3. Connect to ChromeDriver

The usage of `selenium-webdriver` with Electron is basically the same with
upstream, except that you have to manually specify how to connect chrome driver
and where to find Electron's binary:

```javascript
const webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  .usingServer('http://localhost:9515')
  .withCapabilities({
    chromeOptions: {
      // Here is the path to your Electron binary.
      binary: '/Path-to-Your-App.app/Contents/MacOS/Electron',
    }
  })
  .forBrowser('electron')
  .build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Google Search';
 });
}, 1000);

driver.quit();
```

## Setting up with WebdriverIO

[WebdriverIO](http://webdriver.io/) provides a Node package for testing with web
driver.

### 1. Start ChromeDriver

First you need to download the `chromedriver` binary, and run it:

```bash
$ chromedriver --url-base=wd/hub --port=9515
Starting ChromeDriver (v2.10.291558) on port 9515
Only local connections are allowed.
```

Remember the port number `9515`, which will be used later

### 2. Install WebdriverIO

```bash
$ npm install webdriverio
```

### 3. Connect to chrome driver

```javascript
const webdriverio = require('webdriverio');
var options = {
    host: "localhost", // Use localhost as chrome driver server
    port: 9515,        // "9515" is the port opened by chrome driver.
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          binary: '/Path-to-Your-App/electron', // Path to your Electron binary.
          args: [/* cli arguments */]           // Optional, perhaps 'app=' + /path/to/your/app/
        }
    }
};

var client = webdriverio.remote(options);

client
    .init()
    .url('http://google.com')
    .setValue('#q', 'webdriverio')
    .click('#btnG')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
```

## Workflow

To test your application without rebuilding Electron, simply
[place](https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md)
your app source into Electron's resource directory.

Alternatively, pass an argument to run with your electron binary that points to
your app's folder. This eliminates the need to copy-paste your app into
Electron's resource directory.

[chrome-driver]: https://sites.google.com/a/chromium.org/chromedriver/
