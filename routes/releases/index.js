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
const [nightlyReleases, regularReleases] = partition(releases, isNightly)

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

module.exports = (req, res) => {
  let releasesType = 'normal'
  let selectedReleases = regularReleases
  if (req.query.type === 'nightly') {
    releasesType = 'nightly'
    selectedReleases = nightlyReleases
  }

  res.render('releases', Object.assign({}, req.context, {
    releasesPage: new ReleasesPage(releasesType, selectedReleases, req.query)
  }))
}
