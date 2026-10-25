<script setup>
// CommentItem.vue —— 单条评论
// 演示知识点：props 接收评论对象、时间格式化、class 动态绑定
import { computed } from 'vue'

const props = defineProps({
  comment: { type: Object, required: true }
})

const time = computed(() => {
  const d = new Date(props.comment.time)
  return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(
    d.getMinutes()
  ).padStart(2, '0')}`
})
</script>

<template>
  <li class="item" :class="{ mine: comment.mine }">
    <div class="head">
      <strong>{{ comment.name }}</strong>
      <span class="time">{{ time }}</span>
    </div>
    <p class="text">{{ comment.text }}</p>
  </li>
</template>

<style scoped>
.item {
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--bg);
  margin-bottom: 10px;
}
.item.mine {
  border-left: 3px solid var(--primary);
}
.head {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 4px;
}
.time {
  color: var(--muted);
}
.text {
  margin: 0;
  font-size: 14px;
}
</style>
