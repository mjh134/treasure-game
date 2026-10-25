<script setup>
// BaseButton.vue —— 一个可复用的按钮
// 演示知识点：默认插槽 <slot>（按钮文字由父组件写进来）、defineEmits 向上抛 click 事件
defineEmits(['click'])
</script>

<template>
  <button class="btn" @click="$emit('click')">
    <slot /> <!-- 父组件写的按钮文字出现在这里 -->
  </button>
</template>
