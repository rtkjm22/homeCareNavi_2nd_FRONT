<template>
  <div>
    <p class="label">
      {{ labelText }}
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  labelText: string
}

defineProps<Props>()
</script>
<style scoped>
.label {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}
</style>
