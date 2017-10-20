const List = require('list.js')
const queryString = require('query-string')
const setQueryString = require('set-query-string')

module.exports = function createFilterList () {
  // look for a filterable list on this page
  var list = document.querySelector('.filterable-list')
  if (!list || !list.parentElement) return

  // inherit initial query from `q` query param
  window.filterInput = document.querySelector('.filterable-list-input')
  filterInput.value = queryString.parse(location.search).q || ''

  var opts = {
    listClass: 'filterable-list',
    searchClass: 'filterable-list-input',
    valueNames: [
      'listed-app-name',
      'listed-app-description',
      'listed-app-date',
      'listed-app-keywords'
    ]
  }
  window.filterList = new List(list.parentElement.parentElement, opts)

  // trigger a search, in case there is an existing value in the text input
  filterList.search(filterInput.value)

  // update the query param every time a search is performed
  filterList.on('updated', function() {
    setQueryString({q: filterInput.value})
  })
}