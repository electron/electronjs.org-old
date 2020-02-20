const i18n = require('../../lib/i18n')

module.exports = (req, res) => {
  const docsReadme = i18n.docs[req.language]['/docs/README']

  const [
    // Not used: https://github.com/electron/electron/tree/master/docs#official-guides
    ,
    // Not used: https://github.com/electron/electron/tree/master/docs#faq
    ,
    // https://github.com/electron/electron/tree/master/docs#guides-and-tutorials
    guides,
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
    bothProcModules
  ] = docsReadme.sections

  const context = Object.assign(req.context, {
    guides,
    detailedTutorials,
    apiReference,
    customDomElements,
    mainProcModules,
    rendererProcModules,
    bothProcModules
  })

  // Taken from https://github.com/electron/electron/tree/master/docs

  res.render('docs/index', context)
}
