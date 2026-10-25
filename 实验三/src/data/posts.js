// 模拟博客文章数据（真实项目里通常来自后端接口，这里为纯前端写死）
// content 用多段文本，详情页会按空行拆分成段落渲染，避免引入 markdown 依赖
// 首页列表目前只保留一条 test 文档
export const seedPosts = [
  {
    id: 1,
    title: 'test',
    excerpt: 'test',
    category: '随笔',
    tags: ['test'],
    author: '拾光',
    date: '2026-03-01',
    readingTime: 1,
    cover: 'https://picsum.photos/seed/test/800/400',
    content: `test`,
    likes: 0
  }
]
