const path = require("path");
const fs = require('fs');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.NODE_ENV || "dev";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    entry: resolveApp("src/index.ts"),
    mode: "production",
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts?$/,
            loaders: ['babel-loader', {
                loader: 'ts-loader', options: {
                    configFile: resolveApp("tsconfig.prd.json")
                }
            }],
            exclude: /node_modules/
        }]
    },
    externals: {
        'path-to-regexp':{
            root: 'pathToRegexp',
            amd: 'pathToRegexp',
            commonjs2: 'pathToRegexp',
            commonjs: 'pathToRegexp'
        },
        'url-search-params':{
            root: 'URLSearchParams',
            amd: 'URLSearchParams',
            commonjs2: 'URLSearchParams',
            commonjs: 'URLSearchParams'
        }
    },
    target: "web",
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: resolveApp("tsconfig.prd.json") }),
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'index.js',
        libraryTarget: "umd",
        strictModuleExceptionHandling: true,
        sourceMapFilename: "index.map",
        library: "modelproxy",
    }
};