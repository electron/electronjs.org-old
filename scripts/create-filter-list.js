const { debounce } = require('lodash')
const lunr = require('lunr')
const queryString = require('query-string')
const setQueryString = require('set-query-string')
const lazyLoadImages = require('./lazy-load-images')

module.exports = function createFilterList () {
  // look for a filterable list on this page
  const list = document.querySelector('.filterable-list')
  if (!list || !list.parentElement) return

  // inherit initial query from `q` query param
  const filterInput = document.querySelector('.filterable-list-input')
  filterInput.value = queryString.parse(location.search).q || ''

  const index = lunr(function () {
    // We don't need stemming
    this.pipeline.remove(lunr.stemmer)
    this.searchPipeline.remove(lunr.stemmer)
    // Enable wildcard searching for all tokens,
    // e.g. "mark" will match "markdown"
    this.searchPipeline.add(function (token) {
      return token.update(function (str) {
        if (str[str.length - 1] !== "*") {
          return str + "*"
        } else {
          return str
        }
      })
    })

    this.field('name', { boost: 5 })
    this.field('description')
    this.field('date')
    this.field('keywords', {boost: 2 })

    const entries = list.querySelectorAll('.listed-app')
    entries.forEach((entry, idx) => {
      const id = idx
      const name = entry.querySelector('.listed-app-name').textContent
      const description = entry.querySelector('.listed-app-description').textContent
      const date = entry.querySelector('.listed-app-date [data-date]').getAttribute('data-date')
      const keywords = entry.querySelector('.listed-app-keywords').textContent.split(',')

      const doc = { id, name, description, date, keywords }
      this.add(doc)
      entry.setAttribute('data-search-id', idx)
    })
  })

  const referenceList = list.cloneNode(true)
  referenceList.querySelectorAll('img[data-src]').forEach(lazyLoadImages.addImage)
  const totalAppCount = referenceList.querySelectorAll('.listed-app').length

  function updateList(results) {
    const existingList = document.querySelector('.filterable-list')
    const parent = existingList.parentElement
    let newList

    if (results.length === totalAppCount) {
      // Every app matches, so just deep clone the reference list
      newList = referenceList.cloneNode(true)
    } else {
      newList = referenceList.cloneNode(false)
      results.forEach(function (result) {
        // Clone from existing list if it exists
        let node = existingList.querySelector(`[data-search-id="${result.ref}"]`)
        if (!node) {
          node = referenceList.querySelector(`[data-search-id="${result.ref}"]`)
        }
        const clone = node.cloneNode(true)
        newList.appendChild(clone)
      })
    }

    setQueryString({ q: filterInput.value })
    parent.replaceChild(newList, existingList)
    newList.querySelectorAll('img[data-src]').forEach(lazyLoadImages.addImage)
  }

  function search (text) {
    const results = index.search(text)
    updateList(results)
  }

  filterInput.addEventListener('input', debounce((evt) => search(evt.target.value), 250))
  // trigger a search, in case there is an existing value in the text input
  search(filterInput.value)
}
