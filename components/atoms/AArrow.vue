<template>
  <div>
    <!-- 矢印の上 -->
    <div
      class="arrow"
      :class="[
        ArrowLength,
        ArrowWeight,
        ArrowPosition,
        ArrowDirection.up,
        ArrowColor,
        ArrowUpTranslateY,
      ]"
    />
    <!-- 矢印の下 -->
    <div
      class="arrow"
      :class="[
        ArrowLength,
        ArrowWeight,
        ArrowPosition,
        ArrowDirection.down,
        ArrowColor,
        ArrowDownTranslateY,
      ]"
    />
  </div>
</template>
<script setup lang="ts">
interface Props {
  lineLength?: number;
  lineWeight?: number;
  lineSide?: 'right' | 'left';
  lineDirection?: 'right' | 'left';
  linePosition?: number;
  lineColor?: string;
  upTranslateY?: number;
  downTranslateY?: number;
}

const props = withDefaults(defineProps<Props>(), {
  lineLength: 8, // 長さ
  lineWeight: 2, // 太さ
  lineSide: 'right', // ポジション（左右のみ）
  lineDirection: 'right', // アローの方向
  linePosition: 8, // 右左から〇〇px
  lineColor: 'pink', // アローの色
  upTranslateY: 2, // 上部アローのYポジション
  downTranslateY: 2 // 下部アローのYポジション
})

const ArrowLength = computed(() => {
  return `w-[${props.lineLength}px]`
})
const ArrowWeight = computed(() => {
  return `h-[${props.lineWeight}px]`
})
const ArrowPosition = computed(() => {
  return `${props.lineSide}-[${props.linePosition}px]`
})
const ArrowDirection = computed(() => {
  if (props.lineDirection === 'left') {
    return {
      up: '-rotate-45',
      down: 'rotate-45'
    }
  } else {
    return {
      up: 'rotate-45',
      down: '-rotate-45'
    }
  }
})
const ArrowColor = computed(() => {
  return `bg-${props.lineColor}`
})
const ArrowUpTranslateY = computed(() => {
  return `-translate-y-[${props.upTranslateY}px]`
})
const ArrowDownTranslateY = computed(() => {
  return `translate-y-[${props.downTranslateY}px]`
})
</script>
<style scoped lang="scss">
.arrow {
  @apply block absolute rounded transform;
}
</style>
