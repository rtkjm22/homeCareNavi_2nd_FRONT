<template>
  <p
    class="tag"
    :class="[tagTextColor, tagTextSize, tagBgColor]"
  >
    {{ innerText }}
  </p>
</template>
<script setup lang="ts">
interface Props {
  innerText: string; // タグ内の文字
  textColor?: string; // タグの文字色
  textSize?: number; // タグの文字サイズ
  bgColor?: string; // 背景色
}
const props = withDefaults(defineProps<Props>(), {
  textColor: 'pink',
  textSize: 11,
  bgColor: '[#F0636433]'
})

const tagTextColor = computed(() => {
  return `text-${props.textColor}`
})
const tagTextSize = computed(() => {
  return `text-[${props.textSize}px]`
})
const tagBgColor = computed(() => {
  return `bg-${props.bgColor}`
})
</script>
<style scoped lang="scss">
.tag {
  @apply inline-block px-[6px] rounded-sm leading-5 font-bold;
}
</style>
