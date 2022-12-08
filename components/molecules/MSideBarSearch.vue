<template>
  <aside class="w-full lg:max-w-[244px]">
    <div
      class="flex flex-col mt-2 px-4 justify-center lg:pt-3 lg:justify-start bg-white rounded shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]"
    >
      <h3 class="pt-2 mb-2 font-bold text-gray-dark">
        検索条件
      </h3>
      <form class="" @submit.prevent="sendData">
        <!-- フリー検索欄 -->
        <OWordSearchBar />

        <!-- エリア選択 -->
        <a
          href="#"
          class="flex items-center justify-between pt-[18px] px-2 pb-4"
        >
          <div class="flex items-center">
            <span class="pr-4 text-[11px] font-bold text-gray-base">エリア</span>
            <span class="text-sm text-gray-dark">現在地周辺（3km）</span>
          </div>
          <!-- アロー -->
          <AArrow class="relative sm:hidden" line-color="gray-light" />
        </a>
        <AButtonSubmit
          inner-text="現在地から探す"
          size="sm"
          class="w-full text-pink mb-6"
        />

        <template v-if="isCurrentUrlAreaSearch()">
          <NuxtLink
            :to="breakpoint.isGreater('md') ? '/' : buildDistrictPageUrl({ area, prefecture })"
            class="flex relative items-center -mx-4 mb-3 w-[calc(100% + 32px)] bg-[#F5F7F7]"
          >
            <span class="py-3 pl-7 text-xs text-gray-dark">{{ prefecture }}</span>
            <AArrow class="absolute left-3" line-direction="left" line-color="gray-base" />
          </NuxtLink>
          <table class="city">
            <tr>
              <th>{{ prefecture }}</th>
            </tr>
            <tr>
              <td
                v-for="district in currentDistricts"
                :key="district"
              >
                <MCheckboxWithArrow
                  v-model="selectedDistricts"
                  :text-label="district"
                />
              </td>
            </tr>
          </table>
          <div
            class="flex relative items-center -mx-4 w-[calc(100% + 32px)] px-3 py-[10px] bg-[#F5F7F7] rounded-b sticky bottom-0"
          >
            <AButton
              class="py-2 text-sm w-full"
              inner-text="検索する"
              user-type="client"
              size="md"
              @click="areaSearch"
            />
          </div>
        </template>
      </form>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const router = useRouter()
const { getDistricts } = useHeartRailsGeoAPI()

/** ブレイクポイント */
const breakpoint = useBreakpoints(breakpointsTailwind)


// ----- エリア検索 -----
const { getAreaSearchParams, buildAreasString, buildAreaSearchUrl, buildDistrictPageUrl, isCurrentUrlAreaSearch } = useAreaSearch()
const { prefecture, districts, area } = getAreaSearchParams()

const currentDistricts = ref<string[] | undefined>()
const selectedDistricts = ref<string[]>([])

const areaSearch = () => {
  const areasString = buildAreasString({ prefecture, districts: selectedDistricts.value })
  const newUrl = buildAreaSearchUrl({ areas: areasString, prefecture, page: 1, area })
  router.push(newUrl)
}

onMounted(async () => {
  if (isCurrentUrlAreaSearch()) {
    currentDistricts.value = await getDistricts(prefecture)
    selectedDistricts.value = districts!
  }
})
// -----

const sendData = () => {
  // 検索条件のデータが送信されます。
}
</script>

<style scoped lang="scss">
.city {
  width: 100%;
  margin-bottom: 15px;
  tr {
    width: 100%;
  }
  th,
  td {
    display: block;
    width: 100%;
  }
  th {
    @apply mb-2 text-gray-dark text-base font-medium text-left;
  }
  td {
    @apply border-b border-[#f5f7f7];
    &:last-of-type {
      border: transparent;
    }
  }
}
</style>
