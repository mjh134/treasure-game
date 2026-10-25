<script setup>
// TodoItem.vue —— 单条待办
// 演示知识点：props 接收一条数据、emit 抛 toggle / remove 事件、动态 class、v-model 复选框
defineProps({
  todo: { type: Object, required: true } // { id, text, done }
})
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <li class="item" :class="{ done: todo.done }">
    <label>
      <!-- 勾选时把这条的 id 抛给父组件去切换状态 -->
      <input type="checkbox" :checked="todo.done" @change="emit('toggle', todo.id)" />
      <span class="text">{{ todo.text }}</span>
    </label>
    <button class="del" @click="emit('remove', todo.id)">删除</button>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-bottom: 8px;
  background: var(--card);
}
.item label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.text {
  font-size: 15px;
}
/* 完成后加删除线、变灰 */
.done .text {
  text-decoration: line-through;
  color: var(--muted);
}
.del {
  border: none;
  background: transparent;
  color: #e5484d;
  cursor: pointer;
  font-size: 13px;
}
</style>
