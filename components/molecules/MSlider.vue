<template>
  <div class="bg-white select-none">
    <template v-if="images == null || images.length === 0">
      <img
        src="~/assets/img/noImage.jpg"
        alt="画像なし"
        class="mySwiper object-contain"
      />
    </template>

    <template v-else>
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
          <img class="h-full w-full object-contain" :src="image.image_url" alt="" />
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
            class="w-[92px] h-[69px] object-contain"
            :src="image.image_url"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperClass, { Autoplay, Navigation, Thumbs } from 'swiper'

// swiperモジュールのスタイルをインポート
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export type Props = {
  images: {
    id: number;
    image_url: string;
   }[]
}

defineProps<Props>()

// 画像ボタンの配列
const thumbsSwiper = ref<SwiperClass>()

// thumbsSwiperに画像を格納する関数
const setThumbsSwiper = (swiper: SwiperClass): void => {
  thumbsSwiper.value = swiper
}

// swiper標準のモジュールをインポート
// Autoplay: 4000ms間隔でオートプレイ
// Navigation: メインビジュアルの中央下部のページ数表示 例: 2/5
// Thumbs: 画像ボタン生成用モジュール
const swiperModules = [Autoplay, Navigation, Thumbs]
</script>

<style lang="scss">
.mySwiper {
  @apply relative lg:h-[322px] lg:w-[520px];
  &-thumb {
    @apply hidden sm:block;
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
