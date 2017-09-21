#### 1.css3自动补全前缀
>
cnpm install --save-dev autoprefixer postcss-loader
```
   var autoprefixer = require('autoprefixer');
    module.exports={
    //其他配置这里就不写了

    module:{
        loaders:[
        {
        test:/\.css$/,
        //在原有基础上加上一个postcss的loader就可以了
        loaders:['style-loader','css-loader','postcss-loader']
        }
        ]
    },
    postcss:[autoprefixer({browsers:['last 2 versions']})]

    }
```
>

#### 2.copy-webpack-plugin拷贝资源插件
>
cnpm install --save-dev copy-webpack-plugin
```
    new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
    }]),
```
作用：把public 里面的内容全部拷贝到编译目录
>
#### 区分开发环境与生产环境
>
```
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
    // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
  ])
}
```
> 