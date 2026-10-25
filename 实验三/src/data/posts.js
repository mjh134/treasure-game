// 模拟博客文章数据（真实项目里通常来自后端接口，这里为纯前端写死）
// content 用多段文本，详情页会按空行拆分成段落渲染，避免引入 markdown 依赖
export const seedPosts = [
  {
    id: 1,
    title: '我为什么选择 Vue：一个前端新生的心里话',
    excerpt: '从原生 JS 到 Vue，组件化开发带来的爽感，是我坚持学下去的最大动力。',
    category: '随笔',
    tags: ['Vue', '心得'],
    author: '拾光',
    date: '2026-03-01',
    readingTime: 4,
    cover: 'https://picsum.photos/seed/vue/800/400',
    content:
      `第一次接触 Vue 是在一门 web 课上，老师让我们做一个待办清单。\n\n用原生 JavaScript 时，我需要不停地理会 元素、绑定事件、手动改 DOM，稍不注意就写出一堆重复代码。换成 Vue 之后，我只需要描述「界面长什么样」，数据一变界面就自动更新，这种感觉非常奇妙。\n\n组件化是 Vue 最打动我的地方。把页面拆成一个个可复用的小块，想搭建新页面就像搭积木一样，既清晰又好维护。`,
    likes: 42
  },
  {
    id: 2,
    title: '三分钟搞懂 v-model 的双向绑定',
    excerpt: 'v-model 不过是「读取值 + 监听输入」的语法糖，理解了这一点就再也不会被绕晕。',
    category: '技术',
    tags: ['Vue', '表单', 'v-model'],
    author: '拾光',
    date: '2026-03-08',
    readingTime: 3,
    cover: 'https://picsum.photos/seed/vmodel/800/400',
    content:
      `表单元素和普通标签不一样：用户输入的值既要从数据「流向」输入框，也要在用户修改时「流回」数据。\n\nv-model 就是把 :value（绑定显示值）和 @input（监听用户输入）两个动作合成一个指令。所以在输入框上写 v-model="text"，本质等同于手动绑定值和事件。\n\n理解了这个原理，遇到自定义组件上的 v-model 也不会慌——它依然是 props 加事件约定的组合。`,
    likes: 68
  },
  {
    id: 3,
    title: ' computed 和 watch，到底该用哪个？',
    excerpt: '一个用于「由现有数据算出新值」，一个用于「数据变化时做副作用」。分清目的就不会选错。',
    category: '技术',
    tags: ['Vue', 'computed', 'watch'],
    author: '拾光',
    date: '2026-03-15',
    readingTime: 5,
    cover: 'https://picsum.photos/seed/computed/800/400',
    content:
      `computed（计算属性）适合「根据已有数据推导一个结果」，比如根据列表和关键词得到过滤后的列表，它有缓存，依赖不变就不会重复计算。\n\nwatch（侦听器）适合「某个数据变化时执行一段逻辑」，比如监听搜索词变化后去请求接口、做防抖，也就是产生副作用。\n\n简单记：要一个「值」用 computed，要做一件「事」用 watch。`,
    likes: 55
  },
  {
    id: 4,
    title: '周末去公园拍了些照片',
    excerpt: '阳光很好，风也很温柔。把生活里的小确幸记录下来，就是 blog 存在的意义。',
    category: '生活',
    tags: ['摄影', '日常'],
    author: '拾光',
    date: '2026-03-22',
    readingTime: 2,
    cover: 'https://picsum.photos/seed/park/800/400',
    content:
      `这周末去了附近的公园，带上了相机。\n\n湖面反光、树影婆娑、草地上晒太阳的猫，都是很好的题材。拍完回来挑了几张满意的，顺手做成了一个小小的相册页。\n\n记录本身就是一种幸福，等到很久以后再翻回来，当时的心情会一下子涌上来。`,
    likes: 30
  },
  {
    id: 5,
    title: '组件通信的四种方式小结',
    excerpt: 'props、emit、provide/inject、还有共享 store——一篇文章理清 Vue 组件之间怎么传数据。',
    category: '技术',
    tags: ['Vue', '组件', 'props', 'emit'],
    author: '拾光',
    date: '2026-04-02',
    readingTime: 6,
    cover: 'https://picsum.photos/seed/props/800/400',
    content:
      `父传子用 props：把数据当作属性传给子组件，子组件用 defineProps 接收。\n\n子传父用 emit：子组件用 defineEmits 声明事件，触发后由父组件监听处理。\n\n跨多层用 provide/inject：祖先 provide 一个值，后代组件 inject 直接使用，省去一层层传递。\n\n全局共享用一个响应式 store：把 reactive 对象导出，谁需要谁导入，本博客首页与详情页就是这样共享文章数据的。`,
    likes: 88
  }
]
