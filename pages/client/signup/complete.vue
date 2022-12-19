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
definePageMeta({ middleware: 'auth-not' })

const completeTitle = '仮登録完了'
const completeText = '入力いただいたメールアドレスに\n確認メールを送付いたしました。'
const completeTextToPage = 'ホームケアナビトップに戻る'
const completeHrefToPage = '/'
</script>
