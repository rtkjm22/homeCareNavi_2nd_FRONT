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

      <!-- 住所 -->
      <AInput
        label-for="inputPost"
        label-text="住所"
        input-type="text"
        placeholder="東京都世田谷区祖師谷4-3-15"
        :required="true"
        class="mb-8"
      >
        <template #top>
          <AInputAddressCd model-value="" />
        </template>
      </AInput>

      <!-- アクセス -->
      <AInput
        label-for="access"
        label-text="アクセス"
        input-type="text"
        placeholder="祖師谷大蔵駅5分"
        :required="true"
        class="mb-6"
      />

      <!-- 電話番号 -->
      <AInput
        label-for="inputTel"
        label-text="電話番号"
        input-type="tel"
        placeholder="000-0000-0000"
        minlength="12"
        :required="true"
        class="mb-6"
        pattern="\A(((0(\d{1}[-(]?\d{4}|\d{2}[-(]?\d{3}|\d{3}[-(]?\d{2}|\d{4}[-(]?\d{1}|[5789]0[-(]?\d{4})[-)]?)|\d{1,4}\-?)\d{4}|0120[-(]?\d{3}[-)]?\d{3})\z"
      />

      <!-- FAX -->
      <AInput
        label-for="fax"
        label-text="FAX"
        input-type="text"
        placeholder="000-0000-0000"
        minlength="5"
        :required="true"
        pattern="\A0[0-9-]+[0-9]\z"
        class="mb-6"
      />

      <!-- 営業日 -->
      <div class="mb-6">
        <ALabel
          label-for="workDay"
          label-text="営業日（営業日のみチェックしてください）"
          class="mb-2"
        />
        <div class="flex">
          <MCheckbox
            v-for="(week, index) in weeks"
            :key="index"
            checkbox-name="weekDay"
            :label-text="week.labelText"
            :val="week.weekVal"
            class="px-2"
          />
        </div>
      </div>

      <!-- 営業日時についてのテキスト -->
      <ATextArea
        label-for="workDayDetail"
        label-text="営業日時について"
        placeholder="営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。"
        :required="true"
        class="mb-6"
        :min-cols="3"
      />

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
        <ALabel label-for="featureImg1" label-text="特徴画像1" class="mb-2" />
        <MDragAndDrop label-target="featureImg1" class="mb-2" />
        <div class="text-right">
          <label
            for="featureImg1"
            class="text-orange text-sm text-right cursor-pointer hover:opacity-80"
            >画像をアップロードする</label
          >
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
        <ALabel label-for="featureImg2" label-text="特徴画像2" class="mb-2" />
        <MDragAndDrop label-target="featureImg2" class="mb-2" />
        <div class="text-right">
          <label
            for="featureImg2"
            class="text-orange text-sm text-right cursor-pointer hover:opacity-80"
          >
            画像をアップロードする
          </label>
        </div>
      </div>

      <!-- 特徴画像2の説明 -->
      <ATextArea
        label-for="featureImg2Exp"
        label-text="特徴画像2の説明"
        placeholder="画像の説明テキストが入ります画像の説明テキストが入ります"
        class="mb-8"
      />

      <!-- 送信ボタン -->
      <AButtonSubmit
        inner-text="変更する"
        user-type="manager"
        class="py-3 sm:py-4"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
const weeks = [
  {
    labelText: '日',
    weekVal: 'sun'
  },
  {
    labelText: '月',
    weekVal: 'mon'
  },
  {
    labelText: '火',
    weekVal: 'tue'
  },
  {
    labelText: '水',
    weekVal: 'wed'
  },
  {
    labelText: '木',
    weekVal: 'thu'
  },
  {
    labelText: '金',
    weekVal: 'fry'
  },
  {
    labelText: '土',
    weekVal: 'sat'
  }
]
</script>

<style scoped lang="scss"></style>
