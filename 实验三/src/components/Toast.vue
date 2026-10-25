<script setup>
// Toast.vue —— 全局轻提示组件
// 演示知识点：<Teleport> 把元素传送到 body、Transition 动画、组合式函数共享状态
import { useToast } from '../composables/useToast'

const { state } = useToast()
</script>

<template>
  <!-- Teleport：无论组件写在哪，实际 DOM 都被传送到 body 末尾，方便做全局弹层 -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="state.visible" class="toast">{{ state.msg }}</div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  background: var(--text);
  color: var(--bg);
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14px;
  box-shadow: var(--shadow);
  z-index: 1000;
}
</style>
