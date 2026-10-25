<script setup>
// TagBadge.vue —— 文章标签小徽章
// 演示知识点：props（带类型/默认值）、emit 向父组件抛事件
const props = defineProps({
  tag: { type: String, required: true },
  clickable: { type: Boolean, default: false }
})

const emit = defineEmits(['select'])
</script>

<template>
  <span
    class="tag"
    :class="{ clickable: props.clickable }"
    @click="props.clickable && emit('select', props.tag)"
  >
    #{{ props.tag }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 6px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 12px;
}
.tag.clickable {
  cursor: pointer;
}
.tag.clickable:hover {
  opacity: 0.75;
}
</style>
