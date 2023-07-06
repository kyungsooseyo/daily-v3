<template>
  <div>
    <input type="text" v-model="name">
    {{ name }}
    <hr />
    <h3>手动实现</h3>
    <input type="text" :value="name" @input="name = $event.target.value">
    <hr />
    <input type="checkbox" name="" id="" v-model="flag">
    <p>{{ flag }}</p>
    <input type="checkbox" name="" id="" :checked="flag" @change="flag = $event.target.checked">
    <hr>
    <h2>绑定组件</h2>
    <!--~ 组件的$event 就是从子组件传递过来的数据 -->
    <my-child :model-value="name" @update:model-value="name=$event"></my-child>
    <my-child v-model="name" v-model:xx="flag"></my-child>
  </div>
</template>

<script setup>
import MyChild from './components/my-child.vue';
import { ref } from 'vue';
const name = ref('哈哈');
const flag = ref(false);
function changeName(e) {
  name.value = e.target.value;
}
</script>

<style lang="scss" scoped></style>