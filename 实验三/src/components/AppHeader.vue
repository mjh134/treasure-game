<script setup>
// AppHeader.vue —— 页头，内部组合了 NavBar 和 ThemeToggle
// 演示知识点：组件嵌套、默认插槽 <slot>（父组件可往里塞内容）
import NavBar from './NavBar.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="header">
    <div class="container inner">
      <NavBar blog-title="拾光博客" />
      <div class="right">
        <!-- 预留插槽：父组件（App.vue）可以往页头里追加任意内容 -->
        <slot />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--card);
  border-bottom: 1px solid var(--border);
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.right {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
