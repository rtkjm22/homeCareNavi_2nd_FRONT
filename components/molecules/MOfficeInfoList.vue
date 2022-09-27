<template>
  <ul class="twoCol">
    <AOfficeInfo v-for="n in 4" :key="n" class="twoCol_item" 
      :compInfo="compInfo"
      thanksMsg="ここにお礼テキストが入ります。ここにお礼テキストが入ります。ここにお礼テキストが入ります最大50文字"
      :workDay="['mon', 'wed', 'thu', 'fri']"
      :isBookmarked="true"
    />
    <AOfficeInfo v-for="n in 4" :key="n" class="twoCol_item" 
      :compInfo="compInfo2"
      thanksMsg="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICIN"
      :workDay="['sun', 'mon', 'wed', 'thu', 'sat']"
      :isBookmarked="false"
    />
  </ul>
</template>
<script setup lang="ts">
// サンプルデータ
const compInfo = {
  canBookOnline: true,
  name: "祖師谷ケアパークそよ風祖師谷ケアパークそよ風祖師最大30文字",
  img: "https://placehold.jp/595fd4/9cbfff/120x90.png",
  access: "祖師ヶ谷大蔵駅徒歩5分",
  staffs: 5,
  phone: "00-0000-0000",
  message:
    "ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります最大100文字",
};
const compInfo2 = {
  canBookOnline: false,
  name: "LOREM IPSUM DOLOR SIT AMET, CO",
  img: "https://placehold.jp/96ff94/ffffff/120x90.png",
  access: "高田馬場駅徒歩5分",
  staffs: 8,
  phone: "00-1234-5678",
  message:
    "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE",
};
</script>
<style scoped lang="scss">
.twoCol {
  @apply gap-x-3 md:grid md:grid-cols-2;
  &_item {
    @apply m-auto mb-6;
  }
}
</style>
