const featured = [
  '1clipboard',
  'atom',
  'beaker-browser',
  'caret',
  'collectie',
  'discord',
  'figma',
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
  'simplenote',
  'skype',
  'slack',
  'svgsus',
  'visual-studio-code',
  'webtorrent',
  'wordpress-com'
]

const apps = require('electron-apps')
  .map(app => {
    app.featured = featured.includes(app.slug)
    return app
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

module.exports = apps
