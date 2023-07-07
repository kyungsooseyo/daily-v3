<template>
  <div>
    <h3>slot-child</h3>
    <slot></slot>
    <hr/>
    <!-- ~ 具名插槽 -->
    <slot name="cat"></slot>
    <hr/>
    <!-- ~ 作用域插槽 -->
    <slot name="dog" :num="10"></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>