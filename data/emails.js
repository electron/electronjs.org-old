const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

module.exports = {
  'info': entities.encode('info@electronjs.org'),
  'security': entities.encode('security@electronjs.org'),
  'coc': entities.encode('coc@electronjs.org')
}
