<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <a
      :href="toOtherLoginUrl"
      :class="toOtherLoginColor"
    >{{ toOtherLoginText }}</a>
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <AtomsTheTitle :ttl-text="loginTitleText" />
      </div>
      <!-- フォーム部分 -->
      <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
        <form>
          <AtomsTheInput
            label-for="inputMail"
            label-text="メールアドレス"
            input-type="email"
            placeholder="例) homecarenavi@mail.com"
            pattern="^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
            :required="true"
            class="mb-6"
          />

          <!-- パスワード -->
          <AtomsTheInput
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
            <a
              href="/"
              class="text-sm text-zinc-500"
            >パスワードを忘れた</a>
          </div>

          <!-- ログインボタン -->
          <AtomsButtonSubmit
            inner-text="ログイン"
            :role="role"
            class="py-3 sm:py-4"
          />
        </form>

        <!-- 新規登録画面へ遷移 -->
        <div class="text-center mt-1 mb-8">
          <a
            v-show="props.role === 'client'"
            href="/client/signup"
            class="text-sm text-pink"
          >新規登録はこちら</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script  setup lang="ts">
  interface Props {
  role: 'client' | 'manager';
}
const props = defineProps<Props>()

// ログインタイトルのテキストの分岐
const loginTitleText = computed(() => {
  switch (props.role) {
    case 'client':
      return 'ログイン'

    case 'manager':
      return 'ケアマネログイン'
  }
})

// 他方へのログインページ遷移テキストの文字の分岐
const toOtherLoginText = computed(() => {
  switch (props.role) {
    case 'client':
      return 'ケアマネージャーの方はこちら'
    case 'manager':
      return '一般の方はこちら'
  }
})

// 他方へのログインページ遷移テキストの色の分岐
const toOtherLoginColor = computed(() => {
  switch (props.role) {
    case 'client':
      return ['absolute', 'top-4', 'right-4', 'text-sm', 'text-pink']
    case 'manager':
      return ['absolute', 'top-4', 'right-4', 'text-sm', 'text-orange']
  }
})

//  他方へのログインページ遷移テキストのURLの分岐
const toOtherLoginUrl = computed(() => {
  switch (props.role) {
    case 'client':
      return '/manager/login'
    case 'manager':
      return '/client/login'
  }
})

</script>
