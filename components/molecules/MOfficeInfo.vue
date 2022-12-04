<template>
  <li
    class="relative mb-6 bg-white rounded-[4px] overflow-hidden shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] max-w-[375px]"
    role="listitem"
  >
    <!-- 事業所詳細情報 -->
    <a href="#" class="block p-3 w-full h-full z-10">
      <!-- web予約タグ -->
      <div class="min-h-[30px]">
        <ATag v-if="is_bookmark" class="mb-2.5" inner-text="web予約可" />
      </div>

      <!-- 事業所名 -->
      <h3
        class="mb-3 font-bold text-gray-dark text-[18px] w-[calc(100%-50px)] min-h-[48px] leading-[24px]"
      >
        {{ name }}
      </h3>

      <div class="flex mb-3 gap-[14px]">
        <!-- 事業所イメージ -->
        <AImage
          :src="thumbnail_image"
          alt="ホームケア施設のイメージ画像"
          :width="120"
          :height="90"
        />
        <!-- 事業所詳細情報 -->
        <ul>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>{{ nearest_station }}</p>
          </li>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>スタッフ数{{ stuff_count }}人</p>
          </li>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>{{ tel }}</p>
          </li>
        </ul>
      </div>

      <!-- 事業所メッセージ -->
      <p class="mb-3 min-h-[66px] text-[11px] text-gray-base">
        {{ feature_title }}
      </p>

      <!-- お礼コメント: TODO お礼作成する余裕があれば追加 -->
      <AThanksMsg thanks-msg="ここにお礼テキストが入ります。ここにお礼テキストが入ります。ここにお礼テキストが入ります最大50文字" />

      <!-- 営業日 -->

      <div
        class="flex justify-between items-center w-full sm:justify-around lg:justify-between"
      >
        <p class="pl-2 text-[11px] whitespace-nowrap text-gray-base font-bold">
          営業日
        </p>
        <AWorkDay :work-day="workday" />
      </div>
    </a>
    <!-- ブックマークアイコン -->
    <ABookmark
      class="absolute z-20 top-[46px] right-3"
      :is-bookmarked="is_bookmark"
    />
  </li>
</template>
<script setup lang="ts">
import type { ResponseSearchOffice } from '@/api/@types'

defineProps<ResponseSearchOffice>()
</script>
<style scoped lang="scss">
.officeDataItem {
  @apply flex items-center mb-[6px];
  img {
    @apply mr-2;
  }
  p {
    @apply text-[11px] text-gray-dark;
  }
}
</style>
