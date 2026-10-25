<script setup>
// HomeView.vue —— 首页（文章列表 + 搜索 + 分类筛选 + 统计）
// 演示知识点：组合多个子组件、从全局 store 读写状态、computed 传值给子组件、
//            onMounted 生命周期钩子
import { computed, onMounted } from 'vue'
import { blogStore } from '../store/blog'
import StatBar from '../components/StatBar.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import PostList from '../components/PostList.vue'

// 把 store 里的统计对象转换成 StatBar 需要的数组
const statItems = computed(() => [
  { label: '文章', value: blogStore.stats.postCount },
  { label: '标签', value: blogStore.stats.tagCount },
  { label: '评论', value: blogStore.stats.commentCount }
])

onMounted(() => {
  // 生命周期钩子：进入首页时打印一句提示（也可在此加载远程数据）
  console.log('首页已挂载，当前共有', blogStore.posts.length, '篇文章')
})
</script>

<template>
  <section>
    <div class="hero">
      <h1 class="h1">拾光博客</h1>
      <p class="sub">记录前端学习与生活碎片的角落</p>
    </div>

    <StatBar :items="statItems" />

    <!-- v-model 双向绑定搜索关键词到全局 store -->
    <SearchBar v-model="blogStore.search" />
    <!-- v-model 双向绑定当前选中分类 -->
    <CategoryFilter v-model="blogStore.activeCategory" :categories="blogStore.categories" />

    <!-- 过滤后的列表来自 store 的 computed，随搜索/分类自动变化 -->
    <PostList :posts="blogStore.filteredPosts" />
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  margin: 12px 0 24px;
}
.h1 {
  margin: 0;
  font-size: 30px;
}
.sub {
  margin: 6px 0 0;
  color: var(--muted);
}
</style>
