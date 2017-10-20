import Vue from 'vue';
import VueRouter from 'vue-router';
//引入组件
import App from './src/index.vue';
import About from './src/about.vue';
import Child from './src/children.vue'; 
import Count from './src/count.vue'; 
import Article from './src/article/index.vue';

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//引入store
import store from './store.js'

Vue.use(VueRouter)
Vue.use(ElementUI)

//定义路由
const routes = [
    { path: '/index', component: resolve => require(['./src/index.vue'], resolve) },
    {
        path: '/about/:id', component: resolve => require(['./src/about.vue'], resolve) ,
        children:[
            { path: 'child', component: resolve => require(['./src/children.vue'], resolve)}
    ]},
    { path: '/count', component: resolve => require(['./src/count.vue'], resolve)},
    { path: '/component', component: resolve => require(['./src/component.vue'], resolve) },
    { path: '/article', component: resolve => require(['./src/article/index.vue'], resolve) },
    { path: '/articleinfo/:id', name:'articleinfo',component: resolve => require(['./src/articleinfo/articleinfo.vue'], resolve) },
    { path: '/a', redirect: '/index' }
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes 
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
    store
}).$mount('#main')
// new Vue({
//     el: '#main',
//     components: { App }
// })
