<template>
  <div class="wrap">
    <p>{{ arr1 }}</p>
    <p>{{ arr2 }}</p>
    <p>{{ arr3 }}</p>
    <button @click="handleArr3">arr3</button>
  </div>
</template>

<script setup>
import { reactive, ref, shallowRef, triggerRef } from 'vue'
//· 想要操作arr1置空的话, 要用数组原生的方法 没法给arr1赋值一个新的数组
let arr1 = reactive([1, 2, 3])
//~ 使用ref包裹的响应式类型会被自动解包, 所以可以直接赋值一个新的数组,
let arr2 = ref([1, 2, 3])
arr2.value = [4, 5, 6]
//~ ref包裹的东西最终的value是一个proxy,shallowRef最终的value就是一个简单数组
let arr3 = shallowRef([1, 2, 3])
function handleArr3() {
  arr3.value.push(4)
  //. 但是如果想要改变arr3的值, 就要用triggerRef触发一下
  triggerRef(arr3)
}
</script>

<style scoped>
.wrap {
  background: gray;
  height: 100vh;
  width: 100vw;
}
</style>
