const webpack = require('webpack');

module.exports = {
    context: __dirname + '/',
    cache: true,
    debug: false,
    target: "node",
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    },
    entry: {
        // 'vendor': ['jquery', 'lodash', 'jquery-terminal', 'jquery-mousewheel'],
        'index': __dirname + '/src/index.ts'
    },
    devtool: "source-map",
    output: {
        path: __dirname + '/built',
        filename: '[name].js',
        hash: true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts?module=commonjs' }
        ]
    }
}