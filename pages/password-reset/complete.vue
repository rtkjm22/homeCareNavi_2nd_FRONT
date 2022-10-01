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
const completeTitle = 'パスワードのリセット完了'
const completeText = '入力いただいたメールアドレスに\n新しいパスワードを送付いたしました。'
const completeTextToPage = 'ホームケアナビトップに戻る'
const completeHrefToPage = '/'
</script>
