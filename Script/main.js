import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './src/index.vue';
import About from './src/about.vue';
import Child from './src/children.vue'; 

//引入store
import store from './store.js'

Vue.use(VueRouter)

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
