<template>
  <a href="#" class="base" :class="[btnColor, btnSize]">
    {{ innerText }}
  </a>
</template>

<script setup lang="ts">
interface Props {
  innerText: string;
  userType?: 'client' | 'manager';
  size?: 'lg' | 'md' | 'sm';
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
      return ['bg-white', 'text-gray-base', 'border-gray-lighter']
  }
})

// パディング、テキストのサイズ
const btnSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return ['px-8', 'py-2', 'text-sm']
    case 'md':
      return
    case 'lg':
      return ['py-3', 'w-full', 'text-base', 'sm:text-lg', 'sm:py-4']
    default:
      return ['px-8', 'py-2', 'text-sm']
  }
})
</script>

<style scoped>
.base {
  @apply box-border whitespace-nowrap font-bold inline-flex items-center justify-center border rounded transition hover:opacity-80;
}
</style>
