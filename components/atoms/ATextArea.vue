<template>
  <div class="flex flex-col">
    <label :for="labelFor" class="myLabel">{{ labelText }}</label>

    <textarea
      :id="labelFor"
      :placeholder="placeholder"
      :class="`${validateBorder}`"
      :required="required"
      class="textAreaItem"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  labelFor: string
  labelText: string;
  placeholder: string;
  required?: boolean;
  isValid?: boolean;
}

const validateBorder = computed(() => {
  if (props.isValid) {
    return 'border-pink'
  } else {
    return 'border-gray-lighter'
  }
})
const props = defineProps<Props>()

</script>

<style scoped>
.myLabel {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}

.textAreaItem {
  @apply px-5 py-2.5 border-[1px] text-gray-dark rounded resize-none placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
