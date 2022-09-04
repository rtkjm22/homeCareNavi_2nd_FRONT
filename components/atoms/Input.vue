<template>
  <div class="flex flex-col">
    <label :for="labelFor" class="label">{{ labelText }}</label>

    <AtomsInputAddressCd v-if="labelText === '住所'" />

    <input
      :id="labelFor"
      :type="inputType"
      class="inputItem"
      :placeholder="placeholder"
      :pattern="pattern"
      :minlength="minL"
      :maxlength="maxL"
      :required="required"
    />
  </div>
</template>
<script setup lang="ts">
interface Props {
  labelFor: string;
  labelText: string;
  inputType: "text" | "email" | "password" | "tel";
  placeholder: string;
  pattern?: string;
  minL?: string;
  maxL?: string;
  required?: boolean;
}

const props = defineProps<Props>();
</script>
<style scoped>
.label {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}

.inputItem {
  @apply px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
