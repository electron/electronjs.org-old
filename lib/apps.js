const featured = [
  '1clipboard',
  'atom',
  'beaker-browser',
  'caret',
  'collectie',
  'discord',
  'flow',
  'ghost',
  'github-desktop',
  'gitkraken',
  'hyper',
  'insomnia',
  'jibo',
  'kap',
  'kitematic',
  'now',
  'nylas-n1',
  'ramme',
  'simplenote',
  'slack',
  'svgsus',
  'visual-studio-code',
  'webtorrent',
  'wordpress-com'
]

const apps = require('electron-apps').map(app => {
  app.featured = featured.includes(app.slug)
  return app
})

module.exports = apps