const electronApps = require('electron-apps')
const fs = require('fs')
const path = require('path')

const categories = []
const downloadExtensions = [
  '.deb',
  '.dmg',
  '.exe',
  '.gz',
  '.zip'
]

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
  if (app.releases.length > 0) {
    let latestRelease = app.releases.find((release) => {
      return (!release.draft && !release.prerelease)
    })
    if (latestRelease) {
      app.latestRelease = Object.assign({
        releaseUrl: latestRelease.html_url,
        tagName: latestRelease.tag_name,
        releaseName: latestRelease.name,
        releaseNotes: latestRelease.body
      })
      app.latestRelease.downloads = latestRelease.assets.filter((asset) => {
        let fileExtension = path.extname(asset.browser_download_url)
        return (downloadExtensions.indexOf(fileExtension) !== -1)
      }).map((asset) => {
        return Object.assign({
          fileName: asset.name,
          fileUrl: asset.browser_download_url
        })
      })
    }
  }
  delete app.releases
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
