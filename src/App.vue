<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';

import AppInput from './components/AppInput.vue';

const AppSearchList = defineAsyncComponent(() => import('./components/AppSearchList.vue'));
const AppSpinnerVue = defineAsyncComponent(() => import('./components/AppSpinner.vue'));
const AppNotification = defineAsyncComponent(() => import('./components/AppNotification.vue'));

import { useFetch } from './composables/useFetch'; 

const search = ref('');
const { data, status } = useFetch(search);
const showNotification = computed(() => status.value === 'success' && data.value.length === 0 && search.value.length > 1);

</script>

<template>
  <div class="p-4 w-96">
    <h1 class="text-lg font-medium mb-3">Tier 2 Verifier</h1>
    <AppInput v-model="search" class="mb-5" />
    <AppSpinnerVue v-if="status === 'loading'"/>
    <AppSearchList v-if="data.length" :organisations="data" />
    <AppNotification v-if="showNotification">
      <p> No results found</p>
    </AppNotification>
  </div>
</template>
