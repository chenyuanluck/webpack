var path = require('path');
module.exports = {
    entry: './src/entry.js',                // 演示单入口文件
    output: {
        path: path.join(__dirname, 'main'),          // 打包输出的路径
        filename: 'bundle.js',                      // 打包输出的文件名
        publicPath: './main/'                        // html引用路径
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};