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
var token = process.env.ATOM_ACCESS_TOKEN || 'da809a6077bb1b0aa7c5623f7b2d5f1fec2faae4'
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

  var opts = {
    url: latest,
    json: true,
    headers: {
      'user-agent': 'electron website build',
      'Authorization': 'token ' + token
    }
  }
  request.get(opts, function (err, resp, body) {
    if (err) throw err
    if (resp.statusCode !== 200) throw Error(resp.statusCode + ' response from ' + latest)
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
  config.latest_version = version.substring(1)
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
      var content = marky(obj.toString())
      var frontmatterTail = '---\n\n'

      var excerpt = content('blockquote > p').first().html()
      if (excerpt && excerpt.length > 0) {
        excerpt = excerpt.replace(/\"/g, '\\\"').replace(/\n/g, '\n    ')
        frontmatter = frontmatter.toString().replace(frontmatterTail, `excerpt: "${excerpt}"\n${frontmatterTail}`)
      }

      var title = content('h1').first().text()
      if (title && title.length) {
        title = title.trim().replace(/\"/g, '\\\"')
        var sortTitle = title.toLowerCase().replace(/^[^A-Za-z0-9]+/, '')
        title = title.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        frontmatter = frontmatter.toString().replace(frontmatterTail, `title: "${title}"\nsort_title: "${sortTitle}"\n${frontmatterTail}`)
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
    redirect_from: []
  }

  // add redirect for old filename
  if (pathArray === 'locales.md') metadata.redirect_from = ['/docs/api/app-locales/']

  if (metadata.category === 'FAQ') {
    metadata.category = 'ignore' // Remove breadcrumb
    metadata.breadcrumb = 'FAQ'
    metadata.redirect_from =  [ '/docs/faq/electron-faq/' ]
  }

  // add redirect urls for all versions prior to 1.0
  var allVers = config.available_versions.concat('latest')
  allVers.forEach(function (ver) {
    if (ver.match('v1.')) return
    metadata.redirect_from.push(`/` + filepath.split('/').splice(1).join('/')
      .replace('docs/', `docs/${ver}/`).replace('.md', '/'))
  })

  return metadata
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
