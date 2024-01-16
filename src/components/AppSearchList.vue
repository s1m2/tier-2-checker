<script setup lang="ts">
import AppSearchListItem from '@/components/AppSearchListItem.vue';
import type { Organisation} from '@/types/organisation';

defineProps<{ organisations: Organisation[] }>();
</script>

<template>
  <AppSearchListItem v-for="(organisation, index) in organisations" :key="index" :organisation="organisation" />
</template>