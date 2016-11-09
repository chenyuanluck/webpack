var path = require('path');
// 分离css插件
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 分离css插件配置
let extractSCSS = new ExtractTextPlugin('stylesheets/[name].css');
module.exports = {
    entry: './src/entry.js',                // 演示单入口文件
    output: {
        path: path.join(__dirname, 'main'),          // 打包输出的路径
        filename: 'bundle.js',                      // 打包输出的文件名
        publicPath: './main/'                        // html引用路径
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractSCSS.extract(['css','sass?sourceMap'])
            }
        ]
    },
    plugins: [
        extractSCSS
    ]
};