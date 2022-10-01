<template>
  <div
    class="mt-10 mb-96 pb-10 sm:pd-16 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <div class="w-full px-4">
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle :ttl-text="completeTitle" />
      </div>
      <div class="mb-5 sm:mb-2 mx-auto sm:w-[520px] text-center">
        <p class="completeText">
          {{ completeText }}
        </p>
      </div>
      <div class="text-center mt-1 mb-2">
        <NuxtLink
          class="text-sm text-pink"
          :to="completeHrefToPage"
        >
          {{ completeTextToPage }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  completeTitle: string;
  completeText: string;
  completeTextToPage: string;
  completeHrefToPage: string;
}

defineProps<Props>()
</script>
<style scoped lang="scss">
.completeText {
  white-space: pre-wrap;
}
</style>
