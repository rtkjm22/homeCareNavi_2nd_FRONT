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
const completeTitle = 'Web予約完了'
const completeText = 'ご予約が完了しました。\n事業所からの連絡をお待ちください。'
const completeTextToPage = '事務所のページに戻る'
const completeHrefToPage = '/'
</script>
