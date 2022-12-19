<template>
  <div class="flex flex-col">
    <label :for="labelFor" class="myLabel">{{ labelText }}</label>

    <textarea
      :id="labelFor"
      ref="textarea"
      v-model="message"
      :placeholder="placeholder"
      :class="`${validateBorder}`"
      :style="{ height: textAreaH + 'px', minHeight: minCols * 24 + paddingY + 'px' }"
      :required="required"
      class="textAreaItem"
      @input="inputted"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  labelFor: string;
  labelText: string;
  placeholder: string;
  required?: boolean;
  isValid?: boolean;
  minCols?: number; // テキストエリアの最低行数
}

const props = withDefaults(defineProps<Props>(), {
  minCols: 2
})

// テキストエリアの上下パディング
const paddingY = 20

const message = ref() // メッセージの取得
const textarea = ref() // テキストエリアの要素取得
const textAreaH = ref() // テキストエリアの高さ

const validateBorder = computed(() => {
  if (props.isValid) {
    return 'border-pink'
  } else {
    return 'border-gray-lighter'
  }
})

// テキストエリアに入力がされたとき
const inputted = () => {
  textAreaH.value = textarea.value.scrollHeight
}
</script>

<style scoped>
.myLabel {
  @apply mb-2 text-[13px] font-bold text-gray-base;
}

.textAreaItem {
  @apply px-5 py-2.5 border-[1px] text-gray-dark rounded resize-none overflow-hidden placeholder-gray-lighter outline-none focus:border-pink;
}
</style>
