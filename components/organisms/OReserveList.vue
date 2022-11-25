<template>
  <div class="">
    <ul class="grid gap-4 md:grid-cols-2">
      <li
        v-for="i in 6"
        :key="i"
        class="block m-auto w-full max-w-[400px] bg-white rounded shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]"
      >
        <OReserveCard />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>
