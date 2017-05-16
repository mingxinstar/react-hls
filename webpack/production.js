const webpack = require('webpack');

const commonConfig = require('./common');

module.exports = Object.assign(commonConfig, {
    devtool : 'cheap-module-source-map',
    externals : {
        'react' : {
            commonjs : 'react',
            commonjs2 : 'react',
            amd : 'react',
            root : 'react'
        }
    },
    plugins : [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    ]
})
