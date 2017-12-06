const proxy = require('http-proxy-middleware')
const url = require('url')

module.exports = (req, res, next) => {
  if (!process.env.CROWDIN_KEY) {
    return res.status(401).json('process.env.CROWDIN_KEY is not set')
  }
  if (req.method !== 'GET') {
    return res.status(405).json(`${req.method} not allowed`)
  }
  return proxy({
    target: 'https://api.crowdin.com/api/project/electron',
    // target: 'https://api.crowdin.com/api/project/electron-test',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: (path, req) => {
      const newPath = url.parse(path)
      newPath.pathname = newPath.pathname.replace('/crowdin', '')
      newPath.search = `${newPath.search || ''}&key=${process.env.CROWDIN_KEY}&json=true`
      return url.format(newPath)
    }
  })(req, res, next)
}