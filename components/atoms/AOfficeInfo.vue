<template>
  <li
    class="relative mb-6 bg-white rounded-[4px] overflow-hidden shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] max-w-[365px]"
  >
    <!-- 事業所詳細情報 -->
    <a href="#" class="block p-3 w-full h-full z-10">
      <ATag v-if="compInfo.canBookOnline" class="mb-2.5" />
      <h3
        class="mb-3 font-bold text-gray-dark text-[18px] w-[calc(100%-56px)] leading-[24px]"
      >
        {{compInfo.name}}
      </h3>

      <div class="flex mb-3 gap-[14px]">
        <img
          :src="compInfo.img"
          alt="ホームケア施設のイメージ画像"
        />
        <ul>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>{{compInfo.access}}</p>
          </li>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>スタッフ数{{ compInfo.staffs }}人</p>
          </li>
          <li class="officeDataItem">
            <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
            <p>{{ compInfo.phone }}</p>
          </li>
        </ul>
      </div>
      <p class="mb-3 text-[11px] text-gray-base">
        {{ compInfo.message }}
      </p>

      <!-- お礼コメント -->
      <AThanksMsg
        :thanksMsg="thanksMsg"
      />

      <!-- 営業日 -->
      <AWorkDay :workDay="workDay" />
    </a>
    <!-- ブックマークアイコン -->
    <ABookmark class="absolute z-20 top-[46px] right-3" :isBookmarked="isBookmarked" />
  </li>
</template>
<script setup lang="ts">
type Weeks = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
interface Props {
  compInfo: {
    canBookOnline: boolean;
    name: string;
    img: string;
    access: string;
    staffs: number;
    phone: string;
    message: string;
  };
  thanksMsg: string;
  workDay: Weeks[];
  isBookmarked: boolean;
}

defineProps<Props>();
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
