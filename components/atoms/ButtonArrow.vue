<template>
  <NuxtLink
    :to="to"
    class="flex justify-between w-full h-full px-6 py-4 border-b-[1px]"
  >
    <span class="text-sm font-medium text-gray-dark">{{ innerText }}</span>
    <div class="relative flex items-center">
      <div
        class="arrowBase rotate-45 -translate-y-[2px]"
      ></div>
      <div
        class="arrowBase -rotate-45 translate-y-[2px]"
      ></div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
interface Props {
  innerText: string;
  to: string;
}

const props = defineProps<Props>();
</script>
<style scoped lang="scss">
.arrowBase {
  @apply block absolute w-[8px] h-[2px] rounded bg-gray-base transform;
}
</style>