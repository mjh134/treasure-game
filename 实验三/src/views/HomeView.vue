<script setup>
// HomeView.vue —— 首页：打招呼 + 计数器
// 演示知识点：ref、事件处理、生命周期 onMounted、组件复用与插槽传内容
import { ref, onMounted } from 'vue'
import BaseCard from '../components/BaseCard.vue'
import Greeting from '../components/Greeting.vue'
import Counter from '../components/Counter.vue'
import BaseButton from '../components/BaseButton.vue'

const name = ref('')
function greet() {
  name.value = name.value ? '' : '同学' // 有名字就清空，没名字就设为「同学」
}

onMounted(() => {
  console.log('首页已挂载')
})
</script>

<template>
  <section>
    <h1 class="h1">欢迎来玩「小待办」✨</h1>

    <BaseCard>
      <div class="row">
        <!-- 把 name 通过 props 传给 Greeting；按钮文字放在 BaseButton 的插槽里 -->
        <Greeting :name="name" />
        <BaseButton @click="greet">{{ name ? '重置' : '打个招呼' }}</BaseButton>
      </div>
    </BaseCard>

    <BaseCard>
      <h3 class="h3">这是个计数器（演示 ref + computed）</h3>
      <Counter />
    </BaseCard>

    <p class="tip">顶部点「待办」去管理清单，点「关于」看简介和留言表单。</p>
  </section>
</template>

<style scoped>
.h1 {
  margin: 6px 0 18px;
  font-size: 26px;
}
.h3 {
  margin: 0 0 12px;
  font-size: 16px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.row h2 {
  margin: 0;
}
.tip {
  margin-top: 18px;
  color: var(--muted);
  font-size: 14px;
}
</style>
