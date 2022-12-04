<template>
  <div class="flex flex-wrap container mx-auto lg:flex-nowrap lg:max-w-[990px] lg:gap-6">
    <!-- サイドバー（検索フォーム） -->
    <MSideBarSearch />

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
const route = useRoute()
const { useAreaSearch } = useOfficeSearch()

/** 現在のページ番号 */
const page = ref(Number.parseInt(route.query.page as string))

/** 単語検索およびエリア検索で使用する検索文字列 */
const areas = route.query.areas as string

/** 検索結果 */
const { data: searchResults, pending, refresh } = useAreaSearch(areas, page)

/** ページ番号クリック処理。引数に渡されたページの所得及びurl履歴の更新をする */
const clickPaginate = (newPage: number) => {
  window.scroll({ top: 0 })
  page.value = newPage
  history.pushState('', '', `/offices?areas=${areas}&page=${newPage}`)
  refresh()
}
</script>

<style scoped lang="scss">
</style>
