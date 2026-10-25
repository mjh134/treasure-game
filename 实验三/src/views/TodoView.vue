<script setup>
// TodoView.vue —— 待办清单页（全站最核心的交互）
// 演示知识点：ref 数组状态、computed 统计、v-for 列表、v-if 空状态、
//            父子组件通过 props/emit 配合完成「增 / 改 / 删」
import { ref, computed } from 'vue'
import BaseCard from '../components/BaseCard.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoItem from '../components/TodoItem.vue'
import Badge from '../components/Badge.vue'

// 初始几条待办；新 id 从 4 开始（避免和上面的 1/2/3 撞号）
let nextId = 4
const todos = ref([
  { id: 1, text: '熟悉 Vue 基本语法', done: true },
  { id: 2, text: '做出一版待办页面', done: false },
  { id: 3, text: '提交实验报告', done: false }
])

// TodoInput 用 v-model 双向绑定的输入内容
const draft = ref('')

// computed：未完成数量，todos 一变它自动重算
const remaining = computed(() => todos.value.filter((t) => !t.done).length)

// 三个操作分别响应子组件抛上来的事件
function addTodo(text) {
  todos.value.push({ id: nextId++, text, done: false })
}
function toggleTodo(id) {
  const t = todos.value.find((x) => x.id === id)
  if (t) t.done = !t.done
}
function removeTodo(id) {
  todos.value = todos.value.filter((x) => x.id !== id)
}
</script>

<template>
  <section>
    <h1 class="h1">我的待办 📝</h1>

    <BaseCard>
      <p class="head">
        还剩
        <Badge :count="remaining" :active="remaining > 0" />
        项未完成（共 {{ todos.length }} 项）
      </p>

      <!-- 自定义组件 v-model：draft 与输入框双向绑定；点添加时子组件 emit('add', 文本) -->
      <TodoInput v-model="draft" @add="addTodo" />

      <!-- 有数据才渲染列表，v-for 里每条把数据和事件绑定好 -->
      <ul v-if="todos.length" class="list">
        <TodoItem
          v-for="t in todos"
          :key="t.id"
          :todo="t"
          @toggle="toggleTodo"
          @remove="removeTodo"
        />
      </ul>
      <p v-else class="empty">清单空了，添加一条试试～</p>
    </BaseCard>
  </section>
</template>

<style scoped>
.h1 {
  margin: 6px 0 18px;
  font-size: 26px;
}
.head {
  margin: 0 0 14px;
  font-size: 15px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.empty {
  color: var(--muted);
  font-size: 14px;
  text-align: center;
  padding: 12px 0;
}
</style>
