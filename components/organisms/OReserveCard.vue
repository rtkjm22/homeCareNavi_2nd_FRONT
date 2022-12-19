<template>
  <div class="w-full h-[262px] mb-6 bg-white rounded">
    <div class="w-[331px] m-auto">
      <div class="flex justify-between pt-3">
        <span
          class="h-[23px] px-1.5 py-0.5 text-[13px] text-pink bg-babypink font-bold rounded-sm"
          :class="textColor"
        >{{ contact }}</span>
        <span class="text-[10px] text-gray-base">2020年12月31日&nbsp;19:47</span>
      </div>

      <p class="pt-3.5 pb-4 text-gray-dark text-lg font-bold">
        田中 太郎さん&ensp;(80)
      </p>

      <p class="pb-0.5 text-[13px] text-gray-base font-bold">
        面談希望日時
      </p>
      <p class="text-gray-dark">
        12月31日(土)&nbsp;10:00〜12:00
      </p>

      <p class="pt-3 text-[13px] text-gray-base font-bold">
        連絡先電話番号
      </p>
      <p class="pt-0.5 text-orange">
        000-0000-0000
      </p>

      <AButtonSubmit
        inner-text="連絡済みにする"
        user-type="manager"
        class="h-[40px] text-[14px] sm:text-sm md:text-sm mt-4"
        @click="contactSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const contact = ref('未連絡')
const textColor = ref('')

const contactSubmit = () => {
  contact.value = '連絡済み'
  textColor.value = 'textColor'
}
</script>

<style scoped lang="scss">
.textColor {
    @apply text-gray-base bg-gray-lighter
}
</style>
