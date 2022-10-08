<template>
  <div class="flex flex-col">
    <label :for="labelFor" class="label">{{ labelText }}</label>

    <AInputAddressCd v-if="labelText === '住所'" />

    <input
      :id="labelFor"
      v-model="computedModelValue"
      :type="inputType"
      class="inputItem"
      :class="`${ validateBorder }`"
      :placeholder="placeholder"
      :pattern="pattern"
      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"
    >
    <div v-show="isValid">
      <p class="text-sm text-pink">
        パスワードが違います
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  labelFor: string;
  labelText: string;
  inputType: 'text' | 'email' | 'password' | 'tel';
  placeholder: string;
  pattern?: string;
  minlength?: string;
  maxlength?: string;
  required?: boolean;
  isValid?: boolean;
  modelValue?: string
}

const validateBorder = computed(() => {
  if (props.isValid) {
    return 'border-pink'
  } else {
    return 'border-gray-lighter'
  }
})

const props = defineProps<Props>()
const emits = defineEmits<{(e: 'update:modelValue', value?: string): void}>()

const computedModelValue = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})

</script>

<style scoped>
.label {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}

.inputItem {
  @apply px-5 py-2.5 border-[1px] text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
