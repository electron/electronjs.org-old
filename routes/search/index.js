const { graphql } = require('graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')
const operations = require('./operations')

module.exports = async (req, res) => {
  if (!req.params.searchIn) {
    // if not specified, return only docs search results from server
    // then (TODO) have client side query the rest
    req.params.searchIn = 'docs'
  }
  const searchOp = operations.find((op) => op.name === req.params.searchIn)
  if (!searchOp) {
    return res.status(404).render('404', req.context)
  }
  const context = Object.assign({}, req.context, {
    query: req.query,
    searchOpDone: searchOp,
    searchOpsToDo: null // TODO: have client side query the rest
  })
  // TODO: pagination/set limit
  const result = await graphql(
    schema,
    searchOp.query,
    resolvers,
    null,
    { filter: req.query.query }
  )
  if (req.query.json !== undefined) {
    return res.json(result.data)
  }
  context.searchResults = result.data[searchOp.name]
  res.render('search', context)
}