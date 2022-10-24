<template>
  <div>
    <ul class="mt-5">
      <li
        v-for="(district,i) in districts"
        :key="i"
        class="
          md:w-[220px]
          w-[331px]
          h-[40px]
          flex
          items-center
          border-b border-gray-lighter
          m-auto
        "
      >
        <label class="checkbox">
          <input
            id="district"
            v-model="clickValue"
            class="checkbox-Input"
            type="checkbox"
            :value="district.name"
            @change="addList(district.name)"
          /><span class="checkbox-DummyInput" />
          <span class="checkbox-LabelText">{{
            district.name
          }}</span>
        </label>
        <label for="district" class="ml-2 text-sm checkbox" />
        <ARightArrow />
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
        @click="clearList"
      >
        クリア
      </button>
      <button
        class="
      text-sm
      ont-semibold
     text-white
     bg-pink
      rounded
      w-[230px]
      md:w-40
      h-10
      hover:opacity-80"
      >
        検索する
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const clickValue = ref<string[]>([])
const addList = (name: string) => {
  clickValue.value.push(name)
}
const clearList = () => {
  clickValue.value = []
}

const districts = [
  { name: '新宿区' },
  { name: '港区' },
  { name: '千代田区' },
  { name: '渋谷区' },
  { name: '豊島区' },
  { name: '大田区' },
  { name: '江東区' },
  { name: '中央区' },
  { name: '足立区' },
  { name: '板橋区' },
  { name: '練馬区' },
  { name: '台東区' },
  { name: '杉並区' },
  { name: '江戸川区' },
  { name: '目黒区' },
  { name: '葛飾区' },
  { name: '中野区' },
  { name: '墨田区' },
  { name: '文京区' },
  { name: '北区' },
  { name: '荒川区' }
]

</script>

<style scoped lang="scss">
.checkbox {
  padding: 12px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-Input {
  margin: 0;
  width: 0;
  opacity: 0;
}

.checkbox-Input:checked+.checkbox-DummyInput {
  background: #F06364;
  border: #F06364;
}

.checkbox-Input:checked+.checkbox-DummyInput::before {
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

.checkbox-Input:checked+.checkbox-DummyInput::after {
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

.checkbox-DummyInput {
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

.checkbox-LabelText {
  margin-left: 12px;
  display: block;
}
</style>
