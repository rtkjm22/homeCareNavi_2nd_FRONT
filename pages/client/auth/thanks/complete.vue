<template>
  <div>
    <OComplete
      :complete-title="completeTitle"
      :complete-text="completeText"
      :complete-text-to-page="completeTextToPage"
      :complete-href-to-page="completeHrefToPage"
    />
  </div>
</template>
<script lang="ts" setup>
const completeTitle = 'お礼の投稿完了'
const completeText = 'お礼の投稿が完了しました。\n投稿いただきありがとうございました。'
const completeTextToPage = '事業所のページに戻る'
const completeHrefToPage = '/'
</script>
