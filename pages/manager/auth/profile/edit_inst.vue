<template>
  <div class="block mt-10 mx-auto mb-20 p-4 pb-8 w-full bg-white max-w-[750px]">
    <!-- タイトル -->
    <ATitle ttl-text="施設概要編集" class="mb-4" />

    <form>
      <!-- 類型 -->
      <AInput
        label-for="classify"
        label-text="類型"
        input-type="text"
        placeholder="介護付きホーム（サービス付き高齢者向け住宅 特定施設）"
        :required="true"
        class="mb-6"
      />

      <!-- 開設年月 -->
      <div class="w-40 mb-6">
        <ALabel
          label-for="dp-input-opening_date"
          label-text="開設年月"
          class="mb-2 !inline-block"
        />
        <Datepicker
          v-model="reserveDate"
          locale="jp"
          :format="formatDay"
          input-class-name="myDatepicker"
          auto-apply
          :enable-time-picker="false"
          hide-input-icon
          uid="opening_date"
          :min-date="new Date()"
        />
      </div>

      <!-- 居室数 -->
      <AInput
        label-for="room_count"
        label-text="居室数"
        input-type="number"
        placeholder="30"
        :required="true"
        :min="0"
        class="mb-6"
      />

      <!-- 入居時の要件 -->
      <ATextArea
        label-for="requirements"
        label-text="入居時の要件"
        placeholder="満60歳以上の方、入居時自立・要支援・要介護"
        :required="true"
        class="mb-6"
        :min-cols="3"
      />

      <!-- 共用設備 -->
      <ATextArea
        label-for="shared_facilities"
        label-text="共用設備"
        placeholder="エントランス、食堂兼機能訓練室、個浴、大浴場、特殊浴槽、和室、談話室、シアタールーム、屋上庭園"
        :required="true"
        class="mb-6"
        :min-cols="3"
      />

      <!-- 経営・事業主体 -->
      <ATextArea
        label-for="business_entity"
        label-text="経営・事業主体"
        placeholder="株式会社ユニマット リタイアメント・コミュニティ"
        :required="true"
        class="mb-6"
        :min-cols="3"
      />

      <!-- 公式サイト -->
      <AInput
        label-for="official_site_url"
        label-text="公式サイト"
        input-type="text"
        placeholder="https://www.unimat-rc.co.jp/shisetsu/sosigaya_871/index.html"
        :required="true"
        class="mb-6"
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
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

/** 選択された開設年月 */
const reserveDate = ref()

/** フォーマットされた日付（選択後の画面表示） */
const formatDay = (reserveDate: any) => {
  const year = reserveDate.getFullYear()
  const month = reserveDate.getMonth() + 1
  const date = reserveDate.getDate()
  return `${year}年${month}月${date}日`
}
</script>
<style lang="scss">
.myDatepicker {
  @apply hover:border-gray-lighter focus:border-orange active:border-orange;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
