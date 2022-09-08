<template>
  <div class="border-t-2 border-t-pink shadow-sm">
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center pt-4 pb-3 md:justify-start md:space-x-10"
        >
          <!-- ヘッダー画像 -->
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                class="h-8 w-auto sm:h-8"
                src="@/assets/img/logo.svg"
                alt=""
              >
            </a>
          </div>

          <!-- メニュー部（PC） -->
          <nav class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div class="flex flex-nowrap">
              <NuxtLink
                v-for="item in links"
                :key="item.innerText"
                :to="item.to"
                class="linkItem"
              >
                {{ item.innerText }}
              </NuxtLink>
            </div>
            <div class="ml-4 flex items-center gap-2">
              <AButton inner-text="ログイン" />
              <AButton inner-text="新規登録" role="client" />
            </div>
          </nav>

          <!-- メニュー部（SP） -->
          <div class="md:hidden bg-slate-100 z-20">
            <!-- ハンバーガーアイコン -->
            <div class="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
                aria-expanded="false"
                @click="isNavOpened = true"
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
            <AOverlay :is-nav-opened="isNavOpened" @click="isNavOpened = false" />

            <!-- メニュー部 -->
            <transition name="menu">
              <div
                v-if="isNavOpened"
                class="h-screen fixed w-[300px] bg-white top-0 bottom-0 right-0 z-20"
              >
                <!-- メニュー上部 -->
                <div
                  class="pt-6 bg-[#F5F7F7] flex justify-center flex-col text-center"
                >
                  <a href="#" class="mx-auto mb-3">
                    <img
                      class="h-7 w-auto sm:h-8"
                      src="@/assets/img/logo.svg"
                    >
                  </a>
                  <p class="mb-6 text-xs text-gray-base">
                    ゲストさん
                  </p>
                  <div class="mx-auto mb-3 flex items-center gap-2">
                    <AButton inner-text="ログイン" />
                    <AButton inner-text="新規登録" role="client" />
                  </div>
                  <a
                    href="#"
                    class="mb-6 text-xs font-medium text-pink"
                  >ケアマネージャーの方はこちら</a>
                </div>
                <!-- メニュー下部 -->
                <ul class="flex flex-col">
                  <li v-for="item in links" :key="item.innerText">
                    <AButtonArrow
                      :inner-text="item.innerText"
                      :to="item.to"
                    />
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ComputedRef, Ref } from 'vue'

interface Props {
  role?: number;
}
interface Link {
  innerText: string;
  to: string;
}
const props = defineProps<Props>()

// スマートフォン用メニューの表示フラグ
const isNavOpened = ref(false)

const navStatus: Ref<number> = ref(props.role)
const links = computed<Link[]>(() => {
  switch (navStatus.value) {
    case 1:
      return [
        { innerText: '閲覧履歴', to: '/' },
        { innerText: 'ブックマーク', to: '/' },
        { innerText: '予約状況確認', to: '/' }
      ]
    case 2:
      return [
        { innerText: '閲覧履歴', to: '/' },
        { innerText: 'ブックマーク', to: '/' },
        { innerText: '予約状況確認', to: '/' },
        { innerText: 'レビュー履歴', to: '/' },
        { innerText: '登録情報変更', to: '/' }
      ]
    case 3:
      return [
        { innerText: '事業所情報編集', to: '/' },
        { innerText: 'スタッフ情報', to: '/' },
        { innerText: 'お礼一覧', to: '/' },
        { innerText: '予約状況確認', to: '/' },
        { innerText: '利用者情報管理', to: '/' }
      ]
    default:
      return [
        { innerText: '閲覧履歴', to: '/' },
        { innerText: 'ブックマーク', to: '/' },
        { innerText: '予約状況確認', to: '/' }
      ]
  }
})
</script>
<style scoped lang="scss">
.linkItem {
  @apply whitespace-nowrap text-[13px] font-medium text-gray-base hover:text-gray-900;
}
.linkItem:not(:last-of-type) {
  @apply mr-5;
}
.linkItem:last-of-type {
  @apply mr-8;
}

.menu {
  &-enter-from,
  &-leave-to {
    transform: translateX(500px);
  }
  &-enter-to,
  &-leave-from {
    transform: translateX(0);
  }
  &-enter-active,
  &-leave-active {
    transition: all ease 0.3s;
  }
}
</style>
