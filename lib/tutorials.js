const { chain } = require('lodash')
const cheerio = require('cheerio')

module.exports = chain(Object.values(require('electron-i18n').docs['en-US']))
  .filter(tutorial => !tutorial.isApiDoc && !tutorial.isApiStructureDoc)
  .map(tutorial => {
    const { title, githubUrl, slug, sections } = tutorial
    const type = 'tutorial'
    const html = sections.map(section => section.html).join('\n\n')
    const body = cheerio.load(html).text()
    if (!title && body.startsWith('Moved to')) return
    const url = `https://electronjs.org/docs/tutorial/${slug}`
    return { type, title, githubUrl, url, slug, body }
  })
  .compact() // remove nulls
  .value()
