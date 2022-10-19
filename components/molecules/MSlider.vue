<template>
  <div class="bg-white">
    <!-- メインビジュアル -->
    <swiper
      class="mySwiper"
      :modules="swiperModules"
      :navigation="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :pagination="{
        clickable: true,
        type: 'fraction',
      }"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <img class="h-full w-full object-cover" :src="image.imageUrl" alt="" />
      </swiper-slide>
    </swiper>

    <!-- 画像ボタン -->
    <swiper
      class="mySwiper-thumb"
      :modules="swiperModules"
      :slides-per-view="5"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <img
          class="w-[92px] h-[69px] object-cover"
          :src="image.imageUrl"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import SwiperClass, { Autoplay, Navigation, Thumbs } from "Swiper";

// 画像ボタンの配列
const thumbsSwiper = ref<SwiperClass>();

// thumbsSwiperに画像を格納する関数
const setThumbsSwiper = (swiper: SwiperClass): void => {
  thumbsSwiper.value = swiper;
};

// swiper標準のモジュールをインポート
// Autoplay: 4000ms間隔でオートプレイ
// Navigation: メインビジュアルの中央下部のページ数表示 例: 2/5
// Thumbs: 画像ボタン生成用モジュール
const swiperModules = [Autoplay, Navigation, Thumbs];

// 取得した画像の配列
const images = reactive([
  {
    id: 1,
    imageUrl:
      "https://placehold.jp/a6deda/ffffff/520x322.png",
  },
  {
    id: 2,
    imageUrl:
      "https://placehold.jp/e5bdd4/ffffff/520x322.png",
  },
  {
    id: 3,
    imageUrl:
      "https://placehold.jp/e7f3c9/c4c4c4/520x322.png",
  },
  {
    id: 4,
    imageUrl:
      "https://placehold.jp/cbc9f3/ffffff/520x322.png",
  },
  {
    id: 5,
    imageUrl:
      "https://placehold.jp/f3d5c9/ffffff/520x322.png",
  },
]);
</script>
<style lang="scss">
.mySwiper {
  @apply relative h-[322px] w-[520px];
  &-thumb {
    padding: 16px !important;
    margin: 0 !important;
    width: 100%;
  }
}

// 前へ、次へボタン
.swiper-button-prev,
.swiper-button-next {
  color: white !important;
  background-color: rgba(46, 51, 49, 0.4);
  width: 32px !important;
  height: 32px !important;
  border-radius: 50%;
  top: 55% !important;
  &::after {
    font-size: 5px !important;
  }
}

// メインビジュアルの中央下部のページ数表示
.swiper-pagination {
  &-fraction {
    width: 40px !important;
    height: 20px;
    right: 0px !important;
    margin: 0 auto;
    color: white;
    background-color: rgba(46, 51, 49, 0.4);
    font-weight: 700;
    font-size: 12px;
    border-radius: 2px;
  }
  &-current,
  &-total {
    font-weight: 600;
    font-size: 12px;
    font-family: "Noto Sans JP", sans-serif;
  }
}

// 現在表示されている画像に対応する画像ボタン
.swiper-slide-thumb-active {
  img {
    outline: 3px solid #f06364;
    outline-offset: -3px;
  }
}
</style>
