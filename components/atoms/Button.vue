<template>
  <div>
    <a href="#" class="base" :class="[btnColor, btnSize]">
      {{ innerText }}
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  innerText: string;
  role?: "client" | "staff";
  size?: "lg" | "md" | "sm";
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
      return ["bg-white", "text-gray-base", "border-gray-lighter"];
      break;
  }
});

// パディング、テキストのサイズ
const btnSize = computed(() => {
  switch (props.size) {
    case "sm":
      return ["px-8", "py-2", "text-sm"];
      break;
    case "md":
      break;
    case "lg":
      return ["py-3", "w-full", "text-base", "sm:text-lg", "sm:py-4"];
      break;
    default:
      return ["px-8", "py-2", "text-sm"];
      break;
  }
});
</script>
<style scoped>
.base {
  @apply box-border whitespace-nowrap font-bold inline-flex items-center justify-center border rounded transition hover:opacity-80;
}
</style>
