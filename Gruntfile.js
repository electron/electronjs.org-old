var cheerio = require('cheerio')

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-link-checker')

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    linkChecker: {
      options: {
        maxConcurrency: 100,
        noFragment: true,
        callback: function (crawler) {
          crawler.addFetchCondition(function (url) {
            return !url.path.match(/\.xml$/i)
          })
        }
      },
      dev: {
        site: 'localhost',
        options: {
          initialPort: 4000,
          parseHTMLComments: false,
          parseScriptTags: false,
          discoverResources: function (buffer) {
            var $ = cheerio.load(buffer.toString('utf8'))
            return $('a[href]').map(function () {
              return $(this).attr('href')
            }).get()
          }
        }
      }
    }
  })
}
