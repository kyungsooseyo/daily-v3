<template>
  <div>
    <h3>
      {{ num }}
    </h3>
    <button @click="num++">num++</button>
    <button @click="num2++">num2++</button>
    <h3>num2{{ num2 }}</h3>
  </div>
</template>

<script setup>
import { customRef } from 'vue';
let temp = 20
const num = customRef((track, trigger) => {
  return {
    get() {
      // 访问数据做依赖收集
      track()
      return temp
    },
    set(newVal) {
      // 触发更新
      temp = newVal
      trigger()
    }
  }
})
console.log('num', num.value)
const num2 = useThrottle(30, 1000)
function useThrottle(value, wait) {
  return customRef((track, trigger) => {
    let timer
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal
          trigger()
        }, wait)
      }
    }
  })
}
</script>

<style  scoped></style>