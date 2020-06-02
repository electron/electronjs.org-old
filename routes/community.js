const items = require('awesome-electron')
const meetups = require('../data/meetups.json')

async function parseItem (item) {
  // categories
  item.isTool = item.category === 'tools'
  item.isBoilerplate = item.category === 'boilerplates'
  item.isVideo = item.category === 'videos'
  item.isPodcast = item.category === 'podcasts'
  item.isComponent = item.category === 'components'
  item.isBook = item.category === 'books'

  // subcategories
  item.isForElectron = item.subcategory === 'for_electron'
  item.isUsingElectron = item.subcategory === 'using_electron'

  return item
}

async function parseData (items) {
  return Promise.all(items.map(parseItem))
}

module.exports = (req, res) => {
  parseData(items).then((communityData) => {
    const context = Object.assign(req.context, {
      items: communityData,
      meetups: meetups
    })

    res.render('community', context)
  })
}
