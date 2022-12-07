<template>
  <div class="flex flex-wrap container mx-auto lg:flex-nowrap lg:max-w-[990px] lg:gap-6">
    <!-- サイドバー（検索フォーム） -->
    <MSideBarSearch
      :prefecture="prefecture"
    />

    <!-- 検索結果一覧 -->
    <div class="pt-4 px-2.5 pb-[52px] w-full lg:w-[calc(100%-244px)]">
      <h2 class="mb-1 font-bold text-[18px] text-gray-dark">
        検索結果
      </h2>
      <p
        class="mb-1 pb-4 font-bold text-[13px] text-gray-base"
        :aria-rowcount="searchResults?.paginate.total_count"
      >
        {{ searchResults?.paginate.total_count }}
      </p>


      <!-- 読み込みローディング -->
      <div v-if="pending" class="flex justify-center">
        <ASpinner size="lg" />
      </div>

      <!-- 検索結果 -->
      <div v-else>
        <MOfficeInfoList
          v-if="searchResults?.offices.length"
          :offices="searchResults.offices"
        />

        <p v-else>
          一致する情報は見つかりませんでした
        </p>

        <!-- ページネーション部分 -->
        <MPagination
          v-bind="searchResults!.paginate"
          @click-paginate="clickPaginate"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { useAsyncAreaSearch, getAreaSearchParams, buildAreaSearchUrl } = useAreaSearch()

const { page, areas, prefecture, area } = getAreaSearchParams()

const currentPage = ref(page)

/** 検索結果 */
const { data: searchResults, pending, refresh } = useAsyncAreaSearch(areas, currentPage)

/** ページ番号クリック処理。引数に渡されたページの所得及びurl履歴の更新をする */
const clickPaginate = (newPage: number) => {
  window.scroll({ top: 0 })
  currentPage.value = newPage
  const url = buildAreaSearchUrl({
    areas,
    page: newPage,
    prefecture,
    area
  })
  history.pushState('', '', url)
  refresh()
}
</script>

<style scoped lang="scss">
</style>
