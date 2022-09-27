<template>
  <div class="flex flex-wrap mx-auto lg:flex-nowrap lg:max-w-[990px] lg:gap-6">
    <!-- サイドバー（検索フォーム） -->
    <MSideBarSearch />

    <!-- 検索結果一覧 -->
    <div class="pt-4 px-2.5 pb-[52px] w-full lg:w-[calc(100%-244px)]">
      <h2 class="mb-1 font-bold text-[18px] text-gray-dark">
        検索結果
      </h2>
      <p class="mb-1 pb-4 font-bold text-[13px] text-gray-base">
        999件
      </p>
      <MOfficeInfoList />

      <!-- ページネーション部分 -->
      <APagination />
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
</style>
