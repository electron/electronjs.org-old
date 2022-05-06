const i18n = require('../../lib/i18n')
const cheerio = require('cheerio')

module.exports = (req, res) => {
  const docsReadme = i18n.docs[req.language]['/docs/README']

  let html

  if (docsReadme.html) {
    html = docsReadme.html
  } else {
    // Temporary fix to collect all section HTML
    // can remove when docsReadme.html becomes available
    // from electron-i18n bump.
    html = docsReadme.sections.reduce((readmeHTML, { html: sectionHTML }) => {
      return readmeHTML + sectionHTML
    }, '')
  }

  const $ = cheerio.load(html)
  const headingSelector = 'h2, h3, h4, h5, h6'
  const sections = $(headingSelector)
    .map((_, heading) => {
      // grab all content between headings
      let content = $(heading)
        .nextUntil(headingSelector)
        .map((_, p) => $.html(p))
        .get()
        .join('')
      return { html: content }
    })
    .get()
    .slice(2, -1) // slice out unused headings (faq, guides and tutorials, development)

  const [
    guidesQuickstart,
    guidesBasic,
    guidesAdvanced,
    // https://github.com/electron/electron/tree/main/docs#detailed-tutorials
    detailedTutorials,
    // https://github.com/electron/electron/tree/main/docs#api-references
    apiReference,
    // https://github.com/electron/electron/tree/main/docs#custom-dom-elements
    customDomElements,
    // https://github.com/electron/electron/tree/main/docs#modules-for-the-main-process
    mainProcModules,
    // https://github.com/electron/electron/tree/main/docs#modules-for-the-renderer-process-web-page
    rendererProcModules,
    // https://github.com/electron/electron/tree/main/docs#modules-for-both-processes
    bothProcModules,
  ] = sections

  const context = Object.assign(req.context, {
    guidesQuickstart,
    guidesBasic,
    guidesAdvanced,
    detailedTutorials,
    apiReference,
    customDomElements,
    mainProcModules,
    rendererProcModules,
    bothProcModules,
  })

  // Taken from https://github.com/electron/electron/tree/main/docs

  res.render('docs/index', context)
}
