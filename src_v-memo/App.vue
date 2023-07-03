<script setup>
import { ref, watch } from 'vue'
const arr = new Array(10000)
const animalType = {
  mie: '🐏',
  mo: '🐂',
  miao: '🐱',
}
const cry = ref('mie')
const shouldUpdate = ref(0)
//` 需求：只有成功输入命中提供的三种叫声 才有资格更新数据
//` 思路  v-memo
watch(cry, (newVal) => {
  if (Object.keys(animalType).includes(newVal)) {
    shouldUpdate.value++
  }
})
</script>

<template>
  <div>
    <input type="text" v-model="cry" />
    <!-- 只有在shouldUpdate变化时才会进行更新 -->
    <ul v-memo="[shouldUpdate]">
      <li v-for="(item, index) in arr" :key="index">
        {{ cry }}-{{ animalType[cry] }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
ul li {
  list-style: none;
  margin: 30px;
}
</style>
