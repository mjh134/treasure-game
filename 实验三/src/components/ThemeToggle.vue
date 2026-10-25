<script setup>
// ThemeToggle.vue —— 明/暗主题切换按钮
// 演示知识点：inject 使用祖先 provide 的响应式值、插值表达式、事件绑定
import { inject } from 'vue'

// 从 App.vue 注入的 theme（ref）和 toggleTheme（函数）
const theme = inject('theme')
const toggleTheme = inject('toggleTheme')
</script>

<template>
  <button class="btn ghost toggle" @click="toggleTheme" :title="theme === 'light' ? '切换到暗色' : '切换到亮色'">
    {{ theme === 'light' ? '🌙 暗色' : '☀️ 亮色' }}
  </button>
</template>

<style scoped>
.toggle {
  white-space: nowrap;
}
</style>
