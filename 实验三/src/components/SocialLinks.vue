<script setup>
// SocialLinks.vue —— 社交/外部链接列表
// 演示知识点：props 数组、v-for、动态 :href 绑定、target 属性
defineProps({
  links: {
    type: Array, // [{ name: 'GitHub', url: 'https://...' }, ...]
    required: true
  }
})
</script>

<template>
  <div class="links">
    <a
      v-for="l in links"
      :key="l.url"
      :href="l.url"
      target="_blank"
      rel="noopener"
      class="chip card"
    >
      {{ l.name }} ↗
    </a>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.chip {
  padding: 8px 14px;
  font-size: 14px;
  transition: transform 0.15s;
}
.chip:hover {
  transform: translateY(-2px);
  color: var(--primary);
}
</style>
