<script setup lang="ts">
import AppSearchListItem from '@/components/AppSearchListItem.vue';
import type { Organisation} from '@/types/organisation';

defineProps<{ organisations: Organisation[] }>();
</script>

<template>
  <div class="h-96 overflow-y-auto">
    <AppSearchListItem v-for="(organisation, index) in organisations" :key="index" :organisation="organisation" />
  </div>
</template>