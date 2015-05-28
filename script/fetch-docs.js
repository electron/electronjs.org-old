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

var tmpDir = path.join(os.tmpDir(), 'electron-tmp-download')

// var setup = {
//   latest: boolean,
//   version: string,
//   finalDir: string
// }

module.exports = function fetchDocs (setup, callback) {
  var url = 'https://api.github.com/repos/atom/electron/tarball/' + setup.version

  // Create temp directory to fetch tarball into
  mkdir(tmpDir, function (error) {
    if (error) return console.log(error)
    var filename = 'electron.tar.gz'
    var opts = {
      headers: {"user-agent": "Electron"},
      target: filename,
      dir: tmpDir,
      resume: true,
      verbose: true
      }

    nugget(url, opts, function (error) {
      if (error) return console.log(error)
      extractDocs(tmpDir, filename, setup, callback)
    })
  })
}

// Extract just the 'docs' directory from within
// tarball, then prepend each markdown file with
// Jekyll front matter
function extractDocs (tmpDir, filename, setup, callback) {
  var tarball = path.join(tmpDir, filename)
  var newDir = ''

  var extract = tar.extract(tmpDir, {
    ignore: function (name) {
      return name.indexOf('/docs/') === -1
    },
    mapStream: function (fileStream, header) {
      var frontmatter
      if (path.extname(header.name) === '.md') {
        var metadata = constructDocMetadata(header.name, settings.version)
        metadata.source_url = constructSourceUrl(header.name)
        if (path.basename(header.name, '.md') === 'README') {
          metadata.permalink = '/docs/' + settings.version + '/index.html'
          frontmatter = new Buffer('---\n' + yaml.stringify(metadata) + '---\n\n')
          return fileStream.pipe(frontMatterify(frontmatter)).pipe(removeMdUrls())
        }
        frontmatter = new Buffer('---\n' + yaml.stringify(metadata) + '---\n\n')
        return fileStream.pipe(frontMatterify(frontmatter))
      }
      return filestream
    }
  })

  extract.on('entry', function extracting (header, stream, next) {
    var extractedElectronDir = header.name.split('/')[0]
    newDir = path.join(tmpDir, extractedElectronDir)
  })

  extract.on('finish', function extracted () {
    var versionDir = path.join(newDir, setup.version)
    var extractedDocsDir = path.join(newDir, 'docs')
    var finalDir = path.join(process.cwd(), setup.finalDir, setup.version)
    moveDirectories(setup, versionDir, extractedDocsDir, finalDir, newDir, callback)
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
    metadata.category = "Contents"
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
function moveDirectories (setup, versionDir, extractedDocsDir, finalDir, newDir, callback) {
  fs.rename(extractedDocsDir, versionDir, function renamedAndMoved (error) {
    if (error) return console.log("Renaming error:", error)
    cpr(versionDir, finalDir, function moved (error) {
      if (error) console.log("Moving error", error)
      rimraf(tmpDir, function (error) {
        if (error) console.log(error)
        console.log("Done! Docs are in", finalDir)
        if (setup.latest) {
          // updateSymlink(finalDir)
          // console.log("Symlink added to 'lastest'")
          updateLatestVersion(setup.version)
        }
        if (callback) callback()
      })
    })
  })
}
