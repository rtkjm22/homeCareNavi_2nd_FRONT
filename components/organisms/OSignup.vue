<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <NuxtLink
      :to="loginUrl"
      :class="`absolute top-4 right-4 text-sm ${textColor}`"
    >
      {{ loginText }}
    </NuxtLink>
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle :ttl-text="title" />
      </div>
      <!-- フォーム部分 -->
      <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
        <form @submit.prevent="signup">
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

          <!-- パスワード -->
          <AInput
            v-model="params.password"
            label-for="inputPass"
            label-text="パスワード"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            :required="true"
            class="mb-6"
          />

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
              <AInputAddressCd
                v-model="params.postal"
                @change="searchByPostal()"
              />
            </template>
          </AInput>

          <!-- 新規登録ボタン -->
          <AButtonSubmit
            inner-text="新規登録"
            :user-type="userType"
            class="py-3 sm:py-4"
          />
        </form>
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
const loginUrl = ref('')
const loginText = ref('')
let confirmSuccessUrl: string = useRuntimeConfig().public.frontURL

switch (props.userType) {
  case 'client':
    title.value = '新規登録'
    textColor.value = 'text-pink'
    loginUrl.value = '/client/login'
    loginText.value = 'ログインはこちら'
    confirmSuccessUrl = confirmSuccessUrl + '/client/login'
    break
  case 'manager':
    title.value = 'ケアマネ新規登録'
    textColor.value = 'text-orange'
    loginUrl.value = '/manager/login'
    loginText.value = 'ケアマネログインはこちら'
    confirmSuccessUrl = confirmSuccessUrl + '/manager/login'
    break
}

const params = reactive({
  name: '',
  email: '',
  tel: '',
  postal: '',
  address: '',
  password: '',
  // 頭文字を大文字にしたuserType。 'client' => 'Client', 'manager' => 'Manager'。APIの仕様上必要。
  type: props.userType[0].toUpperCase() + props.userType.slice(1),
  confirm_success_url: confirmSuccessUrl
})

const geoApi = useHeartRailsGeoAPI()

// 郵便番号から住所及び経度緯度を取得する
const searchByPostal = async () => {
  const { postal } = params
  if (postal.length !== 7) { return }

  const location = await geoApi.searchByPostal(postal)
  if (location === undefined) { return }

  const { city, prefecture, town } = location
  params.address = city + prefecture + town
}

const router = useRouter()
const { $api } = useNuxtApp()
const { showAlert } = useAlert()

const signup = async () => {
  await $api.client.api.v1.auth.$post({ body: params })
    .then(async () => {
      await router.push(`/${props.userType}/signup/complete`)
      showAlert('メールを送信しました。メールに記載されているリンクにアクセスしてください。', 'success')
    })
    .catch(async (e) => {
      const message = await $api.getErrorMessage(e)
      showAlert(message, 'danger')
    })
}
</script>
