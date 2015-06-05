#!/usr/bin/env node

var fs = require('fs')
var glob = require('glob')
var path = require('path')

module.exports = function fixLinks (dir, callback) {
  var totalFiles = 0
  var fileCounter = 0

  dir = path.join(process.cwd(), dir)

  glob('**/*.md', {cwd: dir}, function globbing (error, files) {
    if (error) return callback(error)
    files.forEach(function (file, i) {
      file = path.join(dir, file)
      findLinks(file, i)
    })
  })

  function findLinks (file, i) {
    var urlRegex = /\[.+\]\((?!http)(.+)\)/g
    var content = fs.readFileSync(file).toString()
    var links = content.match(urlRegex)
    if (links) {
      totalFiles++
      fixInternalLinks(file, content, links)
    }
  }

  function fixInternalLinks (file, content, links) {
    fileCounter++
    var linksCounter = 0

    var newLinks = links.map(function fixLinks (link, i) {
      linksCounter++
      if (link.match(/\.md\)/ig)) {
        var newLink = link.replace(/\.md\)/ig, ')')
        if (newLink.indexOf('../') > -1) {
          return newLink.replace(/\(\.\.\//ig, '(../../')
        } else if (newLink.indexOf('./') > -1) {
          return newLink.replace(/\(\.\//ig, '(../')
        }
      }
    })

    if (newLinks.length === links.length) {
      replaceLinksInContent(file, content, links, newLinks)
    }
  }

  function replaceLinksInContent (file, content, oldLinks, newLinks) {
    oldLinks.forEach(function (oldLink, i) {
      content = content.replace(oldLink, newLinks[i])
    })
    writeLinkstoFile(file, content)
  }

  function writeLinkstoFile (file, content) {
    fs.writeFile(file, content, function done (error) {
      if (error) return callback(error)
      callback(null, 'done')
    })
  }
}
