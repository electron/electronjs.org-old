#!/usr/bin/env node

// const { chain } = require("lodash");
// const apis = require("../lib/electron-apis");
// const tutorials = require("../lib/tutorials");
// const apps = require("../lib/apps");
// const packages = require("../lib/packages");


// const results = chain([apis, tutorials, apps, packages])
//   .flatten()
//   .value();

// process.stdout.write(JSON.stringify(results, null, 2));

const instantsearch = require("instantsearch.js");


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
`;

module.exports = () => {

  const search = instantsearch({
    appId: "L9LD9GHGQJ",
    apiKey: "24e7e99910a15eb5d9d93531e5682370",
    indexName: "electron-apis",
    routing: true
  });

  search.addWidget(
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        empty: "No results",
        item: hitTemplate
      },
      transformData: {
        item: data => {
          // useful for viewing template context:
          console.log("data", data);
          return data;
        }
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: "#search-box",
      placeholder: "Search Electron APIs"
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: "#refinement-list",
      attributeName: "type",
      limit: 10,
      templates: {
        header: "Types"
      }
    })
  );

  search.start();

  search.on("render", (...args) => {
    // console.log('algolia render', args)
  });

  search.on("error", (...args) => {
    console.log("algolia error", args);
  });
}

