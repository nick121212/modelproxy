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
        library: "modelProxy",
        libraryTarget: 'umd'
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
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
        },
        {
            "json-pointer": {
                root: "jsonPointer",
                commonjs2: "json-pointer",
                commonjs: ["json-pointer"],
                amd: "json-pointer"
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