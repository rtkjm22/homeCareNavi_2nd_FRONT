<template>
  <div class="w-full p-4 bg-white">
    <div class="flex justify-between">
      <h3 class="text-lg font-bold mb-4">スタッフ紹介</h3>
      <a href="#" class="text-sm text-pink">お礼を投稿する</a>
    </div>

    <ul class="staff">
      <li class="flex gap-5" v-for="(user, index) in users" :key="index">
        <!-- スタッフ画像（円形） -->
        <img
          :src="user.imgSrc"
          alt="スタッフの画像"
          class="w-20 h-20 rounded-full object-cover"
        />
        <!-- スタッフ紹介フィールド -->
        <div class="w-full">
          <div class="flex justify-between">
            <!-- 名前フィールド -->
            <div class="mb-4">
              <!-- 名前 -->
              <p class="text-base font-bold">{{ user.name }}</p>
              <!-- ひらがな -->
              <p class="text-xs text-gray-base">{{ user.hiragana }}</p>
            </div>
            <!-- スタッフ説明文 -->
            <p class="text-xs text-gray-base w-[260px]">
              {{ user.description }}
            </p>
          </div>
          <!-- お礼コメントフィールド -->
          <div class="p-2.5 flex gap-2 items-start bg-lightGreen">
            <img src="@/assets/img/user.svg" width="16" height="16" alt="" />
            <div>
              <p class="mb-[2px] text-[10px] leading-[10px] font-bold">
                ユーザーからのお礼コメント
              </p>
              <!-- お礼コメント -->
              <p class="text-xs min-h-8">{{ user.thanksMsg }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface User {
  imgSrc: string;
  name: string;
  hiragana: string;
  description: string;
  thanksMsg: string;
}

const users: User[] = [
  {
    imgSrc: "https://placehold.jp/595fd4/9cbfff/150x150.png",
    name: "田中 太郎",
    hiragana: "たなかたろう",
    description: "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
    thanksMsg:
      "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
  },
  {
    imgSrc: "https://placehold.jp/595fd4/9cbfff/150x150.png",
    name: "田中 次郎",
    hiragana: "たなかじろう",
    description: "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
    thanksMsg:
      "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
  },
  {
    imgSrc: "https://placehold.jp/595fd4/9cbfff/150x150.png",
    name: "田中 三郎",
    hiragana: "たなかさぶろう",
    description: "スタッフ説明テキスト",
    thanksMsg:
      "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
  },
  {
    imgSrc: "https://placehold.jp/595fd4/9cbfff/150x150.png",
    name: "田中 四郎",
    hiragana: "たなかしろう",
    description: "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
    thanksMsg: "リハビリのノウハウがあり、",
  },
];
</script>
<style scoped lang="scss">
.staff {
  li:not(:last-of-type) {
    @apply mb-6;
  }
}
</style>
