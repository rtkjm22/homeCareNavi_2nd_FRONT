<!-- SPの区検索画面 -->
<template>
  <div>
    <ATitle ttl-text="エリアを選択してください" class="my-4 w-11/12 m-auto" />
    <div class="bg-white w-11/12 rounded mx-auto mb-[130px]">
      <ul class="text-gray-dark">
        <li class="bg-gray-lighter rounded-t h-[32px] flex items-center">
          <NuxtLink :to="buildPrefecturePageUrl({ area })">
            <ALeftArrow class="text-gray-light" />{{ prefecture }}
          </NuxtLink>
        </li>
        <li class="font-base w-[331px] m-auto text-base mt-4 mb-3">
          {{ prefecture }}
        </li>
        <ODistrict
          :prefecture="prefecture"
          :districts="districts"
          :area="area"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getDistricts } = useHeartRailsGeoAPI()
const { buildPrefecturePageUrl } = useAreaSearch()
const route = useRoute()

const area = route.query.area as string
const prefecture = route.query.prefecture as string

const districts = await getDistricts(prefecture)
</script>

<style scoped lang="scss">

</style>