<template>
  <!-- メニュー部 -->
  <nav class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <div class="flex flex-nowrap">
      <a
        href="/"
        class="mr-5 whitespace-nowrap text-[13px] font-medium text-gray-base hover:text-gray-900"
        >閲覧履歴</a
      >
      <a
        href="/"
        class="mr-5 whitespace-nowrap text-[13px] font-medium text-gray-base hover:text-gray-900"
        >ブックマーク</a
      >
      <a
        href="/"
        class="mr-8 whitespace-nowrap text-[13px] font-medium text-gray-base hover:text-gray-900"
        >予約履歴</a
      >
    </div>
    <div class="ml-4 flex items-center gap-2">
      <BtnLogin />
      <BtnSignup />
    </div>
  </nav>
</template>
<script setup lang="ts">
import BtnLogin from "../atoms/btnLogin.vue";
import BtnSignup from "../atoms/btnSignup.vue";
</script>
