<script setup lang="ts">
import type { Organisation} from '@/types/organisation';
defineProps<{ organisation: Organisation }>();
</script>

<template>
 <div class="bg-white w-full mb-6 p-2">
    <p>{{organisation.organisation }}</p>
    <p class="text-xs">{{ organisation.town }}</p>
 </div>
</template>