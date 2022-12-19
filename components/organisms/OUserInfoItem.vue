<template>
  <div class="p-3">
    <div class="w-full flex mb-4">
      <!-- 利用者イメージ画像（円形） -->
      <AImageRound
        src="https://placehold.jp/a6deda/ffffff/150x150.png"
        alt="利用者イメージ画像"
        class="mr-3 w-20 h-20"
      />
      <div>
        <!-- 氏名 -->
        <h3 class="text-sm text-gray-dark font-bold">
          利用者太郎（80）
        </h3>
        <!-- ひらがな -->
        <p class="mb-2 text-[10px] text-gray-base">
          たなかたろう
        </p>
        <!-- 住所 -->
        <p class="mb-2 text-xs text-gray-base">
          〒157-0072<br />東京都世田谷区祖師谷4-3-15
        </p>
        <!-- 家族情報 -->
        <p class="text-xs text-gray-base">
          家族情報：娘
        </p>
      </div>
    </div>
    <!-- 担当スタッフ情報 -->
    <p class="mb-4 text-[13px] font-bold text-gray-base">
      担当スタッフ：山田一郎
    </p>
    <div class="flex justify-between gap-2">
      <!-- 利用者削除ボタン -->
      <AButton
        inner-text="削除"
        class="text-orange hover:bg-white min-w-[115px]"
      />
      <!-- 利用者情報編集ボタン -->
      <AButton inner-text="編集する" user-type="manager" class="w-full" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss"></style>
