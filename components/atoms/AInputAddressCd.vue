<template>
  <div class="mb-2">
    <!-- 郵便番号入力欄 -->
    <span class="text-gray-base text-base mr-2">〒</span>
    <input
      v-model="value"
      type="text"
      class="addressCd"
      placeholder="0000000"
      pattern="\d{7}"
      maxlength="8"
      required
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const value = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})
</script>

<style scoped>
.addressCd {
  @apply px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark max-w-[120px] rounded placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
