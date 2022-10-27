<template>
  <div
    class="mb-[50px] mt-2 sm:mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <div class="w-full px-4">
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle ttl-text="パスワードリセット" />
      </div>

      <form class="mx-auto sm:w-[520px] mb-2" @submit.prevent="sendEmail">
        <AInput
          v-model="email"
          label-for="inputMail"
          label-text="メールアドレス"
          input-type="email"
          placeholder="例) homecarenavi@mail.com"
          pattern="^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
          :required="true"
          class="mb-8"
        />

        <AButtonSubmit
          inner-text="パスワード再設定メール送信"
          user-type="client"
          class="py-3 sm:py-4"
        />
      </form>
      <div class="mb-8 sm:mb-16 text-center">
        <NuxtLink
          to="/client/login"
          class="text-sm text-pink"
        >
          リセットせずにもどる
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const email = ref('')
const { $api } = useNuxtApp()
const { alert } = useUI()

const sendEmail = async () => {
  await $api.client.api.v1.auth.password.$post({
    body: { email: email.value }
  }).then(({ message }) => {
    router.push('/password-reset/complete')
    alert.showAlert(message, 'success')
  }).catch(async (e) => {
    const message = await $api.getErrorMessage(e)
    alert.showAlert(message, 'danger')
  })
}
</script>
