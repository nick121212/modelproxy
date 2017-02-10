const webpack = require('webpack');

module.exports = {
    context: __dirname + '/',
    cache: true,
    target: "web",
    entry: {
        // 'vendor': ['lodash', 'tv4'],
        'index': __dirname + '/src/index.ts'
    },
    devtool: 'source-map',
    // node: {
    //     __filename: true,
    //     __dirname: true
    // },
    output: {
        path: __dirname + '/dist/',
        filename: 'web.js',
        hash: true,
        library: "modelProxy",
        libraryTarget: 'umd'
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    },
    externals: [
        "tv4",
        {
            "lodash": {
                root: "_",
                commonjs2: "lodash",
                commonjs: ["lodash"],
                amd: "lodash"
            }
        }
    ],
    plugins: [
        // new webpack.IgnorePlugin(/tv4|lodash/i),
        // new webpack.ProvidePlugin({
        //     "tv4": "tv4",
        //     "_": "lodash"
        // }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
}