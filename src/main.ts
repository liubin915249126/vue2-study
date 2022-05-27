import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'

import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: '/', component: HelloWorld },
  ]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
