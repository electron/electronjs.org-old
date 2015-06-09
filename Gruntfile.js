module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-link-checker');

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
          initialPort: 4000
        }
      }
    }
  })
}
