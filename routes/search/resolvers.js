const docsEn = require('../../lib/i18n').docs['en-US']
const npmPkgs = require('electron-npm-packages')
const { isArray } = require('util')

const searchScores = {
  docs: [
    { field: 'title', weight: 10 },
    { field: 'description', weight: 3 },
    { field: 'markdown', weight: 1 },
  ],
  npm: [
    { field: 'name', weight: 10 },
    { field: 'keywords', weight: 2 },
    { field: 'description', weight: 5 },
  ]
}

const assignSearchScores = (type, input, keyword) => {
  if (!searchScores[type]) {
    return input
  }
  return input.map((entry) => {
    let score = 0
    const re = new RegExp(keyword, 'gi')
    searchScores[type].forEach(rule => {
      const src = isArray(entry[rule.field]) ? entry[rule.field].join(' ')
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
  docById: ({ id }) => docsEn[id],
  allDocs: ({ filter }) => {
    const docs = Object.keys(docsEn).map((key) => docsEn[key])
    if (!filter) {
      return docs
    }
    return filterByKeyword('docs', docs, filter)
  },
  allNpmPackages: ({ filter }) => {
    if (!filter) {
      return npmPkgs
    } else {
      return filterByKeyword('npm', npmPkgs, filter)
    }
  }
}

module.exports = resolvers
