<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Organisation} from '@/types/organisation';

import BaseInput from './components/BaseInput.vue';
import AppSearchList from './components/AppSearchList.vue';
import { useFetch } from './composables/useFetch'; 

const search = ref('');
const statusResult = ref('');
const organisations = ref<Organisation[]>([]);

const searchOrganisations = async () => {
  if (search.value === '') return
  const { data, status } = await useFetch(search.value);
  organisations.value = data.value
  statusResult.value = status.value
}

watchEffect(() => {
  searchOrganisations();
});
</script>

<template>
  <div class="p-4 w-96">
    <h1 class="text-lg font-medium mb-3">Tier 2 Verifier</h1>
    <BaseInput v-model="search" class="mb-5" />

    <AppSearchList v-if="organisations.length" :organisations="organisations" />
    <p v-if="organisations.length === 0 && statusResult==='success'" class="text-center h-96">No results found</p>
  </div>
</template>
