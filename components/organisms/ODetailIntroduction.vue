<template>
  <div class="bg-white p-4">
    <h3 class="mb-3 text-base font-bold lg:mb-5 lg:text-lg">
      {{ feature_title }}
    </h3>
    <p class="mb-5 text-[13px] text-gray-base lg:mb-5 lg:text-sm">
      {{ feature_detail }}
    </p>
    <div class="twoCol">
      <div v-for="(feature_image, index) in feature_images" :key="feature_image.id">
        <img
          :src="feature_image.image_url"
          :alt="`事業所のイメージ画像${index + 1}`"
          class="twoCol_img"
        />
        <p class="twoCol_text">
          {{ feature_image.caption }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Props = {
  feature_title: string;
  feature_detail: string;
  feature_images: {
    id: number;
    caption?: string;
    image_url: string;
  }[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.twoCol {
  @apply grid grid-cols-2 gap-6 lg:gap-2;
  &_img {
    @apply mb-2 w-full max-h-[120px] object-cover sm:max-h-[150px] lg:max-h-[180px];
  }
  &_text {
    @apply text-[11px] text-gray-base sm:text-xs;
  }
}
</style>
