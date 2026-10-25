<script setup>
// AppFooter.vue —— 页脚
// 演示知识点：插值表达式、computed 计算属性
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>© {{ year }} 小待办 · 用 Vue 3 做的课程实验 · 仅用于学习</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--card);
  border-top: 1px solid var(--border);
  padding: 18px 0;
  text-align: center;
  font-size: 13px;
  color: var(--muted);
}
.footer p {
  margin: 0;
}
</style>
