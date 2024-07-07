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
// import App from './comp.vue' // 动态组件
// import App from './router-demo/index.vue' // 动态组件
import App from './sass-media/index.vue' // 动态组件
import router from '@/router/index.js';
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
//- 1 插件本身是一个对象，里面有install方法 会在use的时候执行
// let muPlugin = {
//   install(app, option) {
//     console.log(app, option);
//   }
// }
//- 2 插件本身是一个函数，会在use的时候执行
let muPlugin = function (app, option) {
  // 在插件里面可以注册一堆全局的东西
  app.config.globalProperties.$myName = option.name
  app.config.globalProperties.sayHi = () => {
    console.log('hi');
  }
  app.component('MyButton', 'div')
  app.directive('hh', () => {
    console.log('hh');
  })
  app.provide('age', 13)
}
app.use(muPlugin, { name: '哈哈' })
app.use(router)
app.mount('#app')
