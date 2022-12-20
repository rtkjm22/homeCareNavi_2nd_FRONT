<template>
  <label
    for="my-modal"
    class="cursor-pointer inline-block w-full h-[48px] md:w-[520px] md:h-[60px] mb-2"
  >
    <AButton
      size="lg"
      user-type="client"
      :inner-text="buttonText"
      class="pointer-events-none"
    />
  </label>
  <input id="my-modal" type="checkbox" class="modal-toggle" />

  <label for="my-modal" class="modal cursor-pointer">
    <label
      class="modal-box flex justify-center items-center bg-white rounded text-center w-auto"
      for=""
    >
      <slot />
    </label>
  </label>
</template>
<script setup lang="ts">
defineProps<{
  buttonText: string;
}>()

const buttonText = '退会する'
</script>

<style scoped lang="scss">

</style>
