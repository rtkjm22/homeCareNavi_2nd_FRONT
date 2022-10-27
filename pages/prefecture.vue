<!-- SPの県検索画面 -->
<template>
  <div>
    <ATitle ttl-text="エリアを選択してください" class="my-4 w-11/12 m-auto" />

    <div class="bg-white w-11/12 rounded mx-auto mb-[130px]">
      <ul class="text-gray-dark">
        <li class="bg-gray-lighter rounded-t h-[32px] flex items-center">
          <ALeftArrow class="text-gray-light" />関東地方
        </li>
        <li class="font-base w-[331px] m-auto text-base mt-4 mb-3">
          関東
        </li>
        <OPrefecture />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

</style>
