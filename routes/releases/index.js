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

class QueryParamOutOfRangeError extends Error {
  constructor (message, newQuery) {
    super(message)
    this.name = 'QueryParamOutOfRangeError'
    this.newQuery = newQuery
  }
}

class RangeCheck {
  constructor (query) {
    this.failed = false
    this.query = { ...query }
  }

  fail (newQueryData) {
    this.failed = true
    this.query = { ...this.query, ...newQueryData }
  }

  getQuery () {
    Object.keys(this.query).forEach(key => {
      if (this.query[key] === undefined) {
        delete this.query[key]
      }
    })

    return this.query
  }
}

class ReleasesPage {
  constructor (type, versionFilter, data, query) {
    const rangeCheck = new RangeCheck(query)

    let currentPage = toNumber(query.page, 1)
    const perPage = toNumber(query.per_page, 5)

    if (currentPage < 1) {
      rangeCheck.fail({ page: 1 })
    }
    if (perPage < 1) {
      rangeCheck.fail({ per_page: undefined })
    }

    const majorVersions = new Set()
    data.forEach(release => {
      majorVersions.add(release.semver.major)
    })
    this.majorVersions = [...majorVersions].sort((a, b) => b - a)

    if (versionFilter !== null) {
      if (this.majorVersions.includes(versionFilter)) {
        data = data.filter(release => release.semver.major === versionFilter)
      } else {
        rangeCheck.fail({ version: undefined, page: 1 })
      }
    }

    this.type = type
    this.versionFilter = versionFilter
    this.page = paginator(data, currentPage, perPage)
    if (this.page.currentPage > this.page.totalPages) {
      rangeCheck.fail({ page: this.page.totalPages })
    }

    if (rangeCheck.failed) {
      throw new QueryParamOutOfRangeError('Query params out of range', rangeCheck.getQuery())
    }

    this.pagination = data.length === 0 ? [] : pagination.getPaginationModel({
      currentPage: this.page.currentPage,
      totalPages: this.page.totalPages
    })
    // add a query string to each pagination model for URL generation
    this.pagination.forEach(item => {
      const newQuery = { ...query, page: item.value }
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

    try {
      res.render('releases', Object.assign({}, req.context, {
        page: { title: `${localizedReleasesType} | Electron` },
        releasesPage: new ReleasesPage(type, versionFilter, selectedReleases, req.query),
        localizedReleasesType
      }))
    } catch (err) {
      if (err instanceof QueryParamOutOfRangeError) {
        const newQuery = querystring.stringify(err.newQuery)
        res.redirect(`${req.path}/?${newQuery}`)
      } else {
        throw err
      }
    }
  }
}
