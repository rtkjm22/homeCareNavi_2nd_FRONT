<template>
  <!-- ページネーション部分 -->
  <ul class="flex justify-center list-none gap-2 pagination">
    <li
      v-if="currentPage >= range - 1"
      class="pagination_item pagination_item__prev"
      @click="changePage(currentPage - 1)"
    >
      <div class="relative flex items-center">
        <div
          class="block absolute w-[8px] h-[2px] -right-1 rounded bg-pink transform rotate-45 translate-y-[2px]"
        />
        <div
          class="block absolute w-[8px] h-[2px] -right-1 rounded bg-pink transform -rotate-45 -translate-y-[2px]"
        />
      </div>
    </li>
    <li
      v-for="page in middlePageRange"
      :key="page"
      class="pagination_item"
      :class="{ pagination_item__active: page === currentPage }"
      @click="changePage(page)"
    >
      <span>{{ page }}</span>
    </li>
    <li
      v-if="lastPage >= currentPage + range - 2"
      class="pagination_item pagination_item__next"
      @click="changePage(currentPage + 1)"
    >
      <div class="relative flex items-center">
        <div
          class="block absolute w-[8px] h-[2px] -right-1 rounded bg-pink transform rotate-45 -translate-y-[2px]"
        />
        <div
          class="block absolute w-[8px] h-[2px] -right-1 rounded bg-pink transform -rotate-45 translate-y-[2px]"
        />
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
const currentPage = ref(1)
const lastPage = 20
const range = 5

const middlePageRange = computed(() => {
  let start: number
  let end: number
  if (currentPage.value < range - 2) {
    start = 1
    end = range
  } else if (currentPage.value > lastPage - range + 2) {
    start = lastPage - range + 1
    end = lastPage
  } else {
    start = currentPage.value - Math.floor(range / 2)
    end = currentPage.value + Math.floor(range / 2)
  }
  return calRange(start, end)
})

const calRange = (start: number, end: number): number[] => {
  const returnRange = []
  for (let i = start; i <= end; i++) {
    returnRange.push(i)
  }
  return returnRange
}

const changePage = (page: number) => {
  if (page > 0 && page <= lastPage) {
    currentPage.value = page
  }
}
</script>
<style scoped lang="scss">
.pagination {
  &_item {
    @apply flex items-center justify-center w-9 h-9 border border-gray-lighter rounded text-gray-base;
    &__active {
      @apply bg-gray-lighter text-white;
    }
    &__prev,
    &__next {
      @apply text-pink;
    }
    &__prev {
      @apply mr-4;
    }
    &__next {
      @apply ml-4;
    }
  }
}
</style>
