<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ modelValue: string}>();
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  }
});
</script>

<template>
  <input autocomplete="off" type="text" name="search" id="search" placeholder="Type a company name" v-model="model" class="p-2 w-full">
</template>
