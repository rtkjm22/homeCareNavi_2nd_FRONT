<template>
  <label class="myCheckbox">
    <input
      class="myCheckbox_Input"
      type="checkbox"
      :name="checkboxName"
      :value="val"
      @click="isChecked = !isChecked"
    />
    <span
      class="myCheckbox_DummyInput"
      :class="{
        '!bg-pink !border-pink': isChecked && userType === 'client',
        '!bg-orange !border-orange': isChecked && userType === 'manager'
      }"
    />
    <span class="myCheckbox_LabelText">{{ labelText }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  checkboxName: string
  labelText: string
  val: string | number
  userType: 'client' | 'manager'
}

withDefaults(defineProps<Props>(), {
  userType: 'client'
})

const isChecked = ref<boolean>(false)

</script>

<style scoped lang="scss">
.myCheckbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  &_Input {
    margin: 0;
    width: 0;
    opacity: 0;
  }
  &_DummyInput {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    border: solid 1px #d9dede;
    background: #fff;
    border-radius: 3px;
  }
  &_LabelText {
    @apply block ml-3 text-gray-base;
  }
}
.myCheckbox_Input:checked + .myCheckbox_DummyInput {
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 25%;
    left: 60%;
    width: 34%;
    height: 1px;
    border-radius: 2px;
    transform: translate(-6px, 5px) rotateZ(-135deg);
    transform-origin: 2px 2px;
    background: #ffffff;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 35%;
    left: 73%;
    width: 60%;
    height: 1px;
    border-radius: 2px;
    transform: translate(-6px, 5px) rotateZ(-45deg);
    transform-origin: 2px 2px;
    background: #ffffff;
  }
}
</style>
