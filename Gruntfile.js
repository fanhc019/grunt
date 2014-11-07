module.exports = function(grunt) {

  grunt.file.defaultEncoding = 'gbk';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
        options: {
          banner: info(),
          cleancss: false
        },
        files: {
            expand: true,
            cwd: 'style_go/css/go/requisition/',
            src: ['**/*.less'],
            dest: 'style_go/css/go/requisition/',
            ext: '.css'
        }
    },
    watch: {
      configFiles: {
        files: [ 'Gruntfile.js'],
        options: {
          reload: true
        }
      },
      less: {
        files: ['style_go/css/go/requisition/**/*.less'],
        tasks: ['less'],
        event: ['all'],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        }
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : 'style_go/css/go/requisition/**/*.css'
            },
            options: {
                watchTask: true
            }
        }
    }
  });
  grunt.event.on('watch', function(action, filepath, target) {
    // grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['less', 'browserSync', 'watch']);

  function info() {
      var pkg = grunt.file.readJSON('package.json');
      return ''
            +'/*\n *\trepository: '
            +'<%= pkg.description %>'
            +'\n *\tdate: '
            +'<%= grunt.template.today("yyyy-mm-dd") %>'
            +'\n *\tcomplie: '
            +'grunt<%= pkg.dependencies.grunt %>'
            +'\n *\tnotice: '
            +'do not modify css files, while you will maintain the corresponding less file.'
            +'\n**/\n';
  }

};
