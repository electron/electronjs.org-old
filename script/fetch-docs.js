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
        if (path.basename(header.name, '.md') === 'README') {
          console.log("readme", header.name, path.basename(header.name, '.md'))
          var redirectUrl = '/docs/' + setup.version + '/'
          frontmatter = new Buffer('---\nredirect_from: ' + redirectUrl + '\n---\n\n')
        } else {
          var redirectUrl = constructRedirectUrl(header.name, setup.version)
          frontmatter = new Buffer('---\nredirect_from: ' + redirectUrl + '\n---\n\n')
        }
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

function updateLatestVersion (version) {
  var config = yaml.load('_config.yml')
  config.latest_version = version
  fs.writeFileSync('_config.yml', yaml.stringify(config))
}

function constructRedirectUrl (path, version) {
  var pathArray = path.split('/')
  pathArray.splice(2, 0, version)
  pathArray.splice(0, 1)
  var rejoinPath = pathArray.join('/')
  // var splitExtension = rejoinPath.split('.md')
  return '/' + rejoinPath
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
