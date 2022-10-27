<template>
  <div class="w-full p-4 bg-white">
    <div class="flex justify-between">
      <h3 class="mb-4 text-base font-bold sm:mb-3 sm:text-lg">
        スタッフ紹介
      </h3>
      <a href="#" class="text-sm leading-[22px] text-pink">お礼を投稿する</a>
    </div>

    <ul class="staff">
      <li v-for="(user, index) in users" :key="index" class="flex gap-5">
        <!-- スタッフ画像（円形,PC） -->
        <img
          :src="user.imgSrc"
          alt="スタッフの画像 - PC"
          class="hidden w-20 h-20 rounded-full object-cover sm:block"
        />
        <!-- スタッフ紹介フィールド -->
        <div class="w-full">
          <div class="mb-3 flex gap-5 items-center sm:block">
            <!-- スタッフ画像（円形,SP） -->
            <img
              :src="user.imgSrc"
              alt="スタッフの画像 - SP"
              class="w-20 h-20 rounded-full object-cover sm:hidden"
            />
            <div class="sm:flex sm:justify-between">
              <!-- 名前フィールド -->
              <div class="mb-2 sm:mb-4">
                <!-- 名前 -->
                <p class="text-sm leading-4 font-bold sm:text-base">
                  {{ user.name }}
                </p>
                <!-- ひらがな -->
                <p class="text-[10px] text-gray-base sm:text-xs">
                  {{ user.hiragana }}
                </p>
              </div>
              <!-- スタッフ説明文 -->
              <p class="text-xs leading-[18px] text-gray-base sm:leading-4 sm:w-[260px]">
                {{ user.description }}
              </p>
            </div>
          </div>

          <!-- お礼コメントフィールド -->
          <div class="p-2.5 flex gap-2 items-start bg-lightGreen">
            <img src="@/assets/img/user.svg" width="16" height="16" alt="" />
            <div>
              <p class="mb-[2px] text-[10px] leading-[10px] font-bold">
                ユーザーからのお礼コメント
              </p>
              <!-- お礼コメント -->
              <p class="text-[11px] min-h-8 sm:text-xs">
                {{ user.thanksMsg }}
              </p>
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
    imgSrc: 'https://placehold.jp/a6deda/ffffff/150x150.png',
    name: '田中 太郎',
    hiragana: 'たなかたろう',
    description: 'スタッフ説明テキストが入りますスタッフ説明テキストが入ります',
    thanksMsg:
      'リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。'
  },
  {
    imgSrc: 'https://placehold.jp/cbc9f3/ffffff/150x150.png',
    name: '田中 次郎',
    hiragana: 'たなかじろう',
    description: 'スタッフ説明テキストが入りますスタッフ説明テキストが入ります',
    thanksMsg:
      'リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。'
  },
  {
    imgSrc: 'https://placehold.jp/e5bdd4/ffffff/150x150.png',
    name: '田中 三郎',
    hiragana: 'たなかさぶろう',
    description: 'スタッフ説明テキスト',
    thanksMsg:
      'リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。'
  },
  {
    imgSrc: 'https://placehold.jp/e7f3c9/c4c4c4/150x150.png',
    name: '田中 四郎',
    hiragana: 'たなかしろう',
    description: 'スタッフ説明テキストが入りますスタッフ説明テキストが入ります',
    thanksMsg: 'リハビリのノウハウがあり、'
  }
]
</script>
<style scoped lang="scss">
.staff {
  li:not(:last-of-type) {
    @apply mb-6;
  }
}
</style>
