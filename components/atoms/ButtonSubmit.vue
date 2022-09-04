<template>
  <button type="submit" class="base" :class="[btnColor, btnSize]">
    {{ innerText }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  innerText: string;
  role?: "client" | "staff";
  size?: "sm" | "lg";
}

const props = defineProps<Props>();

// ボタン、フォント、ボーダーの色
const btnColor = computed(() => {
  switch (props.role) {
    case "client":
      return ["bg-pink", "text-white", "border-transparent"];
      break;
    case "staff":
      return ["bg-orange", "text-white", "border-transparent"];
      break;
    default:
      return ["bg-white", "text-gray-base", "border", "border-gray-lighter"];
      break;
  }
});

// サイズ
const btnSize = computed(() => {
  switch (props.size) {
    case "sm":
      return ["text-sm", "py-[10px]"];
      break;
    case "lg":
      return ["text-base", "w-full", "sm:text-lg"];
      break;
    default:
      return ["text-base", "w-full", "sm:text-lg"];
      break;
  }
});
</script>
<style scoped lang="scss">
.base {
  @apply font-bold rounded duration-200 hover:opacity-70;
}
</style>
