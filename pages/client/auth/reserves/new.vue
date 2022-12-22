<template>
  <div>
    <div class="toOfficeDetailPage mx-auto flex max-w-pcCol1">
      <NuxtLink
        :href="`/client/auth/offices/${officeId}`"
        class="absolute mt-[40px] mr-[225px] text-pink"
      >
        <AArrow line-direction="left" class="absolute mt-[12px] ml-[-20px]" />
        {{ officeName }}
      </NuxtLink>
    </div>

    <div
      class="mb-[50px] mt-10 sm:mb-20 mx-auto pt-4 flex justify-center max-w-pcCol1 bg-white relative rounded"
    >
      <!-- コンテンツ部分 -->
      <div class="w-full px-4">
        <!-- タイトル -->
        <div>
          <ATitle ttl-text="Web予約" />
        </div>
        <div class="mt-5">
          <AHeadline label-text="事務所名" />
          <p class="profile-text">
            {{ officeName }}
          </p>
        </div>
        <!-- フォーム部分 -->
        <div class="mb-9 sm:mb-16 mt-5">
          <form @submit.prevent="submitReserve">
            <!-- 面談希望日時 -->
            <label for="countries" class="mb-2 text-[13px] font-bold text-gray-base">
              面談希望日時
            </label>
            <div class="flex">
              <div class="w-40 mb:w-1/2 mt-2">
                <Datepicker
                  v-model="reserveDate"
                  locale="jp"
                  :format="formatDay"
                  auto-apply
                  :highlight-week-days="officeHolidays"
                  :disabled-week-days="officeHolidays"
                  :enable-time-picker="false"
                  hide-input-icon
                  :min-date="new Date()"
                />
              </div>
              <div class="mt-2 ml-3">
                <select v-model="fromStartToEndStr" class="interviewDesiredTime w-40 mb:w-1/2 border border-gray-300 text-gray-900 rounded">
                  <option
                    v-for=" reservationSelectionCandiDate, n in reservationSelectionCandiDates"
                    :key="n"
                    :value="reservationSelectionCandiDate"
                  >
                    {{ reservationSelectionCandiDate }}
                  </option>
                </select>
              </div>
            </div>

            <!-- 利用者のお名前 -->
            <AInput
              v-model="name"
              label-for="inputNm"
              label-text="利用者のお名前"
              input-type="text"
              placeholder="田中 太郎"
              :required="true"
              class="mb-0 mt-5"
            />
            <!-- 利用者の年齢 -->
            <div class="mt-5">
              <label for="age" class="mt-5 mb-2 text-[13px] font-bold text-gray-base outline:none">
                利用者の年齢
              </label>
              <select id="age" v-model="age" required class="mt-2 border text-sm rounded block w-full p-2.5 w-1/4 outline-none focus:border-pink">
                <option
                  v-for="n = 80 in 150"
                  :key="n"
                  :value="n"
                  :selected="n == 80"
                >
                  {{ n }}歳
                </option>
              </select>
            </div>

            <!-- 電話番号 -->
            <AInput
              v-model="tel"
              label-for="inputTel"
              label-text="連絡先電話番号"
              input-type="tel"
              placeholder="000-0000-0000"
              minlength="13"
              :required="true"
              class="mb-6 mt-5"
              pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
            />

            <!-- お困り事 -->
            <label for="inputTroubles" class="mb-2 text-[13px] font-bold text-gray-base outline:none">
              お困りごと
            </label>
            <textarea
              id="inputTroubles"
              v-model="note"
              name="inputTroubles"
              placeholder="入力してください"
              rows="5"
              class="mt-2 mb-5 form-control resize-none w-full px-5 py-2.5 border-[1px] text-gray-dark rounded placeholder-gray-lighter focus:outline-none focus:border-pink"
            />

            <AButtonSubmit
              inner-text="予約する"
              user-type="client"
              class="py-3 sm:py-4"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const route = useRoute()

const officeId = Number.parseInt(route.query.officeId as string)
const officeName = route.query.officeName

// 選択した日付の表示
const reserveDate = ref(new Date())
const name = ref('')
const fromStartToEndStr = ref('')
const age = ref(80)
const tel = ref('')
const note = ref('')

const formatDay = (reserveDate: any) => {
  const month = reserveDate.getMonth() + 1
  const date = reserveDate.getDate()
  const day = reserveDate.getDay()
  const dayString = ['日', '月', '火', '水', '木', '金', '土'][day]

  return `${month}月${date}日(${dayString})`
}

// 予約開始時間と予約終了時間の取得 (10:00~20:00)
let reserveStartTime = 1000
const reserveEndTime = 2000

// 予約時間選択候補を配列にして格納
const reservationSelectionCandiDates: string[] = []

// 事務所の休業曜日を取得(0=日曜日、6=土曜日)
const officeHolidays = [0, 6]

// integer型の時間をstring型に変換する関数
const timeStringFromTimeInteger = (timeInteger: number) => {
  const timeStringTop = timeInteger.toString().slice(0, 2)
  const timeStringMiddle = ':'
  const timeStringTail = timeInteger.toString().slice(2)
  return `${timeStringTop}${timeStringMiddle}${timeStringTail}`
}

// // 予約開始時間から予約終了時間の間、2時間おきに予約選択候補を作成
while (reserveStartTime <= reserveEndTime - 200) {
  const reserveStartTimeString = timeStringFromTimeInteger(reserveStartTime)
  const reserveEndTimeString = timeStringFromTimeInteger(reserveStartTime + 200)
  const reservationCandidatesDate = `${reserveStartTimeString}~${reserveEndTimeString}`
  reservationSelectionCandiDates.push(reservationCandidatesDate)
  reserveStartTime += 200
}

// 予約送信処理
const { $api } = useNuxtApp()
const router = useRouter()
const { showAlert } = useAlert()

const submitReserve = () => {
  if (fromStartToEndStr.value === '') {
    showAlert('面談希望日時を選択してください', 'info')
    return
  }

  const [startHour, startMinute, endHour, endMinute] = fromStartToEndStr.value.split(/~|:/).map(v => Number.parseInt(v))
  const reserveYear = reserveDate.value.getFullYear()
  const reserveMonth = reserveDate.value.getMonth()
  const reserveDay = reserveDate.value.getDate()

  const startDate = new Date(reserveYear, reserveMonth, reserveDay, startHour, startMinute, 0)
  const endDate = new Date(reserveYear, reserveMonth, reserveDay, endHour, endMinute, 0)

  $api.client.api.v1.client.reserves.$post({
    body: {
      office_id: officeId,
      contact_tel: tel.value,
      note: note.value,
      user_age: age.value,
      user_name: name.value,
      interview_begin_at: startDate.toDateString(),
      interview_end_at: endDate.toDateString()
    }
  })
    .then(() => router.push('/client/auth/reserves/complete'))
    .catch(async (e) => {
      const message = await $api.getErrorMessage(e)
      showAlert(message, 'danger')
    })
}
</script>

<style scoped>
.toOfficeDetailPage {
  margin-bottom: 75px;
}

.interviewDesiredTime {
  height: 38px;
  text-align: center;
}

@media (max-width: 640px) {
.toOfficeDetailPage {
  display: none;
}
}
</style>
