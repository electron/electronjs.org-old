const querystring = require('querystring')
const releases = require('electron-releases')
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
  constructor (type, versionFilter, data, query) {
    let currentPage = toNumber(query.page, 1)
    const perPage = toNumber(query.per_page, 5)

    const majorVersions = {}
    data.forEach(release => {
      const v = semver.major(release.version)
      majorVersions[v] = true
    })
    this.majorVersions = Object.keys(majorVersions).map(v => parseInt(v, 10)).sort((a, b) => b - a)

    if (versionFilter) {
      data = data.filter(release => semver.major(release.version) === versionFilter)
    }

    this.type = type
    this.versionFilter = versionFilter
    this.page = paginator(data, currentPage, perPage)
    if (this.page.currentPage > this.page.totalPages) {
      currentPage = this.page.totalPages
      this.page = paginator(data, currentPage, perPage)
    }
    this.pagination = data.length === 0 ? [] : pagination.getPaginationModel({
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

    const versionFilter = toNumber(req.query.version, null)
    const localizedReleasesKey = `${type}_releases`
    const localizedReleasesType = req.context.localized.releases[localizedReleasesKey]

    res.render('releases', Object.assign({}, req.context, {
      page: { title: `${localizedReleasesType} | Electron` },
      releasesPage: new ReleasesPage(type, versionFilter, selectedReleases, req.query)
    }))
  }
}
