module.exports = [
  {
    name: 'docs',
    displayName: 'Documentations',
    query: `query FilterDocs($filter: String) {
      docs(filter: $filter){
        title
        description
        href
        isTutorial
        isApiDoc
        isDevTutorial
        isApiStructureDoc
      }
    }`,
    partial: 'search/docs'
  }, {
    name: 'npmPackages',
    displayName: 'NPM Packages',
    query: `query FilterNpmPackages($filter: String) {
      npmPackages(filter: $filter){
        name
        description
      }
    }`,
    partial: 'search/npmPackages'
  }
]