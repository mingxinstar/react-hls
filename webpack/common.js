'use strict';

const path = require('path');
const srcDir = path.resolve(__dirname, '../src');

module.exports = {
    entry : {
        index : './src/scripts/index.js',
        player : './src/scripts/components/react-hls.jsx'
    },
    output : {
        path : path.resolve(__dirname, '../dist/assets'),
        filename : '[name].bundle.js',
        library : 'react-hls',
        libraryTarget : 'umd'
    },
    resolve : {
        modules : ['node_modules', srcDir],
        extensions: ['.js', '.jsx', '.sass'],
        alias : {
            scripts : `${srcDir}/scripts`,
            styles : `${srcDir}/styles`,
            components : `${srcDir}/scripts/components`,
            config : `${srcDir}/scripts/config`,
            images : `${srcDir}/styles/images`,
            node_modules : `${srcDir}/../node_modules`
        }
    },
    module : {
        rules : [{
            test : /\.css$/,
            use : ['style-loader', 'css-loader'],
            include : [srcDir]
        }, {
            test : /\.scss$/,
            use : ['style-loader', 'css-loader', 'sass-loader'],
            include : [srcDir]
        }, {
            test : /\.js|jsx$/,
            loader : 'eslint-loader',
            include : [srcDir],
            enforce : 'post'
        }, {
            test : /\.js|jsx$/,
            use : 'babel-loader',
            include : [srcDir]
        }, {
            test : /\.eot|woff|woff2|ttf|svg$/,
            use : 'file-loader',
            include : [srcDir]
        }, {
            test : /\.jpg|png|gif$/,
            use : 'url-loader?limit=25000',
            include : [srcDir]
        }]
    },
}
