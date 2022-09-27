<template>
  <a
    href="#"
    class="flex justify-center w-11 h-11 bg-[#F5F7F7] rounded-full"
    @click="bookmarkedFlg = !bookmarkedFlg"
  >
    <svg
      class="w-[30px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <title>697_xm_h</title>
      <polygon
        :class="{ bookmark__active: bookmarkedFlg }"
        class="bookmark"
        points="23.98 5 29.85 16.9 42.98 18.8 33.48 28.07 35.72 41.14 23.98 34.97 12.24 41.14 14.48 28.07 4.98 18.8 18.11 16.9 23.98 5"
        fill="white"
        stroke="#D9DEDE"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <rect width="22" height="22" fill="none" />
    </svg>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  isBookmarked: boolean;
}>()
const bookmarkedFlg = ref<boolean>(props.isBookmarked)
</script>
<style scoped lang="scss">
.bookmark {
  transition: all 0.1s ease-in-out;
  &__active {
    fill: #f09c3c;
    stroke: #f09c3c;
  }
}
</style>
