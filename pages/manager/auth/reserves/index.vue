<template>
  <div class="w-[355px] md:w-[730px] m-auto">
    <div v-if="pending" class="flex justify-center mt-10">
      <ASpinner size="lg" />
    </div>

    <template v-else>
      <ATitle ttl-text="予約状況確認" class="my-4" />
      <p v-if="reserves == null || reserves.length === 0">
        予約はありません
      </p>
      <OReserveList v-else v-bind="{ reserves }" class="mb-[61px]" />
    </template>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()

const { data: reserves, pending } = useAsyncData(
  () => $api.client.api.v1.manager.reserves.$get()
)
</script>
