module.exports = function(grunt) {
    grunt.config.set('clean', {
        node: {
            src: ["built/node"]
        },
        src: {
            src: ["src/**/*.js", "src/**/*.js.map", "src/**/*.d.ts"]
        },
        web: {
            src: ["built/web"]
        },
        all: {
            src: ["built"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};