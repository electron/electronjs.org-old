#!/usr/bin/env node

var fs = require('fs')
var test = require('tape')

var fixInternalLinks = require('../lib/doc-links.js')

var tradRegex = /\[.+\]\(.+\)/g
var footRegex = /\[[^\]]+\]:\s(.+)/g

var dir = 'spec/fixtures/test-set-docs/tutorial'
var emptyDir = 'spec/fixtures/test-set-docs/empty-dir'
var originalFile = 'spec/fixtures/doc-with-internal-links.md'
var originalContent = fs.readFileSync(originalFile).toString()
var finalFile = 'spec/fixtures/test-set-docs/tutorial/quick-start.md'

var expectedLinks = [
  '[ipc](http://electron.atom.io/docs/v0.27.0/api/ipc-renderer)',
  '[remote](http://electron.atom.io/docs/v0.27.0/api/remote)',
  '[Application distribution](http://electron.atom.io/docs/v0.27.0/tutorial/application-distribution)',
  '[here](https://github.com/atom/electron/releases)',
  '[tray-balloon]: http://electron.atom.io/docs/v0.27.0/api/tray#traydisplayballoonoptions-windows',
  '[app-user-model-id]: https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx'
  ]

test('Fetch and write documentation with latest flag', function (t) {
  t.plan(6)

  fixInternalLinks(dir, 'v0.27.0', function callback (error, message) {
    if (error) return t.fail(error)
    compareLinks()
  })

  function compareLinks () {
    var finalContent = fs.readFileSync(finalFile).toString()
    var tradLinks = finalContent.match(tradRegex) || []
    var footLinks = finalContent.match(footRegex) || []
    var finalLinks = tradLinks.concat(footLinks)
    if (finalLinks) {
      expectedLinks.forEach(function (expectedLink, i) {
        t.equal(finalLinks[i], expectedLink, 'Link ' + expectedLink + ' matches ' + finalLinks[i])
      })
    }
    cleanup()
  }

  function cleanup () {
    fs.writeFile(finalFile, originalContent, function (error) {
      if (error) return t.fail(error)
    })
  }
})

test('Parse empty directory', function (t) {
  fixInternalLinks(emptyDir, 'v0.27.0', function callback (error, message) {
    t.ok(error, 'got error')
    t.equal(error.message, 'Found no relative links in files.', 'Got correct error message.')
    t.end()
  })
})
