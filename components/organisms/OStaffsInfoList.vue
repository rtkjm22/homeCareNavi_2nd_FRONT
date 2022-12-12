<template>
  <div>
    <ul class="grid gap-x-3 gap-y-6 sm:grid-cols-2">
      <li
        v-for="i in 6"
        :key="i"
        class="block m-auto w-full max-w-[400px] bg-white rounded shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]"
      >
        <!-- スタッフ情報画面の各アイテム -->
        <OStaffsInfoItem />
      </li>
    </ul>
  </div>
</template>
