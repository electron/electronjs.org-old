const instantsearch = require('instantsearch.js')

// let searchInput = document.getElementById("search-input");
// searchInput.onfocus = () => {

// }

const hitTemplate = `
{{#_highlightResult.icon64}}
  <img src="https://electronjs.org/node_modules/electron-apps/apps/{{_highlightResult.slug.value}}/{{_highlightResult.icon64.value}}">
  <b>{{{_highlightResult.name.value}}}</b> -
  {{{_highlightResult.description.value}}}
{{/_highlightResult.icon64}}

{{^_highlightResult.icon64}}
  {{{type.value}}}
  <b>{{{_highlightResult.title.value}}}</b> -
  {{{_highlightResult.tldr.value}}}
{{/_highlightResult.icon64}}
`

module.exports = () => {
  const search = instantsearch({
    appId: 'L9LD9GHGQJ',
    apiKey: '24e7e99910a15eb5d9d93531e5682370',
    indexName: 'electron-apis',
    routing: true
  })

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        empty: 'No results',
        item: hitTemplate
      },
      transformData: {
        item: data => {
          // useful for viewing template context:
          console.log('data', data)
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

  search.on('render', (...args) => {
    // console.log('algolia render', args)
  })

  search.on('error', (...args) => {
    console.log('algolia error', args)
  })
}
