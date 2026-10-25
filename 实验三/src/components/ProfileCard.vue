<script setup>
// ProfileCard.vue —— 个人简介卡
// 演示知识点：props 对象、默认插槽、v-for 渲染技能标签
import TagBadge from './TagBadge.vue'

defineProps({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  skills: { type: Array, default: () => [] }
})
</script>

<template>
  <div class="profile card">
    <div class="avatar">🧑‍💻</div>
    <h2 class="name">{{ name }}</h2>
    <p class="role">{{ role }}</p>
    <div class="skills">
      <TagBadge v-for="s in skills" :key="s" :tag="s" />
    </div>
    <!-- 默认插槽：父组件可以把「想额外说的话」放进来 -->
    <div class="extra">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.profile {
  text-align: center;
  padding: 28px 20px;
}
.avatar {
  font-size: 46px;
}
.name {
  margin: 8px 0 2px;
  font-size: 22px;
}
.role {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 14px;
}
.skills {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.extra {
  font-size: 14px;
  color: var(--muted);
}
</style>
