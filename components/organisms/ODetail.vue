<template>
  <div>
    <!-- スライドショー -->
    <MSlider v-bind="mSlider" class="content lg:mb-6" />
    <!-- 基本情報（SP） -->
    <ODetailInfo v-bind="oDetailInfo" class="block mb-4 lg:hidden" />
    <!-- 事業所紹介 -->
    <ODetailIntroduction v-bind="oDetailIntroduction" class="content mb-4 lg:mb-6" />
    <!-- スタッフ紹介 -->
    <ODetailThanks v-bind="oDetailThanks" class="content mb-4 lg:mb-6" />
    <!-- 施設概要 -->
    <ODetailOverview class="content" />
  </div>
</template>

<script setup lang="ts">
import type { Props as MSliderProps } from '@/components/molecules/MSlider.vue'
import type { Props as ODetailInfoProps } from '@/components/organisms/ODetailInfo.vue'
import type { Props as ODetailIntroductionProps } from '@/components/organisms/ODetailIntroduction.vue'
import type { Props as ODetailThanksProps } from '@/components/organisms/ODetailThanks.vue'

defineProps<{
  oDetailInfo: ODetailInfoProps,
  mSlider: MSliderProps,
  oDetailIntroduction: ODetailIntroductionProps,
  oDetailThanks: ODetailThanksProps
}>()
</script>

<style scoped lang="scss">
.content {
  @apply  lg:rounded lg:shadow-[0_1px_6px_0_rgba(0,0,0,0.1)];
}
</style>
