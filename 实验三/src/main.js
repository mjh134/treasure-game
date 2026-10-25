import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

// 创建 Vue 应用实例，注册路由后挂载到 #app
// 这是整个网站的入口文件
createApp(App).use(router).mount('#app')
