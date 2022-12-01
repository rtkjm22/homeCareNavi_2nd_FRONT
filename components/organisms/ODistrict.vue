<template>
  <div>
    <ul class="mt-5">
      <li
        v-for="(district, i) in districts"
        :key="i"
        class="
          md:w-[220px]
          w-[331px]
          h-[40px]
          flex
          items-center
          m-auto
          border-b
        border-gray-lighter
        text-gray-dark
        "
      >
        <label class="myCheckbox">
          <input
            id="district"
            v-model="selectedDistricts"
            class="myCheckbox-Input"
            type="checkbox"
            :value="district.city"
          /><span class="myCheckbox-DummyInput" />
          <span class="myCheckbox-LabelText">{{
            district.city
          }}</span>
        </label>
        <label for="district" class="ml-2 text-sm myCheckbox" />
        <ARightArrow class="text-gray-light" />
      </li>
    </ul>

    <div class="text-center">
      <button
        class="
        text-sm
        font-semibold
        border border-gray-lighter
        text-pink
        rounded
        w-[117px]
        md:w-20
        h-10
        mt-2.5
        mr-2
        hover:opacity-80
      "
        @click="clearDistricts"
      >
        クリア
      </button>
      <button
        class="
      text-sm
      font-semibold
     text-white
     bg-pink
      rounded
      w-[230px]
      md:w-40
      h-10
      hover:opacity-80"
        @click="areaSearch"
      >
        検索する
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { alert } = useUI()
const router = useRouter()

const props = defineProps<{ districts?: { city: string }[], prefecture?: string }>()

/** チェックボックスで選択中の市区町村 */
const selectedDistricts = ref<string[]>([])

/** 全チェックボックスの選択を外す処理。クリアボタン押下時に発火 */
const clearDistricts = () => {
  selectedDistricts.value = []
}

/**
 * 選択中の都道府県が変更される際に選択中の市区町村をリセットする。
 * */
watch(props, clearDistricts)

const areaSearch = () => {
  if (selectedDistricts.value.length === 0) {
    alert.showAlert('検索エリアが選択されていません', 'warning')
    return
  }

  const prefectureAndDistricts = selectedDistricts.value.map((district) => {
    return props.prefecture + district
  })

  // カンマ区切りの検索文字列を作成
  // 例："札幌市北区北十条西,東京都新宿区市谷本村町"
  const q = prefectureAndDistricts.join()

  router.push(`/offices?q=${q}`)
}
</script>

<style scoped lang="scss">
.myCheckbox {
  padding: 12px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .myCheckbox-Input {
    margin: 0;
    width: 0;
    opacity: 0;

    &:checked+.myCheckbox-DummyInput {
      background: #F06364;
      border: #F06364;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 25%;
        left: 60%;
        width: 34%;
        height: 1px;
        border-radius: 2px;
        transform: translate(-6px, 5px) rotateZ(-135deg);
        transform-origin: 2px 2px;
        background: #FFFFFF;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 35%;
        left: 73%;
        width: 60%;
        height: 1px;
        border-radius: 2px;
        transform: translate(-6px, 5px) rotateZ(-45deg);
        transform-origin: 2px 2px;
        background: #FFFFFF;
      }
    }
  }

  .myCheckbox-DummyInput {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    border: solid 1px #D9DEDE;
    background: #fff;
    border-radius: 3px;
  }

  .myCheckbox-LabelText {
    margin-left: 12px;
    display: block;
  }
}
</style>
