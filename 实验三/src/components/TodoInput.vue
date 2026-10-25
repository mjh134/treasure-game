<script setup>
// TodoInput.vue —— 添加待办的输入框
// 演示知识点：defineModel（自定义组件的 v-model）、emit 把新文本交给父组件、回车事件 @keyup.enter
import BaseButton from './BaseButton.vue'

const text = defineModel({ type: String, default: '' }) // 与父组件双向绑定的输入内容
const emit = defineEmits(['add'])

function submit() {
  const value = text.value.trim()
  if (!value) return
  emit('add', value) // 通知父组件（TodoView）新增一条
  text.value = '' // 清空输入框
}
</script>

<template>
  <div class="add">
    <input v-model="text" placeholder="输入待办，回车或点添加" @keyup.enter="submit" />
    <BaseButton @click="submit">添加</BaseButton>
  </div>
</template>

<style scoped>
.add {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}
.add input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
}
</style>
