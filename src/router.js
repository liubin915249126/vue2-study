const { default: moduleA } = require("./store/moduleA")

//定义路由
const routes = [
    {
      path: "/",
      component:resolve => require(['./components/layout/default.vue'], resolve),
      children:[
        {
            path: "/template/new",
            component: resolve => require(['./pages/template/create.vue'], resolve),
        },
      ]
    },
    {
        path: '/test/rem', component: resolve => require(['./pages/test/rem.vue'], resolve)
    }
]

module.exports = routes