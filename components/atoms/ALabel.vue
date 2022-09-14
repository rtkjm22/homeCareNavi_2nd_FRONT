<template>
  <div>
    <label :for="labelFor" class="label">{{ labelText }}</label>
  </div>
</template>
<script setup lang="ts">
interface Props {
  labelFor: string,
  labelText: string
}

defineProps<Props>()
</script>
<style scoped>
.label {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}
</style>