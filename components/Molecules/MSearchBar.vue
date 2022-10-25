<template>
  <label class="relative container mx-auto flex justify-center items-center">
    <button class="absolute inset-y-0 right-0 flex items-center pr-8" @click="searchSubmit">
      <svg class="w-5 h-5 text-gray-base" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <input
      class="
        placeholder:text-bulegray
        block
        bg-white
        w-full
        md:w-[720px] md:h-[48px]
        border
        rounded-full
        py-2
        pl-9
        pr-3
        focus:outline-none focus:ring-0
      "
      placeholder="事業所名、市区町村など"
      type="text"
      name="search"
    >
  </label>
</template>

<script setup lang="ts">
const searchSubmit = () => {
  // ワード検索してSubmitされた時の処理
}
</script>

<style scoped lang="scss">

</style>
