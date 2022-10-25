<template>
  <div class="h-[120px] flex justify-between items-end md:justify-start">
    <img src="https://placehold.jp/150x150.png" alt="" class=" w-[120px] h-[120px] bg-gray-lighter rounded-full">
    <label for="upImg" class="text-sm text-orange md:ml-6">画像をアップロードする</label>
    <input id="upImg" type="file">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
#upImg {
  display: none;
}
</style>
