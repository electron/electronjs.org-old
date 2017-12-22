module.exports = [
  {
    name: 'docs',
    displayName: 'Documentation',
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
    }`
  }, {
    name: 'npmPackages',
    displayName: 'NPM Packages',
    query: `query FilterNpmPackages($filter: String) {
      npmPackages(filter: $filter){
        name
        description
      }
    }`
  }
]