const querystring = require('querystring')
const releases = require('electron-releases')
const { partition } = require('lodash')
const semver = require('semver')
const pagination = require('ultimate-pagination')
const paginator = require('paginate-array')

function toNumber (value, defaultValue) {
  const num = parseInt(value, 10)
  if (isNaN(num)) {
    return defaultValue
  } else {
    return num
  }
}

const isNightly = release => semver.parse(release.version).prerelease.includes('nightly')
const isBeta = release => semver.parse(release.version).prerelease.includes('beta')
const nightlyReleases = []
const betaReleases = []
const stableReleases = []

releases.forEach(release => {
  if (isNightly(release)) {
    nightlyReleases.push(release)
  } else if (isBeta(release)) {
    betaReleases.push(release)
  } else {
    stableReleases.push(release)
  }
})

class ReleasesPage {
  constructor (type, data, query) {
    const currentPage = toNumber(query.page, 1)
    const perPage = toNumber(query.per_page, 5)

    this.type = type
    this.page = paginator(data, currentPage, perPage)
    this.pagination = pagination.getPaginationModel({
      currentPage: this.page.currentPage,
      totalPages: this.page.totalPages
    })
    // add a query string to each pagination model for URL generation
    this.pagination.forEach(item => {
      const newQuery = Object.assign({}, query, { page: item.value })
      item.query = querystring.stringify(newQuery)
    })
  }
}

module.exports = (type) => {
  return (req, res) => {
    let selectedReleases = null
    if (type === 'stable') {
      selectedReleases = stableReleases
    } else if (type === 'nightly') {
      selectedReleases = nightlyReleases
    } else if (type === 'beta') {
      selectedReleases = betaReleases
    } else {
      throw new Error(`Invalid releases type ${type}`)
    }

    res.render('releases', Object.assign({}, req.context, {
      releasesPage: new ReleasesPage(type, selectedReleases, req.query)
    }))
  }
}
