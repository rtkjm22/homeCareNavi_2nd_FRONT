<template>
  <div
    class="flex mb-2.5 pt-2.5 pr-2 pb-2 pl-2.5 gap-2 items-start bg-lightGreen"
  >
    <img
      class="block"
      src="@/assets/img/searchOffice.svg"
      width="16"
      height="16"
    >
    <div>
      <p class="text-[10px] font-bold text-gray-dark">
        ユーザーからのお礼コメント
      </p>
      <p class="text-[11px] text-gray-dark">
        {{ thanksMsg }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  thanksMsg: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="scss"></style>
