const graphqlHTTP = require('express-graphql')
const { graphql } = require('graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

graphql(schema, '{docs{title}}', resolvers).then((res) => {
  res.data.docs.map((r) => console.log(r))
})
module.exports = (req, res) => {
  // graphql(schema, req.query.query, resolvers)
  // .then(res => console.log(res.data.npmPackages))
  // console.log(await graphql(schema, req.query.query, resolvers))
  return graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: false
  })(req, res)
}
