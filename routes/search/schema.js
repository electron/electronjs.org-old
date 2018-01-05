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
    author: User
    license: String
    keywords: [String!]
    homepage: String
    stars: Int
    created: String!
    modified: String!
    lastPublisher: User
    owners: [User]
    downloadsInLastMonth: Int
    dependents: [String]
    devDependents: [String]
    totalDeps: Int
  }

  type Repo {
    fullName: String!
    description: String
    forksCount: Int!
    stargazersCount: Int!
    subscribersCount: Int!
  }

  type User {
    name: String
    email: String
  }

  type Query {
    docs(filter: String, id: String): [Doc!]
    npmPackages(filter: String): [NpmPackage!]
    repos(filter: String): [Repo!]
  }
`)