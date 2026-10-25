import { reactive, computed } from 'vue'
import { seedPosts } from '../data/posts'

// 一个用 reactive 实现的「全局博客数据源」（迷你 store）
// 任何组件导入 blogStore 后都能读写同一份数据，
// 从而演示 Vue 的「响应式状态 + 计算属性」跨组件共享能力。
export const blogStore = reactive({
  posts: seedPosts,
  comments: {}, // 以文章 id 为 key 存放评论数组
  search: '', // 首页搜索关键词
  activeCategory: '全部', // 首页分类筛选

  // 计算属性：根据搜索词 + 选中分类过滤文章列表
  filteredPosts: computed(() => {
    const kw = blogStore.search.trim().toLowerCase()
    return blogStore.posts.filter((p) => {
      const okCategory =
        blogStore.activeCategory === '全部' || p.category === blogStore.activeCategory
      const okSearch =
        !kw ||
        p.title.toLowerCase().includes(kw) ||
        p.excerpt.toLowerCase().includes(kw) ||
        p.tags.some((t) => t.toLowerCase().includes(kw))
      return okCategory && okSearch
    })
  }),

  // 计算属性：所有已用过的分类（供筛选按钮渲染）
  categories: computed(() => ['全部', ...new Set(blogStore.posts.map((p) => p.category))]),

  // 计算属性：文章总数、标签总数等统计
  stats: computed(() => ({
    postCount: blogStore.posts.length,
    tagCount: new Set(blogStore.posts.flatMap((p) => p.tags)).size,
    commentCount: Object.values(blogStore.comments).reduce((n, arr) => n + arr.length, 0)
  }))
})

// 根据 id 查找单篇文章
export function findPost(id) {
  return blogStore.posts.find((p) => String(p.id) === String(id))
}

// 新增文章（首页「写博文」表单调用），unshift 插到最前面
export function addPost(post) {
  const id = Date.now()
  blogStore.posts.unshift({ ...post, id })
  return id
}

// 删除某篇文章
export function removePost(id) {
  const i = blogStore.posts.findIndex((p) => String(p.id) === String(id))
  if (i !== -1) blogStore.posts.splice(i, 1)
}

// 给某篇文章添加评论
export function addComment(postId, comment) {
  if (!blogStore.comments[postId]) blogStore.comments[postId] = []
  blogStore.comments[postId].push({ ...comment, id: Date.now() })
}

// 取某篇文章的评论
export function getComments(postId) {
  return blogStore.comments[postId] || []
}
