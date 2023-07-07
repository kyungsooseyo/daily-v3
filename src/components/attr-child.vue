<template>
  <div>
    <h3>attr-child</h3>
    <button v-bind="attrs">button</button>
    {{ attrs.msg }}
  </div>
</template>
<script>
export default{
  //禁用属性继承 如果不禁用的话 点击按钮会触发两次；主要是用于整体禁用但是如果里面的某个组件想要用到attrs也是可以用的
  inheritAttrs: false,
}
</script>
<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log('attrs', attrs);
attrs.onXx();
</script>

<style lang="scss" scoped></style>