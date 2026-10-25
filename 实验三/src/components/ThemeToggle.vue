<script setup>
// ThemeToggle.vue —— 明/暗主题切换按钮
// 演示知识点：inject 使用祖先 provide 的值、插值、事件绑定、三元表达式
import { inject } from 'vue'

const theme = inject('theme') // App.vue 提供的 ref
const toggleTheme = inject('toggleTheme') // App.vue 提供的函数
</script>

<template>
  <button class="btn ghost" @click="toggleTheme">
    {{ theme === 'light' ? '🌙 暗色' : '☀️ 亮色' }}
  </button>
</template>
