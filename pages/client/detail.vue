<template>
  <div class="pb-14 sm:pt-10 sm:pb-20">
    <div class="flex flex-col max-w-[990px] m-auto gap-8 lg:flex-row">
      <!-- 左カラム -->
      <ODetail class="gridItem w-full max-w-[520px]" />
      <!-- 右カラム -->
      <ODetailInfo class="hidden lg:max-w-[438px] lg:block" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.gridItem {
  @apply m-auto lg:grid rounded;
}
</style>
