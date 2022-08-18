<template>
  <div class="bg-[#F5F7F7]">
    <Headers />
    <slot class="main" />
    <Footers />
  </div>
</template>
<script setup lang="ts">
import Footers from "~~/components/organisms/Footers.vue";
import Headers from "../components/organisms/Headers.vue";
</script>
<style scoped>
.main {
  display: block;
  flex: 1 0 auto;
}
</style>
