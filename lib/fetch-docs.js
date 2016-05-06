var fs = require('fs')
var os = require('os')
var path = require('path')
var tar = require('tar-fs')
var gunzip = require('gunzip-maybe')
var glob = require('glob')
var marky = require('marky-markdown-lite')
var mkdir = require('mkdirp')
var nugget = require('nugget')
var request = require('request')
var cpr = require('cpr')
var through = require('through2')
var rimraf = require('rimraf')
var yaml = require('yamljs')
var toTitleCase = require('titlecase')

var formatInternalLinks = require('../lib/doc-links.js')
var token = process.env.ATOM_ACCESS_TOKEN
var tarballFilename = 'electron.tar.gz'

var config
var newDir
var tarballUrl
var version
var settings

var fetchDocs = module.exports = function fetchDocs (_settings, callback) {
  settings = _settings

  config = yaml.load(settings.configFile)

  var latest = 'https://api.github.com/repos/electron/electron/releases/latest'
  request.get({url: latest, json: true, headers: {'user-agent': 'electron website build'}}, function (err, resp, body) {
    if (err) throw err
    tarballUrl = body.tarball_url

    // override tarball for testing out branches:
    // tarballUrl = 'https://api.github.com/repos/electron/electron/tarball/master'

    version = tarballUrl.split('/').pop()
    settings.version = version
    return updateVersions(callback)
  })
}

function updateVersions (callback) {
  console.log(`Latest release is ${version}. Updating _config.yml`)
  config.latest_version = version
  if (config.available_versions.indexOf(version) === -1) {
    config.available_versions.push(version)
  }
  fs.writeFileSync(settings.configFile, yaml.stringify(config))
  return downloadTarball(callback)
}

function downloadTarball (callback) {
  console.log(`Tarball URL: ${tarballUrl}`)
  var opts = {
    headers: {
      'user-agent': 'Electron',
      'Authorization': 'token ' + token
    },
    target: tarballFilename,
    dir: settings.tmpDir,
    verbose: true
  }

  nugget(tarballUrl, opts, function (error) {
    if (error) return callback(error)
    extractDocs(callback)
  })
}

// Extract specific 'docs' directories from within
// tarball, then prepend each markdown file with
// Jekyll front matter
function extractDocs (callback) {
  var tarball = path.join(settings.tmpDir, tarballFilename)

  var extract = tar.extract(settings.tmpDir, {
    ignore: function (name) {
      if (name.match('docs/api')) return false
      if (name.match('docs/development')) return false
      if (name.match('docs/tutorial')) return false
      if (name.match('faq')) return false
      return true
    },
    mapStream: function (fileStream, header) {
      var frontmatter
      if (path.extname(header.name) === '.md') {
        var metadata = constructDocMetadata(header.name)
        metadata.source_url = constructSourceUrl(header.name)
        frontmatter = new Buffer('---\n' + yaml.stringify(metadata) + '---\n\n')
        return fileStream
          .pipe(frontMatterify(frontmatter))
          .pipe(removeCmdSyntax())
      }
      return fileStream
    }
  })

  extract.on('entry', function extracting (header, stream, next) {
    var extractedElectronDir = header.name.split('/')[0]
    newDir = path.join(settings.tmpDir, extractedElectronDir)
  })

  extract.on('finish', function extracted () {
    moveDirectories(callback)
  })

  fs.createReadStream(tarball).pipe(gunzip()).pipe(extract)
}

function frontMatterify (frontmatter) {
  var appended = false
  return through(function (obj, enc, next) {
    if (!appended) {
      var excerpt = marky(obj.toString())('blockquote > p').first().html()
      if (excerpt && excerpt.length) {
        var frontmatterTail = '---\n\n'
        frontmatter = frontmatter.toString().replace(frontmatterTail, `excerpt: "${excerpt.replace(/\"/g, '\\\"')}"\n${frontmatterTail}`)
      }
      this.push(frontmatter)
    }
    appended = true
    this.push(obj)
    next()
  })
}

function removeCmdSyntax (content) {
  return through(function (obj, enc, next) {
    var edits = obj.toString().replace('```cmd', '```bash')
    this.push(edits)
    next()
  })
}

function removeMdUrls () {
  return through(function (obj, enc, next) {
    var regex = /\.md\)/ig
    var edits = obj.toString().replace(regex, ')')
    this.push(edits)
    next()
  })
}

function constructSourceUrl (path) {
  var baseUrl = 'https://github.com/electron/electron/blob/master/'
  var source = path.split('/')
  source.splice(0, 1)
  return baseUrl + source.join('/')
}

function constructDocMetadata (filepath) {
  var pathArray = filepath.split('/').splice(2, 2)
  var metadata = {
    version: version,
    category: toTitleCase(pathArray[0]).replace(/Api/, 'API').replace(/Faq/, 'FAQ'),
    title: formatDocTitle(pathArray[1]).replace(/Electron Faq/, 'FAQ'),
  }

  if (metadata.category === 'FAQ') {
    metadata.category = 'ignore' // Remove breadcrumb
    metadata.permalink = '/docs/faq/'
  }

  metadata.redirect_from = config.available_versions.concat('latest')
    .map(function (v) {
      return `/` + filepath.split('/').splice(1).join('/')
        .replace('docs/', `docs/${v}/`).replace('.md', '/')
    })

  return metadata
}

function formatDocTitle (filename) {
  return toTitleCase(filename.replace(/\.md$/, '').replace(/-+/g, ' '))
}

function moveDirectories (callback) {
  var sourceDir = path.join(newDir, 'docs')
  cpr(sourceDir, settings.targetDir, {
    overwrite: true
  }, function moved (error) {
    if (error) return callback(error)
    formatInternalLinks(settings.targetDir, version, function fixedLinks (error, msg) {
      if (error) return callback(error)
      return callback(null, 'Done!')
    })
  })
}
