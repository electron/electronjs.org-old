module.exports = [
  {
    name: 'docs',
    displayName: 'Documentation',
    octicon: 'file-text',
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
    displayName: 'npm Packages',
    octicon: 'package',
    query: `query FilterNpmPackages($filter: String) {
      npmPackages(filter: $filter){
        name
        description
        sourcerank
      }
    }`,
    partial: 'search/npm-packages'
  }, {
    name: 'repos',
    displayName: 'Github Repos',
    octicon: 'mark-github',
    query: `query FilterRepos($filter: String) {
      repos(filter: $filter){
        fullName
        description
      }
    }`,
    partial: 'search/repos'
  }
]
