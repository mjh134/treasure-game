<script setup>
// AboutView.vue —— 关于页：站点简介 + 留言表单
// 演示知识点：ref 数组、v-for、子组件 emit 提交后父组件把留言加入列表、插槽
import { ref } from 'vue'
import BaseCard from '../components/BaseCard.vue'
import AboutForm from '../components/AboutForm.vue'
import Badge from '../components/Badge.vue'

const msgs = ref([]) // 收集到的留言
function onSend(form) {
  msgs.value.push({ ...form, id: Date.now() })
}
</script>

<template>
  <section>
    <h1 class="h1">关于这个小站 ℹ️</h1>

    <BaseCard>
      <p>
        这是一个用 <strong>Vue 3 + Vite + Vue Router</strong> 做的极简三页网站（首页 / 待办 /
        关于），用于 Web 课程实验三，纯前端、无后端。
      </p>
      <ul class="kp">
        <li>用到的知识点：ref、reactive、computed、watch、v-if、v-for、v-model、props、emit、slot、provide/inject、生命周期、路由</li>
      </ul>
    </BaseCard>

    <BaseCard>
      <h2 class="h2">
        给我留言
        <Badge :count="msgs.length" :active="msgs.length > 0" />
      </h2>
      <!-- AboutForm 内部用 reactive+v-model 收集，提交时 emit，这里接收并加入列表 -->
      <AboutForm @submit="onSend" />

      <ul v-if="msgs.length" class="msgs">
        <li v-for="m in msgs" :key="m.id"><strong>{{ m.name }}</strong>：{{ m.msg }}</li>
      </ul>
      <p v-else class="none">还没有留言。</p>
    </BaseCard>
  </section>
</template>

<style scoped>
.h1 {
  margin: 6px 0 18px;
  font-size: 26px;
}
.h2 {
  margin: 0 0 12px;
  font-size: 18px;
}
.kp {
  margin: 8px 0 0;
  padding-left: 20px;
  color: var(--muted);
  font-size: 14px;
}
.msgs {
  margin: 14px 0 0;
  padding-left: 20px;
}
.msgs li {
  margin-bottom: 6px;
  font-size: 14px;
}
.none {
  color: var(--muted);
  font-size: 14px;
}
</style>
