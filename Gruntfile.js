module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-link-checker');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    linkChecker: {
      options: {
        maxConcurrency: 100
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
