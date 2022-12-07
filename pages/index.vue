<template>
  <div>
    <!-- ワード検索 -->
    <div
      class="
      max-w-5xl
      md:h-60 md:bg-white md:border-4 md:border-[#F7FEFB]
      container
      mx-auto
      flex
      justify-center
      items-center
      md:mt-[1px]
    "
    >
      <div class="text-center">
        <div class="hidden md:inline-block">
          <h1 class="text-[28px] mb-3 text-gray-base font-semibold">
            安心して介護をお願いしたいから。
          </h1>
          <p class="text-[12px] mb-8 text-gray-base">
            ホームケアナビは、ケアマネージャーの検索ができるサービスです。
          </p>
          <MSearchBar />
        </div>

        <!-- SP -->
        <div class="md:hidden">
          <img src="~/assets/img/SPlogo.png" class="aspect-auto w-full" alt="" />
        </div>
      </div>
    </div>

    <!-- エリア検索部分 -->
    <div class="pt-4 mb-[52px] md:pt-9 md:mb-[60px]">
      <div class="max-w-5xl container mx-auto">
        <ATitle class="hidden md:inline-block" ttl-text="エリアから探す" />
      </div>
      <div
        class="
        md:mt-5
        max-w-5xl
        container
        mx-auto
        md:grid md:grid-row-3 md:grid-flow-col
        justify-between
      "
      >
        <!-- 現在地検索 -->
        <div class="relative">
          <div
            class="
            md:w-[390px] md:h-[324px]
            h-[377px]
            text-center text-sm
            bg-white
            md:border md:rounded
          border-gray-lighter
            before:content-['']
            before:absolute
            before:-translate-x-[0.2px]
            before:left-full
            before:bottom-[45%]
            md:before:border-[15px]
            before:border-y-transparent
            before:border-r-transparent
            before:border-bulegray
            after:content-['']
            after:absolute
            after:-translate-x-[0.1rem]
            after:left-full
            after:bottom-[45%]
            md:after:border-[15px]
            after:border-y-transparent
            after:border-l-white
            after:border-r-transparent
          "
          >
            <div class="w-11/12 mx-auto">
              <MSearchBar class="md:hidden h-[44px]" />
              <button
                class="
                flex
                justify-center
                items-center
                w-full
                md:w-[343px]
                h-[43px]
                m-[16px]
                border border-pink
                text-pink
                rounded
                font-bold
                mx-auto
                hover:opacity-80
              "
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M9,1.323a5.525,5.525,0,0,0-4.786,8.3L9,17.323l4.786-7.7A5.525,5.525,0,0,0,9,1.323ZM9,9.355a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,9,9.355Z"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>現在地から探す</span>
              </button>

              <!-- 地方区分検索 -->
              <div
                class="
                md:w-[343px]
                h-[232px]
                flex
                justify-center
                container
                mx-auto
              "
              >
                <div class="w-screen grid grid-cols-3 gap-2 text-gray-base font-bold">
                  <button
                    v-for="AREA in AREAS"
                    :key="AREA"
                    class="areabase"
                    @click="selectArea(AREA)"
                  >
                    {{ AREA }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 県名検索 -->
        <div class="relative hidden md:inline-block">
          <div
            class="
            w-[283px]
            h-[324px]
            bg-white
            border border-gray-lighter
            text-sm
            rounded
            overflow-auto
            scrollbar-hide
            before:before:content-['']
            before:absolute
            before:-translate-x-[0.2px]
            before:left-full
            before:bottom-[45%]
            before:border-[15px]
            before:border-y-transparent
            before:border-r-transparent
            before:border-bulegray
            after:content-['']
            after:absolute
            after:-translate-x-[0.1rem]
            after:left-full
            after:bottom-[45%]
            after:border-[15px]
            after:border-y-transparent
            after:border-l-white
            after:border-r-transparent
          "
          >
            <ul class="mt-5 ml-5 mr-5">
              <OPrefecture
                :prefectures="currentPrefectures"
                @select-prefecture="selectPrefecture"
              />
            </ul>
          </div>
        </div>

        <!-- 区検索 -->

        <div
          class="
          w-[268px]
          h-[324px]
          bg-white
          border border-gray-lighter
          text-center text-sm
          rounded
          hidden
          md:inline-block
          overflow-auto
          scrollbar-hide
        "
        >
          <ODistrict
            :prefecture="selectedPrefecture"
            :districts="currentDistricts"
            :area="selectedArea"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Area } from '@/composables/useHeartRailsGeoAPI'
const { AREAS, getDistricts, getPrefectures } = useHeartRailsGeoAPI()
const { alert } = useUI()
const router = useRouter()
const { buildPrefecturePageUrl } = useAreaSearch()

/** 選択中の地域 */
const selectedArea = ref<Area>('関東')

/** 地方選択メソッド。SPの場合は/prefectureにページ遷移する */
const selectArea = (area: Area) => {
  selectedArea.value = area

  const { matches } = window.matchMedia('(min-width: 768px)')

  if (!matches) {
    const url = buildPrefecturePageUrl({ area })
    router.push(url) // SP
  }
}

/** 選択中の地域に紐づく都道府県一覧 */
const currentPrefectures = computed(() => getPrefectures(selectedArea.value))

/** 選択中の都道府県 */
const selectedPrefecture = ref<string>()

/** 都道府県選択メソッド */
const selectPrefecture = (prefecture: string) => {
  selectedPrefecture.value = prefecture
}

/** 選択中の都道府県に紐づく市区町村一覧 */
const currentDistricts = ref<string[]>()

/** 都道府県を切り替えるたびに市区町村をAPIから取得する処理 */
watch(selectedPrefecture, () => {
  if (selectedPrefecture.value === undefined) { return }

  getDistricts(selectedPrefecture.value)
    .then((res) => { currentDistricts.value = res })
    .catch((e) => { alert.showAlert(e.message, 'danger') })
})
</script>
  

<style scoped lang="scss">
.areabase {
  @apply hover:opacity-80 border border-gray-lighter rounded;
}

/* overflow-yのスクロールバー削除(Chrome, Safari, Opera) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* IE, Edge, Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>