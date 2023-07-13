<template>
  <div>
    <child1></child1>
    <!--,如果不用defineAsyncComponent的话，即使给vif设置了false 也会加载那个vue文件 -->
    <child2 v-if="false"></child2>
    <!-- 内置组件 -->
    <!-- <component :is='Child1'></component> -->
    <!-- 异步组件 -->
    <!-- <component :is='asyncChild1'></component> -->
    <!--~ 通过这种方式就可以看出来只有点击的时候才会加载 那个vue文件 -->
    <div>
      <button v-for="(item, index) in compList" :key="index" @click="activeIdx = index">{{ item.name }}</button>
    </div>
    <component :is='compList[activeIdx].component'></component>
    <hr />
    <input type="text" name="" id="" v-model="msg">
    <button v-copy="msg">copy</button>

  </div>
</template>

<script setup>
import Child1 from './components/child1.vue';
import Child2 from './components/child2.vue';
import { defineAsyncComponent, ref } from 'vue';
const asyncChild1 = defineAsyncComponent(() => import('./components/child1.vue'))
const asyncChild2 = defineAsyncComponent(() => import('./components/child3.vue'))
const asyncChild3 = defineAsyncComponent(() => import('./components/child2.vue'))
// 不需要用相应式
const compList = [
  {
    name: '组件1',
    component: asyncChild1
  },
  {
    name: '组件2',
    component: asyncChild2
  },
  {
    name: '组件3',
    component: asyncChild3
  }
]
const activeIdx = ref(0)
const msg = ref('hello')
</script>

<style lang="scss" scoped></style>