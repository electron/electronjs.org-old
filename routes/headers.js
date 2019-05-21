const DIST_URL = 'https://gh-contractor-zcbenz.s3.amazonaws.com/atom-shell/dist'

module.exports = (req, res, next) => {
  const url = req.params[0]
  if (url === []) return next()
  return res.redirect(`${DIST_URL}/${url}`)
}
