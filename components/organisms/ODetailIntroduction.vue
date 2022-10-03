<template>
  <div class="bg-white p-4">
    <h3 class="text-lg font-bold mb-5">
      事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル
    </h3>
    <p class="text-sm text-gray-base mb-5">
      ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。
    </p>
    <div class="twoCol">
      <div>
        <img
          src="https://placehold.jp/595fd4/9cbfff/150x150.png"
          alt="事業所のイメージ画像1"
          class="twoCol_img"
        />
        <p class="twoCol_text">
          画像の説明テキストが入ります画像の説明テキストが入ります
        </p>
      </div>
      <div>
        <img
          src="https://placehold.jp/595fd4/9cbfff/150x150.png"
          alt="事業所のイメージ画像2"
          class="twoCol_img"
        />
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
  @apply grid grid-cols-2 gap-2;
  &_img {
    @apply mb-2 w-full max-h-[180px] object-cover;
  }
  &_text {
    @apply text-xs text-gray-base;
  }
}
</style>
