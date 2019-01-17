const querystring = require('querystring')
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

class ReleasesPage {
  constructor (type, versionFilter, data, query) {
    let currentPage = toNumber(query.page, 1)
    const perPage = toNumber(query.per_page, 5)

    const majorVersions = new Set()
    data.forEach(release => {
      majorVersions.add(release.semver.major)
    })
    this.majorVersions = [...majorVersions].sort((a, b) => b - a)

    if (versionFilter) {
      data = data.filter(release => release.semver.major === versionFilter)
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
    let selectedReleases = req.context.releases.ofType(type)

    const versionFilter = toNumber(req.query.version, null)
    const localizedReleasesKey = `${type}_releases`
    const localizedReleasesType = req.context.localized.releases[localizedReleasesKey]

    res.render('releases', Object.assign({}, req.context, {
      page: { title: `${localizedReleasesType} | Electron` },
      releasesPage: new ReleasesPage(type, versionFilter, selectedReleases, req.query)
    }))
  }
}
