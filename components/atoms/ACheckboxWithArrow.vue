<template>
  <label class="checkbox">
    <input class="checkbox_input" type="checkbox" value="shibuya" checked>
    <span class="checkbox_dummy" />
    <span class="checkbox_text">渋谷区</span>
    <AArrow />
  </label>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.checkbox {
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

.checkbox_input:checked ~ .checkbox_text {
  @apply font-bold;
}

.checkbox_input:checked + .checkbox_dummy {
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
