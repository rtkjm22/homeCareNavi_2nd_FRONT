<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <NuxtLink
      :href="otherUser.loginUrl"
      :class="`absolute top-4 right-4 text-sm text-${otherUser.color}`"
    >
      {{ otherUser.text }}
    </NuxtLink>
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle :ttl-text="otherUser.title" />
      </div>
      <!-- フォーム部分 -->
      <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
        <form>
          <AInput
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
              to="/"
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
            :href="otherUser.signupUrl"
            :class="`text-sm text-${otherUser.color}`"
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

const otherUser = computed(() => {
  switch (props.userType) {
    case 'client':
      return {
        title: 'ログイン',
        text: 'ケアマネージャーの方はこちら',
        color: 'pink',
        loginUrl: '/manager/login',
        signupUrl: '/manager/signup'
      }
    case 'manager':
      return {
        title: 'ケアマネログイン',
        text: '一般の方はこちら',
        color: 'orange',
        loginUrl: '/client/login',
        signupUrl: '/client/signup'
      }
    default:
      return {
        title: '',
        text: '',
        color: '',
        loginUrl: '',
        signupUrl: ''
      }
  }
})
</script>
