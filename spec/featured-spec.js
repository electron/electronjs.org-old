var path = require('path')
var test = require('tape')
var yaml = require('yamljs')

test('Limit featured homepage apps to 24', function (t) {
  t.plan(1)
  var featuredApps = require(path.join(__dirname, '../_data/featured_apps.json'))
  t.equal(featuredApps.length, 24, '24 apps should be featured instead of ' + featuredApps.length)
})
