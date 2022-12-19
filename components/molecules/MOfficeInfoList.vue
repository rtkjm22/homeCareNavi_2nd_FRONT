<template>
  <ul class="twoCol" role="list">
    <MOfficeInfo
      v-for="office in offices"
      :key="office.id"
      class="twoCol_item"
      v-bind="office"
    />
  </ul>
</template>

<script setup lang="ts">
import type { ResponseSearchOffice } from '@/api/@types'

type Props = {
  offices: ResponseSearchOffice[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.twoCol {
  @apply gap-x-3 md:grid md:grid-cols-2;
  &_item {
    @apply m-auto mb-6;
  }
}
</style>
