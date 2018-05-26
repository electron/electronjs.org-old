const templates = require('../templates')
const instantsearch = require('instantsearch.js')
const pluralize = require('pluralize')
const types = ['tutorial', 'api', 'package', 'app']
const searches = {}

module.exports = () => {
  types.forEach(type => {
    const isPrimarySearch = type === types[0]

    const opts = {
      appId: 'L9LD9GHGQJ',
      apiKey: '24e7e99910a15eb5d9d93531e5682370',
      indexName: pluralize(type)
    }

    if (isPrimarySearch) {
      opts.routing = true
      opts.searchFunction = (helper) => {
        const query = helper.state.query
        types.slice(1).forEach(type => {
          const search = searches[type]
          if (search && search.helper) {
            search.helper.setQuery(query)
            search.helper.search()
          }
        })
        helper.search()
      }
    }

    const search = instantsearch(opts)

    search.addWidget(
      instantsearch.widgets.hits({
        container: `#${type}-hits`,
        templates: {
          empty: 'No results',
          item: templates[type]
        },
        transformData: {
          item: data => {
          // useful for viewing template context:
            // console.log(`${type} data`, data)
            return data
          }
        }
      })
    )

    if (isPrimarySearch) {
      search.addWidget(
        instantsearch.widgets.searchBox({
          container: '#search-input',
          placeholder: 'Search Electron APIs'
        })
      )
    }

    search.on('render', (...args) => {
      // console.log(`algolia render (${type})`, args)
    })

    search.on('error', (...args) => {
      console.log(`algolia error (${type})`, args)
    })

    searches[type] = search

    search.start()
  })

  window.addEventListener('click', (e) => {
    const targetClasses = [
      'ais-search-box--input',
      'ais-hits',
      'app-hit-content-container'
    ]
    targetClasses.some(c => e.target.classList.contains(c)) ? showHits() : hideHits()
  })
}

function showHits () {
  document.getElementById('hits').style.display = 'flex'
}

function hideHits () {
  document.getElementById('hits').style.display = 'none'
}