<template>
  <div>
    <p class="myLabel">
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
.myLabel {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}
</style>
