<template>
  <ul class="twoCol">
    <OReserveLogCard v-for="(item, index) in compItems" :key="index" class="twoCol_item" :office-info="item.detail" />
  </ul>
</template>
<script setup lang="ts">
// サンプルデータ
import { compItems } from '@/data'

</script>
<style scoped lang="scss">
.twoCol {
  @apply gap-x-3 md:grid md:grid-cols-2;

  &_item {
    @apply m-auto mb-6;
  }
}
</style>
