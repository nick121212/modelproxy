module.exports = function(grunt) {
    grunt.config.set('browserify', {
        dist: {
            src: ['built/node/index.js'],
            dest: "dist/index.js",
            options: {
                exclude: ["lodash", "tv4"],
                browserifyOptions: {
                    standalone: 'modelproxy',
                    debug: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};