import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由表：3 个页面对应 3 个路径
// 用「哈希模式」(createWebHashHistory)，部署到纯静态的 GitHub Pages 刷新也不会 404
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/todo', name: 'todo', component: () => import('../views/TodoView.vue') }, // 懒加载
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/:anyMatch(.*)*', redirect: '/' } // 未知路径回首页
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
