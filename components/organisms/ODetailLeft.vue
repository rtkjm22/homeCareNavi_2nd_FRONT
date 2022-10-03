<template>
  <div>
    <MSlider class="content mb-6" />
    <ODetailIntroduction class="content mb-6" />
    <ODetailThanks class="content mb-6" />
    <ODetailOverview class="content" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.content {
  @apply rounded shadow-[0_1px_6px_0_rgba(0,0,0,0.1)];
}
</style>
