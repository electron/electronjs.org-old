const proxy = require('http-proxy-middleware')
const url = require('url')

const apiWhitelist = [
  '/status',
  '/language-status',
  '/info',
  '/download-glossary',
  '/export-file'
]

module.exports = (req, res, next) => {
  if (!process.env.CROWDIN_KEY) {
    return res.status(401).json('process.env.CROWDIN_KEY is not set')
  }
  if (req.method !== 'GET') {
    return res.status(405).json(`${req.method} not allowed`)
  }
  if (!(apiWhitelist.find((path) => path === url.parse(req.url).pathname))) {
    return res.status(404).render('404', req.context)
  }
  return proxy({
    target: 'https://api.crowdin.com/api/project/electron',
    changeOrigin: true,
    logLevel: 'warn',
    pathRewrite: (path, req) => {
      const newPath = url.parse(path, true)
      newPath.pathname = newPath.pathname.replace('/crowdin', '')
      Object.assign(newPath.query, {
        key: process.env.CROWDIN_KEY,
        json: true
      })
      newPath.search = null
      return url.format(newPath)
    }
  })(req, res, next)
}
