<script setup>
// Greeting.vue —— 根据是否传入名字显示不同问候
// 演示知识点：props、v-if / v-else 条件渲染、插值
defineProps({
  name: { type: String, default: '' }
})
</script>

<template>
  <h2 v-if="name">你好，{{ name }}！👋</h2>
  <h2 v-else>你好，访客！点击右边按钮告诉我你是谁～</h2>
</template>
