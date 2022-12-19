<template>
  <div class="md:w-[750px] md:mt-[73px] md:mb-20 m-auto">
    <NuxtLink to="/" :class="`text-sm text-orange hidden md:inline-block`">
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
          <AButtonSubmit inner-text="変更する" user-type="manager" class="py-3 sm:py-4 mt-8" />
          <div class="text-center mt-2 pb-8">
            <NuxtLink to="/" :class="`text-sm text-orange`">
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
</style>
