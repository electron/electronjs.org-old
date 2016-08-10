var path = require('path')
var test = require('tape')
var yaml = require('yamljs')

test('Limit featured homepage apps to 20', function (t) {
  t.plan(1)

  var apps = yaml.load(path.join(__dirname, '..', '_data', 'apps.yml'))
  var featuredApps = apps.filter(function (app) {
    return app.featuredOnHomepage
  })
  t.equal(featuredApps.length, 20, '20 apps should be featured instead of ' + featuredApps.length)
})
