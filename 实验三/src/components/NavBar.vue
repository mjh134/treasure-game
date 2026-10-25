<script setup>
// NavBar.vue —— 顶部导航：三个页面的链接
// 演示知识点：<RouterLink>、Vue Router 自动添加的激活类名 .router-link-active
</script>

<template>
  <nav class="links">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/todo">待办</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
  </nav>
</template>

<style scoped>
.links {
  display: flex;
  gap: 16px;
}
.links a {
  font-size: 15px;
  color: var(--muted);
  padding: 4px 2px;
  border-bottom: 2px solid transparent;
}
.links a.router-link-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  font-weight: 600;
}
</style>
