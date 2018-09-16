const path = require("path");
const fs = require('fs');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.NODE_ENV || "dev";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log(path.join(__dirname, '/node_modules/modelproxy/dist/index'))

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
    target: "web",
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: resolveApp("tsconfig.prd.json") }),
        ]
    },
    externals: {
        "modelproxy": {
            root: 'modelproxy',
            amd: 'modelproxy',
            commonjs2: 'modelproxy',
            commonjs: 'modelproxy'
        }
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'index.js',
        libraryTarget: "commonjs",
        strictModuleExceptionHandling: true,
        sourceMapFilename: "index.map",
        library: "modelproxy-engine-wx",
    }
};