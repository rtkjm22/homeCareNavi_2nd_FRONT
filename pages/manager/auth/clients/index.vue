<template>
  <div>
    <OUserInfo class="wrapper" />
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'manager' })
</script>
<style scoped lang="scss">
.wrapper {
  @apply block pt-4 px-2.5 mb-[52px] w-full max-w-[722px] sm:pt-10 sm:mb-20 md:mx-auto;
}
</style>
