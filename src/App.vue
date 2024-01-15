<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import BaseInput from './components/BaseInput.vue';

const search = ref('');
const organisations = ref([]);

const searchOrganisations = async () => {
  if (search.value === '') return;

  const response = await fetch(`http://localhost:3000/api/organisations?search=${search.value}`);
  const data = await response.json();
  organisations.value = data;
};

watchEffect(() => {
  searchOrganisations();
});

</script>

<template>
  <h3>Tier 2 Verifier</h3>
  <BaseInput v-model="search" />
  
  <ul>
    <li v-for="(organisation, index) in organisations" :key="index">
      {{ organisation['Organisation Name'] }}
    </li>
  </ul>
</template>
