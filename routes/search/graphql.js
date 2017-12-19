const graphqlHTTP = require('express-graphql')
const { graphql } = require('graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

module.exports = (req, res) => {
  // graphql(schema, req.query.query, resolvers)
  // .then(res => console.log(res.data.npmPackages))
  return graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: false
  })(req, res)
}
