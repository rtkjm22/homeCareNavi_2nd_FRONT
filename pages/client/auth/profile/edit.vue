<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle ttl-text="登録情報変更" />
      </div>
      <!-- フォーム部分 -->
      <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
        <form @submit.prevent="updateUser">
          <!-- お名前 -->
          <AInput
            v-model="params.name"
            label-for="inputNm"
            label-text="お名前"
            input-type="text"
            placeholder="田中 太郎"
            :required="true"
            class="mb-6"
          />

          <!-- メールアドレス -->
          <AInput
            v-model="params.email"
            label-for="inputMail"
            label-text="メールアドレス"
            input-type="email"
            placeholder="例) homecarenavi@mail.com"
            pattern="^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
            :required="true"
            class="mb-6"
          />

          <!-- 現在のパスワード -->
          <AInput
            v-model="params.current_password"
            label-for="inputCurrentPass"
            label-text="現在のパスワード"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            :required="true"
            class="mb-6"
          />

          <!-- 新しいパスワード -->
          <AInput
            v-model="params.password"
            label-for="inputNewPass"
            label-text="新しいパスワード"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            class="mb-6"
          >
            <template #bottom>
              <span class="text-xs text-gray-base mt-1">省略可</span>
            </template>
          </AInput>

          <!-- 新しいパスワード（確認） -->
          <AInput
            v-model="params.password_confirmation"
            label-for="inputNewPassConfirm"
            label-text="新しいパスワード（確認）"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            class="mb-6"
          >
            <template #bottom>
              <span class="text-xs text-gray-base mt-1">省略可</span>
              <span v-show="!isSamePassword" class="text-xs text-red-500 mt-1">
                パスワードが一致しません
              </span>
            </template>
          </AInput>

          <!-- 電話番号 -->
          <AInput
            v-model="params.tel"
            label-for="inputTel"
            label-text="電話番号"
            input-type="tel"
            placeholder="000-0000-0000"
            minlength="13"
            :required="true"
            class="mb-6"
            pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
          />

          <!-- 住所 -->
          <AInput
            v-model="params.address"
            label-for="inputPost"
            label-text="住所"
            input-type="text"
            placeholder="東京都世田谷区祖師谷4-3-15"
            :required="true"
            class="mb-8"
          >
            <template #top>
              <AInputAddressCd v-model="params.postal" />
            </template>
          </AInput>

          <!-- 新規登録ボタン -->
          <AButtonSubmit
            inner-text="変更する"
            user-type="client"
            class="py-3 sm:py-4"
          />
        </form>
        <!-- 新規登録画面へ遷移 -->
        <div class="text-center mb-8">
          <NuxtLink
            to="/client/auth/profile"
            :class="`text-sm text-pink`"
          >
            変更せずに戻る
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 現在のユーザーのステータス設定
const { $api, $user } = useNuxtApp()
const { name, email, tel, postal, address } = $user.state.value!
const params = reactive({
  name,
  email,
  tel,
  postal,
  address,
  current_password: '',
  password: '',
  password_confirmation: ''
})

// パスワード確認
const isSamePassword = computed(() => {
  return params.password === params.password_confirmation
})

// ステータス変更送信
const { showAlert } = useAlert()
const router = useRouter()
const updateUser = async () => {
  if (!isSamePassword.value) { return }

  await $api.client.api.v1.auth.patch({ body: params })
    .then(async ({ body, headers }) => {
      $user.state.value = body.data
      $api.setAuthHeaders(headers)
      await router.push('/client/auth/profile')
      showAlert('登録情報を変更しました', 'success')
    })
    .catch(async (e) => {
      const message = await $api.getErrorMessage(e)
      showAlert(message, 'danger')
    })
}
</script>
