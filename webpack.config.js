'use strict';

const publicDir = __dirname + '/src'

console.log(__dirname + '/node_modules/hls.js/');

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
        root : publicDir,
        extensions: ['', '.js', '.jsx'],
        alias : {
            scripts : publicDir + '/scripts',
            styles : publicDir + '/styles',
            components : publicDir + '/scripts/components',
            config : publicDir + '/scripts/config',
            images : publicDir + '/styles/images',
            node_modules : publicDir + '/../node_modules'
        }
    },
    module : {
        // preLoaders : [{
        //     test : /\.js|jsx$/,
        //     loader : 'eslint-loader',
        //     configFile : '.eslintrc.js',
        //     exclude : [
        //         '/node_modules'
        //     ]
        // }],
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
            exclude : /node_modules/
        }, {
            test : /\.jpg|png|gif$/,
            loader : 'url-loader?limit=25000'
        }]
    },
    devServer : {
        hot : true,
        contentBase : __dirname + '/dist'
    }
}
