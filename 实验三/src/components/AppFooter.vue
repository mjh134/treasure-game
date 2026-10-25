<script setup>
// AppFooter.vue —— 页脚
// 演示知识点：插值表达式、计算属性、静态文案
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="line">拾光博客 · 一个用 Vue 3 做的课程实验站点</p>
      <p class="copy">© {{ year }} Shiguang Blog · Powered by Vue + Vite · 仅用于学习</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--card);
  border-top: 1px solid var(--border);
  padding: 22px 0;
  text-align: center;
}
.line {
  margin: 0 0 4px;
  font-size: 14px;
}
.copy {
  margin: 0;
  font-size: 12px;
  color: var(--muted);
}
</style>
