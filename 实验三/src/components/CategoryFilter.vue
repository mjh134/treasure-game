<script setup>
// CategoryFilter.vue —— 分类筛选按钮组
// 演示知识点：props 接收数组 + defineModel 双向绑定选中项 + v-for + 动态 class
const props = defineProps({
  categories: { type: Array, required: true }
})
const active = defineModel({ type: String, default: '全部' })
</script>

<template>
  <div class="filter">
    <button
      v-for="c in props.categories"
      :key="c"
      class="chip"
      :class="{ on: active === c }"
      @click="active = c"
    >
      {{ c }}
    </button>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.chip {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--muted);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}
.chip.on {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}
</style>
