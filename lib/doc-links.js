#!/usr/bin/env node

var fs = require('fs')
var glob = require('glob')
var path = require('path')

// We are parsing the doc files for links
// to other pages within the docs (relative links,
// rather than external).
//
// We're looking for these patterns:
// - [words](../abc/abc.md)
// - [words](../abc/abc)
// - [words](abc)
// - [words](abc.md)
// - [words](#abc-efg)
// - [words](../abc/abc.html)
// - [words](/abc/abc.html)
// - [words](_abc/abc/abc.html)

module.exports = function fixLinks (dir, callback) {
  var filesWithLinks = 0
  var filesToCheck = 0
  var filesProcessed = 0
  var done = false

  glob('**/*.md', {cwd: dir}, function globbing (error, files) {
    if (error) return callback(error)
    if (files.length === 0) return callback(new Error('Globbed no files.'))
    filesToCheck = files.length
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
      filesWithLinks++
      fixInternalLinks(file, content, links)
    }
    if (filesToCheck === i + 1) done = true
  }

  function fixInternalLinks (file, content, links) {
    var linksCounter = 0

    var newLinks = links.map(function fixLinks (link, i) {
      linksCounter++
      if (link.match(/\.md\)/ig)) {
        var newLink = link.replace(/\.md\)/ig, ')')
        if (newLink.indexOf('../') > -1) {
          return newLink.replace(/\(\.\.\//ig, '(../../')
        } else if (newLink.indexOf('./') > -1) {
          return newLink.replace(/\(\.\//ig, '(../')
        } else if (newLink.indexOf('/') < 0) {
          return newLink.replace('](', '](../')
        }
        return newLink
      }
      return link
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
      filesProcessed++
      if (filesProcessed === filesWithLinks && done) {
        callback(null, 'done')
      }
    })
  }
}
