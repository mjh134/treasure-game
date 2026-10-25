<script setup>
// StatBar.vue —— 统计条（文章数 / 标签数 / 评论数）
// 演示知识点：props 接收对象、v-for 遍历、计算好的数据渲染
defineProps({
  items: {
    type: Array, // [{ label: '文章', value: 5 }, ...]
    required: true
  }
})
</script>

<template>
  <div class="stats card">
    <div v-for="it in items" :key="it.label" class="cell">
      <div class="num">{{ it.value }}</div>
      <div class="label">{{ it.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: flex;
  justify-content: space-around;
  padding: 16px;
  margin-bottom: 24px;
}
.cell {
  text-align: center;
}
.num {
  font-size: 26px;
  font-weight: 800;
  color: var(--primary);
}
.label {
  font-size: 13px;
  color: var(--muted);
}
</style>
