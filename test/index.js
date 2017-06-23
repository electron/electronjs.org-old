const fs = require('fs')
const path = require('path')
const {before, describe, it} = require('mocha')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-cheerio'))

describe('electron.atom.io', () => {
  describe('apps', () => {
    it('has a JSON file full of app metadata')
    it('has a PNG image file for every app icon')
    it('limits featured app count to 24')
  })

  describe('docs', () => {
    it('rewrites relative links')
    it('properly handles multiple links on a single line')
    it('leaves absolute links intact')
    it('leaves fragment links intact')
    it('preserves fenced js code snippets')
    it('HTML-encodes pipe characters to avoid confusing the jekyll kramdown parser')
    it('adds a warning comment so people know to edit docs on the electron/electron repo')

    describe('frontmatter', () => {
      it('has a semver version')
      it('has a permalink')
      it('has a category')
      it('has a redirect_from array')
      it('includes a redirect for `latest`')
      it('includes custom redirects')
      it('has a source_url')
      it('has a title')
      it('has a sort_title')
      it('has an excerpt')
    })
  })

  describe('versions', () => {
    it('is an array of release data (from S3)')
    it('includes a valid semver version number in each object')
    it('is sorted with highest version number first (not necessarily the latest)')
  })

  describe('releases', () => {
    it('is an array of release data from the GitHub API')
    it('always has a version')
    it('always has an html_url')
    it('always has a created_at timestamp')
    it('does not include prerelease versions')
    it('does not include draft versions')
    it('is sorted with newer releases first')
    it('converts hashtagged issues and PR ids to hyperlinks')
  })

  describe('userland', () => {
    it('defines required properties')
    it('defines an template for each report')
  })
})
