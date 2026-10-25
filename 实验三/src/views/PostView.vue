<script setup>
// PostView.vue —— 文章详情页
// 演示知识点：useRoute 读取动态路由参数、watch 侦听参数变化、computed、
//            子组件 emit 事件处理、useToast 全局提示、v-if 处理「文章不存在」
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findPost, addComment, getComments, removePost } from '../store/blog'
import { useToast } from '../composables/useToast'
import ReadProgress from '../components/ReadProgress.vue'
import BackButton from '../components/BackButton.vue'
import PostContent from '../components/PostContent.vue'
import AuthorCard from '../components/AuthorCard.vue'
import TagBadge from '../components/TagBadge.vue'
import CommentList from '../components/CommentList.vue'
import CommentForm from '../components/CommentForm.vue'

const route = useRoute()
const router = useRouter()
const { notify } = useToast()

// 当前文章 id（来自路由 params）
const id = computed(() => route.params.id)
// 根据 id 找文章；切换文章时会重新计算
const post = computed(() => findPost(id.value))
// 该文章的评论列表
const comments = computed(() => getComments(id.value))

// 本地点赞状态（演示 ref + 事件）
const liked = ref(false)
function toggleLike() {
  liked.value = !liked.value
  post.value.likes += liked.value ? 1 : -1
}

// watch：当路由参数变化（从一篇切到另一篇）时，重置点赞状态
watch(id, () => {
  liked.value = false
})

// 处理 CommentForm 抛出的 submit 事件
function onNewComment(comment) {
  addComment(id.value, comment)
  notify('评论发表成功')
}

function onDelete() {
  if (confirm('确定删除这篇文章吗？')) {
    removePost(id.value)
    notify('文章已删除')
    router.push('/')
  }
}
</script>

<template>
  <!-- 文章存在才渲染 -->
  <article v-if="post" class="post">
    <ReadProgress />

    <header class="head">
      <BackButton />
      <span class="cate">{{ post.category }}</span>
    </header>

    <h1 class="title">{{ post.title }}</h1>
    <div class="meta">
      <span>📅 {{ post.date }}</span>
      <span>⏱ {{ post.readingTime }} 分钟阅读</span>
      <span>❤️ {{ post.likes }}</span>
    </div>

    <img :src="post.cover" :alt="post.title" class="cover" />

    <div class="tags">
      <TagBadge v-for="t in post.tags" :key="t" :tag="t" />
    </div>

    <PostContent :content="post.content" />

    <div class="actions">
      <button class="btn" :class="{ ghost: liked }" @click="toggleLike">
        {{ liked ? '💖 已点赞' : '🤍 点赞' }}
      </button>
      <button class="btn ghost" @click="onDelete">🗑 删除文章</button>
    </div>

    <hr class="sep" />

    <AuthorCard :name="post.author" />

    <section class="comments">
      <CommentList :comments="comments" />
      <CommentForm @submit="onNewComment" />
    </section>
  </article>

  <!-- 文章不存在（比如 id 错了） -->
  <div v-else class="missing card">
    <p>😥 没有找到这篇文章，它可能已经被删除了。</p>
    <RouterLink to="/" class="btn">返回首页</RouterLink>
  </div>
</template>

<style scoped>
.post {
  padding-top: 0;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.cate {
  color: var(--primary);
  font-weight: 600;
}
.title {
  margin: 0 0 8px;
  font-size: 28px;
  line-height: 1.35;
}
.meta {
  display: flex;
  gap: 16px;
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 16px;
}
.cover {
  width: 100%;
  border-radius: var(--radius);
  margin-bottom: 14px;
}
.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.actions {
  display: flex;
  gap: 12px;
  margin: 24px 0;
}
.sep {
  border: none;
  border-top: 1px solid var(--border);
  margin: 24px 0;
}
.comments {
  margin-top: 20px;
}
.missing {
  text-align: center;
  padding: 60px 20px;
}
.missing p {
  font-size: 16px;
  margin-bottom: 16px;
}
</style>
