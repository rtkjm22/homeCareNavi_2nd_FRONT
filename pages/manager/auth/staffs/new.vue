<template>
  <div class="md:w-[750px] md:mt-[73px] md:mb-20 m-auto">
    <NuxtLink to="/manager/auth/staffs" :class="`text-sm text-orange hidden md:inline-block`">
      <ALeftArrow class="text-orange" />スタッフ情報一覧にもどる
    </NuxtLink>
    <div class="w-full md:w-[750px] h-full m-auto bg-white md:rounded md:shadow-sm">
      <div class="w-[343px] md:w-[718px] m-auto mt-2">
        <ATitle ttl-text="スタッフ情報編集" class="pt-4 pb-6" />
        <ARoundImg />

        <form class="pt-6">
          <AInput
            label-for="inputNm"
            label-text="スタッフ名"
            input-type="text"
            placeholder="田中 太郎"
            :required="true"
            class="mb-6"
          />

          <AInput
            label-for="inputNm"
            label-text="スタッフ名(ふりがな)"
            input-type="text"
            placeholder="たなか たろう"
            :required="true"
            class="mb-6"
          />

          <ATextArea
            label-for="inputNm"
            label-text="スタッフ紹介文"
            placeholder="スタッフ説明テキストが入りますスタッフ説明テキストが入ります"
            :required="true"
          />

          <label class="myCheckbox mt-6">
            <input class="myCheckbox-Input" type="checkbox" /><span class="myCheckbox-DummyInput" />
            <span class="myCheckbox-LabelText">ケアマネージャー</span>
          </label>
          <label class="myCheckbox">
            <input class="myCheckbox-Input" type="checkbox" /><span class="myCheckbox-DummyInput" />
            <span class="myCheckbox-LabelText">一般スタッフ</span>
          </label>
          <AButtonSubmit inner-text="追加する" user-type="manager" class="py-3 sm:py-4 mt-8" />
          <div class="text-center mt-2 pb-8">
            <NuxtLink to="/manager/auth/staffs" :class="`text-sm text-orange`">
              もどる
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
      background: #F09C3C;
      border: #F09C3C;

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
    @apply ml-3 block text-[13px] font-bold text-gray-base;
  }
}
</style>
