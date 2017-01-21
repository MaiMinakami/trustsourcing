module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/styles',
        src: ['*.scss'],
        dest: 'src/styles',
        ext: '.css'
      }]
    }
  },
  
  concat:{
    dist:{
      src:['src/styles/style.scss'],
      dest:'src/styles/main.scss'
    },
   
    dist:{
      src:['src/js/script.js'],
      dest:'public/mainscript.js'
    }
  },    

  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['**/*.scss'],
      tasks: ['concat','sass'],
    },
  }
  });
  

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['sass'],['watch'],['concat']);

};