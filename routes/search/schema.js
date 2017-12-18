const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Doc {
    locale: String
    slug: String
    description: String
    category: String
    categoryFancy: String
    href: String
    githubUrl: String
    isTutorial: Boolean!
    isApiDoc: Boolean!
    isDevTutorial: Boolean!
    isApiStructureDoc: Boolean!
    markdown: String!
    title: String!
    html: String!
  }

  type NpmPackages {
    name: String!
    version: String!
    description: String
    keywords: [String!]
    stars: Int
    downloadsInLastMonth: Int
  }

  type Query {
    allDocs(filter: String, id: String): [Doc!]
    allNpmPackages(filter: String): [NpmPackages!]
  }
`)