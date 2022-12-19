<template>
  <div>
    <div
      class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
    >
      <!-- コンテンツ部分 -->
      <div class="w-full px-4">
        <!-- タイトル -->
        <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
          <ATitle ttl-text="パスワードのリセット" />
        </div>
        <!-- フォーム部分 -->
        <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
          <form @submit.prevent="passwordReset">
            <!-- 新パスワード -->
            <AInput
              v-model="params.password"
              label-for="inputPass"
              label-text="新パスワード"
              input-type="password"
              placeholder="半角英数字8文字以上"
              minlength="8"
              :required="true"
              class="mb-8"
            />

            <!-- 新パスワード確認 -->
            <AInput
              v-model="params.password_confirmation"
              label-for="inputPassConfirm"
              label-text="新パスワード確認"
              input-type="password"
              placeholder="半角英数字8文字以上"
              minlength="8"
              :required="true"
              class="mb-8"
            >
              <template #bottom>
                <div v-show="!isSamePassword">
                  <p class="text-sm text-pink">
                    パスワードが一致しません
                  </p>
                </div>
              </template>
            </AInput>

            <!-- パスワードリセット -->
            <AButtonSubmit
              inner-text="パスワードをリセットする"
              user-type="client"
              class="py-3 sm:py-4"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** メールリンクからこのページに遷移していない場合は弾く */
definePageMeta({
  middleware: ({ query }) => {
    const { 'access-token': accessToken, client, uid } = query
    if (accessToken && client && uid) { return }

    return navigateTo('/')
  }
})

const params = reactive({
  password: '',
  password_confirmation: ''
})

/** 新パスワードとパスワード確認が一致していればtrue,異なる場合はfalse  */
const isSamePassword = computed(() => {
  return params.password === params.password_confirmation
})

const { $api, $user } = useNuxtApp()
const { showAlert } = useAlert()
const router = useRouter()
const route = useRoute()
const { 'access-token': accessToken, client, uid } = route.query as Record<string, string>

const passwordReset = async () => {
  if (!isSamePassword.value) { return }

  await $api.client.api.v1.auth.password.patch({
    body: params,
    config: {
      headers: {
        'access-token': accessToken,
        client,
        uid
      }
    }
  })
    .then(({ body, headers }) => {
      $api.setAuthHeaders(headers)
      $user.setUserState(body.data)
      router.push('/')
      showAlert(body.message, 'success')
    })
    .catch(async (e) => {
      const message = await $api.getErrorMessage(e)
      showAlert(message, 'danger')
    })
}
</script>
