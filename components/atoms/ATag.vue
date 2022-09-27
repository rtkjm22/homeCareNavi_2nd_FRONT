<template>
  <p
    class="tag"
    :class="[tagTextColor, tagTextSize, tagBgColor]"
  >
    web予約可
  </p>
</template>
<script setup lang="ts">
interface Props {
  textColor: string;
  textSize: number;
  bgColor: string;
}
const props = withDefaults(defineProps<Props>(), {
  textColor: "pink",
  textSize: 11,
  bgColor: "#F0636433",
});

const tagTextColor = computed(() => {
  return `text-${props.textColor}`;
});
const tagTextSize = computed(() => {
  return `text-[${props.textSize}px]`;
});
const tagBgColor = computed(() => {
  return `bg-[${props.bgColor}]`;
});
</script>
<style scoped lang="scss">
.tag {
  @apply inline-block px-[6px] rounded-sm leading-5 font-bold;
}
</style>
