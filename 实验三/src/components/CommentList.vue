<script setup>
// CommentList.vue —— 评论列表
// 演示知识点：props 数组、v-for 渲染子组件、v-if 控制空状态、插值计数
import CommentItem from './CommentItem.vue'

defineProps({
  comments: { type: Array, required: true }
})
</script>

<template>
  <div class="wrap">
    <h4 class="title">评论（{{ comments.length }}）</h4>

    <ul v-if="comments.length" class="list">
      <CommentItem v-for="c in comments" :key="c.id" :comment="c" />
    </ul>
    <p v-else class="none">还没有评论，来抢沙发吧～</p>
  </div>
</template>

<style scoped>
.title {
  margin: 0 0 12px;
  font-size: 16px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.none {
  color: var(--muted);
  font-size: 14px;
}
</style>
