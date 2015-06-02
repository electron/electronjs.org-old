var fs = require('fs')
var test = require('tape')
var path = require('path')
var rimraf = require('rimraf')
var yaml = require('yamljs')
var frontmatter = require('yaml-front-matter')

var fetchDocs = require('../lib/fetch-docs.js')

test('Fetch and write documentation with latest flag', function (t) {

  var settings = {
    version: 'v0.26.0',
    latest: true,
    finalDir: 'spec/fixtures/_testDocs',
    config: 'spec/fixtures/test_config.yml'
  }

  t.plan(8)

  fetchDocs(settings, function callback (error, message) {
    if (error) return t.fail(error)
    if (message) console.log(message)

    t.ok(fs.existsSync(settings.finalDir), 'Docs folder created.')

    var config = yaml.load(settings.config)
    t.equal(config.latest_version, settings.version, 'Config: Latest version set.')

    var readme = fs.readFileSync(path.join(settings.finalDir, 'README.md'))
    var readmeFM = frontmatter.loadFront(readme)

    var expectedPermalink = '/docs/' + settings.version + '/index.html'
    t.equal(readmeFM.permalink, expectedPermalink, 'Frontmatter: Adds permalink to README.')

    var expectedSourceUrl = 'https://github.com/atom/electron/blob/master/docs/README.md'
    t.equal(readmeFM.source_url, expectedSourceUrl, 'Frontmatter: Adds file source url')

    t.equal(readmeFM.version, settings.version, 'Frontmatter: Adds version.')
    t.equal(readmeFM.category, 'Table of Contents', 'Frontmatter: Adds category to README.')

    var filepath = expectedSourceUrl.split('.md')
    var expectedTitle = filepath[0].substring(filepath[0].lastIndexOf('/') + 1, filepath[0].length)
    t.equal(readmeFM.title, expectedTitle, 'Frontmatter: Adds title.')

    var latestFilePath = settings.finalDir.replace(settings.version, '')
    var latestFile = fs.readFileSync(path.join(latestFilePath, 'latest/README.md'))
    var latestFileFM = frontmatter.loadFront(latestFile)
    t.equal(latestFileFM.version, settings.version, 'Latest: Files in /latest match with latest version.')

    tearDown(settings, config)
  })
})

function tearDown (settings, config) {
  var docsPath = settings.finalDir.replace(settings.version, '')
  rimraf(docsPath, function (error) {
    if (error) console.log(error)
  })
  config.latest_version = 'v0.0.0'
  fs.writeFileSync(settings.config, yaml.stringify(config))
}
