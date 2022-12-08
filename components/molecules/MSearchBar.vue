<template>
  <label class="relative container mx-auto flex justify-center items-center">
    <button class="absolute inset-y-0 right-0 flex items-center pr-8" @click="$emit('searchSubmit')">
      <svg class="w-5 h-5 text-gray-base" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <input
      v-model="vModel"
      class="
        placeholder:text-bulegray
        block
        bg-white
        w-full
        md:w-[720px] md:h-[48px]
        border
        rounded-full
        py-2
        pl-9
        pr-3
        focus:outline-none focus:ring-0
      "
      type="text"
      name="search"
      :placeholder="placeholder"
      @keydown.enter="$emit('searchSubmit')"
    />
  </label>
</template>

<script setup lang="ts">
type Props = {
  modelValue: string;
  placeholder?: string;
}

const props = defineProps<Props>()
const emits = defineEmits<{(e: 'searchSubmit'): void, (e: 'update:modelValue', value: string): void }>()

const vModel = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})
</script>
