module.exports = function(grunt) {

    grunt.registerTask('task-clean', ['clean:src']);
    grunt.registerTask('task-copy', ['copy']);

    grunt.registerTask('task-ts', ['typescript:node']);

    // grunt.registerTask('task-concat', ['concat', 'cssmin']);
    // grunt.registerTask('task-require', ['html2js', 'requirejs']);
    // grunt.registerTask('task-uglify', ['uglify', 'replace:version']);
    // grunt.registerTask('task-rename', ['rename']);
    // grunt.registerTask('task-replace', ['replace']);

    grunt.registerTask('build-node', ['clean:node', 'ts:node', 'copy:node', 'clean:src']);
};