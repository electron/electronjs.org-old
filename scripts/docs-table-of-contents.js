const tocbot = require('tocbot')

function generateTableOfContents() {
  tocbot.init({
    tocSelector: '#docs__table-of-contents',
    contentSelector: '.markdown-body',
    headingSelector: 'h2, h3, h4, h5, h6', // avoid h1 because there's only one h1
    hasInnerContainers: true,
    collapseDepth: 6, // don't collapse any elements (looks bad with large lists)
    disableTocScrollSync: true, // don't scroll TOC with page scroll (looks bad with large lists)
    headingLabelCallback: (str) => {
      /**
       * Clean up table of content strings using regex. We want to avoid
       * having long and repetitive strings for our Events and APIs.

       * 1. For events: `Event: 'close'` becomes `close`
       * 2. For properties/methods: `win.previewFile(path[, displayName]) macOS`
       *    becomes `previewFile`
       */
      let regexMatch
      if ((regexMatch = str.match(/Event: '([a-z]*(?:-[a-z]+)*)'/))) {
        return regexMatch[1]
      } else if (
        (regexMatch = str.match(/^[a-zA-Z]+\.((?:[a-zA-Z]+[\.]?)+)/))
      ) {
        return regexMatch[1]
      }
      return str
    },
  })
}

module.exports = generateTableOfContents
