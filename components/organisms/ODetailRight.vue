<template>
  <div class="w-full">
    <div class="content">
      <!-- 事業所名 -->
      <h2 class="mb-3 max-w-[338px] text-[28px] font-bold">
        祖師谷ケアパークそよ風祖師谷ケアパークそよ風祖師最大30文字
      </h2>
      <!-- 住所 -->
      <p class="mb-4 text-[13px] text-gray-base">
        〒157-0072<br />東京都世田谷区祖師谷4-3-15
      </p>

      <!-- アクセス・スタッフ数 -->
      <div class="flex items-center mb-5">
        <!-- アクセス -->
        <div class="flex items-center mr-6">
          <img
            src="@/assets/img/pin.svg"
            alt="アクセス用ピンアイコン"
            width="16"
            height="16"
            class="mr-2"
          />
          <span class="text-[13px]">祖師ヶ谷大蔵駅 徒歩5分</span>
        </div>
        <!-- スタッフ数 -->
        <div class="flex items-center">
          <img
            src="@/assets/img/user.svg"
            alt="スタッフ数用アイコン"
            width="16"
            height="16"
            class="mr-2"
          />
          <span class="text-[13px]">スタッフ数 5人</span>
        </div>
      </div>

      <!-- 電話番号 -->
      <div class="mb-6">
        <!-- 電話番号 -->
        <div class="flex items-center mb-1.5">
          <img
            src="@/assets/img/phone.svg"
            alt="電話アイコン"
            width="32"
            height="32"
            class="mr-3"
          />
          <p class="text-xl font-bold">00-0000-0000</p>
        </div>
        <!-- FAX -->
        <div class="flex items-center">
          <span class="mr-3 text-[18px] font-bold text-gray-light">FAX</span>
          <p class="text-xl font-bold">00-0000-0000</p>
        </div>
      </div>

      <AButton
        innerText="web予約する"
        userType="client"
        size="lg"
        class="mb-[18px]"
      />

      <!-- 営業日 -->
      <p class="text-[13px] text-gray-base font-bold">営業日</p>
      <AWorkDay :workDay="(arr as Weeks[])" class="mb-2" />

      <!-- 営業日時についての説明文 -->
      <p class="text-[11px] text-gray-base">
        営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
type Weeks = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
const arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
</script>
<style scoped lang="scss">
.content {
  @apply p-4 rounded shadow-[0_1px_6px_0_rgba(0,0,0,0.1)];
}
</style>
