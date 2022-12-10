<template>
  <label class="myCheckbox">
    <!-- チェックボックス部 -->
    <input
      v-model="vModel"
      class="myCheckbox_input"
      type="checkbox"
      :value="textLabel"
    />
    <span class="myCheckbox_dummy" />
    <!-- ラベル部 -->
    <span class="myCheckbox_text">{{ textLabel }}</span>
    <!-- 矢印（>） -->
    <AArrow class="absolute right-3" line-color="gray-base" />
  </label>
</template>

<script setup lang="ts">
type Props = {
  modelValue: string[];
  textLabel: string
}

const props = defineProps<Props>()
const emits = defineEmits<{(e: 'update:modelValue', value: string[]): void}>()

const vModel = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})
</script>

<style scoped lang="scss">
.myCheckbox {
  display: block;
  position: relative;
  padding: 10px 8px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &_input {
    margin: 0;
    width: 0;
    opacity: 0;
  }
  &_dummy {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 4px;
    transition: all 0.15s linear;
    @apply border border-gray-lighter;
  }
  &_text {
    padding-left: 8px;
    @apply text-gray-dark;
  }
}

.myCheckbox_input:checked ~ .myCheckbox_text {
  @apply font-bold;
}

.myCheckbox_input:checked + .myCheckbox_dummy {
  @apply bg-pink border-transparent;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    border-radius: 2px;
    transform-origin: 2px 2px;
    background: #ffffff;
  }
  &:before {
    width: 35%;
    transform: translate(-4px, 1px) rotateZ(-135deg);
  }
  &:after {
    width: 70%;
    transform: translate(-2px, 2px) rotateZ(-45deg);
  }
}
</style>
