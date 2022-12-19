<template>
  <div class="flex flex-col">
    <label :for="labelFor" class="myLabel">{{ labelText }}</label>

    <slot name="top" />

    <input
      :id="labelFor"
      v-model="computedModelValue"
      :type="inputType"
      class="inputItem"
      :placeholder="placeholder"
      :pattern="pattern"
      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"
      :min="min"
    />

    <slot name="bottom" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  labelFor: string;
  labelText: string;
  inputType: 'text' | 'email' | 'password' | 'tel' | 'number';
  placeholder: string;
  pattern?: string;
  minlength?: string;
  maxlength?: string;
  required?: boolean;
  modelValue?: string;
  min?: number;
}

const props = defineProps<Props>()
const emits = defineEmits<{(e: 'update:modelValue', value?: string): void}>()

const computedModelValue = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})

</script>

<style scoped>
.myLabel {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}

.inputItem {
  @apply px-5 py-2.5 border-[1px] text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
