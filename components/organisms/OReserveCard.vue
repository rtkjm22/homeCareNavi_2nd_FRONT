<template>
  <div class="w-full max-h-[262px] mb-6 bg-white rounded">
    <div class="w-[331px] m-auto">
      <div class="flex justify-between pt-3">
        <span
          class="h-[23px] px-1.5 py-0.5 text-[13px] text-pink bg-babypink font-bold rounded-sm"
          :class="{ 'contacted' : isContacted }"
        >{{ isContacted ? '連絡済み' : '未連絡' }}</span>
        <span class="text-[10px] text-gray-base">{{ formattedBeginAt }}</span>
      </div>

      <p class="pt-3.5 pb-4 text-gray-dark text-lg font-bold">
        {{ user_name }}&ensp;さん&ensp;({{ user_age }})
      </p>

      <p class="pb-0.5 text-[13px] text-gray-base font-bold">
        面談希望日時
      </p>
      <p class="text-gray-dark">
        {{ fromBeginToEnd }}
      </p>

      <p class="pt-3 text-[13px] text-gray-base font-bold">
        連絡先電話番号
      </p>
      <p class="pt-0.5 text-orange">
        {{ contact_tel }}
      </p>

      <AButtonSubmit
        v-if="!isContacted"
        inner-text="連絡済みにする"
        user-type="manager"
        class="h-[40px] text-[14px] sm:text-sm md:text-sm mt-4"
        @click="submitContact"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Reserve } from '@/api/@types'

const props = defineProps<Reserve>()

/** 面談開始時刻を yyyy年mm月dd日 hh:mm の形式として保持する */
const formattedBeginAt = Intl.DateTimeFormat('ja-JP', {
  dateStyle: 'long',
  timeStyle: 'short'
}).format(new Date(props.interview_begin_at))

/**
 * 面談開始から終了までの文字列を返す
 * @example
 *  fromBeginToEnd
 *  // => "12月31日(土) 10:00〜12:00" */
const fromBeginToEnd = computed(() => {
  // 文字列の前半部分を作成する "12月31日(土) 10:00"
  const beginDate = new Date(props.interview_begin_at)
  const beginParts = Intl.DateTimeFormat('ja-JP', {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).formatToParts(beginDate)
  // 参考: https://zenn.dev/terrierscript/articles/2022-10-20-vanilla-format
  const { month, day, weekday, hour, minute } = Object.fromEntries(beginParts.map(({ type, value }) => [type, value]))
  const beginStr = `${month}月${day}日(${weekday}) ${hour}:${minute}`

  // 文字列の後半部分を作成する "12:00"
  const endDate = new Date(props.interview_end_at)
  const endStr = Intl.DateTimeFormat('ja-JP', {
    timeStyle: 'short'
  }).format(endDate)

  // 前半と後半を '〜' で結合
  return beginStr + '〜' + endStr
})

/**
 * このコンポーネントで管理する連絡済みステータス。連絡済みボタンを押下した際、is_contactedをfalseにする必要があるが、
 * 現状is_contactedは他のコンポーネントで参照せず、またグローバルステートで管理するのも複雑化するため、このコンポーネント内のみのステータスとして管理する。
 * */
const isContacted = ref(props.is_contacted)

const { $api } = useNuxtApp()
const { showAlert } = useAlert()

/** 連絡済みボタン押下時処理。apiにPATCHリクエストし、連絡済みフラグをtrueにする。 */
const submitContact = async () => {
  if (!confirm('連絡済みにしてもよろしいですか？一度連絡済みにした場合、後から未連絡にすることは出来ません。')) { return }

  await $api.client.api.v1.manager.reserves._id(props.id!).$patch()
    .then(() => { isContacted.value = true })
    .catch(async (e) => {
      const message = await $api.getErrorMessage(e)
      showAlert(message, 'danger')
    })
}
</script>

<style scoped lang="scss">
.contacted {
    @apply text-gray-base bg-gray-lighter
}
</style>
