// Reveal hidden elements that are specific to the user's OS
//
// To use: apply a class of `darwin-only`, `linux-only`, or `win32-only`
// to any element. It will be hidden by default, and revealed on page load.
//
// Elements will be displayed as `block` by default. To use another display
// value, add a class to the element like `display-inline-block` or
// `display-table-row`

const { getPlatformFromUserAgent } = require('platform-utils')

module.exports = function platformSpecificContent () {
  const platform = getPlatformFromUserAgent()
  const elements = Array.from(document.querySelectorAll(`.${platform}-only`))

  elements.forEach(el => {
    const classes = Array.from(el.classList)
    console.log(classes)
    let displayType = classes.find(c => c.startsWith('display-'))
    displayType = displayType ? displayType.replace('display-', '') : 'block'
    el.style.display = displayType
  })
}
