<template>
  <AButtonSubmit
    class="
      flex
      justify-center
      items-center
      border
      border-pink
      text-pink
      w-full
    "
    inner-text="現在地から探す"
    size="sm"
    @click="clickSubmitBtn"
  >
    <template #prepend-icon>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path
          d="M9,1.323a5.525,5.525,0,0,0-4.786,8.3L9,17.323l4.786-7.7A5.525,5.525,0,0,0,9,1.323ZM9,9.355a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,9,9.355Z"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </AButtonSubmit>
</template>

<script setup lang="ts">
const router = useRouter()
const { showAlert } = useAlert()
const { buildNearestSearchUrl } = useSearchNearest()

// メソッドの使用時ではなく、ページ表示時に位置情報使用同意のポップアップを出現させる。
// メソッドの使用時にポップアップを出現させると、位置情報取得に5秒ほどの待機時間が生じてしまう現象の対策
navigator.geolocation.getCurrentPosition(() => {})

const clickSubmitBtn = () => {
  // 位置情報取得
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords
    const url = buildNearestSearchUrl({
      lat: latitude,
      lng: longitude,
      page: 1
    })
    router.push(url)
  },
  () => {
    showAlert('位置情報を取得出来ませんでした。このページを再読み込みしてください。', 'danger')
  })
}
</script>
