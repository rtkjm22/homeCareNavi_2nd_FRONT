<template>
  <div class="mb-2">
    <!-- 郵便番号入力欄 -->
    <span class="text-gray-base text-base mr-2">〒</span>
    <input
      type="text"
      class="addressCd"
      placeholder="000-0000"
      pattern="\d{3}-?\d{4}"
      maxlength="8"
      required
    />
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.addressCd {
  @apply px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark max-w-[120px] rounded placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
