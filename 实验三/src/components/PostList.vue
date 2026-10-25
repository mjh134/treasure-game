<script setup>
// PostList.vue —— 文章列表
// 演示知识点：props 接收数组、v-for 渲染子组件、v-if/v-else 切换空状态
import PostCard from './PostCard.vue'
import EmptyState from './EmptyState.vue'

defineProps({
  posts: { type: Array, required: true }
})
</script>

<template>
  <!-- 有文章：网格卡片列表 -->
  <div v-if="posts.length" class="grid">
    <PostCard v-for="p in posts" :key="p.id" :post="p" />
  </div>

  <!-- 没有文章：空状态，父级可通过插槽自定义文案 -->
  <EmptyState v-else>
    <template #icon>🔍</template>
    没有找到匹配的文章，换个关键词试试吧～
  </EmptyState>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
</style>
