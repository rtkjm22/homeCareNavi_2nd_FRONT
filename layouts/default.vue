<template>
  <div class="bg-[#F5F7F7]">
    <OrganismsTheHeader :role="1" />
    <slot class="main" />
    <OrganismsTheFooter />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.main {
  display: block;
  flex: 1 0 auto;
}
</style>
