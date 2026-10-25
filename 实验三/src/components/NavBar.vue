<script setup>
// NavBar.vue —— 顶部导航链接
// 演示知识点：<RouterLink>、active 类名、props 接收标题
defineProps({
  blogTitle: { type: String, required: true }
})
</script>

<template>
  <nav class="nav">
    <!-- RouterLink 会自动给当前匹配项加 .router-link-active 类 -->
    <RouterLink to="/" class="brand">✦ {{ blogTitle }}</RouterLink>
    <div class="links">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/write">写博文</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.brand {
  font-weight: 700;
  font-size: 18px;
}
.links {
  display: flex;
  gap: 18px;
}
.links a {
  padding: 6px 4px;
  font-size: 15px;
  color: var(--muted);
  border-bottom: 2px solid transparent;
}
/* router-link-active 是 Vue Router 内置的激活类名 */
.links a.router-link-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  font-weight: 600;
}
</style>
