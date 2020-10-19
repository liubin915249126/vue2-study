const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const isPro = process.env.NODE_ENV == "production"

const config = {
    entry: {
        app:["babel-polyfill",'./Script/main.js']
    }, //项目入口文件
    output: {                    //输出编译后文件地址及文件名
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        
    },
    // mode:isPro?"production":"development",
    devServer: {
        historyApiFallback: true,
        port:9001,
        proxy: {
            "/api": {
              "target": "http://121.41.53.68:8085/api/",
              "changeOrigin": true,
              "pathRewrite": { "^/api" : "" }
            }
        },
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            // {
            //     test: /\.js$/,
            //     include: [
            //     //   src,
            //       path.resolve(__dirname, 'node_modules/webpack-dev-server')
            //     ],
            //     loader: 'babel-loader'
            // },
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",

            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // vue: { loaders: { js: 'babel' } },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //           cache: true,
    //           parallel: true,
    //           sourceMap: true,
    //           mangle: {
    //             safari10: true
    //           } // set to true if you want JS source maps
    //         }),
    //     ]
    // },         
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react 学习',
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, "index.html")
        }),
        new VueLoaderPlugin(),
    ],
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
};
if (process.env.NODE_ENV === 'production') {
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
            IS_PRODUCTION: true
        }),
        new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions:{
                compress: {warnings: false},
                mangle: {
                    safari10: true
                }
            }
        }),
    ]);
}
else {
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env':
            {
                'NODE_ENV': JSON.stringify('development'),
            },
            IS_PRODUCTION: false
        }),
    ]);
}
module.exports = config