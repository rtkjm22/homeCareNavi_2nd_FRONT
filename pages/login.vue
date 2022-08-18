<template>
  <div
    class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
  >
    <a href="/" class="absolute top-4 right-4 text-sm text-pink"
      >ログインはこちら</a
    >
    <!-- コンテンツ部分 -->
    <div class="w-full px-4">
      <!-- タイトル -->
      <div class="mb-6 sm:mb-12 sm:mt-4 sm:text-center">
        <h1 class="text-[18px] sm:text-lg text-gray-dark font-bold">
          新規登録
        </h1>
      </div>
      <!-- フォーム部分 -->
      <div class="mb-9 sm:mb-16 mx-auto sm:w-[520px]">
        <form class="">
          <!-- お名前 -->
          <div class="flex flex-col mb-6">
            <label
              for="inputedNm"
              class="mb-2 text-[13px] font-bold text-gray-base"
              >お名前</label
            >
            <input
              type="text"
              id="inputedNm"
              class="px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink"
              placeholder="田中 太郎"
              required
            />
          </div>

          <!-- メールアドレス -->
          <div class="flex flex-col mb-6">
            <label
              for="inputedMail"
              class="mb-2 text-[13px] font-bold text-gray-base"
              >メールアドレス</label
            >
            <input
              type="email"
              id="inputedMail"
              class="px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink"
              placeholder="例) homecarenavi@mail.com"
              pattern="^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
              required
            />
          </div>

          <!-- パスワード -->
          <div class="flex flex-col mb-6">
            <label
              for="inputedPass"
              class="mb-2 text-[13px] font-bold text-gray-base"
              >パスワード</label
            >
            <input
              type="password"
              id="inputedPass"
              class="px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink"
              placeholder="半角英数字8文字以上"
              minlength="8"
              required
            />
          </div>

          <!-- 電話番号 -->
          <div class="flex flex-col mb-6">
            <label
              for="inputedTel"
              class="mb-2 text-[13px] font-bold text-gray-base"
              >電話番号</label
            >
            <input
              type="tel"
              id="inputedTel"
              class="px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink"
              placeholder="000-0000-0000"
              pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
              maxlength="13"
              required
            />
          </div>

          <!-- 住所 -->
          <div class="flex flex-col mb-8">
            <label
              for="inputedPostCd"
              class="mb-2 text-[13px] font-bold text-gray-base"
              >住所</label
            >
            <!-- 郵便番号入力欄 -->
            <div class="mb-2">
              <span class="text-gray-base text-base mr-2">〒</span>
              <input
                type="text"
                id="inputedPostCd"
                class="px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark max-w-[120px] rounded placeholder-gray-lighter outline-none focus:border-pink"
                placeholder="000-0000"
                pattern="\d{3}-?\d{4}"
                maxlength="8"
                required
              />
            </div>
            <!-- 住所入力欄 -->
            <input
              type="text"
              class="px-5 py-2.5 border-[1px] border-gray-lighter text-gray-dark rounded placeholder-gray-lighter outline-none focus:border-pink"
              placeholder="東京都世田谷区祖師谷4-3-15"
              required
            />
          </div>
          <button
            type="submit"
            class="text-base font-bold py-3 w-full sm:py-4 rounded text-white sm:text-lg bg-pink hover:opacity-70 duration-200"
          >
            新規登録
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
