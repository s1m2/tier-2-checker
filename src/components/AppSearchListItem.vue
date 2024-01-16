<script setup lang="ts">
import type { Organisation } from '@/models/organisation';
defineProps<{ organisation: Organisation }>();
</script>

<template>
 <div class="bg-white w-full mb-6 p-2">
    <p class="text-lg ">{{organisation.organisation }}</p>
    <p class="text-sm ">{{ organisation.town }}</p>
 </div>
</template>