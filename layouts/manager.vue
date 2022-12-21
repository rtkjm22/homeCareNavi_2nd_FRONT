<template>
  <div class="wrapper bg-[#F5F7F7]">
    <OHeader user-type="manager" />
    <AAlert />
    <slot />
    <OFooter class="footer" role="manager" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  width: 100vw;
  margin-top: auto;
}
</style>
