<script setup>
// Badge.vue —— 数字小圆标
// 演示知识点：defineProps（带类型/默认值）、v-bind 动态 class
defineProps({
  count: { type: Number, default: 0 },
  active: { type: Boolean, default: false }
})
</script>

<template>
  <span class="badge" :class="{ on: active }">{{ count }}</span>
</template>

<style scoped>
.badge {
  display: inline-block;
  min-width: 20px;
  padding: 0 6px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 12px;
  text-align: center;
}
.badge.on {
  background: var(--primary);
  color: #fff;
}
</style>
