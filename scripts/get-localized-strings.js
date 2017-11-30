// Consume localized strings from meta tags like this one:
//
// <meta name="localized.clipboard.copy" content="{{localized.clipboard.copy}}" />
//
// Then assembled a deeply-keyed global object called `window.localized`

const setProp = require('lodash/set')

module.exports = function getLocalizedString () {
  window.localized = Array.from(document.querySelectorAll('meta[name^="localized"]'))
    .reduce((acc, el) => {
      const key = el.getAttribute('name').replace('localized.', '')
      const val = el.getAttribute('content')
      setProp(acc, key, val)
      return acc
    }, {})
}
