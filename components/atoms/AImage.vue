<template>
  <!-- あらかじめ画像と同じheight及びwidthのdivで囲むことでガタつきを防ぐ -->
  <div
    class="img_base flex-shrink-0"
  >
    <!-- 画像が存在しない場合は専用の画像を表示する  -->
    <template v-if="src == undefined">
      <img
        :src="dynamicNoImageUrl"
        alt="画像なし"
        class="img_base"
        :class="{ 'rounded-full' : rounded }"
      />
    </template>

    <template v-else>
      <img
        v-show="isReady"
        :src="src"
        :alt="alt"
        class="img_base"
        :class="{ 'rounded-full' : rounded }"
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
  /** 画像が存在しなかった場合に変わりに表示する画像。assets/img以下のファイル名を指定する。 */
  noImageFileName?: string;
  rounded?: boolean;
}

const props = defineProps<Props>()

/**
 * 画像が存在しなかった場合に変わりに表示する画像。以下を参考に実装
 * @see https://zenn.dev/one_dock/articles/77cd256c887204
*/
const dynamicNoImageUrl = computed(() => {
  // propsにnoImageFileNameが渡されなかった場合は、noImage.jpgを使用する
  const imageUrl = props.noImageFileName || 'noImage.jpg'
  return new URL(`../../assets/img/${imageUrl}`, import.meta.url).href
})

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
