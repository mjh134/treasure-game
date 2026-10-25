<script setup>
// NewPostView.vue —— 「写博文」页面
// 演示知识点：页面组件组合 PostEditor、监听子组件 emit、写入 store、useRouter 跳转、全局提示
import { useRouter } from 'vue-router'
import { addPost } from '../store/blog'
import { useToast } from '../composables/useToast'
import PostEditor from '../components/PostEditor.vue'

const router = useRouter()
const { notify } = useToast()

// 接收 PostEditor 提交上来的文章对象，写进全局 store 后跳到详情页
function onCreate(post) {
  const id = addPost(post)
  notify('文章发布成功！')
  router.push({ name: 'post', params: { id } })
}
</script>

<template>
  <section>
    <div class="head">
      <h1 class="h1">✍️ 写一篇新博文</h1>
      <p class="sub">填写下方表单，点击「发布文章」即可出现在首页列表中。</p>
    </div>
    <PostEditor @submit="onCreate" />
  </section>
</template>

<style scoped>
.head {
  margin: 8px 0 18px;
}
.h1 {
  margin: 0 0 6px;
  font-size: 24px;
}
.sub {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}
</style>
