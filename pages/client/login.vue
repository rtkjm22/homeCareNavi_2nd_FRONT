<template>
  <!-- クライアント用ログイン画面 -->
  <div>
    <OLogin user-type="client" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth-not' })

const { showAlert } = useAlert()
const route = useRoute()

if (route.query.account_confirmation_success) {
  showAlert('ユーザー登録が完了しました。ログインしてください。', 'success')
}
</script>
