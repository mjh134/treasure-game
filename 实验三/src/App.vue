<script setup>
// App.vue —— 根组件（整个网站的框架）
// 演示知识点：<RouterView> 渲染路由、组件嵌套、provide/inject 跨层传递主题
import { ref, provide, watchEffect } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Toast from './components/Toast.vue'

// 主题状态：light / dark。用 provide 注入给任意后代（如 ThemeToggle），
// 子组件无需一层层用 props 接收
const theme = ref('light')
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
// watchEffect：自动追踪依赖，theme 变化时更新 html 上的 data-theme 属性
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})

provide('theme', theme)
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="container main">
      <!-- 路由出口：当前路径对应的页面组件会渲染在这里 -->
      <!-- Transition 给页面切换加淡入淡出动画 -->
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />

    <!-- 全局轻提示，任何组件通过 useToast 都能调用 -->
    <Toast />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  padding-top: 24px;
  padding-bottom: 40px;
}
</style>
