<template>
  <li
    class="relative mb-6 bg-white rounded-[4px] overflow-hidden shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] max-w-[375px]"
  >
    <!-- 事業所詳細情報 -->
    <a href="#" class="block p-3 w-full h-full z-10">
      <!-- web予約タグ -->
      <div class="min-h-[30px]">
        <ATag v-if="canBookOnline" class="mb-2.5" inner-text="web予約可" />
      </div>

      <!-- 事業所名 -->
      <h3
        class="mb-3 font-bold text-gray-dark text-[18px] w-[calc(100%-50px)] min-h-[48px] leading-[24px]"
      >
        {{ officeInfo.name }}
      </h3>

      <div class="flex mb-3 gap-[14px]">
        <!-- 事業所イメージ -->
        <img :src="officeInfo.img" alt="ホームケア施設のイメージ画像" />
        <!-- 事業所詳細情報 -->
        <ul>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>{{ officeInfo.access }}</p>
          </li>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>スタッフ数{{ officeInfo.staffs }}人</p>
          </li>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>{{ officeInfo.phone }}</p>
          </li>
        </ul>
      </div>

      <!-- 事業所メッセージ -->
      <p class="mb-3 min-h-[66px] text-[11px] text-gray-base">
        {{ officeInfo.message }}
      </p>

      <!-- お礼コメント -->
      <AThanksMsg :thanks-msg="thanksMsg" />

      <!-- 営業日 -->

      <div
        class="flex justify-between items-center w-full sm:justify-around lg:justify-between"
      >
        <p class="pl-2 text-[11px] whitespace-nowrap text-gray-base font-bold">
          営業日
        </p>
        <AWorkDay :work-day="workDay" />
      </div>
    </a>
    <!-- ブックマークアイコン -->
    <ABookmark
      class="absolute z-20 top-[46px] right-3"
      :is-bookmarked="isBookmarked"
    />
  </li>
</template>
<script setup lang="ts">
type Weeks = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
type Props = {
  officeInfo: {
    name: string;
    img: string;
    access: string;
    staffs: number;
    phone: string;
    message: string;
  };
  canBookOnline: boolean;
  thanksMsg: string;
  workDay: Weeks[];
  isBookmarked: boolean;
};

defineProps<Props>()
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
