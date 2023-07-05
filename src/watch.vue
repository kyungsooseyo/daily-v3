<template>
  <div>
    <button @click="obj.age++">change obj age</button>
    <button @click="person.age++">change person age</button>
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
watch([num, () => person.age], (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
</script>

<style lang="scss" scoped></style>