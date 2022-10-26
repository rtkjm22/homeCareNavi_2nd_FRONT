<template>
  <div>
    <li
      v-for="prefecture in prefectures"
      :key="prefecture.name"
      class="
        md:w-[220px]
        w-[331px]
        h-[40px]
        flex
        items-center
        space-x-3
        border-b border-gray-lighter
        last:border-b-transparent
        md:last:border-b-gray-lighter
        m-auto
        justify-between
        text-sm
        py-[11px]
      "
    >
      {{ prefecture.name }}
      <ARightArrow class="text-gray-light" />
    </li>
  </div>
</template>

<script setup lang="ts">
const prefectures = [
  { name: '東京都' },
  { name: '神奈川県' },
  { name: '埼玉県' },
  { name: '千葉県' },
  { name: '茨城県' },
  { name: '栃木県' },
  { name: '群馬県' }
]
</script>

<style scoped lang="scss">

</style>
