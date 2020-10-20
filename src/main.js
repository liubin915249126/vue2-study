import 'babel-polyfill'
import Vue from 'vue'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import VueRouter from 'vue-router';
//引入组件


import './public/iconfont.css'
import 'vant/lib/index.css';
import './main.less'

// //引入element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

//引入store
import store from './store.js'

Vue.use(VueRouter)
// Vue.use(ElementUI)

//定义路由
const routes = [
    {
        path: '/test/rem', component: resolve => require(['./pages/test/rem.vue'], resolve)
    }
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
