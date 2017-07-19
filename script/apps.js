const electronApps = require('electron-apps')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const categories = []

electronApps.forEach((app) => {
  let appCategory = categories.find((category) => {
    return category.name === app.category
  })
  if (!appCategory) {
    appCategory = {
      count: 1,
      name: app.category,
      slug: app.category.toLowerCase().replace(' & ', '-').replace(' ', '-')
    }
    categories.push(appCategory)
  } else {
    appCategory.count++
  }
  app.categorySlug = appCategory.slug
  if (app.readme) {
    let $ = cheerio.load(app.readme)
    let updateReadme
    $('img').each(function (i, img) {
      let currentImg = $(img)
      let imageSrc = currentImg.attr('src')
      if (imageSrc && imageSrc.indexOf('http') === -1) {
        currentImg.attr('src', `${app.repository}/raw/master/${imageSrc}`)
        updateReadme = true
      }
    })
    if (updateReadme) {
      console.log(`Updating readme for ${app.name}`)
      app.readme = $('body').html()
    }
  }
})

categories.sort((a, b) => {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
})

electronApps.sort((a, b) => {
  if (b.date < a.date) {
    return -1
  }
  if (b.date > a.date) {
    return 1
  }
  return 0
})

fs.writeFileSync(
  path.join(__dirname, '../data/apps.json'),
  JSON.stringify({apps: electronApps, categories}, null, 2)
)
