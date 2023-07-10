<template>
  <div>
    <button @click="obj.age++">change obj age</button>
    <button @click="person.age++">change person age</button>
    <button @click="num++">change num</button>
    <button @click="stopWatch">stop watch</button>
    <h3>{{ num }}</h3>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from 'vue';
const num = ref(10)
const obj = ref({
  age: 18
})

const person = reactive({
  name: 'zhangsan',
  age: 18,
  address: {
    city: 'beijing',
    position: ['120', '30']
  }
})
// watch(() => obj.value.age, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })
// 无法监听person 只能监听person里面的属性
// watch(()=>person.age,(newVal,oldVal)=>{
//   console.log(newVal,oldVal)
// })
// watch([num, () => person.age], (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// },
// {
//   flush: 'post', //在下次DOM更新循环结束之后执行回调；如果设置成pre的话 通过ref 来获取dom的textContent textContent值是落后于数据的 
// })
// 监听回调
// watch(num, (newVal, oldVal, onCleanUp) => {
//   console.log('newVal', newVal);
//   let timer = setInterval(() => {
//     console.log(666);
//   }, 1000);
//   // 在组件卸载的时候执行onCleanUp
//   onCleanUp(() => {
//     // 清空回调里面的挂载的属性和方法
//     clearInterval(timer)
//   })
// })
//----- 停止监听
const stopWatch = watch(num, (newVal, oldVal, onCleanUp) => {
  console.log('newVal', newVal)
})
</script>

<style lang="scss" scoped></style>