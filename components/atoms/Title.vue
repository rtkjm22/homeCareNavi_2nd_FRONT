<template>
  <h1 class="text-[18px] sm:text-lg text-gray-dark font-bold">{{ ttlText }}</h1>
</template>

<script setup lang="ts">
  interface Props {
    ttlText: string;
  }
  const props = defineProps<Props>();
</script>
