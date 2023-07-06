<template>
  <div>
    <h3>child</h3>
    <p> {{ props.modelValue }}</p>
    <p>{{ xx }}</p>
    <button @click="changeName">change parent name </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  xx:Boolean
})
const emit=defineEmits(['update:modelValue']);
function changeName() {
  emit('update:modelValue', '嘻嘻')
}
</script>

<style lang="scss" scoped></style>