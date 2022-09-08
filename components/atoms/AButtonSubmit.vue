<template>
  <button type="submit" class="base" :class="[btnColor, btnSize]">
    {{ innerText }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  innerText: string;
  role?: 'client' | 'manager';
  size?: 'sm' | 'lg';
}

const props = defineProps<Props>()

// ボタン、フォント、ボーダーの色
const btnColor = computed(() => {
  switch (props.role) {
    case 'client':
      return ['bg-pink', 'text-white', 'border-transparent']
    case 'manager':
      return ['bg-orange', 'text-white', 'border-transparent']
    default:
      return ['bg-white', 'text-gray-base', 'border', 'border-gray-lighter']
  }
})

// サイズ
const btnSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return ['text-sm', 'py-[10px]']
    case 'lg':
      return ['text-base', 'w-full', 'sm:text-lg']
    default:
      return ['text-base', 'w-full', 'sm:text-lg']
  }
})
</script>

<style scoped lang="scss">
.base {
  @apply font-bold rounded duration-200 hover:opacity-70;
}
</style>
