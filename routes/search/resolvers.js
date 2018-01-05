const docsEn = require('../../lib/i18n').docs['en-US']
const npmPkgs = require('electron-npm-packages')
const repos = require('repos-using-electron/lite')

const searchScores = {
  docs: [
    { field: 'title', weight: 10 },
    { field: 'description', weight: 3 },
    { field: 'markdown', weight: 1 }
  ],
  npm: [
    { field: 'name', weight: 10 },
    { field: 'keywords', weight: 2 },
    { field: 'description', weight: 5 }
  ],
  repos: [
    { field: 'fullName', weight: 10 },
    { field: 'description', weight: 5 }
  ]
}

const trim = (arr) => {
  // TODO: use real pagination to eliminate use of an entirely arbituary
  // limit that's totally not the answer to life, the universe and everything
  const limit = 42
  if (arr.length < limit) {
    return arr
  }
  return arr.splice(arr.length - limit, arr.length - limit)
}

const assignSearchScores = (type, input, keyword) => {
  if (!searchScores[type]) {
    return input
  }
  return input.map((entry) => {
    let score = 0
    const re = new RegExp(keyword, 'gi')
    searchScores[type].forEach(rule => {
      const src = Array.isArray(entry[rule.field]) ? entry[rule.field].join(' ')
        : entry[rule.field]
      score += src ? (src.match(re) || []).length * rule.weight : 0
    })
    entry.score = score
    return entry
  })
}

const filterByKeyword = (type, input, keyword) => {
  return assignSearchScores(type, input, keyword)
    .filter((pkg) => pkg.score > 0)
    .sort((a, b) => b.score - a.score)
}

const resolvers = {
  docs: ({ id, filter }) => {
    if (id) {
      return docsEn[id]
    }
    const docs = Object.keys(docsEn).map((key) => docsEn[key])
    if (!filter) {
      return docs
    }
    return trim(filterByKeyword('docs', docs, filter))
  },
  npmPackages: ({ filter }) => {
    if (!filter) {
      return npmPkgs
    } else {
      return trim(filterByKeyword('npm', npmPkgs, filter))
    }
  },
  repos: ({ filter }) => {
    if (!filter) {
      return repos
    } else {
      return trim(filterByKeyword('repos', repos, filter))
    }
  }
}

module.exports = resolvers
