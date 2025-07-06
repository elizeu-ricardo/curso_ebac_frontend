module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            developement: {
                files: {'dev/styles/main.css' : 'src/styles/main.less'}
            }
        },
        uglify: {
            target: {
                files: {'dist/scripts/main.min.js' : 'src/scripts/main.js'}
            }
        },
        watch: {
            less: ['src/styles/**/*.less'],
            tasks: ['less:development']
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')


    grunt.registerTask('default', ['less', 'uglify', 'watch'])
}