---
version: v1.7.9
permalink: /docs/api/touch-bar/
category: API
redirect_from:
  - /docs/v0.37.8/api/touch-bar/
  - /docs/v0.37.7/api/touch-bar/
  - /docs/v0.37.6/api/touch-bar/
  - /docs/v0.37.5/api/touch-bar/
  - /docs/v0.37.4/api/touch-bar/
  - /docs/v0.37.3/api/touch-bar/
  - /docs/v0.37.1/api/touch-bar/
  - /docs/v0.37.0/api/touch-bar/
  - /docs/v0.36.12/api/touch-bar/
  - /docs/v0.36.11/api/touch-bar/
  - /docs/v0.36.10/api/touch-bar/
  - /docs/v0.36.9/api/touch-bar/
  - /docs/v0.36.8/api/touch-bar/
  - /docs/v0.36.7/api/touch-bar/
  - /docs/v0.36.6/api/touch-bar/
  - /docs/v0.36.5/api/touch-bar/
  - /docs/v0.36.4/api/touch-bar/
  - /docs/v0.36.3/api/touch-bar/
  - /docs/v0.36.2/api/touch-bar/
  - /docs/v0.36.0/api/touch-bar/
  - /docs/v0.35.5/api/touch-bar/
  - /docs/v0.35.4/api/touch-bar/
  - /docs/v0.35.3/api/touch-bar/
  - /docs/v0.35.2/api/touch-bar/
  - /docs/v0.35.1/api/touch-bar/
  - /docs/v0.34.4/api/touch-bar/
  - /docs/v0.34.3/api/touch-bar/
  - /docs/v0.34.2/api/touch-bar/
  - /docs/v0.34.1/api/touch-bar/
  - /docs/v0.34.0/api/touch-bar/
  - /docs/v0.33.9/api/touch-bar/
  - /docs/v0.33.8/api/touch-bar/
  - /docs/v0.33.7/api/touch-bar/
  - /docs/v0.33.6/api/touch-bar/
  - /docs/v0.33.4/api/touch-bar/
  - /docs/v0.33.3/api/touch-bar/
  - /docs/v0.33.2/api/touch-bar/
  - /docs/v0.33.1/api/touch-bar/
  - /docs/v0.33.0/api/touch-bar/
  - /docs/v0.32.3/api/touch-bar/
  - /docs/v0.32.2/api/touch-bar/
  - /docs/v0.31.2/api/touch-bar/
  - /docs/v0.31.0/api/touch-bar/
  - /docs/v0.30.4/api/touch-bar/
  - /docs/v0.29.2/api/touch-bar/
  - /docs/v0.29.1/api/touch-bar/
  - /docs/v0.28.3/api/touch-bar/
  - /docs/v0.28.2/api/touch-bar/
  - /docs/v0.28.1/api/touch-bar/
  - /docs/v0.28.0/api/touch-bar/
  - /docs/v0.27.3/api/touch-bar/
  - /docs/v0.27.2/api/touch-bar/
  - /docs/v0.27.1/api/touch-bar/
  - /docs/v0.27.0/api/touch-bar/
  - /docs/v0.26.1/api/touch-bar/
  - /docs/v0.26.0/api/touch-bar/
  - /docs/v0.25.3/api/touch-bar/
  - /docs/v0.25.2/api/touch-bar/
  - /docs/v0.25.1/api/touch-bar/
  - /docs/v0.25.0/api/touch-bar/
  - /docs/v0.24.0/api/touch-bar/
  - /docs/v0.23.0/api/touch-bar/
  - /docs/v0.22.3/api/touch-bar/
  - /docs/v0.22.2/api/touch-bar/
  - /docs/v0.22.1/api/touch-bar/
  - /docs/v0.21.3/api/touch-bar/
  - /docs/v0.21.2/api/touch-bar/
  - /docs/v0.21.1/api/touch-bar/
  - /docs/v0.21.0/api/touch-bar/
  - /docs/v0.20.8/api/touch-bar/
  - /docs/v0.20.7/api/touch-bar/
  - /docs/v0.20.6/api/touch-bar/
  - /docs/v0.20.5/api/touch-bar/
  - /docs/v0.20.4/api/touch-bar/
  - /docs/v0.20.3/api/touch-bar/
  - /docs/v0.20.2/api/touch-bar/
  - /docs/v0.20.1/api/touch-bar/
  - /docs/v0.20.0/api/touch-bar/
  - /docs/latest/api/touch-bar/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/touch-bar.md'
title: TouchBar
excerpt: Create TouchBar layouts for native macOS applications
sort_title: touch-bar
---



<!--


                                      ::::
                                    :o+//+o:
                                    +o    oo-
                                    :o+//oo/+o/
                                      -::-   -oo:
                                               /s/
                      -::::::::-                :s/  :::--
                  :+oo+////////+:        -:/+oo/ :s:-///++oo+:
                /o+:                -/+oo+/:-     +o-      -:+o:
               /s:              -:+o+/:           -o+         :s/
              -s/            -/oo/:                /s-         +s-
              -s/         -/oo/-                   -s/         /s-
               oo       :+o/-                       oo         oo
               -s/    :oo/                          /s-       /s-
                :s/ :oo:              -::-          /s-      /s:
                  -+o/               /ssss/         :s:    -+o-
                 :o+--               /ssss/         :s:   :o+-
                :s/  +o:              -::-          /s-   --
               -s/    :+o/-                         /s-
               oo       -+o+-                       oo
              -s/         -/oo/-                   -s/
             -+soo+:         -/oo/:                /s-      /oooo+-
             o+   :s:           -:+o+/:-          -o+      /s:  -oo
             oo:--/s:       ::      -:+oo+/:-     -/-      /s/--:o+
              :+++/-        :s:          -:/+ooo++//////++oo//+o+:
                             /s:                --::::::--
                              /s/              /s-
                               :oo:          :oo:
                                 /oo/-    -/oo/
                                   -/+oooo+/-





                   _______  _______  _______  _______  __
                  |       ||       ||       ||       ||  |
                  |  _____||_     _||   _   ||    _  ||  |
                  | |_____   |   |  |  | |  ||   |_| ||  |
                  |_____  |  |   |  |  |_|  ||    ___||__|
                   _____| |  |   |  |       ||   |     __
                  |_______|  |___|  |_______||___|    |__|


    This file is generated automatically, so it should not be edited.

    To make changes, head over to the electron/electron repository:

    https://github.com/electron/electron/blob/master/docs/api/touch-bar.md

    Thanks!

-->
## Class: TouchBar

> Create TouchBar layouts for native macOS applications

Process: [Main]({{site.baseurl}}/docs/tutorial/quick-start#main-process)

### `new TouchBar(options)` _Experimental_

*   `options` Object
    *   `items` ([TouchBarButton]({{site.baseurl}}/docs/api/touch-bar-button) &#124; [TouchBarColorPicker]({{site.baseurl}}/docs/api/touch-bar-color-picker) &#124; [TouchBarGroup]({{site.baseurl}}/docs/api/touch-bar-group) &#124; [TouchBarLabel]({{site.baseurl}}/docs/api/touch-bar-label) &#124; [TouchBarPopover]({{site.baseurl}}/docs/api/touch-bar-popover) &#124; [TouchBarScrubber]({{site.baseurl}}/docs/api/touch-bar-scrubber) &#124; [TouchBarSegmentedControl]({{site.baseurl}}/docs/api/touch-bar-segmented-control) &#124; [TouchBarSlider]({{site.baseurl}}/docs/api/touch-bar-slider) &#124; [TouchBarSpacer]({{site.baseurl}}/docs/api/touch-bar-spacer))[]
    *   `escapeItem` ([TouchBarButton]({{site.baseurl}}/docs/api/touch-bar-button) &#124; [TouchBarColorPicker]({{site.baseurl}}/docs/api/touch-bar-color-picker) &#124; [TouchBarGroup]({{site.baseurl}}/docs/api/touch-bar-group) &#124; [TouchBarLabel]({{site.baseurl}}/docs/api/touch-bar-label) &#124; [TouchBarPopover]({{site.baseurl}}/docs/api/touch-bar-popover) &#124; [TouchBarScrubber]({{site.baseurl}}/docs/api/touch-bar-scrubber) &#124; [TouchBarSegmentedControl]({{site.baseurl}}/docs/api/touch-bar-segmented-control) &#124; [TouchBarSlider]({{site.baseurl}}/docs/api/touch-bar-slider) &#124; [TouchBarSpacer]({{site.baseurl}}/docs/api/touch-bar-spacer)) (optional)

Creates a new touch bar with the specified items. Use `BrowserWindow.setTouchBar` to add the `TouchBar` to a window.

**Note:** The TouchBar API is currently experimental and may change or be removed in future Electron releases.

**Tip:** If you don't have a MacBook with Touch Bar, you can use [Touch Bar Simulator](https://github.com/sindresorhus/touch-bar-simulator) to test Touch Bar usage in your app.

### Instance Properties

The following properties are available on instances of `TouchBar`:

#### `touchBar.escapeItem`

The `TouchBarButton` that will replace the "esc" button on the touch bar when set. Setting to `null` restores the default "esc" button. Changing this value immediately updates the escape item in the touch bar.

## Examples

Below is an example of a simple slot machine touch bar game with a button and some labels.

```javascript
const {app, BrowserWindow, TouchBar} = require('electron')

const {TouchBarLabel, TouchBarButton, TouchBarSpacer} = TouchBar

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
    titleBarStyle: 'hiddenInset',
    width: 200,
    height: 200,
    backgroundColor: '#000'
  })
  window.loadURL('about:blank')
  window.setTouchBar(touchBar)
})
```

### Running the above example

To run the example above, you'll need to (assuming you've got a terminal open in the dirtectory you want to run the example):

1.  Save the above file to your computer as `touchbar.js`
2.  Install Electron via `npm install electron`
3.  Run the example inside Electron: `./node_modules/.bin/electron touchbar.js`

You should then see a new Electron window and the app running in your touch bar (or touch bar emulator).
