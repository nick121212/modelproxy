module.exports = function(grunt) {
    grunt.config.set('browserify', {
        web: {
            src: ['built/node/index.js'],
            dest: "dist/web.js",
            options: {
                exclude: ["lodash", "tv4"],
                ignore: ["lodash"],
                "transform": ["browserify-shim"],
                browserifyOptions: {
                    standalone: 'modelProxy',
                    'no-bundle-external': ''
                }
            }
        },
        node: {
            src: ['built/node/index.js'],
            dest: "dist/node.js",
            options: {
                exclude: ["lodash", "tv4"],
                ignore: ["lodash"],
                browserifyOptions: {
                    standalone: 'modelProxy',
                    'no-bundle-external': ''
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};