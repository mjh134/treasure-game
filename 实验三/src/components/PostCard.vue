<script setup>
// PostCard.vue —— 首页文章卡片
// 演示知识点：props 接收整篇对象、computed 格式化日期、v-for 渲染标签、
//            RouterLink 携带 params 跳转到详情页
import { computed } from 'vue'
import TagBadge from './TagBadge.vue'

const props = defineProps({
  post: { type: Object, required: true }
})

// 计算属性：把 '2026-03-01' 显示成「2026 年 3 月 1 日」
const prettyDate = computed(() => {
  const d = new Date(props.post.date)
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
})
</script>

<template>
  <!-- :to 用对象形式传路由名 + params，跳转到 /post/:id -->
  <RouterLink :to="{ name: 'post', params: { id: post.id } }" class="card post-card">
    <img :src="post.cover" :alt="post.title" class="cover" loading="lazy" />
    <div class="body">
      <div class="row top">
        <span class="cate">{{ post.category }}</span>
        <span class="date">{{ prettyDate }}</span>
      </div>
      <h3 class="title">{{ post.title }}</h3>
      <p class="excerpt">{{ post.excerpt }}</p>
      <div class="tags">
        <TagBadge v-for="t in post.tags" :key="t" :tag="t" />
      </div>
      <div class="row meta">
        <span>👤 {{ post.author }}</span>
        <span>⏱ {{ post.readingTime }} 分钟</span>
        <span>❤️ {{ post.likes }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.post-card {
  display: block;
  overflow: hidden;
  transition: transform 0.15s, box-shadow 0.15s;
}
.post-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(31, 36, 48, 0.14);
}
.cover {
  width: 100%;
  height: 170px;
  object-fit: cover;
}
.body {
  padding: 14px 16px 16px;
}
.row {
  display: flex;
  align-items: center;
}
.top {
  justify-content: space-between;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 6px;
}
.cate {
  color: var(--primary);
  font-weight: 600;
}
.title {
  margin: 0 0 6px;
  font-size: 18px;
}
.excerpt {
  margin: 0 0 10px;
  font-size: 14px;
  color: var(--muted);
}
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.meta {
  gap: 16px;
  font-size: 12px;
  color: var(--muted);
}
</style>
