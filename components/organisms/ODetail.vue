<template>
  <div>
    <!-- スライドショー -->
    <MSlider class="content lg:mb-6" />
    <!-- 基本情報（SP） -->
    <ODetailInfo class="block mb-4 lg:hidden" />
    <!-- 事業所紹介 -->
    <ODetailIntroduction class="content mb-4 lg:mb-6" />
    <!-- スタッフ紹介 -->
    <ODetailThanks class="content mb-4 lg:mb-6" />
    <!-- 施設概要 -->
    <ODetailOverview class="content" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.content {
  @apply  lg:rounded lg:shadow-[0_1px_6px_0_rgba(0,0,0,0.1)];
}
</style>
