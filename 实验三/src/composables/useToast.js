import { reactive } from 'vue'

// 一个极简的「轻提示」全局状态（组合式函数写法）
// 任何组件调用 useToast().notify('文案') 都会显示一个自动消失的提示
const state = reactive({ msg: '', visible: false })
let timer = null

export function useToast() {
  function notify(msg) {
    state.msg = msg
    state.visible = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      state.visible = false
    }, 2200)
  }
  return { state, notify }
}
