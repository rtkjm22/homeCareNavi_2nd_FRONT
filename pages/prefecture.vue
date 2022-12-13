<!-- SPの県検索画面 -->
<template>
  <div>
    <ATitle ttl-text="エリアを選択してください" class="my-4 w-11/12 m-auto" />

    <div class="bg-white w-11/12 rounded mx-auto mb-[130px]">
      <ul class="text-gray-dark">
        <li class="bg-gray-lighter rounded-t h-[32px] flex items-center">
          <NuxtLink to="/">
            <ALeftArrow class="text-gray-light" />{{ area }}地方
          </NuxtLink>
        </li>
        <li class="font-base w-[331px] m-auto text-base mt-4 mb-3">
          {{ area }}
        </li>
        <OPrefecture
          :prefectures="prefectures"
          @select-prefecture="selectPrefecrue"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Area } from '@/composables/useHeartRailsGeoAPI'
const { getPrefectures } = useHeartRailsGeoAPI()
const route = useRoute()
const router = useRouter()
const { buildDistrictPageUrl } = useSearchArea()

const area = route.query.area as Area

const prefectures = getPrefectures(area)

const selectPrefecrue = (prefecture: string) => {
  const url = buildDistrictPageUrl({ area, prefecture })
  router.push(url)
}
</script>

<style scoped lang="scss">

</style>
