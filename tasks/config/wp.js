var webpack = require("webpack");
var options = require("../../webpack.config");
var optionsNode = require("../../webpack.config.node");

module.exports = function(grunt) {
    grunt.config.set('webpack', {
        'web': options,
        'node': optionsNode
    });

    grunt.loadNpmTasks('grunt-webpack');
};