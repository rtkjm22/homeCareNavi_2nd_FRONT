<template>
  <div>
    <!-- オーバーレイ -->
    <transition name="overlay">
      <div
        class="overlay"
        v-if="navFlg"
        @click="toggleNavFlg"
      ></div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { emit } from 'process';

  interface Props {
    navFlg: boolean;
  }

  interface Emits {
    (e: "update:value"): void;
  }

  const props = defineProps<Props>();
  const emits = defineEmits<Emits>();

  const toggleNavFlg = () => {
    emits("update:value")
  }
</script>
<style scoped lang="scss">
.overlay {
  @apply fixed h-screen w-screen bg-gray-dark top-0 bottom-0 right-0 left-0 opacity-80 z-10;
}
.overlay {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
  &-enter-to, 
  &-leave-from {
    opacity: 0.8;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s;
  }
}
</style>