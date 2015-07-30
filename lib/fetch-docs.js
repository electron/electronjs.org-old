var fs = require('fs')
var os = require('os')
var path = require('path')
var tar = require('tar-fs')
var gunzip = require('gunzip-maybe')
var mkdir = require('mkdirp')
var nugget = require('nugget')
var cpr = require('cpr')
var through = require('through2')
var rimraf = require('rimraf')
var yaml = require('yamljs')
var toTitleCase = require('titlecase')

var formatInternalLinks = require('./doc-links.js')

// settings!
// var settings = {
//   latest: boolean,
//   version: string,
//   finalDir: string
// }

module.exports = function fetchDocs (settings, callback) {

  updateVersions(settings)

  var url = 'https://api.github.com/repos/atom/electron/tarball/' + settings.version
  settings.tmpDir = path.join(os.tmpDir(), 'electron-tmp-download')

  // Create temp directory to fetch tarball into
  mkdir(settings.tmpDir, function (error) {
    if (error) return callback(error)
    var token = process.env.ATOM_ACCESS_TOKEN
    var filename = 'electron.tar.gz'
    var opts = {
      headers: {
        'user-agent': 'Electron',
        'Authorization': 'token ' + token
      },
      target: filename,
      dir: settings.tmpDir,
      resume: true,
      verbose: true
      }

    nugget(url, opts, function (error) {
      if (error) return callback(error)
      extractDocs(filename, settings, callback)
    })
  })
}

function updateVersions (settings) {
  var config = yaml.load(settings.config)
  if (settings.latest) config.latest_version = settings.version
  if (config.available_versions.indexOf(settings.version) === -1) {
    config.available_versions.push(settings.version)
  }
  fs.writeFileSync(settings.config, yaml.stringify(config))
}

// Extract just the 'docs' directory from within
// tarball, then prepend each markdown file with
// Jekyll front matter
function extractDocs (filename, settings, callback) {
  var tarball = path.join(settings.tmpDir, filename)

  var extract = tar.extract(settings.tmpDir, {
    ignore: function (name) {
      return name.indexOf(path.sep + 'docs' + path.sep) === -1
    },
    mapStream: function (fileStream, header) {
      var frontmatter
      if (path.extname(header.name) === '.md') {
        var metadata = constructDocMetadata(header.name, settings.version)
        metadata.source_url = constructSourceUrl(header.name)
        if (path.basename(header.name, '.md') === 'README') {
          metadata.permalink = '/' + path.join('docs', settings.version, 'index.html').split(path.sep).join('/')
          frontmatter = new Buffer('---\n' + yaml.stringify(metadata) + '---\n\n')
          return fileStream.pipe(frontMatterify(frontmatter)).pipe(removeMdUrls())
        }
        frontmatter = new Buffer('---\n' + yaml.stringify(metadata) + '---\n\n')
        return fileStream.pipe(frontMatterify(frontmatter)).pipe(removeCmdSyntax())
      }
      return fileStream
    }
  })

  extract.on('entry', function extracting (header, stream, next) {
      var extractedElectronDir = header.name.split('/')[0]
    settings.newDir = path.join(settings.tmpDir, extractedElectronDir)
  })

  extract.on('finish', function extracted () {
    settings.versionDir = path.join(settings.newDir, settings.version)
    settings.extractedDocsDir = path.join(settings.newDir, 'docs')
    settings.finalDir = path.join(process.cwd(), settings.finalDir, settings.version)
    moveDirectories(settings, callback)
  })

  fs.createReadStream(tarball).pipe(gunzip()).pipe(extract)
}

function frontMatterify (frontmatter) {
  var appended = false
  return through(function (obj, enc, next) {
    if (!appended) this.push(frontmatter)
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
  var baseUrl = 'https://github.com/atom/electron/blob/master/'
  var source = path.split('/')
  source.splice(0, 1)
  return baseUrl + source.join('/')
}

function constructDocMetadata (path, version) {
  var metadata = {}
  metadata.version = version
  var pathArray = path.split('/')
  pathArray.splice(0, 2)
  if (pathArray.length === 1) {
    metadata.category = 'Table of Contents'
    metadata.title = formatDocTitle(pathArray[0])
  } else {
    if (pathArray[0] === 'api') metadata.category = 'API'
    else metadata.category = toTitleCase(pathArray[0])
    metadata.title = formatDocTitle(pathArray[1])
  }
  return metadata
}

function formatDocTitle (filename) {
  filename = filename.replace('.md', '')
  filename = filename.split('-').join(' ')
  return toTitleCase(filename)
}

// Take newly extracted 'docs' directory, name it according
// to appropriate Electron version, copy it to electron.atom.io
// '_docs' directory and delete temp directory
function moveDirectories (settings, callback) {
  fs.rename(settings.extractedDocsDir, settings.versionDir, function renamed (error) {
    if (error) return callback(error)
    cpr(settings.versionDir, settings.finalDir, function moved (error) {
      if (error) return callback(error)
      formatInternalLinks(settings.finalDir, settings.version, function fixedLinks (error, msg) {
        if (error) return callback(error)
        rimraf(settings.tmpDir, function deleted (error) {
          if (error) return callback(error)
          if (settings.latest) createLatestDir(settings, callback)
          else if (callback) callback(null, 'Done! Docs are in ' + settings.finalDir)
        })
      })
    })
  })
}

function createLatestDir (settings, callback) {
  var latestDir = settings.finalDir.replace(settings.version, 'latest')
  cpr(settings.finalDir, latestDir, function moved (error) {
    if (error) return callback(error)
    callback(null, 'Done! Docs are in ' + settings.finalDir + ' and /latest.')
  })
}
