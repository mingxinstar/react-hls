'use strict';

const commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
    devtool : 'eval',
    devServer : {
        hot : true,
        port : 8020,
        contentBase : __dirname + '/dist',
        publicPath : '/assets/',
    }
})
