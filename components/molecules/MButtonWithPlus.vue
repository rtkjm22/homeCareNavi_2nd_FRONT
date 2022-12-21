<template>
  <button
    to="/"
    class="block text-center font-bold border rounded transition-opacity hover:opacity-80"
  >
    <APlus class="plus_wrap">
      <slot />
    </APlus>
  </button>
</template>
<style scoped lang="scss">
.plus_wrap {
  &:before {
    width: 2px;
    height: 16px;
    @apply -left-5 sm:-left-7;
  }
  &:after {
    width: 16px;
    height: 2px;
    @apply -left-5 sm:-left-7;
  }
}
</style>
