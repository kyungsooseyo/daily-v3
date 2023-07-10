<template>
  <div>
    <h3>{{ num }}</h3>
    <button @click="num++">change num</button>
    <button @click="num2++">change num2</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
const num = ref(10)
const num2=ref(20)
const stop = watchEffect((onCleanUp) => {
  // 1.初始化执行里面的回调
  //2. 依赖的数据变化的时候执行回调,只有回调里面的数据变化才会执行回调
  //3. 配置项只能是flush
  //4 返回值是一个函数，执行这个函数会停止监听
  onCleanUp(() => {
    // 清空回调里面的挂载的属性和方法，先执行onCleanUp 在执行回调
    console.log('onCleanUp')
  })
  console.log('num', num.value)
},
  {
    flush: 'post'
  })
</script>

<style lang="scss" scoped></style>