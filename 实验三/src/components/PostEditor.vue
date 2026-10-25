<script setup>
// PostEditor.vue —— 写博文的表单组件
// 演示知识点：reactive 管理多字段表单、v-model（含 textarea/select）、
//            computed 校验、watch 实时生成预览字数、emit 提交数据
import { reactive, computed, watch } from 'vue'

const emit = defineEmits(['submit'])

// reactive 适合管理一组表单字段（无需 .value 嵌套）
const form = reactive({
  title: '',
  category: '随笔',
  excerpt: '',
  tags: '', // 用逗号分隔，提交时再切成数组
  cover: '',
  content: ''
})

// 各字段都填了才允许提交
const valid = computed(() => form.title.trim() && form.excerpt.trim() && form.content.trim())

// watch：监听标题变化，自动同步一句「实时提示」，演示侦听器的副作用
watch(
  () => form.title,
  (val) => {
    if (val.length > 0 && val.length < 4) {
      console.warn('标题似乎太短了～')
    }
  }
)

const categories = ['随笔', '技术', '生活', '其他']

function onSubmit() {
  if (!valid.value) return
  emit('submit', {
    title: form.title.trim(),
    category: form.category,
    excerpt: form.excerpt.trim(),
    tags: form.tags
      .split(/[,，\s]+/)
      .map((t) => t.trim())
      .filter(Boolean),
    cover: form.cover.trim() || 'https://picsum.photos/seed/' + Date.now() + '/800/400',
    content: form.content.trim(),
    author: '拾光',
    date: new Date().toISOString().slice(0, 10),
    readingTime: Math.max(1, Math.round(form.content.length / 200)),
    likes: 0
  })
  // 提交后重置表单
  Object.assign(form, { title: '', excerpt: '', tags: '', cover: '', content: '', category: '随笔' })
}
</script>

<template>
  <form class="editor card" @submit.prevent="onSubmit">
    <div class="field">
      <label for="t">标题 *</label>
      <input id="t" v-model="form.title" placeholder="给文章起个标题" />
    </div>

    <div class="row">
      <div class="field half">
        <label for="c">分类</label>
        <select id="c" v-model="form.category">
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
      <div class="field half">
        <label for="tg">标签（逗号分隔）</label>
        <input id="tg" v-model="form.tags" placeholder="Vue, 心得" />
      </div>
    </div>

    <div class="field">
      <label for="e">摘要 *</label>
      <input id="e" v-model="form.excerpt" placeholder="一两句话概括本文" />
    </div>

    <div class="field">
      <label for="cv">封面图链接（留空则随机生成）</label>
      <input id="cv" v-model="form.cover" placeholder="https://..." />
    </div>

    <div class="field">
      <label for="ct">正文 * （用空行分段，共 {{ form.content.length }} 字）</label>
      <textarea id="ct" v-model="form.content" placeholder="在这里写你的内容……"></textarea>
    </div>

    <button class="btn" type="submit" :disabled="!valid">发布文章</button>
    <span v-if="!valid" class="hint">请填写标题、摘要和正文后再发布</span>
  </form>
</template>

<style scoped>
.editor {
  padding: 20px;
}
.row {
  display: flex;
  gap: 12px;
}
.half {
  flex: 1;
}
.hint {
  margin-left: 12px;
  font-size: 13px;
  color: var(--muted);
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
