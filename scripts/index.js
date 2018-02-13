document.addEventListener('DOMContentLoaded', () => {
  require('./lazy-load-images')()
  require('./get-localized-strings')()
  require('./create-filter-list')()
  require('./fix-platform-labels')()
  if (window.app) {
    require('./update-demo-app-download-link')()
    require('./update-app-download-links')()
  }
  require('./platform-specific-content')()
  require('./apply-active-class-to-active-links')()
  require('./remove-scheme-from-link-text')()
  require('browser-date-formatter')()
  require('./copy-code-to-clipboard')()
  require('./docs-language-toggle')()
})
