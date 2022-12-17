<template>
  <div class="pb-14 sm:pt-10 sm:pb-20">
    <!-- ローディング -->
    <div v-if="pending || data == null" class="flex justify-center">
      <ASpinner size="lg" />
    </div>

    <div v-else class="flex flex-col max-w-[990px] m-auto gap-8 lg:flex-row">
      <!-- 左カラム -->
      <ODetail
        :m-slider="{ images: data.carousel_images }"
        :o-detail-info="data.office"
        :o-detail-introduction="{...data.office, ...{ feature_images: data.feature_images }}"
        class="gridItem w-full max-w-[520px]"
      />
      <!-- 右カラム -->
      <ODetailInfo v-bind="data.office" class="hidden lg:max-w-[438px] lg:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const route = useRoute()

const id = Number.parseInt(route.params.id as string)

const { data, pending } = useAsyncData(`/offces/${id}`, () => {
  return $api.client.api.v1.client.offices._id(id).$get()
})
</script>

<style scoped lang="scss">
.gridItem {
  @apply m-auto lg:grid rounded;
}
</style>
