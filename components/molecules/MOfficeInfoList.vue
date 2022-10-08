<template>
  <ul class="twoCol">
    <MOfficeInfo
      v-for="(item, index) in compItems"
      :key="index"
      class="twoCol_item"
      :office-info="item.detail"
      :can-book-online="item.canBookOnline"
      :thanks-msg="item.thanksMsg"
      :work-day="(item.workDay as Weeks[])"
      :is-bookmarked="item.isBookmarked"
    />
  </ul>
</template>
<script setup lang="ts">
// サンプルデータ
import { compItems } from '@/data'
type Weeks = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

</script>
<style scoped lang="scss">
.twoCol {
  @apply gap-x-3 md:grid md:grid-cols-2;
  &_item {
    @apply m-auto mb-6;
  }
}
</style>
