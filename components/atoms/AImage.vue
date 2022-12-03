<template>
  <!-- あらかじめ画像と同じheight及びwidthのdivで囲むことでガタつきを防ぐ -->
  <div
    class="img_base"
  >
    <!-- 画像が存在しない場合は専用の画像を表示する  -->
    <template v-if="src == undefined">
      <img
        src="~/assets/img/noImage.jpg"
        alt="画像なし"
        class="img_base"
      />
    </template>

    <template v-else>
      <img
        v-show="isReady"
        :src="src"
        :alt="alt"
        class="img_base"
      />

      <!-- 画像が存在し、かつ読み込み中の場合は代理の表示をする -->
      <div
        v-show="isLoading"
        class="animate-pulse bg-slate-200 w-full h-full"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
type Props = {
  src?: string | null;
  alt: string;
  width: number
  height: number
}

const props = defineProps<Props>()

/**
 * useImageはvueuseのメソッド。画像をローディング中はisLoadingがtrueになり、読み込み完了時はisReadyがtrueになる
 * @see https://vueuse.org/core/useimage/#useimage
 * */
const { isLoading, isReady } = useImage({ src: props.src! })
</script>

<style scoped lang="scss">
.img_base {
  width: v-bind("width + 'px'");
  height: v-bind("height + 'px'");
  object-fit: contain;
}
</style>
