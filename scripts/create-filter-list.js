const { debounce } = require('lodash')
const lunr = require('lunr')
const queryString = require('query-string')
const setQueryString = require('set-query-string')
const lazyLoadImages = require('./lazy-load-images')

class FilterList {
  static create (list, input) {
    return new FilterList(list, input)
  }

  constructor (list, input) {
    this.input = input
    this.index = this.buildIndex(list)
    this.referenceList = list.cloneNode(true)
    this.referenceList.querySelectorAll('img[data-src]').forEach(lazyLoadImages.addImage)
    this.totalAppCount = this.referenceList.querySelectorAll('.listed-app').length

    this.input.addEventListener('input', debounce((evt) => this.search(evt.target.value), 250))
    // trigger a search, in case there is an existing value in the text input
    this.search(this.input.value)
  }

  search (text) {
    try {
      const results = this.index.search(text)
      this.updateList(results)
    } catch (err) {
      if (err.name === 'QueryParseError') {
        // usually because the user is typing special symbols; safe to ignore
      } else {
        console.error(err)
      }
    }
  }

  updateList (results) {
    const existingList = document.querySelector('.filterable-list')
    const parent = existingList.parentElement
    let newList

    if (results.length === this.totalAppCount) {
      // Every app matches, so just deep clone the reference list
      newList = this.referenceList.cloneNode(true)
    } else {
      newList = this.referenceList.cloneNode(false)
      results.forEach((result) => {
        // Clone from existing list if it exists
        let node = existingList.querySelector(`[data-search-id="${result.ref}"]`)
        if (!node) {
          node = this.referenceList.querySelector(`[data-search-id="${result.ref}"]`)
        }
        const clone = node.cloneNode(true)
        newList.appendChild(clone)
      })
    }

    setQueryString({ q: this.input.value })
    parent.replaceChild(newList, existingList)
    newList.querySelectorAll('img[data-src]').forEach(lazyLoadImages.addImage)
  }

  buildIndex (list) {
    const builder = new lunr.Builder()
    // Not including `lunr.stemmer` which is normally included by default
    builder.pipeline.add(lunr.trimmer, lunr.stopWordFilter)
    // Enable wildcard searching for all tokens,
    // e.g. "mark" will match "markdown"
    builder.searchPipeline.add(function (token) {
      return token.update(function (str) {
        if (str[str.length - 1] !== '*') {
          return str + '*'
        } else {
          return str
        }
      })
    })

    builder.field('name', { boost: 5 })
    builder.field('description')
    builder.field('date')
    builder.field('keywords', { boost: 2 })

    const entries = list.querySelectorAll('.listed-app')
    entries.forEach((entry, idx) => {
      const doc = this.docForEntry(idx, entry)
      builder.add(doc)
      entry.setAttribute('data-search-id', idx)
    })

    return builder.build()
  }

  docForEntry (id, entry) {
    const name = entry.querySelector('.listed-app-name').textContent
    const description = entry.querySelector('.listed-app-description').textContent
    const date = entry.querySelector('.listed-app-date [data-date]').getAttribute('data-date')
    const keywords = entry.querySelector('.listed-app-keywords').textContent.split(',')

    return { id, name, description, date, keywords }
  }
}

module.exports = function createFilterList () {
  // look for a filterable list on this page
  const list = document.querySelector('.filterable-list')
  if (!list || !list.parentElement) return

  // inherit initial query from `q` query param
  const filterInput = document.querySelector('.filterable-list-input')
  filterInput.value = queryString.parse(location.search).q || ''

  FilterList.create(list, filterInput)
}
