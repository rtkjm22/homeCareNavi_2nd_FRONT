<template>
  <div class="w-full md:w-[750px] md:h-[445px] m-auto bg-white">
    <div class="w-[343px] h-[380px] md:w-full m-auto mt-2 md:mt-10 text-gray-dark md:text-center">
      <ATitle class="pt-4 md:pt-8" ttl-text="退会" />
      <div class="mt-6 mb-8 md:mt-12 text-sm">
        <p class="mb-5">
          退会後はこれまでの予約情報などは全て削除されます。
        </p>

        <p class="mb-5">
          また、以下の機能が使用できなくなります。
        </p>

        <ul>
          <li>・ブックマーク</li>
          <li>・予約</li>
          <li>・お礼投稿</li>
        </ul>
      </div>
      <div class="text-center">
        <MModal />
        <NuxtLink to="/client/auth/profile" class="w-[120px] block mx-auto text-pink text-center text-sm">
          退会せずに戻る
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>
