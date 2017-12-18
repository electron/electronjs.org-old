const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
