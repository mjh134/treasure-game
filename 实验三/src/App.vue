<script setup>
// App.vue —— 根组件：页头 + 页面出口 + 页脚
// 演示知识点：组件嵌套、provide/inject（把主题传给子组件）、watchEffect、RouterView
import { ref, provide, watchEffect } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

// 主题状态，provide 给任意后代组件（这里给 ThemeToggle 用）
const theme = ref('light')
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
// watchEffect：theme 一变就自动更新根元素的 data-theme 属性
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
      <!-- 路由出口：当前页面对应的组件渲染在这里 -->
      <RouterView />
    </main>
    <AppFooter />
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
  padding: 24px 16px 40px;
}
</style>
