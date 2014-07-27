module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({
        jshint: {
            options: {
                ignores: ["StartUs/WebContent/js/bootstrap.min.css", "StartUs/WebContent/js/angular.min.js"]
            },
            all: ["Gruntfile.js", "StartUs/WebContent/js/*.js"]
        },
        less: {
            src: {
                expand: true,
                cwd: "StartUs/WebContent/less",
                src: ["**/*.less"],
                dest: "StartUs/WebContent/css",
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
