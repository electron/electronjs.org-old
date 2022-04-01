const DIST_URL = 'https://artifacts.electronjs.org/headers/dist'

module.exports = (req, res, next) => {
  const url = req.params[0]
  if (url === []) return next()
  return res.redirect(`${DIST_URL}/${url}`)
}
