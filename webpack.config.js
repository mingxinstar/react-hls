'use strict';
var bourbon = require('bourbon').includePaths;

const PUBLIC_DIR = __dirname + '/src'
const ENV = process.env.NODE_ENV || 'develop';

console.log('build ENV : ', ENV);

module.exports = {
    debug : true,
    devtool : 'eval',
    entry : {
        index : './src/scripts/index.js'
    },
    output : {
        path : __dirname + '/dist/assets',
        publicPath : '/assets/',
        filename : '[name].bundle.js'
    },
    resolve : {
        root : PUBLIC_DIR,
        extensions: ['', '.js', '.jsx'],
        alias : {
            scripts : PUBLIC_DIR + '/scripts',
            styles : PUBLIC_DIR + '/styles',
            components : PUBLIC_DIR + '/scripts/components',
            config : PUBLIC_DIR + '/scripts/config',
            images : PUBLIC_DIR + '/styles/images'
        }
    },
    module : {
        preLoaders : [{
            test : /\.js|jsx$/,
            loader : 'eslint-loader',
            configFile : '.eslintrc.js',
            exclude : [
                '/node_modules'
            ]
        }],
        loaders : [{
            test : /\.css$/,
            loader : 'style-loader!css-loader'
        }, {
            test : /\.scss$/,
            loader : 'style-loader!css-loader!sass-loader'
        }, {
            test : /\.js|jsx$/,
            loader : 'babel-loader',
            exclude : /node_modules/
        }, {
            test : /\.eot|woff|woff2|ttf|svg$/,
            loader : 'file-loader',
            // loader : 'url-loader!file-loader',
            exclude : /node_modules/
        }, {
            test : /\.jpg|png|gif$/,
            loader : 'url-loader?limit=25000'
        }]
    },
    devServer : {
        hot : true
    }
}
