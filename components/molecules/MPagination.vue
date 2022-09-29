<template>
  <!-- ページネーション部分 -->
  <ul class="flex justify-center list-none gap-2 pagination">
    <!-- 前へボタン -->
    <li
      v-if="currentPage >= range - 1"
      class="pagination_item pagination_item__prev"
      @click="changePage(currentPage - 1)"
    >
      <AArrow
        class="relative flex items-center justify-center"
        line-direction="left"
        :line-position="200"
        line-color="pink"
      />
    </li>
    <!-- range分ページ数のボタンを表示 -->
    <li
      v-for="page in middlePageRange"
      :key="page"
      class="pagination_item"
      :class="{ pagination_item__active: page === currentPage }"
      @click="changePage(page)"
    >
      <span>{{ page }}</span>
    </li>
    <!-- 次へボタン -->
    <li
      v-if="lastPage >= currentPage + range - 2"
      class="pagination_item pagination_item__next"
      @click="changePage(currentPage + 1)"
    >
      <AArrow
        class="relative flex items-center justify-center"
        :line-position="0"
        line-color="pink"
      />
    </li>
  </ul>
</template>
<script setup lang="ts">
const { $pagination } = useNuxtApp()

// 現在表示されているページ
const currentPage = ref(7)
// ページネーションに表示する個数
const range = 5
// 取得した事業所情報の件数
const countItems = 1000
// 表示している事業所の件数
const displayItems = 10
// 最後のページ
const lastPage = Math.ceil(countItems / displayItems / range) + 1

const middlePageRange = computed(() => {
  return $pagination.middlePageRange(currentPage.value, lastPage, range)
})

// ページの切り替え実行関数
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
