<script setup>
// BaseCard.vue —— 通用卡片外壳
// 演示知识点：默认插槽（内容完全由父组件决定，这里只负责"卡片"外观）
</script>

<template>
  <div class="card box">
    <slot />
  </div>
</template>

<style scoped>
.box {
  padding: 20px;
}
</style>
