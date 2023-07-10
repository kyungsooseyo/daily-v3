<template>
  <div>
    {{ person }}
  </div>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <!-- 修改name也会影响到person -->
  <button @click="name = 'haha'">change name</button>
  <button @click="person.age = '20'">change age</button>
</template>

<script setup>
import { ref, isRef, unref, reactive, toRef,toRefs } from 'vue';
const num = ref(10)
//toRef toRefs 解构reactive 对象 
const person = reactive({
  name: 'zhangsan',
  age: 18,
  address: {
    city: 'beijing',
    position: ['120', '30']
  }
})
const name = toRef(person, 'name')
const { age, address } = toRefs(person)
</script>

<style lang="scss" scoped></style>