<script setup>
// EmptyState.vue —— 空状态占位（列表没有内容时显示）
// 演示知识点：具名插槽 <slot name> + 默认插槽，父组件可自定义图标和文案
</script>

<template>
  <div class="empty card">
    <!-- name="icon" 具名插槽：父组件可传入自定义图标 -->
    <div class="icon"><slot name="icon">🗒️</slot></div>
    <!-- 默认插槽：父组件写进来的正文放这里，没写则显示默认文案 -->
    <p class="text"><slot>这里还什么都没有～</slot></p>
  </div>
</template>

<style scoped>
.empty {
  text-align: center;
  padding: 48px 20px;
  color: var(--muted);
}
.icon {
  font-size: 40px;
  margin-bottom: 8px;
}
.text {
  margin: 0;
  font-size: 15px;
}
</style>
