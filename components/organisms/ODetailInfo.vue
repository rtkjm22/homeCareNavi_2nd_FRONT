<template>
  <div class="w-full relative">
    <div class="content">
      <!-- 事業所名 -->
      <h2 class="mb-2 pr-[52px] text-lg leading-7 font-bold lg:mb-3 lg:pr-0 lg:max-w-[338px] lg:text-[28px] lg:leading-10">
        祖師谷ケアパークそよ風祖師谷ケアパークそよ風祖師最大30文
      </h2>
      <!-- 住所 -->
      <p class="mb-3 text-[13px] text-gray-base lg:mb-4">
        〒157-0072<br />東京都世田谷区祖師谷4-3-15
      </p>

      <!-- アクセス・スタッフ数 -->
      <div class="flex items-center mb-3 lg:mb-5">
        <!-- アクセス -->
        <div class="flex items-center mr-4 lg:mr-6">
          <img
            src="@/assets/img/pin.svg"
            alt="アクセス用ピンアイコン"
            width="16"
            height="16"
            class="mr-1.5 w-[11px] h-[11px] lg:mr-2 lg:w-4 lg:h-4"
          />
          <span class="text-[11px] lg:text-[13px]">祖師ヶ谷大蔵駅 徒歩5分</span>
        </div>
        <!-- スタッフ数 -->
        <div class="flex items-center">
          <img
            src="@/assets/img/user.svg"
            alt="スタッフ数用アイコン"
            width="16"
            height="16"
            class="mr-1.5 w-[11px] h-[11px] lg:mr-2 lg:w-4 lg:h-4"
          />
          <span class="text-[11px] lg:text-[13px]">スタッフ数 5人</span>
        </div>
      </div>

      <!-- 電話番号 -->
      <div class="flex items-center mb-4 lg:block lg:mb-6">
        <!-- 電話番号 -->
        <div class="flex items-center mr-4 lg:mb-1.5">
          <img
            src="@/assets/img/phone.svg"
            alt="電話アイコン"
            width="32"
            height="32"
            class="mr-2 w-5 h-5 lg:w-8 lg:h-8 lg:mr-3"
          />
          <p class="font-bold text-4 text-pink lg:text-xl lg:text-gray-dark">
            00-0000-0000
          </p>
        </div>
        <!-- FAX -->
        <div class="flex items-center">
          <span class="mr-2 text-sm font-bold text-gray-light lg:mr-3 lg:text-[18px]">FAX</span>
          <p class="font-bold text-4 lg:text-xl">
            00-0000-0000
          </p>
        </div>
      </div>

      <!-- web予約するボタン -->
      <AButton
        inner-text="web予約する"
        user-type="client"
        size="lg"
        class="mb-4 lg:mb-[18px]"
      />

      <!-- 営業日 -->
      <div class="flex mb-2 items-center gap-4 lg:mb-0 lg:block lg:items-stretch">
        <p class="mb-3 text-[13px] text-gray-base font-bold whitespace-nowrap">
          営業日
        </p>
        <AWorkDay :work-day="(arr as Weeks[])" class="w-full h-[68px] lg:hidden" />
        <AWorkDay :work-day="(arr as Weeks[])" size="lg" class="hidden mb-2 m-auto w-full h-[68px] lg:table" />
      </div>

      <!-- 営業日時についての説明文 -->
      <p class="text-[11px] text-gray-base">
        営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります
      </p>
    </div>
    <ABookmark :is-bookmarked="false" class="absolute right-4 top-4" />
  </div>
</template>
<script setup lang="ts">
type Weeks = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
const arr = ['sun', 'tue', 'thu', 'fri', 'sat']
</script>
<style scoped lang="scss">
.content {
  @apply p-4 bg-white lg:rounded lg:shadow-[0_1px_6px_0_rgba(0,0,0,0.1)];
}
</style>
