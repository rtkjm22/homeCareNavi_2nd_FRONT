<template>
  <div
    class="mb-[50px] mt-2 sm:mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <div class="w-full px-4">
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle :ttl-text="isEmailSent ? 'パスワードのリセット完了' : 'パスワードのリセット'" />
      </div>

      <!-- メール送信前 -->
      <form v-if="!isEmailSent" class="mx-auto sm:w-[520px] mb-2" @submit.prevent="sendEmail">
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
          inner-text="パスワードをリセットする"
          user-type="client"
          class="py-3 sm:py-4"
        />
      </form>

      <!-- メール送信後 -->
      <p v-if="isEmailSent" class="text-sm text-center mb-4 pt-2 sm:pt-0">
        入力いただいたメールアドレスに<br>
        新しいパスワードを送付いたしました。
      </p>

      <div :class="`${isEmailSent ? 'mb-10' : 'mb-8'} sm:mb-16 text-center`">
        <NuxtLink
          :to="isEmailSent ? '/' : '/client/login'"
          class="text-sm text-pink"
        >
          {{ isEmailSent ? 'ホームケアナビトップに戻る' : 'リセットせずにもどる' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const isEmailSent = ref(false)

const sendEmail = () => {
  // TODO: メール送信の処理を書く
  isEmailSent.value = true
}
</script>
