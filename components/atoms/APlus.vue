<template>
  <span class="plus">
    <slot />
  </span>
</template>
<style scoped lang="scss">
.plus {
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    transform: translate(-50%, -50%);
    @apply bg-orange;
  }
}
</style>
