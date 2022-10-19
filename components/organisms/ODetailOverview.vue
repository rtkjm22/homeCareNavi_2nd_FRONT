<template>
  <div class="w-full p-4 bg-white">
    <h3 class="text-lg font-bold mb-4">施設概要</h3>

    <div>
      <table class="myTable">
        <!-- 住所 -->
        <tr>
          <td>住所</td>
          <td>〒157-0072<br />東京都世田谷区祖師谷4-3-15</td>
        </tr>
        <!-- 類型 -->
        <tr>
          <td>類型</td>
          <td>介護付きホーム（サービス付き高齢者向け住宅　特定施設）</td>
        </tr>
        <!-- 開設年月 -->
        <tr>
          <td>開設年月</td>
          <td>2011年3月1日</td>
        </tr>
        <!-- 居室数 -->
        <tr>
          <td>居室数</td>
          <td>30室</td>
        </tr>
        <!-- 入居時の要件 -->
        <tr>
          <td>入居時の要件</td>
          <td>満60歳以上の方、入居時自立・要支援・要介護</td>
        </tr>
        <!-- 共用設備 -->
        <tr>
          <td>共用設備</td>
          <td>
            エントランス、食堂兼機能訓練室、個浴、大浴場、特殊浴槽、和室、談話室、シアタールーム、屋上庭園
          </td>
        </tr>
        <!-- 経営・事業主体 -->
        <tr>
          <td>経営・<br />事業主体</td>
          <td>株式会社ユニマット　リタイアメント・コミュニティ</td>
        </tr>
        <!-- 公式サイト -->
        <tr>
          <td>公式サイト</td>
          <td><a class="text-pink hover:underline" href="#">https://www.unimat-rc.co.jp/shisetsu/sosigaya_871/index.html</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.myTable {
  @apply w-full;
  tr {
    @apply  border-t border-b border-gray-lighter;
    td:first-of-type {
      @apply px-2 py-3 w-24 text-xs font-bold text-gray-base;
    }
    td:nth-of-type(2) {
      @apply pl-0 pr-2 py-3 w-[392px] text-sm whitespace-normal break-all;
    }
  }
}
</style>
