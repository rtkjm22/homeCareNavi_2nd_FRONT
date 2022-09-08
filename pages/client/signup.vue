<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <a
      href="/"
      class="absolute top-4 right-4 text-sm text-pink"
    >ログインはこちら</a>
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <ATitle ttl-text="新規登録" />
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

          <!-- パスワード -->
          <AInput
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
            inner-text="新規登録"
            role="client"
            class="py-3 sm:py-4"
          />
        </form>
      </div>
    </div>
  </div>
</template>
