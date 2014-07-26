module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({
        jshint: {
            options: {
                paths: ["StartUs/WebContent/js"],
                ignores: ["bootstrap.min.css", "angular.min.js"]
            },
            all: ["../../../Gruntfile.js", "*.js"]
        },
        less: {
            options: {
                paths: ["StartUs/WebContent/style"]
            },
            src: {
                expand: true,
                cwd: "StartUs/WebContent/style",
                src: ["**/*.less"],
                dest: "StartUs/WebContent/style",
                ext: ".css"
            }
        }
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Define your tasks here
    grunt.registerTask('default', ['less']);

};
