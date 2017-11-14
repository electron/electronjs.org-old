// Reveal hidden elements specific to the user's OS
//
// To use: apply a class of `darwin-only`, `linux-only`, or `win32-only`
// to any element. It will be hidden by default, and revealed on page load.
//
// Elements will be displayed as `block` by default. To use a different display
// value, add a class with `display-` as a prefix, like `display-inline-block`
// or `display-table-row`, e.g <tr class="darwin-only display-table-row">

const {getPlatformFromUserAgent} = require('platform-utils')

module.exports = function platformSpecificContent () {
  const platform = getPlatformFromUserAgent()

  Array.from(document.querySelectorAll(`.${platform}-only`))
    .forEach(element => {
      console.log(element)
      const displayType = Array.from(element.classList).find(c => c.startsWith('display-'))
      element.style.display = displayType ? displayType.replace('display-', '') : 'block'
    })
}
