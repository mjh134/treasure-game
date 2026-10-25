<script setup>
// AuthorCard.vue —— 文章作者信息卡
// 演示知识点：props 接收多字段、计算首字母头像、插值
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  bio: { type: String, default: '热爱前端，喜欢把学到的东西写下来。' }
})

// 取名字首字做「头像」
const initial = computed(() => props.name.charAt(0))
</script>

<template>
  <div class="author card">
    <div class="avatar">{{ initial }}</div>
    <div class="info">
      <div class="name">{{ props.name }}</div>
      <div class="bio">{{ props.bio }}</div>
    </div>
  </div>
</template>

<style scoped>
.author {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}
.name {
  font-weight: 700;
}
.bio {
  font-size: 13px;
  color: var(--muted);
}
</style>
