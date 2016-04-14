var fs = require('fs')
var test = require('tape')
var path = require('path')
var rimraf = require('rimraf')
var yaml = require('yamljs')
var tmp = require('tmp')
var frontmatter = require('yaml-front-matter')

var fetchDocs = require('../lib/fetch-docs.js')

var settings = {
  configFile: path.join(__dirname, 'fixtures/test_config.yml'),
  tmpDir: tmp.dirSync().name,
  targetDir: tmp.dirSync().name
}

test('Fetch and write documentation with latest flag', function (t) {

  t.plan(7)

  fetchDocs(settings, function callback (error, message) {
    if (error) return t.fail(error)
    if (message) console.log(message)

    t.ok(fs.existsSync(settings.targetDir), 'Docs folder created.')

    var config = yaml.load(settings.configFile)

    t.equal(config.latest_version, settings.version, 'Config: Latest version set.')

    var sampleDoc = fs.readFileSync(path.join(settings.targetDir, 'api', 'accelerator.md'))
    var sampleFM = frontmatter.loadFront(sampleDoc)
    console.log(sampleFM)

    t.equal(sampleFM.title, 'Accelerator', 'Frontmatter: Adds permalink to README.')

    var expectedSourceUrl = 'https://github.com/electron/electron/blob/master/docs/api/accelerator.md'
    t.equal(sampleFM.source_url, expectedSourceUrl, 'Frontmatter: Adds file source url')

    t.equal(sampleFM.version, settings.version, 'Frontmatter: Adds version.')
    t.equal(sampleFM.category, 'API', 'Frontmatter: Adds category.')

    t.ok(sampleFM.redirect_from.indexOf('/docs/v0.25.0/api/accelerator/') > -1, 'Frontmatter: Adds redirects.')

    tearDown(settings, config)
  })
})

function tearDown (settings, config) {
  config.latest_version = 'v0.0.0'
  config.available_versions = ['v0.27.0', 'v0.26.0', 'v0.25.0']
  fs.writeFileSync(settings.configFile, yaml.stringify(config))
}
