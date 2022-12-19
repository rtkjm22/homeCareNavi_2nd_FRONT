<template>
  <div class="border-t-2 border-t-pink shadow-sm">
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center pt-4 pb-3 md:justify-start md:space-x-10"
        >
          <!-- ヘッダー画像 -->
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <NuxtLink to="/">
              <img
                class="h-8 w-auto sm:h-8"
                src="@/assets/img/logo.svg"
                alt=""
              />
            </NuxtLink>
          </div>

          <!-- メニュー部（PC） -->
          <nav class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div class="flex flex-nowrap">
              <NuxtLink
                v-for="link in links"
                :key="link.innerText"
                :to="link.to"
                class="linkItem"
              >
                {{ link.innerText }}
              </NuxtLink>
            </div>
            <div class="ml-4 flex items-center gap-2">
              <template v-if="userType === undefined">
                <NuxtLink to="/client/login">
                  <AButton inner-text="ログイン" />
                </NuxtLink>
                <NuxtLink to="/client/signup">
                  <AButton inner-text="新規登録" user-type="client" />
                </NuxtLink>
              </template>
              <template v-else>
                <a class="linkItem cursor-pointer" @click="logout">ログアウト</a>
              </template>
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
                  <NuxtLink to="/" class="mx-auto mb-3">
                    <img
                      class="h-7 w-auto sm:h-8"
                      src="@/assets/img/logo.svg"
                    />
                  </NuxtLink>
                  <p class="mb-6 text-xs text-gray-base">
                    {{ $user.state.value?.name || 'ゲスト' }}さん
                  </p>
                  <template v-if="userType === undefined">
                    <div class="mx-auto mb-3 flex items-center gap-2">
                      <NuxtLink to="/client/login">
                        <AButton inner-text="ログイン" />
                      </NuxtLink>
                      <NuxtLink to="/client/signup">
                        <AButton inner-text="新規登録" user-type="client" />
                      </NuxtLink>
                    </div>
                    <NuxtLink
                      to="/manager/login"
                      class="mb-6 text-xs font-medium text-pink"
                    >
                      ケアマネージャーの方はこちら
                    </NuxtLink>
                  </template>
                  <template v-else>
                    <span class="mb-6 text-xs font-medium text-pink" @click="logout">
                      ログアウト
                    </span>
                  </template>
                </div>
                <!-- メニュー下部 -->
                <ul class="flex flex-col">
                  <li v-for="link in links" :key="link.innerText">
                    <AButtonArrow
                      :inner-text="link.innerText"
                      :to="link.to"
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
interface Props {
  userType?: 'client' | 'manager';
}
const props = defineProps<Props>()

interface Link {
  innerText: string;
  to: string;
}
const links = computed<Link[] | undefined>(() => {
  switch (props.userType) {
    case 'client':
      return [
        { innerText: '閲覧履歴', to: '/' },
        { innerText: 'ブックマーク', to: '/' },
        { innerText: '予約状況確認', to: '/' },
        { innerText: 'レビュー履歴', to: '/' },
        { innerText: '登録情報変更', to: '/client/auth/profile' }
      ]
    case 'manager':
      return [
        { innerText: '事業所情報編集', to: '/' },
        { innerText: 'スタッフ情報', to: '/' },
        { innerText: 'お礼一覧', to: '/' },
        { innerText: '予約状況確認', to: '/' },
        { innerText: '利用者情報管理', to: '/' }
      ]
  }
})

// スマートフォン用メニューの表示フラグ
const isNavOpened = ref(false)

const { $api, $user } = useNuxtApp()
const { showAlert } = useAlert()

const logout = async () => {
  await $api.client.api.v1.auth.sign_out.$delete()
  $api.clearAuthHeaders()
  $user.clearUserState()
  await navigateTo('/client/login')
  showAlert('ログアウトしました', 'success')
}
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
