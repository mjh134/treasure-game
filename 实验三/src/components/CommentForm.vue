<script setup>
// CommentForm.vue —— 发表评论表单
// 演示知识点：ref 本地状态、v-model 绑定输入框与文本域、emit 提交给父组件、简单校验
import { ref, computed } from 'vue'

const emit = defineEmits(['submit'])

const name = ref('匿名')
const text = ref('')

// 计算属性：内容非空才允许提交（顺便显示字数）
const canSubmit = computed(() => text.value.trim().length > 0)

function submit() {
  if (!canSubmit.value) return
  // 把评论数据抛给父组件（PostView），由父组件写入 store
  emit('submit', { name: name.value.trim() || '匿名', text: text.value.trim(), time: Date.now(), mine: true })
  text.value = '' // 提交后清空
}
</script>

<template>
  <form class="form card" @submit.prevent="submit">
    <div class="row">
      <div class="field name">
        <label for="cn">昵称</label>
        <input id="cn" v-model="name" placeholder="你的昵称" />
      </div>
    </div>
    <div class="field">
      <label for="ct">评论内容（{{ text.length }} 字）</label>
      <textarea id="ct" v-model="text" placeholder="友善地聊聊你的看法…"></textarea>
    </div>
    <button class="btn" type="submit" :disabled="!canSubmit">发表评论</button>
  </form>
</template>

<style scoped>
.form {
  padding: 16px;
  margin-top: 16px;
}
.row {
  display: flex;
  gap: 12px;
}
.name {
  flex: 0 0 200px;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
