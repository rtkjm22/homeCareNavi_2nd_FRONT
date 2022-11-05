<template>
  <div class="dragAndDrop">
    <div
      class="dragAndDrop_field"
      :class="{ over: isDragOver }"
      @drop.stop="upload"
      @dragover.prevent="onDrag('over')"
      @dragleave="onDrag('leave')"
    >
      <input :id="labelTarget" type="file" @change="upload" />
      <!-- ダミー画像 -->
      <div
        class="dragAndDrop_dummy"
        :class="{ hidden: isUploaded, flex: !isUploaded }"
      >
        <div class="block w-16  sm:w-[110px]">
          <img src="@/assets/img/dragAndDrop.svg" alt="" class="w-full" />
        </div>
      </div>
      <!-- 選択された画像 -->
      <img :src="url" :class="{ hidden: !isUploaded }" />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  labelTarget: string
}
defineProps<Props>()

// ドラッグの判定値
const IS_DRAGGED = {
  OVER: 'over',
  LEAVE: 'leave'
} as const
// 許容する画像の種類
const IMAGE_TYPE = {
  JPEG: 'image/jpeg',
  PNG: 'image/png'
} as const

/* eslint-disable no-redeclare */
type IS_DRAGGED = typeof IS_DRAGGED[keyof typeof IS_DRAGGED]
type IMAGE_TYPE = typeof IMAGE_TYPE[keyof typeof IMAGE_TYPE]
/* eslint-disable no-redeclare */

// ファイルサイズ
const SIZE_LIMIT = 5000000

// アップロードされているか
const isUploaded = ref(false)
// ドラッグ中かどうか
const isDragOver = ref(false)
// アップロードされた画像のURL（Blob）
const url = ref('')
// エラーメッセージの配列
const fileErrMsg = ref([''])

// ドラッグ中かどうか
const onDrag = (type: IS_DRAGGED): void => {
  isDragOver.value = type === IS_DRAGGED.OVER
}

// Base64ベースのエンコードされた画像のURLを取得
const getBase64 = (item: Blob): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(item)
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (err:any) => reject(err)
  })
}

// 画像バリデーション
const checkFile = (file: File): boolean => {
  let result = true
  // ファイルがあるかどうか？
  if (!file) {
    fileErrMsg.value.push('サンプルエラーメッセージ1:ファイルが存在しません')
    result = false
  }
  // ファイルはjpegまたはpngか？
  if (file.type !== IMAGE_TYPE.JPEG && file.type !== IMAGE_TYPE.PNG) {
    fileErrMsg.value.push(
      'サンプルエラーメッセージ2:選択できる画像はpngまたはjpegのみです'
    )
    result = false
  }
  // 5MB以下のファイルかどうか？
  if (file.size > SIZE_LIMIT) {
    fileErrMsg.value.push('サンプルエラーメッセージ3:画像サイズは5MBまでです')
    result = false
  }
  return result
}

// アップロード実行関数
const upload = async (e: any) => {
  isDragOver.value = false
  isUploaded.value = true
  const files: FileList =
    (e.target as HTMLInputElement).files || // クリック時に選択した画像の参照先
    (e.dataTransfer as DataTransfer).files // ドラッグ・アンド・ドロップ時に選択した画像の参照先
  const file = files[0]

  // 画像バリデーション実行
  if (checkFile(file)) {
    // バックとのつなぎ込み処理 etc..

    const picture = await getBase64(file)
    url.value = picture as string
  }
}
</script>
<style scoped lang="scss">
.dragAndDrop {
  @apply block w-full bg-[rgb(240,249,255)] transition-all;
  &_field {
    @apply relative flex justify-center items-center w-full h-full;
    &.over {
      @apply bg-[rgb(214,234,248)];
    }
    input {
      @apply absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer;
    }
    img {
      @apply w-full h-full object-cover object-top;
    }
  }
  &_dummy {
    @apply p-4 w-full h-[120px] justify-center items-center;
  }
}
</style>
