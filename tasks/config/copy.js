module.exports = function(grunt) {
    grunt.config.set('copy', {
        node: {
            files: [
                { expand: true, src: ['src/**/*.js'], dest: 'built/node', filter: 'isFile' },
                { expand: true, src: ['src/**/*.js.map'], dest: 'built/node', filter: 'isFile' },
                { expand: true, src: ['src/**/*.d.ts'], dest: 'built/node', filter: 'isFile' }
            ],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};