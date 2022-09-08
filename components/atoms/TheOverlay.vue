<template>
  <div>
    <!-- オーバーレイ -->
    <transition name="overlay">
      <div
        v-if="isNavOpened"
        class="overlay"
      />
    </transition>
  </div>
</template>
<script setup lang="ts">
defineProps<{ isNavOpened:boolean }>()
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
