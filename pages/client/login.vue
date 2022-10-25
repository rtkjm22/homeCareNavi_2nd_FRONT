<template>
  <!-- クライアント用ログイン画面 -->
  <div>
    <OLogin user-type="client" />
  </div>
</template>

<script setup lang="ts">
const { alert } = useUI()
const route = useRoute()

if (route.query.account_confirmation_success) {
  alert.showAlert('ユーザー登録が完了しました。ログインしてください。', 'success')
}
</script>
