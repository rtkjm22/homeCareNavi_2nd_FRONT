<template>
  <div class="bg-[#F5F7F7]">
    <OHeader :role="1" />
    <slot class="main" />
    <OFooter />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.main {
  display: block;
  flex: 1 0 auto;
}
</style>
