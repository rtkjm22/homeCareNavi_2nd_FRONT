<template>
  <div class="w-full relative">
    <div class="content">
      <!-- 事業所名 -->
      <h2 class="mb-2 pr-[52px] text-lg leading-7 font-bold lg:mb-3 lg:pr-0 lg:max-w-[338px] lg:text-[28px] lg:leading-10">
        {{ name }}
      </h2>
      <!-- 住所 -->
      <p class="mb-3 text-[13px] text-gray-base lg:mb-4">
        {{ postal }}<br />{{ address }}
      </p>

      <!-- アクセス・スタッフ数 -->
      <div class="flex items-center mb-3 lg:mb-5">
        <!-- アクセス -->
        <div class="flex items-center mr-4 lg:mr-6">
          <img
            src="@/assets/img/pin.svg"
            alt="アクセス用ピンアイコン"
            width="16"
            height="16"
            class="mr-1.5 w-[11px] h-[11px] lg:mr-2 lg:w-4 lg:h-4"
          />
          <span class="text-[11px] lg:text-[13px]">{{ nearest_station }}</span>
        </div>
        <!-- スタッフ数 -->
        <div class="flex items-center">
          <img
            src="@/assets/img/user.svg"
            alt="スタッフ数用アイコン"
            width="16"
            height="16"
            class="mr-1.5 w-[11px] h-[11px] lg:mr-2 lg:w-4 lg:h-4"
          />
          <span class="text-[11px] lg:text-[13px]">スタッフ数 {{ staff_count }}人</span>
        </div>
      </div>

      <!-- 電話番号 -->
      <div class="flex items-center mb-4 lg:block lg:mb-6">
        <!-- 電話番号 -->
        <div class="flex items-center mr-4 lg:mb-1.5">
          <img
            src="@/assets/img/phone.svg"
            alt="電話アイコン"
            width="32"
            height="32"
            class="mr-2 w-5 h-5 lg:w-8 lg:h-8 lg:mr-3"
          />
          <p class="font-bold text-4 text-pink lg:text-xl lg:text-gray-dark">
            {{ tel }}
          </p>
        </div>
        <!-- FAX -->
        <div class="flex items-center">
          <span class="mr-2 text-sm font-bold text-gray-light lg:mr-3 lg:text-[18px]">FAX</span>
          <p class="font-bold text-4 lg:text-xl">
            {{ fax }}
          </p>
        </div>
      </div>

      <!-- web予約するボタン -->
      <AButton
        inner-text="web予約する"
        user-type="client"
        size="lg"
        class="mb-4 lg:mb-[18px]"
        @click.prevent="clickReserveButton"
      />

      <!-- 営業日 -->
      <div class="flex mb-2 items-center gap-4 lg:mb-0 lg:block lg:items-stretch">
        <p class="mb-3 text-[13px] text-gray-base font-bold whitespace-nowrap">
          営業日
        </p>
        <AWorkDay :work-day="workday" class="w-full h-[68px] lg:hidden" />
        <AWorkDay :work-day="workday" size="lg" class="hidden mb-2 m-auto w-full h-[68px] lg:table" />
      </div>

      <!-- 営業日時についての説明文 -->
      <p class="text-[11px] text-gray-base">
        {{ workday_detail }}
      </p>
    </div>
    <ABookmark :is-bookmarked="false" class="absolute right-4 top-4" />
  </div>
</template>

<script setup lang="ts">
export type Props = {
  name: string;
  postal: string;
  address: string;
  nearest_station: string;
  staff_count: number;
  tel: string;
  fax: string;
  workday: ('sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat')[];
  workday_detail: string
}

const props = defineProps<Props>()

const { $user } = useNuxtApp()
const router = useRouter()
const route = useRoute()
const { showAlert } = useAlert()

/**
 * - クライアントは予約ページへ遷移
 * - 未ログインはログインページへ遷移
 * - ケアマネは遷移しない
*/
const clickReserveButton = async () => {
  // クライアントログイン中処理
  if ($user.isClient.value) {
    await router.push({
      path: '/client/auth/reserves/new',
      query: {
        officeId: route.params.id,
        officeName: props.name
      }
    })
  }

  // 未ログイン処理
  if ($user.state.value == null) {
    await router.push('/client/login')
    showAlert('予約するにはログインしてください', 'info')
  }

  // ケアマネログイン中処理
  if ($user.isManager.value) {
    showAlert('ケアマネージャーアカウントで予約は出来ません', 'warning')
  }
}
</script>

<style scoped lang="scss">
.content {
  @apply p-4 bg-white lg:rounded lg:shadow-[0_1px_6px_0_rgba(0,0,0,0.1)];
}
</style>
