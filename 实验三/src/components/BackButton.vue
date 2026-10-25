<script setup>
// BackButton.vue —— 返回上一页按钮
// 演示知识点：useRouter 编程式导航、事件绑定
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() {
  router.back() // 浏览器历史后退
}
</script>

<template>
  <button class="btn ghost" @click="goBack">← 返回</button>
</template>
