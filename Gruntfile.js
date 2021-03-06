module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // grunt-contrib-sass
    sass: {
      options: {
        loadPath: ['resources/public/vendor/foundation/scss', 'resources/public/vendor/bourbon/app/assets/stylesheets/']
      },
      dist: {
        options: {
          quiet: true,
          style: 'nested'
        },
        files: {
          'resources/public/css/sailing-study-guide.css': 'scss/sailing-study-guide.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
