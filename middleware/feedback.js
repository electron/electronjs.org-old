//@ts-check

module.exports = async (req, res, next) => {
  const feedbackEmbedCode = process.env.feedbackEmbedCode
  const debugging = req.query.debug === 'true'

  req.context = Object.assign(req.context, {
    feedbackEmbedCode,
    debugging,
  })

  next()
}
