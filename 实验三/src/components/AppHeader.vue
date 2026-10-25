<script setup>
// AppHeader.vue —— 页头：左边站点名，右边导航 + 主题按钮
// 演示知识点：组件嵌套（引入 NavBar、ThemeToggle）
import NavBar from './NavBar.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="header">
    <div class="container inner">
      <span class="logo">✅ 小待办</span>
      <div class="right">
        <NavBar />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--card);
  border-bottom: 1px solid var(--border);
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.logo {
  font-weight: 700;
  font-size: 18px;
}
.right {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
