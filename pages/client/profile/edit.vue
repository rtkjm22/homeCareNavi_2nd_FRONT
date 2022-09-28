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
        <form>
          <!-- お名前 -->
          <AInput
            label-for="inputNm"
            label-text="お名前"
            input-type="text"
            placeholder="田中 太郎"
            :required="true"
            class="mb-6"
          />

          <!-- メールアドレス -->
          <AInput
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
            label-for="inputCurrentPass"
            label-text="現在のパスワード"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            :required="true"
            class="mb-6"
            :is-valid="isValid"
          />
          <!-- 新しいパスワード -->
          <AInput
            label-for="inputNewPass"
            label-text="新しいパスワード"
            input-type="password"
            placeholder="半角英数字8文字以上"
            minlength="8"
            :required="true"
            class="mb-6"
          />
          <!-- 電話番号 -->
          <AInput
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
            label-for="inputPost"
            label-text="住所"
            input-type="text"
            placeholder="東京都世田谷区祖師谷4-3-15"
            :required="true"
            class="mb-8"
          />

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
            to="/client/profile"
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
// レスポンスでエラーが帰ってきたとき、differentPassをtrueにする
const isValid = false

</script>
