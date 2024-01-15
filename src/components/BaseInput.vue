<script setup lang="ts">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

</script>

<template>
  <input type="text" name="search" id="search" placeholder="Type a company name" @input="onInput">
</template>
