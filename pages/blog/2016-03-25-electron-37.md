---
title: What's new in Electron 0.37
author: zeke
date: '2016-03-25'
---

Electron `0.37` was recently [released](https://github.com/electron/electron/releases) and included a major upgrade from Chrome 47 to Chrome 49 and also several new core APIs. This latest release brings in all the new features shipped in [Chrome 48](http://blog.chromium.org/2015/12/chrome-48-beta-present-to-cast-devices_91.html) and [Chrome 49](http://blog.chromium.org/2016/02/chrome-49-beta-css-custom-properties.html). This includes CSS custom properties, increased [ES6](http://www.ecma-international.org/ecma-262/6.0/) support, `KeyboardEvent` improvements, `Promise` improvements, and many other new features now available in your Electron app.

---

## What's New

### CSS Custom Properties

If you've used preprocessed languages like Sass and Less, you're probably familiar with *variables*, which allow you to define reusable values for things like color schemes and layouts. Variables help keep your stylesheets DRY and more maintainable.

CSS custom properties are similar to preprocessed variables in that they are reusable, but they also have a unique quality that makes them even more powerful and flexible: **they can be manipulated with JavaScript**. This subtle but powerful feature allows for dynamic changes to visual interfaces while still benefitting from [CSS's hardware acceleration](https://developer.mozilla.org/en-US/Apps/Fundamentals/Performance/Performance_fundamentals#Use_CSS_animations_and_transitions), and reduced code duplication between your frontend code and stylesheets.

For more info on CSS custom properties, see the [MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) and the
 [Google Chrome demo](https://googlechrome.github.io/samples/css-custom-properties/).

#### CSS Variables In Action

Let's walk through a simple variable example that can be tweaked live in your app.

```css
:root {
  --awesome-color: #A5ECFA;
}

body {
  background-color: var(--awesome-color);
}
```

The variable value can be retrieved and changed directly in JavaScript:

```js
// Get the variable value ' #A5ECFA'
let color = window.getComputedStyle(document.body).getPropertyValue('--awesome-color')

// Set the variable value to 'orange'
document.body.style.setProperty('--awesome-color', 'orange')
```

The variable values can be also edited from the **Styles** section of the development tools for quick feedback and tweaks:

![CSS properties in Styles tab](https://cloud.githubusercontent.com/assets/671378/13991612/1d10eb9c-f0d6-11e5-877b-c4dbc59f1209.gif){: .screenshot }

### `KeyboardEvent.code` Property

Chrome 48 added the new `code` property available on `KeyboardEvent` events that will be the physical key pressed independent of the operating system keyboard layout.

This should make implementing custom keyboard shortcuts in your Electron app more accurate and consistent across machines and configurations.

```js
window.addEventListener('keydown', function(event) {
  console.log(`${event.code} was pressed.`)
})
```

Check out [this example](https://googlechrome.github.io/samples/keyboardevent-code-attribute/) to see it in action.

### Promise Rejection Events

Chrome 49 added two new `window` events that allow you to be notified when an rejected [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) goes unhandled.

```js
window.addEventListener('unhandledrejection', function (event) {
  console.log('A rejected promise was unhandled', event.promise, event.reason)
})

window.addEventListener('rejectionhandled', function (event) {
  console.log('A rejected promise was handled', event.promise, event.reason)
})
```

Check out [this example](https://googlechrome.github.io/samples/promise-rejection-events/index.html) to see it in action.

### ES2015 Updates in V8

The version of V8 now in Electron incorporates [91% of ES2015](https://kangax.github.io/compat-table/es6/#chrome49). Here are a few interesting additions you can use out of the box—without flags or pre-compilers:

#### Default parameters

```js
function multiply(x, y = 1) {
  return x * y
}

multiply(5) // 5
```

#### Destructuring assignment

Chrome 49 added [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to make assigning variables and function parameters much easier.

This makes Electron requires cleaner and more compact to assign now:

##### Browser Process Requires

```js
const {app, BrowserWindow, Menu} = require('electron')
```

##### Renderer Process Requires

```js
const {dialog, Tray} = require('electron').remote
```

##### Other Examples

```js
// Destructuring an array and skipping the second element
const [first, , last] = findAll()

// Destructuring function parameters
function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(`${displayName} is ${name}`)
}

let user = {
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
}
whois(user) // "jdoe is John"

// Destructuring an object
let {name, avatar} = getUser()
```

## New Electron APIs

A few of the new Electron APIs are below, you can see each new API in the release notes for [Electron releases](https://github.com/electron/electron/releases).

#### `show` and `hide` events on `BrowserWindow`

These events are emitted when the window is either shown or hidden.

```js
const {BrowserWindow} = require('electron')

let window = new BrowserWindow({width: 500, height: 500})
window.on('show', function () { console.log('Window was shown') })
window.on('hide', function () { console.log('Window was hidden') })
```

#### `platform-theme-changed` on `app` for `OS X`

This event is emitted when the system’s [Dark Mode](https://discussions.apple.com/thread/6661740) theme is toggled.

```js
const {app} = require('electron')

app.on('platform-theme-changed', function () {
  console.log(`Platform theme changed. In dark mode? ${app.isDarkMode()}`)
})
```

#### `app.isDarkMode()` for `OS X`

This method returns `true` if the system is in Dark Mode, and `false` otherwise.

#### `scroll-touch-begin` and `scroll-touch-end` events to BrowserWindow for `OS X`

These events are emitted when the scroll wheel event phase has begun or has ended.

```js
const {BrowserWindow} = require('electron')

let window = new BrowserWindow({width: 500, height: 500})
window.on('scroll-touch-begin', function () { console.log('Scroll touch started') })
window.on('scroll-touch-end', function () { console.log('Scroll touch ended') })
```

