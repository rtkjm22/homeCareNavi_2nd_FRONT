<template>
  <div class="block mt-10 mx-auto mb-20 p-4 pb-8 w-full bg-white max-w-[750px]">
    <!-- タイトル -->
    <ATitle ttl-text="施設概要編集" class="mb-4" />

    <form>
      <!-- 事業所名 -->
      <AInput
        label-for="compNm"
        label-text="事業所名"
        input-type="text"
        placeholder="祖師谷ケアパークそよ風"
        :required="true"
        class="mb-6"
      />

      <!-- 〒 -->
      <!-- 住所 -->
      <!-- アクセス -->
      <!-- 電話番号 -->
      <!-- FAX -->
      <!-- 営業日 -->
      <!-- 営業日時についてのテキスト -->
      <!-- 類型 -->
      <!-- 開設年月 -->
      <!-- 居室数 -->


      <!-- 特徴タイトル -->
      <ATextArea
        label-for="featureTtl"
        label-text="特徴タイトル"
        placeholder="事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル"
        :required="true"
        class="mb-6"
      />

      <!-- 特徴詳細 -->
      <ATextArea
        label-for="featureDetail"
        label-text="特徴詳細"
        placeholder="ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。"
        :required="true"
        class="mb-6"
        :min-cols="10"
      />

      <!-- 特徴画像1 -->
      <div class="mb-6">
        <ALabel label-for="featureImg1" label-text="特徴画像1" class="mb-2"/>
        <MDragAndDrop label-target="featureImg1" class="mb-2"/>
        <div class="text-right">
          <label for="featureImg1" class="text-orange text-sm text-right cursor-pointer hover:opacity-80">画像をアップロードする</label>
        </div>
      </div>

      <!-- 特徴画像1の説明 -->
      <ATextArea
        label-for="featureImg1Exp"
        label-text="特徴画像1の説明"
        placeholder="画像の説明テキストが入ります画像の説明テキストが入ります"
        class="mb-6"
      />

      <!-- 特徴画像2 -->
      <div class="mb-6">
        <ALabel label-for="featureImg2" label-text="特徴画像2" class="mb-2"/>
        <MDragAndDrop label-target="featureImg2" class="mb-2"/>
        <div class="text-right">
          <label for="featureImg2" class="text-orange text-sm text-right cursor-pointer hover:opacity-80">画像をアップロードする</label>
        </div>
      </div>

      <!-- 特徴画像2の説明 -->
      <ATextArea
        label-for="featureImg2Exp"
        label-text="特徴画像2の説明"
        placeholder="画像の説明テキストが入ります画像の説明テキストが入ります"
        class="mb-8"
      />

      <AButtonSubmit inner-text="変更する" user-type="manager" class="py-3 sm:py-4" />
    </form>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
