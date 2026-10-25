import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由表：一个页面对应一个路径
// 使用「哈希模式」(createWebHashHistory)，这样部署到 GitHub Pages 后
// 刷新子页面也不会 404，纯静态托管最省事
const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/post/:id', // 动态路由参数：文章 id
    name: 'post',
    component: () => import('../views/PostView.vue') // 懒加载，用到才加载
  },
  {
    path: '/write',
    name: 'write',
    component: () => import('../views/NewPostView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  { path: '/:anyMatch(.*)*', redirect: '/' } // 兜底：未知路径回首页
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 每次切换页面都回到顶部
    return { top: 0 }
  }
})
