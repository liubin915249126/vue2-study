# webpack-vue

#### 0.项目初始化
>
cd 'to/your/path' npm init
>
#### 1.安装 webpack 
>
分为全局安装和项目内安装
```
    npm install webpack -g
    npm install webpack --save-dev
``` 
>
#### 2.配置webpack.config.js文件
```
     const path = require('path');

     module.exports = {
         entry: './Script/main.js', //项目入口文件
         output:{                    //输出编译后文件地址及文件名
             path: path.resolve(__dirname, 'dist'),
             filename: 'js/bundle.js'
         }
     };
```          
命令行里面执行 webpack 命令即可看到编译后的文件

#### 3安装webpack-html-plugin
npm install html-webpack-plugin --save-dev
```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ...
    plugins:[
        ...
        new HtmlWebpackPlugin({
            title:'react 学习',
            inject:'body',
            filename:'index.html',
            template:path.resolve(__dirname, "index.html")
        }),
        ...
    ]
```          
>
再次执行webpack命令可看到多了一个index.html文件
这个文件是根据模板生成的并自动引入打包生成的js文件
运行打包后的index.html即可看到效果。
>
#### 4.安装Vue
>
```
   npm install vue -save
```
修改main.js：
```
    import Vue from  'vue';

    var MainCtrl = new Vue({
        el:'#main',
        data:{
            message:'Hello world'
        }
    })
```
修改index.html:
```
   <div id="main">
      <h3>{{message}}</h3>
```
执行webpack打包运行index.html(打包的文件)报错，经查在webpack.config.js里面配置：
```
    ...
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
```
再次运行即可看到效果
>