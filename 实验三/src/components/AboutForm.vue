<script setup>
// AboutForm.vue —— 关于页的留言表单
// 演示知识点：reactive 管理表单、v-model（input/textarea）、computed 校验、
//            watch 侦听器、emit 提交给父组件
import { reactive, computed, watch, ref } from 'vue'
import BaseButton from './BaseButton.vue'

const emit = defineEmits(['submit'])

const form = reactive({ name: '', msg: '' })
const tried = ref(false) // 是否点过发送（用来控制提示什么时候出现）

// 两个都填了才能发送（计算属性）
const canSend = computed(() => form.name.trim() !== '' && form.msg.trim() !== '')

// 侦听器：名字一变就在控制台打印（演示 watch 的副作用）
watch(
  () => form.name,
  (n) => console.log('正在输入名字：', n)
)

function send() {
  if (!canSend.value) {
    tried.value = true // 点过但未填全，才显示提示
    return
  }
  tried.value = false
  emit('submit', { ...form }) // 把表单数据抛给父组件（AboutView）
  form.name = ''
  form.msg = ''
}
</script>

<template>
  <form @submit.prevent="send">
    <div class="field">
      <label for="nm">你的名字</label>
      <input id="nm" v-model="form.name" placeholder="比如：小明" />
    </div>
    <div class="field">
      <label for="ms">留言（{{ form.msg.length }} 字）</label>
      <textarea id="ms" v-model="form.msg" placeholder="写点什么…"></textarea>
    </div>
    <BaseButton @click="send">发送</BaseButton>
    <span v-if="tried && !canSend" class="hint">名字和留言都要填写哦</span>
  </form>
</template>

<style scoped>
.hint {
  margin-left: 10px;
  font-size: 13px;
  color: var(--muted);
}
</style>
