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

  type NpmPackage {
    name: String!
    version: String!
    description: String
    keywords: [String!]
    stars: Int
    downloadsInLastMonth: Int
  }

  type Query {
    docs(filter: String, id: String): [Doc!]
    npmPackages(filter: String): [NpmPackage!]
  }
`)