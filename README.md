# webpack-vue
***
### 浏览目录
>
[3.安装webpack-html-plugin](https://github.com/liubin915249126/vue2-study#3安装webpack-html-plugin)   

[4安装vue](https://github.com/liubin915249126/vue2-study#4安装vue)   

[5安装webpack-dev-server热更新](https://github.com/liubin915249126/vue2-study#5安装webpack-dev-server热更新)   

[6安装babel](https://github.com/liubin915249126/vue2-study#6安装babel)   

[7安装vue-loader处理vue的文件](https://github.com/liubin915249126/vue2-study#7安装vue-loader处理vue的文件)   

[8使用路由vue-router2](https://github.com/liubin915249126/vue2-study#8使用路由vue-router2)

[9.1vuex的基本应用](https://github.com/liubin915249126/vue2-study#9vuex的应用)  

[9.2state的拆分](https://github.com/liubin915249126/vue2-study#92用module拆分state)   

[10组件化,及组件间传值](https://github.com/liubin915249126/vue2-study#10vue组件化及组件间传值)
>

***
#### 使用方法
>
```
    git clone https://github.com/liubin915249126/vue2-study.git
    cd vue2-study
    安装cnpm镜像
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    npm install //安装依赖包
    npm start   //启动项目
``` 
>
***

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
   </div>   
```
执行webpack打包运行index.html(打包的文件)报错，经查在webpack.config.js里面配置：
```
    ...
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
```
再次运行即可看到效果
![效果图](https://github.com/liubin915249126/webpack-vue/blob/master/image/index1.png)
>
#### 5.安装webpack-dev-server热更新
>
```
    npm install webpack-dev-server -g
    npm install webpack-dev-server --save-dev
    npm install vue-hot-reload-api --save-dev
```
 配置webpack.config.js
```
    ...
    devServer: {
        historyApiFallback: true,
    },
    ...
```  
配置package.json里面命令
```
    "start":"webpack-dev-server --hot --inline --progress --open"
```
执行 npm start 浏览器自动打开页面，更改文件后即可看到页面实时更新

> 
#### 6.安装babel
>
在使用.vue文件之前先要安装babel(将es6语法转化为es5)
```
    npm install babel-core babel-loader babel-plugin-transform-runtime --save-dev 
    npm install babel-preset-stage-0 babel-runtime babel-preset-es2015 --save-dev 
```
项目根目录新建.babelrc文件、配置：
```
    {
    "presets": ["es2015", "stage-0"],
    "plugins": ["transform-runtime"]
    }
```
>
#### 7.安装vue-loader处理.vue的文件 
>
安装loader 处理.css,.vue文件
```
npm install css-loader style-loader vue-loader vue-html-loader --save-dev
```
配置webpack.config.js
```
   ...
   module:{
       loaders: [
           {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
           {test: /\.vue$/,loader: 'vue-loader'}]
        },
    //vue: {loaders: {js: 'babel'}}
   ...
```
配置完运行报错：Cannot find module 'vue-template-compiler'
安装vue-template-compiler
```
cnpm install vue-template-compiler --save-dev
```
>
>
 修改index.html:
 ```
   <body>
    <div id="main">
       <app></app>   
    </div>
   </body>
 ```
>
>
新建src/index.vue:
```
  <template>
    <div class="message">{{ msg }}</div>
  </template>

    <script>
        export default {
        data () {
            return {
            msg: 'Hello from vue-loader!'
            }
        }
        }
    </script>

    <style>
        .message {
        color: blue;
        }
    </style>
```
>
>
修改main.js
```
    ...
    import App from './src/index.vue';

    new Vue({
        el: '#main',
        components: { App }
    })
```
保存后运行 npm start 即可看到效果
![效果图](https://github.com/liubin915249126/webpack-vue/blob/master/image/index2.png)

修改代码，可看到修改后的效果。
>
#### 8.使用路由vue-router2
>
首先安装 vue-router:
```
npm install vue-router --save
```
>

>
修改main.js:
>

>
   1.引入APP,about两个组件导入router组件
   引入子组件Child
```
    import App from './src/index.vue';
    import About from './src/about.vue';
    import Child from './src/children.vue' 
    import VueRouter from 'vue-router';

    Vue.use(VueRouter)
```  
>

>
2.定义路由：
嵌套路由用children:[]存放,子组件在父组件的
```
<router-view></router-view>
```
中渲染,路由通过 "/:id" 定义参数通过链接 "/about/123"传递参数
在组件中通过{{$route.params.id}}获取传参
```    
const routes = [
    { path: '/index', component: App },
    { path: '/about/:id', component: About ,children:[
        { path: 'child', component: child}
    ]}
]
```
>
>
 3. 创建 router 实例，然后传 `routes` 配置
```    
    const router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    })
```    
>
>
4. 创建和挂载根实例。
```
    const app = new Vue({
        router
    }).$mount('#main')
```
>
>
5.修改index.html文件
```
    <div id="main">
        <p>
            <router-link to="/index">index</router-link>
            <router-link to="/about/123">about</router-link>
            <router-link to="/about/123/child">child router</router-link>
        </p>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
```
> 
>
6.修改父组件about.vue
写</template>才发现，只能有一个顶级的HTML标签
```
</template>
    <div>
        <div class="message">{{ msg }}</div>
        <div>
        <span>传递的参数为：{{ $route.params.id }}</span>

        <router-view></router-view>
        </div>
    </div>
</template>    
```
> 

#### 8.1路由重定向redirect
>
```
routes: [
    ...
    { path: '/a', redirect: '/index' }
  ]

```
访问/a时将跳转值/index对应的组件
>
#### 8.2 路由懒加载
>
用vue.js写单页面应用时，会出现打包后的JavaScript包非常大，影响页面加载，我们可以利用路由的懒加载去优化这个问题。将路由写法改为：
```
//定义路由
const routes = [
    { path: '/index', component: resolve => require(['./src/index.vue'], resolve) },
    {
        path: '/about/:id', component: resolve => require(['./src/about.vue'], resolve) ,
        children:[
            { path: 'child', component: resolve => require(['./src/children.vue'], resolve)}
    ]},
    { path: '/a', redirect: '/index' }
]
```
>
#### 8.3 js的方法跳转路由
>
```
    // 字符串
    router.push('home')
    // 对象
    router.push({ path: 'home' })
    // 命名的路由
    router.push({ name: 'user', params: { userId: 123 }})
    // 带查询参数，变成 /register?plan=private
    router.push({ path: 'register', query: { plan: 'private' }})
```
>
>
参考文献:[vue-router](https://router.vuejs.org/zh-cn/essentials/nested-routes.html) 
效果图:![效果图](https://github.com/liubin915249126/vue2-study/blob/master/image/router.png) 
>

#### 9.vuex的应用
>
安装vuex
```
npm install vuex --save
```
>

##### 9.1基本用法：
>
新建store.js文件：
```
        import Vue from 'vue';
        import Vuex from 'vuex';

        Vue.use(Vuex)
        //创建Store实例
        const store = new Vuex.Store({
            // 存储状态值
            state: {
                count:1
        },
            // 状态值的改变方法,操作状态值
            // 提交mutations是更改Vuex状态的唯一方法
            mutations: {
                increment(state){
                    state.count++;
                },
                decrement(state){
                    state.count--;
                }
        },
            // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
            getters: {
                
        },
            actions: {
                
        }
        })
        // 要改变状态值只能通过提交mutations来完成
        export default store;
```
>
>
在main.js里面注入store;
```
    ...
    //引入store
    import store from './store.js'
    ...
    const app = new Vue({
        router,
        store
    }).$mount('#main')
```
>
>
新建count.vue文件，并新建路由指向count组件参照[vue-router的使用](https://segmentfault.com/a/1190000011298261)。
count.vue文件：
```
    <template>
    <div>
        <div>{{$store.state.count}}</div>
        <div>
        <span @click="increment">increment</span>
        <span @click="decrement">decrement</span>
        </div>
    </div>
    </template>
    <style>
    </style>
    <script>
    export default {
        data(){
            return {};
        },
        methods:{
            increment(){
                this.$store.commit('increment')  
            },
            decrement(){
                this.$store.commit('decrement')  
            }
        }
    }
    </script>
```
效果图：
![效果图](https://github.com/liubin915249126/vue2-study/blob/master/image/vuex1.gif)
>
***
#### 9.2用Module拆分state
>
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter
> 
>
新建moduleA.js,moduleB.js
#### [moduleA](https://github.com/liubin915249126/vue2-study/blob/master/Script/moduleA.js)
#### [moduleB](https://github.com/liubin915249126/vue2-study/blob/master/Script/moduleB.js)
并修改store.js:
```
...
import moduleA from './moduleA';
import moduleB from './moduleB';
...
Vue.use(Vuex)
//创建Store实例
const store = new Vuex.Store({
    modules:{
        moduleA, moduleB //es6的写法，合并模块
    }
})
...
```
在组件里面想访问到state需要用到
```
    $store.state.moduleA.count
    $store.state.moduleB.Name
```
效果图：
![效果图](https://github.com/liubin915249126/vue2-study/blob/master/image/vuex2.gif)
mutations里面修改state的方法依然不变 
>

#### 10.Vue组件化及组件间传值
##### 10.1 Vue组件化
>
 组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。
>
>
组件[A](https://github.com/liubin915249126/vue2-study/blob/master/Script/src/component-a.vue)写法：
```
   <template>
   <div class="componentA">
   ...
   </div>
</template>
<script>
    export default {
    data () {
        return {
           msg: 'component-A',
        } 
    }
    }
</script>
<style>
  
</style>
```
>
>
组件[B](https://github.com/liubin915249126/vue2-study/blob/master/Script/src/component-b.vue)写法：
```
   <template>
   <div class="message" id="componentB">
        ...
   </div>
</template>

<script>
    import Vue from 'vue'
    export default Vue.component('my-component', {
            template: '#componentB ',
            data(){
                return {
                      msg: 'component-B',
                    }
            }
    })
</script>
<style>
</style>
```
>
>
在父组件[component](https://github.com/liubin915249126/vue2-study/blob/master/Script/src/component.vue)
分别引用挂在
```
   <template>
  <div>
   <component-A ></component-A>
   <component-B></component-B>
  </div>  
</template>

<script>
    import componentA from './component-a.vue';
    import componentB from './component-b.vue'
    export default {
    data () {
        return {
        }
     },
     components:{
         "component-A":componentA,
         "component-B":componentB
     }
    }
</script>
<style>
</style>
```
>
##### 10.2组件间传值
>
  对于简单的父子组件或是同属同一父组件的兄弟组件之间的通信，vue提供了方法,没必要用到vuex
>
>
##### 父组件向子组件传值：
父组件：
```
    <component-A :logo="logoMsg"></component-A> //logoMsg是父组件data里的值
```
子组件：
```
   <template>
   <div class="componentA">
      <div>{{logo}}</div>
   </div>
</template>
   ...
   data(){

   }
   props:["logo"],
   ...
```
>
>

##### 子组件调用父组件方法并向父组件传值：

父组件：
```
   
   <component-A :logo="logoMsg" @toParent="componenta"></component-A>
   ...
    methods:{
         componenta:function(data){ //data就是子组件传递过来的值
            this.data1 = data
         }
     }
```
>
>
子组件：
```
     methods:{
        toParent:function(){
            this.$emit('toParent',this.data1) //调用父组件toParent方法，并传递参数
        }
    }
```
>
>
效果图：
![效果图](https://github.com/liubin915249126/vue2-study/blob/master/image/component.gif)
>
>

##### 兄弟组件之间传值:在B组件修改父组件数据时。选择修改传给A组件的数据即可。

效果图：
![效果图](https://github.com/liubin915249126/vue2-study/blob/master/image/dataBrother.gif)
>

#### 事件总线：不相关组件之间传递数据
>
bus.js文件：
```
   import Vue from 'vue'
   export default new Vue()
```
>
>
组件B $emit触发事件: 
``` 
  import Bus from './bus.js' 
  ...  
   byBus:function(){
           Bus.$emit('byBus',this.byBusData)
        }
```  
>
>
  组件A $on接受事件传递数据
```
    ...
    data(){
    },
    created(){
       Bus.$on('byBus',(data)=>{
           this.busData = data
       })
    },
```
效果图：![效果图](https://github.com/liubin915249126/vue2-study/blob/master/image/bus.gif)  
>
#### 更复杂的数据传递就要用到[vuex](https://github.com/liubin915249126/vue2-study#9vuex的应用)

#### 11.使用nodejs+koa2提供后台接口
npm install koa koa-router --save-dev
>
在根目录下下新建server/index.js文件index.js:
```
    const Koa = require('koa');
    const router = require('koa-router')();
    const app = new Koa();
    router.get('/', (ctx, next)=> {
        ctx.response.body = '111'
    });

    app
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(3000,()=>{
       console.log('server is start at port 3000')
    });
    
```
>
package.json里面设置命令:"server":"node server index.js"
启动服务:npm run server
浏览器里面访问localhost/3000可看到返回值
>
#### 12.设置koa允许前端跨域访问

>
使用[koa2-cors](https://github.com/zadzbw/koa2-cors)设置跨域
安装npm install koa2-cors --save-dev
```
   ...
    app.use(cors({
        origin: function (ctx) {
            if (ctx.url === '/test') {
                return false;
            }
            return '*';
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }));
    ...
```
>
#### 13 使用axios访问后台接口
>
安装axios：
```
   npm install axios --save
```  
在根目录新建server/request.js
封装一个request函数，所有的请求都通过request函数,便于对于请求统一处理
```
    import axios from 'axios'
    let BASE_URL = 'http1://localhost:3000'
    export default function request(data){
    let options = {...data} 
    options.url = `${BASE_URL}${data.url}`
    return axios(options)
            .then(checkStatus)
            .then(parseJSON)
            .catch()
    }
```
>
#### 14.使用elementui
>
安装:npm i element-ui -S 
引入：
```
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'
    Vue.use(ElementUI)
```
使用：使用前配置css,file加载器
安装style-loader,css-loader
```
   npm install css-loader style-loader file-loader --save-dev
```
```
   {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
```
>
#### 15.使用less
>
安装:
```
    cnpm install less less-loader --save-dev
```
使用：
```
<style lang='less'>
   .articleWrap{
     .articleTop{
       color:red;
     }
   }
</style>
```
>
#### 16.文章系统
>
1.路由跳转传参：
```
<router-link :to="{ name:'articleinfo',params:{id:index}}"></router-link> 
```
2.使用富文本编辑器：vue2-editor
  安装：cnpm install vue2-editor --save 
  使用：import { VueEditor } from 'vue2-editor'
>
