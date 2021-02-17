const tocbot = require('tocbot')

function generateTableOfContents() {
  if (!!document.querySelector('.docs__table-of-contents')) {
    tocbot.init({
      tocSelector: '.docs__table-of-contents',
      linkClass: 'table-of-contents__link',
      activeLinkClass: 'table-of-contents__link--active',
      listClass: 'table-of-contents__list',
      listItemClass: 'table-of-contents__list-item',
      contentSelector: '.markdown-body',
      headingSelector: 'h2, h3, h4, h5, h6', // avoid h1 because there's only one h1
      hasInnerContainers: true,
      collapseDepth: 6, // don't collapse any elements (looks bad with large lists)
      disableTocScrollSync: true, // don't scroll TOC with page scroll (looks bad with large lists)
      headingLabelCallback: (str) => {
        /**
         * Clean up table of content strings using regex. We want to avoid
         * having long and repetitive strings in the API section like the following:
         *  * ipcMain.removeListener(channel, listener)
         *  * ipcMain.removeAllListeners([channel])
         *  * ipcMain.handle(channel, listener)
         *  * ...
         */
        if (!window.location.pathname.startsWith('/docs/api/')) {
          return str
        }

        // For events: `Event: 'close'` becomes `close`
        const eventsMatch = str.match(/Event: '([a-z]*(?:-[a-z]+)*)'/)
        // For properties / methods: `win.previewFile(path[, displayName]) macOS` becomes `previewFile`
        const propsMethodsMatch = str.match(/^[a-zA-Z]+\.((?:[a-zA-Z]+[\.]?)+)/)

        if (eventsMatch) {
          return eventsMatch[1]
        } else if (propsMethodsMatch) {
          return propsMethodsMatch[1]
        }

        return str
      },
    })
  }
}

module.exports = generateTableOfContents
