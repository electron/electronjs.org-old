var path = require('path')
var test = require('tape')
var yaml = require('yamljs')

test('Limit featured homepage apps to 16', function (t) {
  t.plan(1)

  var apps = yaml.load(path.join(__dirname, '..', '_data', 'apps.yml'))
  var featuredApps = apps.filter(function (app) {
    return app.featuredOnHomepage
  })
  t.equal(featuredApps.length, 16, '16 apps should be featured instead of ' + featuredApps.length)
})
