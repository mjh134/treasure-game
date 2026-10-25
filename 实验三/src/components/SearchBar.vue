<script setup>
// SearchBar.vue —— 搜索框
// 演示知识点：defineModel 实现自定义组件的 v-model（Vue 3.4+ 的新写法）
// 父组件写 <SearchBar v-model="blogStore.search" /> 即可双向绑定关键词
const keyword = defineModel({ type: String, default: '' })
</script>

<template>
  <div class="search card">
    <span class="icon">🔍</span>
    <!-- v-model 绑定到从父组件同步下来的 keyword 上 -->
    <input v-model="keyword" placeholder="搜索标题、摘要或标签…" />
    <button v-if="keyword" class="clear" @click="keyword = ''">✕</button>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.search input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 15px;
  padding: 8px 0;
}
.icon {
  opacity: 0.6;
}
.clear {
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 16px;
}
</style>
