<template>
  <div>
    <attr-child class="box" :num="10" :msg="msg" @xx="log" @click="log2"></attr-child>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import AttrChild from './components/attr-child.vue';
const msg = ref('kk')
function log(params) {
  console.log('66');
}
function log2(params) {
  console.log('777')
}
</script>

<style lang="scss" scoped></style>