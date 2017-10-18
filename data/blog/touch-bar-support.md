---
title: Touch Bar Support
author: kevinsawicki
date: '2017-03-08'
---

The Electron [1.6.3] beta release contains initial support for the macOS [Touch Bar].

---

The new Touch Bar API allows you to add buttons, labels, popovers, color
pickers, sliders, and spacers. These elements can be dynamically updated and
also emit events when they are interacted with.

This is the first release of this API so it will be evolving over the next
few Electron releases. Please check out the release notes for further updates
and open [issues](https://github.com/electron/electron/issues) for any problems
or missing functionality.

You can install this version via `npm install electron@beta` and learn
more about it in the [TouchBar](https://github.com/electron/electron/blob/master/docs/api/touch-bar.md)
and [BrowserWindow](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsettouchbartouchbar-macos)
Electron docs.

Big thanks to [@MarshallOfSound](https://github.com/MarshallOfSound) for contributing this to Electron. :tada:

## Touch Bar Example

![Touch Bar Gif](https://cloud.githubusercontent.com/assets/671378/23723516/5ff1774c-03fe-11e7-97b8-c693a0004dc8.gif)

Below is an example of creating a simple slot machine game in the touch bar.
It demonstrates how to create a touch bar, style the items, associate it with a
window, handle button click events, and update the labels dynamically.

```js
const {app, BrowserWindow, TouchBar} = require('electron')

const {TouchBarButton, TouchBarLabel, TouchBarSpacer} = TouchBar

let spinning = false

// Reel labels
const reel1 = new TouchBarLabel()
const reel2 = new TouchBarLabel()
const reel3 = new TouchBarLabel()

// Spin result label
const result = new TouchBarLabel()

// Spin button
const spin = new TouchBarButton({
  label: '🎰 Spin',
  backgroundColor: '#7851A9',
  click: () => {
    // Ignore clicks if already spinning
    if (spinning) {
      return
    }

    spinning = true
    result.label = ''

    let timeout = 10
    const spinLength = 4 * 1000 // 4 seconds
    const startTime = Date.now()

    const spinReels = () => {
      updateReels()

      if ((Date.now() - startTime) >= spinLength) {
        finishSpin()
      } else {
        // Slow down a bit on each spin
        timeout *= 1.1
        setTimeout(spinReels, timeout)
      }
    }

    spinReels()
  }
})

const getRandomValue = () => {
  const values = ['🍒', '💎', '7️⃣', '🍊', '🔔', '⭐', '🍇', '🍀']
  return values[Math.floor(Math.random() * values.length)]
}

const updateReels = () => {
  reel1.label = getRandomValue()
  reel2.label = getRandomValue()
  reel3.label = getRandomValue()
}

const finishSpin = () => {
  const uniqueValues = new Set([reel1.label, reel2.label, reel3.label]).size
  if (uniqueValues === 1) {
    // All 3 values are the same
    result.label = '💰 Jackpot!'
    result.textColor = '#FDFF00'
  } else if (uniqueValues === 2) {
    // 2 values are the same
    result.label = '😍 Winner!'
    result.textColor = '#FDFF00'
  } else {
    // No values are the same
    result.label = '🙁 Spin Again'
    result.textColor = null
  }
  spinning = false
}

const touchBar = new TouchBar([
  spin,
  new TouchBarSpacer({size: 'large'}),
  reel1,
  new TouchBarSpacer({size: 'small'}),
  reel2,
  new TouchBarSpacer({size: 'small'}),
  reel3,
  new TouchBarSpacer({size: 'large'}),
  result
])

let window

app.once('ready', () => {
  window = new BrowserWindow({
    frame: false,
    titleBarStyle: 'hidden-inset',
    width: 200,
    height: 200,
    backgroundColor: '#000'
  })
  window.loadURL('about:blank')
  window.setTouchBar(touchBar)
})
```

[1.6.3]: https://github.com/electron/electron/releases/tag/v1.6.3
[Touch Bar]: https://developer.apple.com/macos/touch-bar

