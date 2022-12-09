<template>
  <div class="p-3">
    <div class="w-full flex mb-3">
      <!-- スタッフイメージ画像（円形） -->
      <AImageRound
        src="https://placehold.jp/a6deda/ffffff/150x150.png"
        alt="スタッフイメージ画像"
        class="mr-3 w-20 h-20"
      />
      <div>
        <!-- 氏名 -->
        <h3 class="text-sm text-gray-dark font-bold">
          田中太郎
        </h3>
        <!-- ひらがな -->
        <p class="mb-2 text-[10px] text-gray-base">
          たなかたろう
        </p>
        <!-- スタッフ説明テキスト -->
        <p class="mb-2 text-xs text-gray-base">
          スタッフ説明テキストが入ります。スタッフ説明テキストが入ります。
        </p>
      </div>
    </div>
    <div class="flex justify-between gap-2">
      <!-- スタッフ削除ボタン -->
      <AButton
        inner-text="削除"
        class="text-orange hover:bg-white min-w-[115px]"
      />
      <!-- スタッフ情報編集ボタン -->
      <AButton inner-text="編集する" user-type="manager" class="w-full" />
    </div>
  </div>
</template>

