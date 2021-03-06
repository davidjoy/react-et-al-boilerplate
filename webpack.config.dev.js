'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool : 'source-map',
    entry   : [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/main.js')
    ],
    output  : {
        path      : path.join(__dirname, '/dist/'),
        filename  : '[name].js',
        publicPath: '/'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject  : 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            '__DEV__'             : JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module  : {
        loaders: [{
            test   : /\.js?$/,
            exclude: /node_modules/,
            loader : 'babel'
        }, {
            test  : /\.json?$/,
            loader: 'json'
        }, {
            test  : /\.css$/,
            loader: 'style!css'
        }, {
            test  : /\.less$/,
            loader: "style!css!less"
        }]
    },
    _hotPort: 8000
};
