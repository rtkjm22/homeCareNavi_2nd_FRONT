<template>
  <VueAwesomePaginate
    :model-value="current_page"
    :total-items="total_count"
    :items-per-page="10"
    :max-pages-shown="5"
    back-button-class="text-pink"
    next-button-class="text-pink"
    :on-click="onClickHandler"
    :hide-prev-next-when-ends="true"
    :show-breakpoint-buttons="false"
  />
</template>

<script setup lang="ts">
import { VueAwesomePaginate } from 'vue-awesome-paginate'
import type { Paginate } from '@/api/@types/index'

defineProps<Paginate>()
const emit = defineEmits<{(e: 'clickPaginate', requestPage: number): void; }>()

const onClickHandler = (page: number) => {
  emit('clickPaginate', page)
}
</script>

<style lang="scss">
.pagination-container {
    @apply list-none gap-2 w-9 h-9 text-gray-base cursor-pointer;
  }
  .paginate-buttons {
    @apply h-[40px] w-[40px] cursor-pointer bg-white border-solid;
  }
  .active-page {
    @apply bg-gray-lighter text-white;
  }
</style>
