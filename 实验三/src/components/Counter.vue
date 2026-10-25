<script setup>
// Counter.vue —— 计数器
// 演示知识点：ref 响应式、computed 计算属性（double 随 count 自动更新）、复用子组件
import { ref, computed } from 'vue'
import BaseButton from './BaseButton.vue'
import Badge from './Badge.vue'

const count = ref(0)
const double = computed(() => count.value * 2) // 依赖 count，count 变它自动重算

function add() {
  count.value++
}
function reset() {
  count.value = 0
}
</script>

<template>
  <div class="counter">
    <p>
      计数：<Badge :count="count" :active="count > 0" />
      双倍：<strong>{{ double }}</strong>
    </p>
    <div class="row">
      <BaseButton @click="add">+1</BaseButton>
      <BaseButton @click="reset">归零</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.counter p {
  margin: 0 0 12px;
}
.row {
  display: flex;
  gap: 10px;
}
</style>
