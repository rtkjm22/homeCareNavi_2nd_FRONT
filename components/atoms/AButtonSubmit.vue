<template>
  <button type="submit" class="base" :class="[btnColor, btnSize]">
    <slot name="prepend-icon" />

    {{ innerText }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  innerText: string;
  userType?: 'client' | 'manager';
  size?: 'sm' | 'md' | 'lg';
}

const props = defineProps<Props>()

// ボタン、フォント、ボーダーの色
const btnColor = computed(() => {
  switch (props.userType) {
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
    case 'md':
      return
    case 'lg':
      return ['text-base', 'w-full', 'sm:text-lg']
    default:
      return ['text-base', 'w-full', 'sm:text-lg']
  }
})
</script>

<style scoped lang="scss">
.base {
  @apply font-bold rounded duration-200 hover:opacity-70 disabled:opacity-70;
}
</style>
