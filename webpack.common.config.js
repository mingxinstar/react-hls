'use strict';

const publicDir = `${__dirname}/src`;

module.export = {
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
            scripts : `${publicDir}/scripts`,
            styles : `${publicDir}/styles`,
            components : `${publicDir}/scripts/components`,
            config : `${publicDir}/scripts/config`,
            images : `${publicDir}/styles/images`,
            node_modules : `${publicDir}/../node_modules`
        }
    },
    module : {
        rules : [{
            test : /\.css$/,
            use : ['style-loader', 'css-loader'],
            include : [publicDir]
        }, {
            test : /\.scss$/,
            use : ['style-loader', 'css-loader', 'sass-loader'],
            include : [publicDir]
        }, {
            test : /\.js|jsx$/,
            loader : 'eslint-loader',
            include : [publicDir],
            enforce : 'post'
        }, {
            test : /\.js|jsx$/,
            use : 'babel-loader',
            include : [publicDir]
        }, {
            test : /\.eot|woff|woff2|ttf|svg$/,
            use : 'file-loader',
            include : [publicDir]
        }, {
            test : /\.jpg|png|gif$/,
            use : 'url-loader?limit=25000',
            include : [publicDir]
        }]
    },
}
