const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './Script/main.js', //项目入口文件
    output: {                    //输出编译后文件地址及文件名
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react 学习',
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, "index.html")
        }),
    ],
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
};