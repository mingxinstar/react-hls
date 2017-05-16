'use strict';

const path = require('path');

const commonConfig = require('./common');

module.exports = Object.assign(commonConfig, {
    devtool : 'eval',
    devServer : {
        hot : true,
        port : 8030,
        contentBase : path.resolve(__dirname, '../dist'),
        publicPath : '/assets/',
    }
})
