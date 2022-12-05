<template>
  <li
    class="relative m-auto p-3 mb-6 bg-white rounded-[4px] overflow-hidden shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] max-w-[375px]"
  >
    <h3 class="mt-3 mb-3 font-bold text-gray-dark text-[18px] min-h-[48px] leading-[24px]">
      {{ officeInfo.name }}
    </h3>

    <div class="flex mb-3 gap-[14px]">
      <img :src="officeInfo.img" alt="ホームケア施設のイメージ画像" />

      <ul>
        <li class="officeDataItem">
          <img src="@/assets/img/searchOffice.svg" width="12" height="12" />
          <p>{{ officeInfo.access }}</p>
        </li>
        <li class="officeDataItem">
          <img src="@/assets/img/user.svg" width="12" height="12" />
          <p>スタッフ数{{ officeInfo.staffs }}人</p>
        </li>
        <li class="officeDataItem">
          <img src="@/assets/img/phone.svg" width="12" height="12" />
          <p>{{ officeInfo.phone }}</p>
        </li>
      </ul>
    </div>

    <div class=" border-t-[1px] border-gray-lighter">
      <p class="mt-4 text-[12px] text-gray-base">
        予約した日時&#160;&#58;&#160;2020年12月31日&nbsp;19:47
      </p>
      <p class="pt-3 pb-0.5 text-[13px] text-gray-base font-bold">
        面談希望日時
      </p>
      <p class="text-gray-dark">
        12月31日(土)&nbsp;10:00〜12:00
      </p>

      <p class="mt-4 mb-6 text-center font-[13px] text-gray-base">
        事業所からの連絡をお待ちください。
      </p>
    </div>
  </li>
</template>
<script setup lang="ts">
type Props = {
  officeInfo: {
    name: string;
    img: string;
    access: string;
    staffs: number;
    phone: string;
  }
}

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
