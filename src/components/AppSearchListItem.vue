<script setup lang="ts">
import type { Organisation } from '@/models/organisation';
const props = defineProps<Organisation>();
</script>

<template>
 <div>
    <p>{{props.organisation }}</p>
    <p>{{props.type }}</p>
    <p>{{ props.town }}</p>
 </div>
</template>