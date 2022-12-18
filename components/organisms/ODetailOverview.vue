<template>
  <div class="w-full pt-4 px-4 pb-6 bg-white lg:p-4">
    <h3 class="mb-4 text-base font-bold lg:text-lg">
      施設概要
    </h3>

    <div>
      <table class="myTable">
        <!-- 住所 -->
        <tr>
          <td>住所</td>
          <td>〒{{ postal }}<br />{{ address }}</td>
        </tr>
        <!-- 類型 -->
        <tr>
          <td>類型</td>
          <td>{{ classify }}</td>
        </tr>
        <!-- 開設年月 -->
        <tr>
          <td>開設年月</td>
          <td>{{ opening_date }}</td>
        </tr>
        <!-- 居室数 -->
        <tr>
          <td>居室数</td>
          <td>{{ room_count }}室</td>
        </tr>
        <!-- 入居時の要件 -->
        <tr>
          <td>入居時の要件</td>
          <td>{{ requirements }}</td>
        </tr>
        <!-- 共用設備 -->
        <tr>
          <td>共用設備</td>
          <td>
            {{ shared_facilities }}
          </td>
        </tr>
        <!-- 経営・事業主体 -->
        <tr>
          <td>経営・<br />事業主体</td>
          <td>{{ business_entity }}</td>
        </tr>
        <!-- 公式サイト -->
        <tr>
          <td>公式サイト</td>
          <td><a class="text-pink break-words hover:underline" :href="official_site_url">{{ official_site_url }}</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OfficeOverview } from '@/api/@types'

export type Props = OfficeOverview & {
  postal: string;
  address: string;
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.myTable {
  @apply w-full;
  tr {
    @apply  border-t border-b border-gray-lighter;
    td:first-of-type {
      @apply pl-2 pr-4 py-3 w-24 text-xs font-bold text-gray-base whitespace-nowrap lg:px-2;
    }
    td:nth-of-type(2) {
      @apply pl-0 pr-2 py-3 w-[392px] text-sm whitespace-normal break-all;
    }
  }

}
</style>
