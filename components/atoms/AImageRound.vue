<template>
  <img :src="src" :alt="alt" class="img_round" />
</template>
<script setup lang="ts">
defineProps<{
  src: string,
  alt?: string
}>()
</script>
<style scoped lang="scss">
.img_round {
  @apply rounded-full object-cover;
}
</style>
