const graphqlHTTP = require('express-graphql')
const { graphql } = require('graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

module.exports = (req, res) => {
  return graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })(req, res)
}
