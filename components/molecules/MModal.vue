<template>
  <label
    for="my-modal"
    class="button w-full h-[48px] md:w-[520px] md:h-[60px] mb-2 text-base md:text-lg bg-pink border-pink text-white hover:bg-pink hover:border-pink"
  >退会する</label>

  <input id="my-modal" type="checkbox" class="modal-toggle" />

  <label for="my-modal" class="modal cursor-pointer">
    <label
      class="modal-box w-[295px] h-[148px] p-0 flex justify-center items-center bg-white rounded text-center"
      for=""
    >
      <div class="mx-auto">
        <p class="text-gray-dark block mb-8">本当に退会しますか？</p>
        <NuxtLink to="/client/auth/delete" />
        <label
          for="my-modal"
          class="button w-[100px] px-8 py-2 mr-2 border border-gray-lighter text-sm text-pink rounded cursor-pointer"
        >
          キャンセル
        </label>
        <NuxtLink to="/">
          <AButton class="w-[163px]" user-type="client" inner-text="退会する" />
        </NuxtLink>
      </div>
    </label>
  </label>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
.button {
    @apply box-border whitespace-nowrap font-bold inline-flex items-center justify-center border rounded transition hover:opacity-80;
}
</style>
