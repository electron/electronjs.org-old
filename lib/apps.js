const apps = require('electron-apps')
  .sort((a, b) => new Date(b.date) - new Date(a.date))

module.exports = apps
