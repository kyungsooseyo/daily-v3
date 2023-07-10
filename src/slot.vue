<template>
  <div>
    <slot-child>
      <template #default>
        <p>default</p>
      </template>
      <template #cat>
        <p>cat</p>
      </template>
      <template #dog="{ num }">
        <div style="color: tomato;">
          {{ num }}
        </div>
      </template>
    </slot-child>
  </div>
</template>

<script setup>
import SlotChild from './components/slot-child.vue';
</script>

<style lang="scss" scoped></style>