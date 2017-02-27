'use strict';

const commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
    devtool : 'eval',
    devServer : {
        hot : true,
        contentBase : __dirname + '/dist',
        publicPath : '/assets/',
    }
})
