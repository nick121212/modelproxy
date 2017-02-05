const webpack = require('webpack');

module.exports = {
    context: __dirname + '/',
    cache: true,
    target: "node",
    entry: {
        'commons': ['lodash', 'bluebird', 'tv4'],
        'index': __dirname + '/src/index.ts'
    },
    devtool: 'source-map',
    node: {
        __filename: true,
        __dirname: true
    },
    output: {
        path: __dirname + '/built',
        filename: '[name].js',
        hash: true,
        libraryTarget: 'commonjs'
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.js', '.ts', '.json']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'commons',
        //     filename: '[name].js',
        //     minChunks: 3
        // })
    ]
}