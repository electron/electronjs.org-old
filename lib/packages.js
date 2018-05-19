const packages = require('electron-npm-packages')

module.exports = packages.map(pkg => {
  const defaults = {
    type: 'package',
    title: pkg.name,
    name: pkg.name,
    description: pkg.description,
    sourcerank: pkg.sourcerank,
    dependencies: pkg.dependencies,
    devDependencies: pkg.devDependencies,
    keywords: pkg.keywords,
    repository: pkg.repository
  }

  return Object.assign(defaults)
})
