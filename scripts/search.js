const templates = require('../templates')
const instantsearch = require('instantsearch.js')

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('ais-search-box--input') || e.target.classList.contains('ais-hits') || e.target.classList.contains('app-hit-content-container')) {
    document.getElementById('hits').style.display = 'flex'
  } else {
    document.getElementById('hits').style.display = 'none'
  }
})

module.exports = () => {
  const search = instantsearch({
    appId: 'L9LD9GHGQJ',
    apiKey: '24e7e99910a15eb5d9d93531e5682370',
    indexName: 'apps',
    routing: true,
    searchFunction: (helper) => {
      let query = search.helper.state.query
      if (apis.helper) {
        apis.helper.setQuery(query)
        apis.helper.search()
      }
      if (packages.helper) {
        packages.helper.setQuery(query)
        packages.helper.search()
      }
      if (tutorials.helper) {
        tutorials.helper.setQuery(query)
        tutorials.helper.search()
      }
      helper.search()
    }
  })

  const apis = instantsearch({
    appId: 'L9LD9GHGQJ',
    apiKey: '24e7e99910a15eb5d9d93531e5682370',
    indexName: 'apis'
  })

  const packages = instantsearch({
    appId: 'L9LD9GHGQJ',
    apiKey: '24e7e99910a15eb5d9d93531e5682370',
    indexName: 'packages'
  })

  const tutorials = instantsearch({
    appId: 'L9LD9GHGQJ',
    apiKey: '24e7e99910a15eb5d9d93531e5682370',
    indexName: 'tutorials'
  })

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#app-hits',
      templates: {
        empty: 'No results',
        item: templates.app
      },
      transformData: {
        item: data => {
        // useful for viewing template context:
          console.log('app data', data)
          return data
        }
      }
    })
  )

  apis.addWidget(
    instantsearch.widgets.hits({
      container: '#api-hits',
      templates: {
        empty: 'No results',
        item: templates.api
      },
      transformData: {
        item: data => {
        // useful for viewing template context:
          console.log('api data', data)
          return data
        }
      }
    })
  )

  tutorials.addWidget(
    instantsearch.widgets.hits({
      container: '#tutorial-hits',
      templates: {
        empty: 'No results',
        item: templates.tutorial
      },
      transformData: {
        item: data => {
        // useful for viewing template context:
          console.log('tutorial data', data)
          return data
        }
      }
    })
  )

  packages.addWidget(
    instantsearch.widgets.hits({
      container: '#package-hits',
      templates: {
        empty: 'No results',
        item: templates.package
      },
      transformData: {
        item: data => {
        // useful for viewing template context:
          console.log('packages data', data)
          return data
        }
      }
    })
  )

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search Electron APIs'
    })
  )

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list',
      attributeName: 'type',
      limit: 10,
      templates: {
        header: 'Types'
      }
    })

  )

  search.start()
  apis.start()
  tutorials.start()
  packages.start()

  search.on('render', (...args) => {
    console.log('algolia render', args)
  })

  search.on('error', (...args) => {
    console.log('algolia error', args)
  })
}
