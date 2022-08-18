<template>
  <div class="md:hidden bg-slate-100 z-20">
    <!-- ハンバーガーアイコン -->
    <div class="-mr-2 -my-2 md:hidden">
      <button
        type="button"
        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
        aria-expanded="false"
        @click="toggleNavFlg"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <!-- オーバーレイ -->
    <transition name="overlay">
      <div
        class="fixed h-screen w-screen bg-gray-dark top-0 bottom-0 right-0 left-0 opacity-80 z-10"
        v-if="navFlg"
        @click="toggleNavFlg"
      ></div>
    </transition>
    <!-- メニュー部 -->
    <transition name="menu">
      <div
        class="h-screen fixed w-[300px] bg-white top-0 bottom-0 right-0 z-20"
        v-if="navFlg"
      >
        <!-- メニュー上部 -->
        <div class="pt-6 bg-[#F5F7F7] flex justify-center flex-col text-center">
          <a href="#" class="mx-auto mb-3">
            <img class="h-7 w-auto sm:h-8" src="@/assets/img/logo.svg" alt="" />
          </a>
          <p class="mb-6 text-xs text-gray-base">ゲストさん</p>
          <div class="mx-auto mb-3 flex items-center gap-2">
            <btn-login />
            <btn-signup />
          </div>
          <a href="#" class="mb-6 text-xs font-medium text-pink"
            >ケアマネージャーの方はこちら</a
          >
        </div>
        <!-- メニュー下部 -->
        <ul class="flex flex-col">
          <li>
            <a
              href="#"
              class="flex justify-between w-full h-full px-6 py-4 border-b-[1px]"
            >
              <span class="text-sm font-medium text-gray-dark">閲覧履歴</span>
              <div class="relative flex items-center">
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform rotate-45 -translate-y-[2px]"
                ></div>
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform -rotate-45 translate-y-[2px]"
                ></div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex justify-between w-full h-full px-6 py-4 border-b-[1px]"
            >
              <span class="text-sm font-medium text-gray-dark"
                >ブックマーク</span
              >
              <div class="relative flex items-center">
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform rotate-45 -translate-y-[2px]"
                ></div>
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform -rotate-45 translate-y-[2px]"
                ></div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex justify-between w-full h-full px-6 py-4 border-b-[1px]"
            >
              <span class="text-sm font-medium text-gray-dark"
                >予約状況確認</span
              >
              <div class="relative flex items-center">
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform rotate-45 -translate-y-[2px]"
                ></div>
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform -rotate-45 translate-y-[2px]"
                ></div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hidden justify-between w-full h-full px-6 py-4 border-b-[1px]"
            >
              <span class="text-sm font-medium text-gray-dark"
                >レビュー履歴</span
              >
              <div class="relative flex items-center">
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform rotate-45 -translate-y-[2px]"
                ></div>
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform -rotate-45 translate-y-[2px]"
                ></div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hidden justify-between w-full h-full px-6 py-4 border-b-[1px]"
            >
              <span class="text-sm font-medium text-gray-dark"
                >登録情報変更</span
              >
              <div class="relative flex items-center">
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform rotate-45 -translate-y-[2px]"
                ></div>
                <div
                  class="block absolute w-[8px] h-[2px] rounded bg-gray-base transform -rotate-45 translate-y-[2px]"
                ></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import BtnSignup from "../atoms/btnSignup.vue";
import BtnLogin from "../atoms/btnLogin.vue";
const navFlg = ref(false);

const toggleNavFlg = (): void => {
  navFlg.value = !navFlg.value;
};
</script>
<style scoped>
.menu-enter-from,
.menu-leave-to {
  transform: translateX(500px);
}
.menu-enter-to,
.menu-leave-from {
  transform: translateX(0);
}
.menu-enter-active,
.menu-leave-active {
  transition: all ease 0.3s;
}

.overlay-leave-active,
.overlay-enter-active {
  transition: opacity 0.3s;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 0.8;
}
</style>
