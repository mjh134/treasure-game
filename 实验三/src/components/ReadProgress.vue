<script setup>
// ReadProgress.vue —— 顶部阅读进度条
// 演示知识点：ref + onMounted/onBeforeUnmount 生命周期、事件监听与清理、
//            动态内联样式绑定 :style
import { ref, onMounted, onBeforeUnmount } from 'vue'

const percent = ref(0)

function onScroll() {
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - doc.clientHeight
  percent.value = scrollable > 0 ? Math.min(100, (doc.scrollTop / scrollable) * 100) : 0
}

// 组件挂载后开始监听滚动
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
// 组件销毁前务必移除监听，避免内存泄漏
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="track">
    <div class="bar" :style="{ width: percent + '%' }"></div>
  </div>
</template>

<style scoped>
.track {
  position: sticky;
  top: 0;
  height: 4px;
  background: transparent;
  z-index: 40;
}
.bar {
  height: 100%;
  background: var(--primary);
  transition: width 0.1s linear;
}
</style>
