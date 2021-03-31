const i18n = require('../../lib/i18n')
const cheerio = require('cheerio')

module.exports = (req, res) => {
  const docsReadme = i18n.docs[req.language]['/docs/README']

  // Temporary fix to collect all section HTML
  // Replace with direct HTML when electron-i18n format changes
  const html = docsReadme.sections.reduce(
    (readmeHTML, { html: sectionHTML }) => {
      return readmeHTML + sectionHTML
    },
    ''
  )

  const $ = cheerio.load(html)
  const headingSelector = 'h2, h3, h4, h5, h6'
  const sections = $(headingSelector)
    .map((_, heading) => {
      let content = $(heading)
        .nextUntil(headingSelector)
        .map((_, p) => $.html(p))
        .get()
        .join()
      return { html: content }
    })
    .get()
    .slice(2, -1)

  const [
    guidesQuickstart,
    guidesBasic,
    guidesAdvanced,
    // https://github.com/electron/electron/tree/master/docs#detailed-tutorials
    detailedTutorials,
    // https://github.com/electron/electron/tree/master/docs#api-references
    apiReference,
    // https://github.com/electron/electron/tree/master/docs#custom-dom-elements
    customDomElements,
    // https://github.com/electron/electron/tree/master/docs#modules-for-the-main-process
    mainProcModules,
    // https://github.com/electron/electron/tree/master/docs#modules-for-the-renderer-process-web-page
    rendererProcModules,
    // https://github.com/electron/electron/tree/master/docs#modules-for-both-processes
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

  // Taken from https://github.com/electron/electron/tree/master/docs

  res.render('docs/index', context)
}
