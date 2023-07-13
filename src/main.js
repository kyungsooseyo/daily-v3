import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import App from './customRef.vue'
// import App from './utilsFn.vue'
// import App from './watch.vue'
// import App from './watchEffect.vue'
// import App from './v-model.vue'
// import App from './slot.vue'
// import App from './attr.vue'
import App from './comp.vue' // 动态组件
const app = createApp(App)
// app.directive('copy', {
//   mounted(el, binding) {
//     const { value } = binding
//     el.onclick = async () => {
//       await navigator.clipboard.writeText(value)
//     }
//   },
//   // ~即使组件更新，也会调用，未必是值更新了
//   updated(el, binding) {
//     const { value } = binding
//     el.onclick = async () => {
//       await navigator.clipboard.writeText(value)
//     }
//   },
// })
//= 自定义指令函数语法
app.directive('copy', (el, binding) => {
  //, 挂载后执行一次，更新后执行一次
  const { value } = binding
  el.onclick = async () => {
    await navigator.clipboard.writeText(value)
  }
})
app.mount('#app')
