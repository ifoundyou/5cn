module.exports = function (grunt) {
  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),
  //   uglify:{
  //     options:{
  //       banner:'/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  //     },
  //     build:{
  //       src:'js/<%=pkg.file %>.js',
  //       dest:'dest/<%= pkg.file %>.min.js'
  //     }
  //   }
  // });
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.registerTask('default', ['uglify']);

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    concat:{
      options:{
        separator: ';'
      },
      dist:{
        src:['js/zepto.js', 'js/underscore.js', 'js/backbone.js'],
        dest:'dest/lib.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
}