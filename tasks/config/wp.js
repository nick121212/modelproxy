var webpack = require("webpack");
var options = require("../../webpack.config");

module.exports = function(grunt) {
    grunt.config.set('webpack', {
        'web': options
    });

    grunt.loadNpmTasks('grunt-webpack');
};