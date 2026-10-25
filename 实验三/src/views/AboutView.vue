<script setup>
// AboutView.vue —— 关于页面
// 演示知识点：组合多个组件、v-for 渲染知识点清单、静态展示 + 全局统计
import { computed } from 'vue'
import { blogStore } from '../store/blog'
import ProfileCard from '../components/ProfileCard.vue'
import SocialLinks from '../components/SocialLinks.vue'
import StatBar from '../components/StatBar.vue'

const statItems = computed(() => [
  { label: '文章', value: blogStore.stats.postCount },
  { label: '标签', value: blogStore.stats.tagCount },
  { label: '评论', value: blogStore.stats.commentCount }
])

const links = [
  { name: 'Vue 官方文档', url: 'https://cn.vuejs.org/' },
  { name: 'Vue 交互式教程', url: 'https://cn.vuejs.org/tutorial/' },
  { name: 'Vite 文档', url: 'https://cn.vitejs.dev/' }
]

// 本网站覆盖到的 Vue 教程知识点（方便抽查讲解时对照）
const knowledgePoints = [
  '插值表达式 {{ }}',
  'v-bind 动态绑定 (:src / :class / :style)',
  'v-on 事件监听 (@click / @submit)',
  'v-model 双向绑定（含自定义组件 defineModel）',
  'v-if / v-else / v-show 条件渲染',
  'v-for 列表渲染 + key',
  'computed 计算属性',
  'watch / watchEffect 侦听器',
  '组件 props 传值',
  '组件 emit 事件',
  '插槽 slot（默认 / 具名）',
  'provide / inject 跨组件',
  '生命周期钩子 onMounted / onBeforeUnmount',
  'ref / reactive 响应式',
  'Teleport 传送门 + Transition 动画',
  'Vue Router 动态路由参数与懒加载'
]
</script>

<template>
  <section class="about">
    <h1 class="h1">关于本站</h1>
    <p class="lead">
      「拾光博客」是一个用于 <strong>Web 课程实验三</strong> 的纯前端网站，使用
      <strong>Vue 3 + Vite + Vue Router</strong> 构建，包含首页、详情、写作、关于共 4 个页面与
      20+ 个单文件组件，覆盖 Vue 官方教程的主要知识点。
    </p>

    <StatBar :items="statItems" />

    <ProfileCard
      name="拾光"
      role="一名正在学习前端的在校学生"
      :skills="['Vue', 'JavaScript', 'HTML', 'CSS']"
    >
      这个博客是我把课堂所学串起来的小作品，欢迎随便看看～
    </ProfileCard>

    <h2 class="h2">本站覆盖的 Vue 知识点</h2>
    <ul class="kp">
      <li v-for="(k, i) in knowledgePoints" :key="i">{{ k }}</li>
    </ul>

    <h2 class="h2">相关链接</h2>
    <SocialLinks :links="links" />
  </section>
</template>

<style scoped>
.about {
  line-height: 1.8;
}
.h1 {
  font-size: 26px;
  margin: 10px 0;
}
.h2 {
  font-size: 18px;
  margin: 28px 0 12px;
}
.lead {
  color: var(--muted);
  margin-bottom: 20px;
}
.kp {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 8px 16px;
  padding-left: 20px;
  margin: 0;
  font-size: 14px;
}
.kp li {
  color: var(--text);
}
</style>
