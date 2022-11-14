<template>
  <select
    :id="selectFor"
    class="block p-2.5 w-full text-sm border rounded outline-none appearance-none focus:border-pink focus:absolute focus:top-0 focus:left-0"
    @focus="focused"
    @blur="unfocused"
    @change="unfocused"
  >
    <option v-for="(item, index) in selectItems" :key="index" :value="item.itemVal" :selected="index == selected">
      {{ item.itemKey }}{{ opsLabel }}
    </option>
  </select>
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
const props = defineProps<Props>()

/** フォーカス時、セレクトボックスの表示数を調整する */
const focused = (e: any) => {
  if (props.selectItems.length >= 10) {
    e.target.size = 10
  } else {
    e.target.size = props.selectItems.length
  }
}

/** フォーカスが外れたときに、セレクトボックスを初期化 */
const unfocused = (e: any) => {
  e.target.size = 0
}
</script>
<style scoped lang="scss">
.arrow {
  position: relative;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
  }
}
</style>
