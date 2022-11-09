<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <NuxtLink
      :href="otherLoginUrl"
      :class="`absolute top-4 right-4 text-sm ${textColor}`"
    >
      {{ otherLoginText }}
    </NuxtLink>
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle :ttl-text="title" />
      </div>
      <!-- フォーム部分 -->
      <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
        <form @submit.prevent="signInSubmit">
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

          <!-- パスワード -->
          <AInput
            v-model="params.password"
            label-for="inputPass"
            label-text="パスワード"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            :required="true"
            class="mb-0"
          />

          <!-- パスワードリセット画面へ遷移 -->
          <div class="text-right mb-8">
            <NuxtLink
              to="/password-reset"
              class="text-sm text-zinc-500"
            >
              パスワードを忘れた
            </NuxtLink>
          </div>

          <!-- ログインボタン -->
          <AButtonSubmit
            inner-text="ログイン"
            :user-type="userType"
            class="py-3 sm:py-4"
          />
        </form>

        <!-- 新規登録画面へ遷移 -->
        <div class="text-center mt-1 mb-8">
          <NuxtLink
            :href="signupUrl"
            :class="`text-sm ${textColor}`"
          >
            新規登録はこちら
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  userType: 'client' | 'manager';
}
const props = defineProps<Props>()

const title = ref('')
const textColor = ref('')
const signupUrl = ref('')
const otherLoginText = ref('')
const otherLoginUrl = ref('')

switch (props.userType) {
  case 'client':
    title.value = 'ログイン'
    textColor.value = 'text-pink'
    signupUrl.value = '/client/signup'
    otherLoginText.value = 'ケアマネージャーの方はこちら'
    otherLoginUrl.value = '/manager/login'
    break
  case 'manager':
    title.value = 'ケアマネログイン'
    textColor.value = 'text-orange'
    signupUrl.value = '/manager/signup'
    otherLoginText.value = '一般の方はこちら'
    otherLoginUrl.value = '/client/login'
    break
}

const params = reactive({
  email: '',
  password: '',
  // 頭文字を大文字にしたuserType。 'client' => 'Client', 'manager' => 'Manager'。APIの仕様上必要。
  type: props.userType[0].toUpperCase() + props.userType.slice(1)
})

const { alert } = useUI()
const router = useRouter()
const { $api, $user } = useNuxtApp()

const signInSubmit = async () => {
  await $api.client.api.v1.auth.sign_in.post({ body: params })
    .then(async ({ body, headers }) => {
      $user.setUserState(body.data)
      $api.setAuthHeaders(headers)
      await router.push('/')
      alert.showAlert(`ようこそ${body.data.name}さん`, 'success')
    })
    .catch(async (e) => {
      const message = await $api.getErrorMessage(e)
      alert.showAlert(message, 'danger')
    })
}
</script>
