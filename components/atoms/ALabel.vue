<template>
  <label :for="labelFor" class="myLabel">{{ labelText }}</label>
</template>

<script setup lang="ts">
interface Props {
  labelFor: string
  labelText: string
}

defineProps<Props>()
</script>

<style scoped>
.myLabel {
  @apply block text-[13px] font-bold text-gray-base;
}
</style>
