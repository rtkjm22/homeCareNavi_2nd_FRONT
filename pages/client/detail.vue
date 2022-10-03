<template>
  <div class="pt-10 pb-20">

    <div class="flex flex-col max-w-[990px] m-auto gap-8 lg:flex-row">
      <!-- 左カラム -->
      <ODetailLeft class="gridItem max-w-[520px]" />
      <!-- 右カラム -->
      <ODetailRight class="max-w-[438px]" /> 
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.gridItem {
  @apply grid rounded;
}
</style>
