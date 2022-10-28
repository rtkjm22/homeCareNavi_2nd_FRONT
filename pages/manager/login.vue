<template>
  <!-- ケアマネージャー用ログイン画面 -->
  <div>
    <OLogin user-type="manager" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth-not' })

const { alert } = useUI()
const route = useRoute()

if (route.query.account_confirmation_success) {
  alert.showAlert('ケアマネージャー登録が完了しました。ログインしてください。', 'success')
}
</script>
