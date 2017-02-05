module.exports = function(grunt) {
    grunt.config.set('ts', {
        'default': {
            outDir: "built/node/",
            compiler: './node_modules/typescript/bin/tsc'
        },
        'options': {
            verbose: true,
            fast: 'never',
            compile: true,
        },
        'node': {
            tsconfig: true,
            src: ["src/index.ts"],
            // out: 'built/node/index.js',
        }
    });

    grunt.loadNpmTasks('grunt-ts');
};