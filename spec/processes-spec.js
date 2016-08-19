var fs = require('fs')
var frontmatter = require('yaml-front-matter')
var path = require('path')
var test = require('tape')
var yaml = require('yamljs')

test('Include process categories for each API documentation page', function (t) {
  var docsPath = path.join(__dirname, '..', '_docs', 'api')
  var processes = yaml.load(path.join(__dirname, '..', '_data', 'processes.yml'))

  fs.readdirSync(docsPath).filter(function (file) {
    return path.extname(file) == '.md'
  }).map(function (file) {
    return path.join(docsPath, file)
  }).forEach(function (markdownFile) {
    var apiDoc = fs.readFileSync(markdownFile)
    var title = frontmatter.loadFront(apiDoc).title
    var apiProcess = processes[title]
    t.ok(apiProcess === 'Main Process'
      || apiProcess === 'Renderer Process'
      || apiProcess === 'Main and Renderer Process',
      title + ' has process category of ' + apiProcess)
  })
  t.end()
})
