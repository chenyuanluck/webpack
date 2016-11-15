var path = require('path');
// 分离css插件
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 分离css插件配置
let extractSCSS = new ExtractTextPlugin('stylesheets/[name].css');
module.exports = {
    devtool: 'inline-source-map',                                   // 启用source-map
    entry: './src/entry.js',                                        // 演示单入口文件
    debug: true,
    output: {
        path: path.join(__dirname, 'main'),                         // 打包输出的路径
        filename: 'bundle.js',                                      // 打包输出的文件名
        publicPath: './main/'                                       // html引用路径
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                // loader: extractSCSS.extract(['css?sourceMap', 'sass?sourceMap'])
                loader: 'style!css?sourceMap!sass?sourceMap'
            }, {
                test: /\.(es6)|(js)$/,
                loader: 'babel?presets[]=es2015'
                // plugins: ['babel-plugin-components'],
                // query: {
                //     presets: ['es2015']
                // }
            }
        ]
    },
    plugins: [
        extractSCSS
    ]
};