<template>
  <div class="flex-col">
    <div
      class="mt-10 pb-10 sm:pd-16 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
    >
      <NuxtLink
        to="/"
        class="absolute top-4 right-4 text-sm text-pink"
      >
        変更する
      </NuxtLink>
      <!-- コンテンツ部分 -->
      <div class="w-full px-4">
        <!-- タイトル -->
        <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
          <ATitle ttl-text="登録情報" />
        </div>
        <!-- ユーザー情報の項目 -->
        <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
          <div class="flex flex-col">
            <!-- お名前 -->
            <div class="py-2">
              <ALabel :label-text="'お名前'" />
              <p class="label">
                {{ currentUser.name }}
              </p>
            </div>
            <!-- メールアドレス -->
            <div class="py-2">
              <ALabel :label-text="'メールアドレス'" />
              <p class="label">
                {{ currentUser.email }}
              </p>
            </div>
            <!-- パスワード -->
            <div class="py-2">
              <ALabel :label-text="'パスワード'" />
              <p class="label">
                非表示
              </p>
            </div>
            <!-- 電話番号 -->
            <div class="py-2">
              <ALabel :label-text="'電話番号'" />
              <p class="label">
                {{ currentUser.tel }}
              </p>
            </div>
            <!-- 住所 -->
            <div class="py-2">
              <ALabel :label-text="'住所'" />
              <p class="font-bold text-gray-base">
                〒{{ currentUser.postal_code }}
              </p>
              <p class="font-bold text-gray-base">
                {{ currentUser.address }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <NuxtLink
            to="/"
            class="text-sm text-pink"
          >
            ログアウト
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="mb-10 sm:mb-20 mx-auto flex justify-center max-w-pcCol1 bg-white relative rounded py-5 mt-5"
    >
      <NuxtLink
        to="/"
        class="text-pink font-bold"
      >
        退会する
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// ユーザー情報の取（本来はVuexのgettersから取得？）
const currentUser = computed(() => {
  return {
    name: '田中 太郎',
    email: 'homecarenavi@mail.com',
    tel: '000-0000-0000',
    postal_code: '000-0000',
    address: '東京都世田谷区祖師谷4-3-15'
  }
})
</script>

<style scoped>
  .label {
    @apply my-2 font-bold text-gray-base;
  }
</style>
