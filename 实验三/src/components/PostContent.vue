<script setup>
// PostContent.vue —— 渲染文章正文
// 演示知识点：props 接收文本、computed 把字符串按空行切成段落数组、v-for 渲染
import { computed } from 'vue'

const props = defineProps({
  content: { type: String, required: true }
})

// 把正文按「空行」(\n\n) 拆成段落数组，逐段渲染成 <p>
const paragraphs = computed(() =>
  props.content
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
)
</script>

<template>
  <article class="content">
    <p v-for="(para, i) in paragraphs" :key="i">{{ para }}</p>
  </article>
</template>

<style scoped>
.content p {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.9;
}
</style>
