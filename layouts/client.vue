<template>
  <div class="bg-[#F5F7F7]">
    <OHeader user-type="client" />
    <AAlert />
    <slot class="main" />
    <OFooter />
  </div>
</template>

<style scoped>
.main {
  display: block;
  flex: 1 0 auto;
}
</style>
