<template>
  <div class="relative min-h-[42px]">
    <ASelectBox class="mySelect" :select-items="selectItems" :select-for="selectFor" :selected="selected" :ops-label="opsLabel" />
    <div class="myArrow" />
  </div>
</template>
<script setup lang="ts">
interface Item {
  itemKey: number | string // 選択肢のキー（画面上に表示）
  itemVal: number | string // 選択肢の値
}
interface Props {
  selectItems: Item[] // 選択肢の配列
  selectFor: string // セレクトボックスのID
  selected?: number // 初期で選択されている項目のインデックス
  opsLabel?: string | number // 選択肢の値の後ろにつける文字列または数字
}
defineProps<Props>()
</script>
<style scoped lang="scss">
.myArrow {
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 2px;
    width: 8px;
    @apply bg-gray-light;
  }
  &:before {
    right: 13px;
    transform: rotate(-45deg);
  }
  &:after {
    right: 17px;
    transform: rotate(45deg);
  }
}

.mySelect:focus + .myArrow {
  &:before,
  &:after {
    opacity: 0;
  }
}
</style>
