#!/usr/bin/env node

var fs = require('fs')
var test = require('tape')

var fixInternalLinks = require('../lib/doc-links.js')

var urlRegex = /\[.+\]\((?!http)(.+)\)/g

var dir = 'spec/fixtures/test-set-docs/tutorial'
var originalFile = 'spec/fixtures/doc-with-internal-links.md'
var originalContent = fs.readFileSync(originalFile).toString()
var finalFile = 'spec/fixtures/test-set-docs/tutorial/quick-start.md'

var expectedLinks = [
  '[ipc](../../api/ipc-renderer)',
  '[remote](../../api/remote)',
  '[Application distribution](../application-distribution)'
  ]

test('Fetch and write documentation with latest flag', function (t) {
  t.plan(3)

  fixInternalLinks(dir, function callback (error, message) {
    if (error) return t.fail(error)
    compareLinks()
  })

  function compareLinks () {
    var finalContent = fs.readFileSync(finalFile).toString()
    var finalLinks = finalContent.match(urlRegex)

    finalLinks.forEach(function (finalLink, i) {
      t.equal(finalLink, expectedLinks[i], 'Link ' + i + ' matches.')
    })
    cleanup()
  }

  function cleanup () {
    fs.writeFile(finalFile, originalContent, function (error) {
      if (error) return t.fail(error)
    })
  }
})
