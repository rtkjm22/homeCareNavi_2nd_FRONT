<template>
  <div class="bg-white p-4">
    <h3 class="mb-3 text-base font-bold lg:mb-5 lg:text-lg">
      事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル
    </h3>
    <p class="mb-5 text-[13px] text-gray-base lg:mb-5 lg:text-sm">
      ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。
    </p>
    <div class="twoCol">
      <div>
        <img
          src="https://placehold.jp/f3d5c9/ffffff/150x150.png"
          alt="事業所のイメージ画像1"
          class="twoCol_img"
        >
        <p class="twoCol_text">
          画像の説明テキストが入ります画像の説明テキストが入ります
        </p>
      </div>
      <div>
        <img
          src="https://placehold.jp/e7f3c9/c4c4c4/150x150.png"
          alt="事業所のイメージ画像2"
          class="twoCol_img"
        >
        <p class="twoCol_text">
          画像の説明テキストが入ります画像の説明テキストが入ります
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.twoCol {
  @apply grid grid-cols-2 gap-6 lg:gap-2;
  &_img {
    @apply mb-2 w-full max-h-[120px] object-cover sm:max-h-[150px] lg:max-h-[180px];
  }
  &_text {
    @apply text-[11px] text-gray-base sm:text-xs;
  }
}
</style>
