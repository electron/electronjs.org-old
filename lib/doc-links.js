#!/usr/bin/env node

var fs = require('fs')
var glob = require('glob')
var path = require('path')

// We are parsing the doc files for links
// to other pages within the docs (relative links,
// rather than external).
//
// We're looking for these patterns in trandional markdown link syntax:
// - [words](../abc/abc.md)
// - [words](../abc/abc)
// - [words](abc)
// - [words](abc.md)
// - [words](#abc-efg)
// - [words](../abc/abc.html)
// - [words](/abc/abc.html)
// - [words](_abc/abc/abc.html)
//
// And these in inline footer link syntax:
// - [words]: ../abc/abc.md
// - [words]: ../abc/abc
// - [words]: abc
// - [words]: abc.md
// - [words]: #abc-efg
// - [words]: ../abc/abc.html
// - [words]: /abc/abc.html
// - [words]: _abc/abc/abc.html


module.exports = function fixLinks (dir, version, callback) {
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
    if (filesWithLinks === 0) return callback(new Error('Found no relative links in files.'))
  })

  function findLinks (file, i) {
    var tradRegex = /\[.+\]\((?!http)(.+)\)/g
    var footRegex = /\[[^\]]+\]:\s+((?!http).+)/g
    var content = fs.readFileSync(file).toString()
    var tradLinks = content.match(tradRegex) || []
    var footLinks = content.match(footRegex) || []
    var links = tradLinks.concat(footLinks)

    if (links.length > 0) {
      filesWithLinks++
      fixInternalLinks(file, content, links)
    }
    if (filesToCheck === (i + 1)) done = true
  }

  function fixInternalLinks (file, content, links) {
    var baseUrl = 'electron.atom.io/docs/' + version

    var newLinks = links.map(function fixLinks (link, i) {
      var tradLinkStyle = true
      var parts
      var bracket

      if (link.match(/\]\(/)) {
        parts = link.split('](')
      } else {
        parts = link.split(']:')
        tradLinkStyle = false
      }
      var href = parts[1].trim()
      if (tradLinkStyle) href = href.slice(0, href.length - 1)

      if (tradLinkStyle) bracket = parts[0] + ']'
      else bracket = parts[0] + ']: '

      if (href.match(/\.md/ig)) {
        var newLink = href.replace(/\.md/ig, '')
        if (newLink.indexOf('../') > -1) {
          newLink = 'http://' + path.join(baseUrl, newLink.replace('../', '')).split(path.sep).join('/')
          if (tradLinkStyle) newMdLink = bracket + '(' + newLink + ')'
          else newMdLink = bracket + newLink
          return newMdLink
        } else if (newLink.indexOf('./') > -1) {
          var fileDir = getFileDir(file)
          newLink = 'http://' + path.join(baseUrl, fileDir, newLink).split(path.sep).join('/')
          if (tradLinkStyle) newMdLink = bracket + '(' + newLink + ')'
          else newMdLink = bracket + newLink
          return newMdLink
        } else if (newLink.indexOf('/') < 0) {
          fileDir = getFileDir(file)
          newLink = 'http://' + path.join(baseUrl, fileDir, newLink).split(path.sep).join('/')
          if (tradLinkStyle) newMdLink = bracket + '(' + newLink + ')'
          else newMdLink = bracket + newLink
          return newMdLink
        }
        return newLink
      }
      return link
    })
    replaceLinksInContent(file, content, links, newLinks)
  }

  function getFileDir (p) {
    var array = p.split(path.sep)
    return array[array.length - 2]
  }

  function replaceLinksInContent (file, content, oldLinks, newLinks) {
    oldLinks.forEach(function (oldLink, i) {
      content = content.replace(oldLink, newLinks[i])
    })
    writeLinkstoFile(file, content)
  }

  function writeLinkstoFile (file, content) {
    fs.writeFile(file, content, function (error) {
      if (error) return callback(error)
      filesProcessed++
      if ((filesProcessed === filesWithLinks) && done) {
        callback(null, 'done')
      }
    })
  }
}
